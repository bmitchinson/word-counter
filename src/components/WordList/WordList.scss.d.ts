declare namespace WordListScssNamespace {
    export interface IWordListScss {
        wordlist: string;
    }
}

declare const WordListScssModule: WordListScssNamespace.IWordListScss & {
    /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
    locals: WordListScssNamespace.IWordListScss;
};

export = WordListScssModule;
