import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
    plugins: [
        react(), 
        svgr({
            
        })
    ],
    resolve: {
        alias: [
            {find: '@', replacement: '/src'}
        ]
    }, 
    define: {
        __IS_DEV__: JSON.stringify(true),
        __API__: JSON.stringify('http://localhost:8000'),
        __PROJECT__: JSON.stringify('frontend')
    },
    css: {
        modules: {
            generateScopedName: '[path][name]__[local]--[hash:base64:5]',
        },
    },
});