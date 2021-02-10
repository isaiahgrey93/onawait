import on from '../src/object';

const ERROR_MESSAGE = 'ERROR';
const SUCCESS_MESSAGE = 'SUCCESS';

const getAsyncError = () =>
  new Promise((_resolve, reject) => reject(new Error(ERROR_MESSAGE)));

const getAsyncSuccess = () => new Promise(resolve => resolve(SUCCESS_MESSAGE));

describe('when a pending promise is rejected or an exception occurs within', () => {
  it('it should return an object with an error property populated with an error instance', async () => {
    const { error } = await on(getAsyncError());
    expect(error.message).toEqual(ERROR_MESSAGE);
  });
});

describe('when a pending promise is resolved', () => {
  it('it should return an object with a response property populated the resolved value of the promise', async () => {
    const { response } = await on(getAsyncSuccess());

    expect(response).toEqual(SUCCESS_MESSAGE);
  });
});
