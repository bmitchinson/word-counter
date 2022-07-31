declare namespace CounterScssNamespace {
    export interface ICounterScss {
        'counter-row': string;
    }
}

declare const CounterScssModule: CounterScssNamespace.ICounterScss & {
    /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
    locals: CounterScssNamespace.ICounterScss;
};

export = CounterScssModule;
