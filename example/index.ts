const on = require('../').default;
// const { onawait } = require('../');

const getRandomResponse = () => {
  return Math.random() > 0.5
    ? new Promise(resolve =>
        setTimeout(() => {
          resolve('A success response');
        }, 1000)
      )
    : new Error('An error response.');
};

// with try catch
async function withoutOnAwait() {
  try {
    const response = await getRandomResponse();
    // handle response
    console.log({ response });
  } catch (error) {
    // handle error
    console.log({ error });
  }
}

async function withOnAwaitArrayDestructuring() {
  // with "onawait" destructured array
  const [error, response] = await on(getRandomResponse());

  // handle error
  if (error) {
    return console.log({ error });
  }

  // handle response
  console.log({ response });
}

async function withOnAwaitObjectDestructuring() {
  // with "onawait" destructured object
  const { error, response } = await on(getRandomResponse());

  // handle error
  if (error) {
    return console.log({ error });
  }

  // handle response
  console.log({ response });
}

withoutOnAwait();
withOnAwaitArrayDestructuring();
withOnAwaitObjectDestructuring();
