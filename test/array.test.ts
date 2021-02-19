import on from '../src/array';

const ERROR_MESSAGE = 'ERROR';
const SUCCESS_MESSAGE = 'SUCCESS';

const getAsyncError = () =>
  new Promise((_resolve, reject) => reject(new Error(ERROR_MESSAGE)));

const getAsyncSuccess = () => new Promise(resolve => resolve(SUCCESS_MESSAGE));

describe('when an error instance is passed as the sole argument', () => {
  it('it should return an array with the index of 0 populated with an error instance', async () => {
    const CUSTOM_ERROR = new Error(ERROR_MESSAGE);

    const [error] = await on(CUSTOM_ERROR);

    expect(error).toBe(CUSTOM_ERROR);
    expect(error.message).toEqual(CUSTOM_ERROR.message);
  });
});

describe('when a pending promise is rejected or an exception occurs within', () => {
  it('it should return an array with the index of 0 populated with an error instance', async () => {
    const [error] = await on(getAsyncError());
    expect(error.message).toEqual(ERROR_MESSAGE);
  });
});

describe('when a pending promise is resolved', () => {
  it('it should return an array with the index of 1 populated with the resolved value of the promise', async () => {
    const [, response] = await on(getAsyncSuccess());
    expect(response).toEqual(SUCCESS_MESSAGE);
  });
});
