import React, {createContext, useState, FC, useEffect} from "react";
import firestore from "@react-native-firebase/firestore";

interface QuestionsContextInterface {
    question: Question | undefined;
    onNext(): any;
}

interface Question {
    question_en: Array<string>;
    question_de: Array<string>;
    answer: Answer;
    choices: Array<string>;
}

interface Answer {
    answer_en: string;
    answer_de: string;
}

export const QuestionsContext = createContext<QuestionsContextInterface | null>(null);

export const QuestionsContextProvider: FC = ({ children }) => {    
    const [question, setQuestion] = useState<Question | undefined>(undefined);
    const [questionArray, setQuestionArray] = useState<Array<Question>>([]);

    const onNext = () => {
        const questions = questionArray;
        if (questions) {
            setQuestion(questions.shift());
            setQuestionArray(questions);
        }        
    }

    useEffect(() => {
        questionListrequest().then(results => {
            results.map(data => {
                console.log(data);
            })
    
            const ques = results.shift();
    
            setQuestion(ques);
            setQuestionArray(results);
        });
    }, [])

    
    return (
        <QuestionsContext.Provider value={{
            question: question,
            onNext: onNext
        }}>
            {children}
        </QuestionsContext.Provider>
    );
}

const questionListrequest = async () => {
    return firestore()
        .collection("Questions")
        .get()
        .then(querySnapshot => {
            let results: Array<Question> = [];
            querySnapshot.forEach(doc => {
                const data = doc.data();
                if (data.answer_en && data.answer_de && data.samples.length) {
                    let qustion_en_array: Array<string> = data.question_en.split(data.answer_en, 2);
                    let question_de_array: Array<string> = data.question_de.split(data.answer_de, 2);

                    let samples: Array<string> = data.samples;

                    samples = samples.sort(() => Math.random() - 0.5);

                    if (samples.length > 3) {
                        samples = samples.slice(0, 3);
                    }

                    samples.push(data.answer_de);

                    samples = samples.sort(() => Math.random() - 0.5);

                    results.push({
                        question_en: qustion_en_array,
                        question_de: question_de_array,
                        answer: {
                            answer_de: data.answer_de,
                            answer_en: data.answer_en
                        },
                        choices: samples
                    })

                }
            });

            results = results.sort(() => Math.random() - 0.5);

            return results;
        })
}