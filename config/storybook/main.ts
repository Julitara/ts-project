import { Configuration, DefinePlugin, RuleSetRule } from 'webpack';
import path from 'path';
import { buildCssLoaders } from '../build/loaders/buildCssLoaders';

export default {
    stories: [
        '../../src/**/*.stories.@(js|jsx|ts|tsx)',
    ],

    addons: ['@storybook/addon-links', {
        name: '@storybook/addon-essentials',
        options: {
            backgrounds: false,
        },
    }, 
    '@storybook/addon-interactions', 
    'storybook-addon-mock', 
    'storybook-addon-themes',
    '@storybook/addon-webpack5-compiler-babel', 
    '@chromatic-com/storybook'
    ],

    framework: {
        name: '@storybook/react-webpack5',
        options: {},
    },

    webpackFinal: async (config: Configuration) => {
        const paths = {
            build: '',
            html: '',
            entry: '',
            src: path.resolve(__dirname, '..', '..', 'src'),
            locales: '',
            buildLocales: '',
        };
        config!.resolve!.modules!.push(paths.src);
        config!.resolve!.extensions!.push('.ts', '.tsx');
        config!.resolve!.alias = {
            ...config!.resolve!.alias,
            '@': paths.src,
        };

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        config!.module!.rules = config!.module!.rules!.map((rule: RuleSetRule) => {
            if (/svg/.test(rule.test as string)) {
                return { ...rule, exclude: /\.svg$/i };
            }

            return rule;
        });

        config!.module!.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        });
        config!.module!.rules.push(buildCssLoaders(true));

        config!.plugins!.push(new DefinePlugin({
            __IS_DEV__: JSON.stringify(true),
            __API__: JSON.stringify('https://testapi.ru'),
            __PROJECT__: JSON.stringify('storybook'),
        }));
        // Return the altered config
        return config;
    },

    docs: {},

    typescript: {
        reactDocgen: 'react-docgen-typescript'
    }
};