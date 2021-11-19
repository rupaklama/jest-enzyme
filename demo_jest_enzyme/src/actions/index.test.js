import moxios from 'moxios';

import { getSecretWord } from './';

describe('getSecretWord', () => {
  beforeEach(() => {
    // calling moxios install
    // this will tell axios to send request to moxios instead to real server
    moxios.install();
  });

  afterEach(() => {
    // note - to clean up after each test to uninstall moxios &
    // to return axios to it's original state
    moxios.uninstall();
  });

  // mocking &
  // returning server response with moxios on axios call instead from a real server
  test('secretWord is returned', async () => {
    // to return async response from moxios
    moxios.wait(() => {
      // if moxios gets a request from current axios call, return this data
      const request = moxios.requests.mostRecent();
      // responding with something similar with what we get from the real server
      request.respondWith({
        status: 200,
        response: 'party',
      });
    });

    // note - we are also going to 'return' it so that test function won't exit before promise resolves.
    // note - '.then' because to make assertion run after promise resolves
    // return (
    // note - TypeError: Cannot read property 'then' of undefined
    // Initially, We will get above error meaning this Function is not returning anything
    // & can not access promise on undefined.
    // getSecretWord()
    // making assertion in then() - promise to make assertion run after promise resolves
    //     .then(secretWord => {
    //       expect(secretWord).toBe('party');
    //     })
    // );

    // mock setter func
    const mockSetSecretWord = jest.fn();

    // fetch func should have been call with Setter function to set secretWord state
    await getSecretWord(mockSetSecretWord);
    expect(mockSetSecretWord).toHaveBeenCalledWith('party');
  });
});
