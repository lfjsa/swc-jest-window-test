# next/jest example

## Background

Next.js 12 introduced [`next/jest`](https://nextjs.org/docs/messages/experimental-jest-transformer), an experimental jest transformer that integrates [`swc/jest`](https://github.com/swc-project/jest) with little config. Problems can be added to the respective [discussion](https://github.com/vercel/next.js/discussions/31152).

This repo is here to reproduce some issues.

## Problems

As some others reported, `next/jest` has problems with Jest's mocking.

In addition, I found no way to temporarily delete the `window` object to simulate an SSR environment. Admittedly, it does require a decent amount of gymnastics to get working in the first place. Handy non the less.

## Things tried

There are different ways to set `window` to `undefined`. None worked. Be it deleting it, nor messing with jests mocking.

Changing Jest's environment to `node` [using docblocks](https://jestjs.io/docs/configuration#testenvironment-string) also doesn't solve our problems.

## Usage

### Commands

```bash
# install
yarn

# run tests
yarn test
```

### Cases

Three commits on total.

1. setup
2. `jest/swc` (broken)
3. `babel-jest` (works)

Check out commit #2 or #3 to verify.
