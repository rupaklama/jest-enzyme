// numbers of letters matched between guessed word & secret word
export const getLetterMatchCount = (guessedWord, secretWord) => {
  const secretLetters = secretWord.split('');

  // using set to find unique values - letters
  const guessedLetterSet = new Set(guessedWord);

  // has - to see whether set contains certain elements
  const matchLettersCount = secretLetters.filter(letter => guessedLetterSet.has(letter)).length;
  // console.log(matchLettersCount);
  return matchLettersCount;
};
