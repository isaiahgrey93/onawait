```typescript
const on = require('onawait/array').default;
// or
// const on from 'onawait/array'

const getRandomResponse = () => {
  return Math.random() > 0.5
    ? new Promise(resolve =>
        setTimeout(() => {
          resolve('A success response');
        }, 1000)
      )
    : new Error('An error response.');
};

// with a regular try catch
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

// with "onawait" destructured array
async function withOnAwait() {
  const [error, response] = await on(getRandomResponse());

  // handle error
  if (error) {
    return console.log({ error });
  }

  // handle response
  console.log({ response });
}
```
