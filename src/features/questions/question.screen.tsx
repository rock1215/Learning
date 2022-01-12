import React, {useState, useContext, useEffect} from "react";
import { TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/Entypo';
import { SafeArea } from "../../components/utils/safe-area.component";
import { colors } from "../../infrastructures/theme/colors";
import { QuestionsContext } from "../../services/questions/questions.context";
import { BottomButton, BottomButtonContainer, ButtonsContainer, ButtonText, ChoiceButton, ChoiceText, ChoiceView, ContainerView, IconContainer, QuestionEnglishAnswerText, QuestionEnglishText, QuestionGermanAnswerContianer, QuestionGermanAnswerText, QuestionGermanText, QuestionGermanTextContianer, ResultMessage, ResultMessageView, Title } from "../components/question.styles";

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
                    <QuestionGermanTextContianer>
                    <QuestionGermanText>
                        {question.question_de[0]}
                    </QuestionGermanText>
                    { selection ?
                        (
                            <View style={{
                                padding: 20, 
                                backgroundColor: viewState != Question_State.result ? colors.bg.white : isRight ? colors.bg.green : colors.bg.red, 
                                borderRadius: 20
                            }}>
                                <QuestionGermanAnswerText variant={"selected"}>{selection}</QuestionGermanAnswerText>
                            </View>
                        ) :
                        (
                            <QuestionGermanAnswerText >{"___________"}</QuestionGermanAnswerText>
                        )
                    }
                        
                    <QuestionGermanText>
                        {question.question_de[1]}
                    </QuestionGermanText>
                    
                    </QuestionGermanTextContianer>
                    <ButtonsContainer>
                        {
                            question.choices.map((choice, index) => {
                                return (
                                    <ChoiceButton key={`${choice} - ${index}`}>
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
                        {viewState == Question_State.result &&
                        (
                            <ResultMessageView>
                                <ResultMessage>{isRight ? "Good Job!" : `Answer is ${question.answer.answer_de}`}</ResultMessage>
                                <IconContainer>
                                    <Icon name="flag" color="#fff" size={20}/>
                                </IconContainer>
                            </ResultMessageView>
                        )}
                        
                        <TouchableOpacity onPress={goNext} style={{width: "80%"}}>
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