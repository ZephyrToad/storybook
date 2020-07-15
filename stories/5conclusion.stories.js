import React from 'react';
import { Typography } from '@material-ui/core';

export default { title: 'Conclusion' };

const styles = {
    indent: {
        marginLeft: '16px'
    }
};

export const prosAndCons = () => (
    <>
        <Typography variant='h5'>
            Pros:
        </Typography>
        <Typography style={styles.indent}>
            Fast, Intuitive, Open Source
        </Typography>
        <Typography variant='h5'>
            Cons:
        </Typography>
        <Typography style={styles.indent}>
            Manual, Box
        </Typography>
    </>
);

export const questions = () => (
    <Typography variant='h3'>
        Do you've any?
    </Typography>
);

export const theEnd = () => (
    <Typography variant='h3'>
        Thanks!
    </Typography>

);