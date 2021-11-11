import Congrats from './Congrats';
import GuessedWords from './GuessedWords';
import Input from './Input';

function App() {
  // TODO: data will come through context api
  const success = false;
  const secretWord = 'party';
  const guessedWords = [];

  return (
    <main data-test='component-app'>
      <h1>Jotto - Guess the Word ?</h1>
      <Input secretWord={secretWord} />
      <Congrats success={success} />
      <GuessedWords guessedWords={guessedWords} />
    </main>
  );
}

export default App;
