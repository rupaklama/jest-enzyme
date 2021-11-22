import React from "react";
import { useEffect } from "react";

import Congrats from "./Congrats";
import GuessedWords from "./GuessedWords";
import Input from "./Input";

import { getSecretWord } from "./actions";
import LanguagePicker from "./LanguagePicker";

// using useReducer hook here
const initialState = {
  secretWord: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "setSecretWord":
      return { ...state, secretWord: action.payload };
    default:
      throw new Error(`Invalid action type:  ${action.type}`);
  }
};

function App() {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  // TODO: data will come through context api
  const success = false;
  const guessedWords = [];

  const setSecretWord = secretWord => {
    dispatch({ type: "setSecretWord", payload: secretWord });
  };

  // getting secretWord from the server
  useEffect(() => {
    getSecretWord(setSecretWord);
  }, []);

  return (
    <main data-test='component-app'>
      <h1>Jotto - Guess the Word ?</h1>
      <LanguagePicker setLanguage={() => console.log("click")} />
      <Input secretWord={state.secretWord} />
      <Congrats success={success} />
      <GuessedWords guessedWords={guessedWords} />
    </main>
  );
}

export default App;
