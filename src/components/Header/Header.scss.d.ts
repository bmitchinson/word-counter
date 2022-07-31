declare namespace HeaderScssNamespace {
    export interface IHeaderScss {
        active: string;
        header: string;
    }
}

declare const HeaderScssModule: HeaderScssNamespace.IHeaderScss & {
    /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
    locals: HeaderScssNamespace.IHeaderScss;
};

export = HeaderScssModule;
