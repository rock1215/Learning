import React, {useState, useContext} from "react";
import { Text, TouchableOpacity, TouchableOpacityBase } from "react-native";
import { SafeArea } from "../../components/utils/safe-area.component";
import { QuestionsContext } from "../../services/questions/questions.context";
import { ButtonsContainer, ChoiceButton, ChoiceText, ChoiceView, ContainerView, QuestionEnglishAnswerText, QuestionEnglishText, QuestionGermanAnswerText, QuestionGermanText, Title } from "../components/question.styles";

enum Question_State {
    initial,
    check,
    result
}

export const QuestionScreen = () => {
    const {question, onNext} = useContext(QuestionsContext);
    const [selection, setSelection] = useState<string | null>(null);

    return (
        <SafeArea>
            { question != undefined && (
                <ContainerView>
                    <Title>Fill in the missing word</Title>
                    <QuestionEnglishText>
                        {question.question_en[0]}
                        <QuestionEnglishAnswerText>{question.answer.answer_en}</QuestionEnglishAnswerText>
                        {question.question_en[1]}
                    </QuestionEnglishText>
                    <QuestionGermanText>
                        {question.question_de[0]}
                        <QuestionGermanAnswerText variant={selection ? "selected" : null}>{selection ? `    ${selection}    ` : "___________"}</QuestionGermanAnswerText>
                        {question.question_de[1]}
                    </QuestionGermanText>
                    <ButtonsContainer>
                        {
                            question.choices.map(choice => {
                                return (
                                    <ChoiceButton key={choice}>
                                        <TouchableOpacity onPress={() => {
                                            setSelection(choice);
                                        }}>
                                            <ChoiceView>
                                                <ChoiceText>{choice}</ChoiceText>
                                            </ChoiceView>
                                        </TouchableOpacity>                                        
                                    </ChoiceButton>
                                    
                                )
                            })
                        }
                    </ButtonsContainer>
                </ContainerView> 
            )}
                       
        </SafeArea>
    )
}