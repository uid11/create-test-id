# create-test-id

[![NPM version][npm-image]][npm-url]
[![code style: prettier][prettier-image]][prettier-url]
[![TypeScript][typescript-image]][typescript-url]
[![Conventional Commits][conventional-commits-image]][conventional-commits-url]
[![License MIT][license-image]][license-url]

Creates typed testId for autotests.

## Install

Requires [node](https://nodejs.org/en/) version 16 or higher:

```sh
npm install create-test-id
```

## Usage

In TypeScript module `label.tsx` with component `Label`:

```tsx
import createTestId from 'create-test-id';
// or
import {createTestId} from 'create-test-id';

import {inputTestId} from 'components/Input';

export const labelTestId = createTestId<{input: typeof inputTestId; text: unknown}>();

labelTestId.input = inputTestId;

export const Label = () => {
  ...

  return (
    <div data-testid={labelTestId}>
      ...
      <span data-testid={labelTestId.text}>...<span>
    </div>
  );
};
```

In TypeScript module `App.tsx` with root component `App`:

```tsx
import {labelTestId} from 'components/Label';

export const appTestId = createTestId<{label: typeof labelTestId; header: unknown}>({
  eraseTestIdToEmptyString: false,
  prefix: 'fooWebApp',
});
```

## License

[MIT][license-url]

[conventional-commits-image]: https://img.shields.io/badge/Conventional_Commits-1.0.0-yellow.svg 'The Conventional Commits specification'
[conventional-commits-url]: https://www.conventionalcommits.org/en/v1.0.0/
[license-image]: https://img.shields.io/badge/license-MIT-blue.svg 'The MIT License'
[license-url]: LICENSE
[npm-image]: https://img.shields.io/npm/v/create-test-id.svg 'create-test-id'
[npm-url]: https://www.npmjs.com/package/create-test-id
[prettier-image]: https://img.shields.io/badge/code_style-prettier-ff69b4.svg 'Prettier code formatter'
[prettier-url]: https://prettier.io/
[typescript-image]: https://img.shields.io/badge/types-TypeScript-blue.svg 'Full TypeScript support'
[typescript-url]: https://www.typescriptlang.org/
