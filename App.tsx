/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { ThemeProvider } from "styled-components/native";
import { QuestionScreen } from './src/features/questions/question.screen';

import { theme } from './src/infrastructures/theme';
import { QuestionsContextProvider } from './src/services/questions/questions.context';


const App = () => {

  return (
    <>
      <ThemeProvider theme={theme}>
        <QuestionsContextProvider>
          <QuestionScreen />
        </QuestionsContextProvider>
      </ThemeProvider>
    </>
  );
};
export default App;
