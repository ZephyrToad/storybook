import React from 'react';
import { Typography } from '@material-ui/core';
import Code from '../components/Code';

export default { title: 'Setup' };

export const step0Automatic = () => (
    <>
        <Typography>
            Automatically Detecting React
        </Typography>
        <Code lines={[
            'npx -p @storybook/cli sb init',
            'npx -p @storybook/cli sb init --type react',
            'npx -p @storybook/cli sb init --type react_scripts'
        ]} />
    </>
);

export const step1AddDependencies = () => (
    <>
        <Typography>
            Get Storybook
        </Typography>
        <Code lines={['yarn add @storybook -D']} />
        <Typography>
            Make sure to have react, react-dom, @babel/core and babel-loader
        </Typography>
        <Code lines={[
            'yarn add react react-dom',
            'yarn add babel-loader @babel/core -D'
        ]} />
    </>
);

export const step2AddScript = () => (
    <>
        <Typography>
            Add to package.json
        </Typography>
        <Code lines={[
            '{',
            ['"scripts": {', 1],
            ['"storybook": "start-storybook"', 2],
            ['}', 1],
            '}'
        ]} />
    </>
);

export const step3CreateMain = () => (
    <>
        <Typography>
            Create a new file, .storybook/main.js
        </Typography>
        <Code lines={[
            'module.exports = {',
            [`stories: ['../src/**/*.stories.[tj]s']`, 1],
            '};'
        ]} />
    </>

);

export const step4WriteAStory = () => (
    <>
        <Typography>
            Really any kind of story.
        </Typography>
        <Code lines={[
            `import React from 'react';`,
            `import { Typography } from '@material-ui/core';`,
            `import Code from '../components/Code';`,
            '',
            `export default { title: 'Setup' };`,
            '',
            ['...', 1],
            '',
            'export const step4WriteAStory = () => (',
            ['<>', 1],
            ['<Typography>', 2],
            ['Really any kind of story.', 3],
            ['</Typography>', 2],
            ['<Code lines={[', 2],
            ['...', 3],
            [']} />', 2],
            ['</>', 1],
            ');'
        ]} />
    </>
);

export const step5RunYourStorybook = () => (
    <>
        <Typography>
            Finally
        </Typography>
        <Code lines={['yarn storybook']} />
    </>
);