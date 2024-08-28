import webpack, { DefinePlugin, RuleSetRule } from 'webpack';
import { BuildPath } from '../build/types/config';
import path from 'path';
import { buildCssLoaders } from '../build/loaders/buildCssLoaders';

export default ({config}: {config: webpack.Configuration}) => {
    const paths: BuildPath = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
        locales: path.resolve(__dirname, 'public', 'locales'),
        buildLocales:  path.resolve(__dirname, 'build', 'locales')
    };
    config.resolve?.modules?.push(paths.src);
    config.resolve?.extensions?.push('.ts', '.tsx');

    if (config.module?.rules) {
        config.module.rules = config.module?.rules
            ?.map((rule: RuleSetRule | null | undefined | false | 0 | '' | '...') => {
                if (rule && rule !== '...' && /svg/.test(rule.test as string)) {
                    return { ...rule, exclude: /\.svg$/i };
                }
        
                return rule;
            });
    }
    if (config.resolve) {
        config.resolve.alias = {
            ...config.resolve.alias,
            '@': paths.src
        };
    }    
    config.module?.rules?.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    });
    config.module?.rules?.push(buildCssLoaders(true));

    config.plugins?.push(new DefinePlugin({
        __IS_DEV__: JSON.stringify(true),
        __API__: JSON.stringify('http://testapi.com'),
        __PROJECT__: JSON.stringify('storybook')
    }));

    return config;
};