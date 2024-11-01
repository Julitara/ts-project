## Running the Project

```
npm install - Install dependencies
npm run start:dev or npm run start:dev:vite - Start the server + frontend project in development mode
```

----

## Scripts

- npm run start - Launch the frontend project on the Webpack dev server
- npm run start:vite - Launch the frontend project on Vite
- npm run start:dev - Launch the frontend project on the Webpack dev server + backend
- npm run start:dev:vite - Launch the frontend project on Vite + backend
- npm run start:dev:server - Launch the backend server
- npm run build:prod - Build in production mode
- npm run build:dev - Build in development mode (not minified)
- npm run lint:ts - Lint TypeScript files
- npm run lint:ts:fix - Fix TypeScript files with the linter
- npm run lint:scss - Lint SCSS style files
- npm run lint:scss:fix - Fix SCSS style files with the linter
- npm run test:unit - Run unit tests with Jest
- npm run test:ui - Run screenshot tests with Loki
- npm run test:ui:ok - Approve new screenshots
- npm run test:ui:ci - Run screenshot tests in CI
- npm run test:ui:report - Generate a full report for screenshot tests
- npm run test:ui:json - Generate a JSON report for screenshot tests
- npm run test:ui:html - Generate an HTML report for screenshot tests
- npm run storybook - Launch Storybook
- npm run storybook:build - Build the Storybook build
- npm run prepare - Pre-commit hooks
- npm run generate:slice - Script to generate FSD slices

----

## Архитектура проекта

Project Architecture
The project is written in accordance with the Feature Sliced Design methodology.

Link to the documentation - [feature sliced design](https://feature-sliced.design/docs/get-started/tutorial)

----

## Работа с переводами

Working with Translations
The project uses the i18next library for handling translations. Translation files are stored in public/locales.

For a better development experience, it is recommended to install a plugin for WebStorm/VSCode.

i18next Documentation - https://react.i18next.com/

----

## Tests

The project uses 4 types of tests:

Regular unit tests with Jest - npm run test:unit
Component tests with React Testing Library - npm run test:unit
Screenshot testing with Loki - npm run test:ui
End-to-end testing with Cypress - npm run test:e2e
More about tests - Testing Documentation (/docs/tests.md)

----

## Linting

The project uses ESLint for checking TypeScript code and Stylelint for checking style files.

Additionally, for strict control over the main architectural principles, a custom ESLint plugin eslint-plugin-ulbi-tv-plugin is used, which contains 3 rules:

path-checker - prohibits using absolute imports within the same module
layer-imports - checks the correctness of layer usage according to FSD (for example, widgets cannot be used in features and entities)
public-api-imports - allows importing from other modules only through the public API. It has auto-fix.

##### Running Linters

- npm run lint:ts - Lint TypeScript files
- npm run lint:ts:fix - Fix TypeScript files with the linter
- npm run lint:scss - Lint SCSS style files
- npm run lint:scss:fix - Fix SCSS style files with the linter

----
## Storybook

In the project, story cases are described for each component. Server requests are mocked using storybook-addon-mock.

The story file is created next to the component with the .stories.tsx extension.

You can launch Storybook with the command:

- npm run storybook
- 
More about Storybook(/docs/storybook.md)

Example:

```import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Button, ButtonSize, ButtonTheme } from './Button';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Text',
};

export const Clear = Template.bind({});
Clear.args = {
    children: 'Text',
    theme: ButtonTheme.CLEAR,
};
```

----

## Project Configuration

For development, the project contains 2 configurations:

Webpack - ./config/build
Vite - vite.config.ts

Both bundlers are adapted to the main features of the application.

All configurations are stored in /config:

- /config/babel - Babel
- /config/build - Webpack configuration
- /config/jest - Test environment configuration
- /config/storybook - Storybook configuration

In the 'scripts' folder, various scripts for refactoring/simplifying code writing/generating reports, etc., are located.

----

## CI Pipeline and Pre-commit Hooks

The GitHub Actions configuration is located in /.github/workflows. In CI, all types of tests, project and Storybook builds, and linting are run.

In pre-commit hooks, the project is checked with linters, configured in /.husky.

----

### Working with Data

Interaction with data is carried out using Redux Toolkit. Reusable entities should be normalized using EntityAdapter whenever possible.

Server requests are sent using RTK Query (/src/shared/api/rtkApi.ts)

For asynchronous reducer loading (to avoid bundling them into the main bundle), the DynamicModuleLoader is used (/src/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader.tsx).

----

## Entities

- [Article](/src/entities/Article)
- [Comment](/src/entities/Comment)
- [Counter](/src/entities/Counter)
- [Country](/src/entities/Country)
- [Currency](/src/entities/Currency)
- [Notification](/src/entities/Notification)
- [Profile](/src/entities/Profile)
- [Rating](/src/entities/Rating)
- [User](/src/entities/User)

## Features

- [addCommentForm](/src/features/addCommentForm)
- [articleEditForm](/src/features/articleEditForm)
- [articleRating](/src/features/articleRating)
- [articleRecommendationsList](/src/features/articleRecommendationsList)
- [AuthByUsername](/src/features/AuthByUsername)
- [avatarDropdown](/src/features/avatarDropdown)
- [editableProfileCard](/src/features/editableProfileCard)
- [LangSwitcher](/src/features/LangSwitcher)
- [notificationButton](/src/features/notificationButton)
- [profileRating](/src/features/profileRating)
- [ThemeSwitcher](/src/features/ThemeSwitcher)
- [UI](/src/features/UI)
