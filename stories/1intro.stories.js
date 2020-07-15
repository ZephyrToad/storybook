import React from 'react';
import { Typography } from '@material-ui/core';
import Icon from '../components/Icon';

export default { title: 'Introduction' };

const styles = {
    icon: {
        bottom: 0,
        right: 0,
        position: 'absolute',
        width: '10%'
    }
};

export const title = () => (
    <div style={{ textAlign: 'center' }}>
        <Typography variant='h2'>
            Storybook: A Tale of Components
        </Typography>
        <Typography variant='h6'>
            ft. Michael Salmon
        </Typography>
        <Icon style={styles.icon} src='zephyrToad' type='png'  />
    </div>
);

export const whatIsStorybook = () => (
    <Typography variant='h1'>
        It is this.
    </Typography>
);

export const butReally = () => (
    <>
        <Typography>
            "Storybook is an open source tool for developing UI components in isolation for React, Vue, and Angular.
            It makes building stunning UIs organized and efficient."
        </Typography>
        <Icon src='react' />
        <Icon src='vue' />
        <Icon src='angular' />
        <Icon src='ember' />
        <Icon src='html' />
        <Icon src='mithril' />
        <Icon src='svelte' />
        <Icon src='riot' />
    </>
);