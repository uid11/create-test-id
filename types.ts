/**
 * This type checks that the type true is passed to it.
 * @internal
 */
export type Expect<T extends true> = T;

/**
 * Return true if types are exactly equal and false otherwise.
 * IsEqual<{foo: string}, {foo: string}> = true.
 * IsEqual<{readonly foo: string}, {foo: string}> = false.
 */
export type IsEqual<X, Y> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2
  ? true
  : false;

/**
 * The function makes a copy of the object, converting the object's properties into data-test-attributes.
 */
export type Locator = (
  testId: TestId<{}>,
  properties?: Record<string, string | undefined>,
) => Record<string, string> | undefined;

/**
 * Generate TestId by shape.
 */
export type TestId<T> = {
  [K in keyof T]: IsEqual<T[K], unknown> extends true ? string : TestId<T[K]>;
};

/**
 * Creates testId as string from path in typed components tree.
 */
export type CreateTestId = (<T = {}>() => TestId<T>) & (<T = {}>(prefix: string) => TestId<T>);

/**
 * Proxy target.
 * @internal
 */
export type Target = Record<string | symbol, unknown>;
