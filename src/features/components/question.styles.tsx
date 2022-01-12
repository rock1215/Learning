import styled from "styled-components";

export const ContainerView = styled.View`
    flex: 0.9;
    width: 100%;
    background-color: ${props => props.theme.colors.bg.secondary};
    align-items: center;
    justify-content: center;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
`;

export const ButtonsContainer = styled.View`
    flex: 1;
    width: 100%;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
`

export const ChoiceButton = styled.View`
    flex-basis: 50%
    align-items: center;
    justify-content: center; 
    margin-top: 30px;       
`

export const ChoiceView = styled.View`
    background-color: ${props => props.theme.colors.bg.white};
    padding: 20px;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
`

export const ChoiceText = styled.Text`
    font-weight: ${props => props.theme.fontWeights.medium};
    font-size: ${props => props.theme.fontSizes.body};
    color: ${props => props.theme.colors.text.secondary};
`

export const BottomButtonContainer = styled.View`
    width: 100%;
    background-color: ${props => {
        if (props.variant == "success") {
            return props.theme.colors.bg.green;
        } else if (props.variant == "failed") {
            return props.theme.colors.bg.red;
        } else {
            return props.theme.colors.bg.secondary;
        }
    }};
    align-items: center;
    justify-content: flex-end;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    height: 150px;
    padding 20px;
`

export const BottomButton = styled.View`
    width: 100%;
    padding: 20px;
    align-items: center;
    justify-content: center;
    border-radius: 30px;
    margin-bottom: 20px;
    background-color: ${props => {
        if (props.variant == "selected") {
            return props.theme.colors.bg.green;
        } else if (props.variant == "result") {
            return props.theme.colors.bg.white;
        } else {
            return props.theme.colors.bg.dark_blue;
        }
    }};
`

export const ButtonText = styled.Text`
    color: ${props => {
        if (props.variant === "success") {
            return props.theme.colors.text.green;
        } else if (props.variant === "failed") {
            return props.theme.colors.text.red;
        } else {
            return props.theme.colors.text.primary;
        }
    }}
`

export const ResultMessageView = styled.View`
    width: 80%;
    flex-direction: row;
    margin-bottom: 20px;
    align-items: center;
    justify-content: center;
`

export const ResultMessage = styled.Text`
    font-weight: ${props => props.theme.fontWeights.bold};
    font-size: ${props => props.theme.fontSizes.title};
    color: ${props => props.theme.colors.text.primary};
`;

export const IconContainer = styled.View`
    flex: 1;
    align-items: flex-end;
    justify-content: center;
`

export const Title = styled.Text`
    margin-top: 80px;
    font-weight: ${props => props.theme.fontWeights.regular};
    font-size: ${props => props.theme.fontSizes.caption};
    color: ${props => props.theme.colors.text.primary};
`;

export const QuestionEnglishText = styled.Text`
    margin-top: 15px;
    font-weight: ${props => props.theme.fontWeights.medium};
    font-size: ${props => props.theme.fontSizes.title};
    color: ${props => props.theme.colors.text.primary};
`

export const QuestionEnglishAnswerText = styled.Text`
    font-weight: ${props => props.theme.fontWeights.bold};
    font-size: ${props => props.theme.fontSizes.h5};
    color: ${props => props.theme.colors.text.primary};
    text-decoration: underline;
    text-decoration-color: ${props => props.theme.colors.text.primary};
`

export const QuestionGermanTextContianer = styled.View`
    margin-top: 30px;    
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: row;
`

export const QuestionGermanText = styled.Text`
    font-weight: ${props => props.theme.fontWeights.medium};
    font-size: ${props => props.theme.fontSizes.body};
    color: ${props => props.theme.colors.text.primary};
`

export const QuestionGermanAnswerText = styled.Text`
    font-weight: ${props => props.theme.fontWeights.medium};
    font-size: ${props => props.theme.fontSizes.title};
    color: ${props => props.variant ? props.theme.colors.text.secondary : props.theme.colors.text.primary};
`