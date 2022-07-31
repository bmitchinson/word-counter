export default {
    webpack(config, env, helpers, options) {
        const [css] = helpers.getLoadersByName(config, 'css-loader');
        css.rule.use.splice(
            1,
            0,
            '@teamsupercell/typings-for-css-modules-loader',
        );
    },
};
