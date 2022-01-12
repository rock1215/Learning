import React, {useState, useContext, useEffect} from "react";
import { Text, TouchableOpacity, TouchableOpacityBase } from "react-native";
import { SafeArea } from "../../components/utils/safe-area.component";
import { QuestionsContext } from "../../services/questions/questions.context";
import { BottomButton, BottomButtonContainer, ButtonsContainer, ButtonText, ChoiceButton, ChoiceText, ChoiceView, ContainerView, QuestionEnglishAnswerText, QuestionEnglishText, QuestionGermanAnswerText, QuestionGermanText, Title } from "../components/question.styles";

enum Question_State {
    initial,
    check,
    result
}

export const QuestionScreen = () => {
    const {question, onNext} = useContext(QuestionsContext);
    const [selection, setSelection] = useState<string | null>(null);
    const [viewState, setViewState] = useState<Question_State>(Question_State.initial);
    const [isRight, setIsRight] = useState<boolean>(false);

    const goNext = () => {
        if (viewState === Question_State.check) {
            setViewState(Question_State.result);
            if (selection === question.answer.answer_de) {
                setIsRight(true);
            } else {
                setIsRight(false);
            }
        } else if (viewState == Question_State.result) {
            onNext();
        }        
    }

    useEffect(() => {
        setViewState(Question_State.initial);
        setSelection(null);
    }, [question])

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
                                            if (viewState != Question_State.result) {
                                                setViewState(Question_State.check)
                                                setSelection(choice);
                                            }                                            
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
                    <BottomButtonContainer variant={
                        viewState != Question_State.result ? null :
                        isRight ? "success" : "failed"
                    }>
                        <TouchableOpacity onPress={goNext}>
                            <BottomButton variant={
                                viewState == Question_State.initial ?  null : 
                                viewState == Question_State.check ? "selected" : "result"
                            }>
                                <ButtonText variant={
                                    viewState != Question_State.result ? null :
                                    isRight ? "success" : "failed"
                                }>CONTINUE</ButtonText>
                            </BottomButton>
                        </TouchableOpacity>
                    </BottomButtonContainer>
                </ContainerView> 
            )}
                       
        </SafeArea>
    )
}