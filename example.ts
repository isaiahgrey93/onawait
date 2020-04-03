import on from '.';
// "import on from 'onawait'"

const hello = (name: string): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(`Hello ${name}!`));
  });
};

// with try catch
(async () => {
  try {
    const greeting = await hello("Dave");
    // handle response
  } catch (error) {
    // handle error
  }
})();

// with "onawait" destructured array
(async () => {
  const [error, response] = await on(hello("Dave"));

  if (error) {
    // handle error
  }

  // handle response
})();

// with "onawait" destructured object
(async () => {
  const { error, response } = await on(hello("Dave"));

  if (error) {
    // handle error
  }

  // handle response
})();
