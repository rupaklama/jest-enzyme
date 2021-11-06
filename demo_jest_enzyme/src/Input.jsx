import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ secretWord }) => {
  // not destructuring 'useState' on the import module in order for Mock func to work
  // React.useState('') - taking as a property
  const [currentGuess, setCurrentGuess] = React.useState('');

  const onSubmit = e => {
    e.preventDefault();
    console.log(currentGuess);

    setCurrentGuess('');
  };

  return (
    <div data-test='component-input'>
      <form style={{ margin: '10px' }} onSubmit={onSubmit}>
        <input
          value={currentGuess}
          onChange={e => setCurrentGuess(e.target.value)}
          data-test='input-box'
          placeholder='enter guess'
        />
        <input type='submit' data-test='submit-button' />
      </form>
    </div>
  );
};

Input.propTypes = {
  secretWord: PropTypes.string.isRequired,
};

export default Input;
