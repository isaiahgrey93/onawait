import on from "."; // "import on from 'onawait'"

const hello = (name: string): Promise<string> => {
  return new Promise(resolve => {
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

// with "onawait"
(async () => {
  const { error, response: greeting } = await on(hello("Dave"));

  if (error) {
    // handle error
  }

  // handle response
})();
