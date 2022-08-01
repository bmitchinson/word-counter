# Word Counter

Kata for finding the top 100 most frequently occurring words, excluding stop words, in a text file. Runs in `M + E + (M-E)log(M-E)` time. Written in Typescript, Express, and the Preact web framework. An exercise in "Red, Green, Refactor".

Created from a template of mine: [preact-express-starter](https://github.com/bmitchinson/preact-express-starter)

Completed in a few hours on a Sunday afternoon.

## Demo - [Link]()

This repo has been deployed onto heroku. The .txt files used in the word counting
process were adapted from provided PDF files, converted on [zamzar.com](zamzar.com)
to .txt

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
-   Files can be swapped out by changing the path in `textfiles.ts`. Future
    improvement would to be including file upload.

## CLI Commands

Run with Node v16.14.0

-   `npm run preact:build`: Production-ready build for the preact app.

-   `npm start`: Startup the express server that serves the preact app.

## Improvements and Reflection

-   How could this be made faster?
    -   🤔💭
-   How could this be memory optimized?
    -   Reading in the files uses twice the needed memory (filestream + it’s contents as a map)
        -   [https://geshan.com.np/blog/2021/10/nodejs-read-file-line-by-line/#readline](https://geshan.com.np/blog/2021/10/nodejs-read-file-line-by-line/#readline) readline uses less memory
    -   Spreading the map into an array to sort in `wordRanker` creates another new copy of the word counts in memory, maybe there’s a way to sort the map in place?
-   How could code quality be improved.
    -   I was disappointed to notice at the end that typescript isn’t complaining about missing class parameters, despite being in strict mode and having parameters defined in an interface with mandatory properties. Validating class parameters could look something like this: [Nozzle Gear Blog](https://nozzlegear.com/blog/build-a-simple-object-validation-utility-with-typescript)
-   Edge cases
    -   The prompt asks for explicitly 100 results so, i’ve chosen to exclude ties that exceed 100. The result is sorted primarily by occurrence, and secondarily in alphabetical order.
        -   If ties were preferred to be returned, potentially surpassing the 100 count specification, there could be a check for entries that share the top 100 lowest value, to include them in the reported results.
-   Git
    -   At one point I refactored and in the process added some functionality to `loadFile`. I was resistant to test it because data was coming in from a file, and I was testing its effects by testing classes that utilized `loadFile`. I should have handled that resistance to test by breaking up the logic to accept strings, to make unit testing things like punctuation and number removal more accessible.
        -   Upon running the code with real data, I realized these improvements needed to be properly tested, and test drove their additions.
    -   Seems like too many commits. Could argue I was a bit too granular on committing a test at a time, could have filled in a few at once and still fulfilled red green refactor.
