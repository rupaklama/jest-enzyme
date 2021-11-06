import Congrats from './Congrats';
import GuessedWords from './GuessedWords';
import Input from './Input';

const guessedWords = [
  { guessedWord: 'train', letterMatchCount: 3 },
  { guessedWord: 'agile', letterMatchCount: 1 },
  { guessedWord: 'party', letterMatchCount: 5 },
];

function App() {
  return (
    <main>
      <h1>Jotto - Guess the Word ?</h1>
      <Input secretWord='party' />
      <Congrats success={true} />
      <GuessedWords guessedWords={guessedWords} />
    </main>
  );
}

export default App;
