import React from 'react';
import { Button, Typography } from '@material-ui/core';
import Broken from '../components/Broken';
import Code from '../components/Code';

export default { title: 'Uses' };

export const testingStandard = () => (
    <Code lines={[
        '...',
        `describe('<MyButton />', () => {`,
        [`it('clicks', () => {`, 1],
        ['const props = getProps();', 2],
        [`const wrapper = shallow(<MyButton {...props} />);`, 2],
        '',
        [`wrapper.simulate('click');`, 2],
        '',
        ['expect(props.onClick).toHaveBeenCalled()', 2],
        ['});', 1],
        '});'
    ]} />
);

export const testingStories = () => (
    <Button variant='contained'>
        My Button
    </Button>
);

export const troubleshooting = () => (
    <Broken />
);

export const demo = () => (
    <Typography>
        Cut to ...
    </Typography>
);