# Word Counter

Kata for finding the top 100 most frequently occurring words, excluding stop words, in a text file. Runs in `M + E + (M-E)log(M-E)` time. Written in Typescript and the Preact web framework. An exercise in "Red, Green, Refactor".

## How it works

-   Read Exclude list into object (E)
    -   stored as object (functions as a "hashset"), for O(1) lookups later
-   Read in MD text file into WordCounter. (M)
    -   Iterate each word of MD, Increment counts of each word into a map
    -   If included in exclude map, skip
-   Sort all values of WordCounter ((M-E)Log(M-E))
    -   Use JS `.sort` for max efficiency (Likely [Timsort](https://v8.dev/blog/array-sort#timsort))

Runtime: `M + E + (M-E)log(M-E)`

## Notes

-   Why preact over react? - [link](https://preactjs.com/)

## Improvements

-   How could this be made faster?
    -   🤔💭
-   How could this be memory optimized?
    -   Reading in the files uses twice the needed memory (filestream + it’s contents as a map)
    -   [https://geshan.com.np/blog/2021/10/nodejs-read-file-line-by-line/#readline](https://geshan.com.np/blog/2021/10/nodejs-read-file-line-by-line/#readline) readline uses less memory

## CLI Commands

-   `npm run dev`: Run a development, HMR server for the preact app.

-   `npm run serve`: Run a production-like server for the preact app.

-   `npm run build`: Production-ready build for the preact app.

-   `npm run lint`: Pass TypeScript files using ESLint

-   `npm run test`: Run Jest test suite

-   `npm run test:watch`: Run in watch mode
