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
    font-size: ${props => props.theme.fontSizes.title};
    color: ${props => props.theme.colors.text.secondary};
`

export const BottomButtonContainer = styled.View`

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

export const QuestionGermanText = styled.Text`
    margin-top: 30px;    
    font-weight: ${props => props.theme.fontWeights.medium};
    font-size: ${props => props.theme.fontSizes.body};
    color: ${props => props.theme.colors.text.primary};
`

export const QuestionGermanAnswerText = styled.Text`
    font-weight: ${props => props.theme.fontWeights.medium};
    font-size: ${props => props.theme.fontSizes.title};
    color: ${props => props.variant ? props.theme.colors.text.secondary : props.theme.colors.text.primary};
    ${props => props.variant ? "text-decoration: underline;" : ""}
    ${props => props.variant ? `background-color: white` : ""}
    text-decoration-color: ${props => props.theme.colors.text.primary};
`