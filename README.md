![](https://img.shields.io/npm/v/onawait.svg?colorB=%232ecc71)
![](https://img.shields.io/bundlephobia/min/onawait.svg?colorB=%233498db)

# onawait

Async wrapper to manage `try...catch` blocks.

## Setup

**Installation**

```bash
yarn add onawait
# or
npm install onawait
```

**Imports**

```javascript
import on from "onawait";
// or
import { onawait } from "onawait";
```

**Example**

```typescript
import on from "onawait";

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
```
