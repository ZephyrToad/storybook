import React from 'react';
import { Grid } from '@material-ui/core';
import Icon from '../components/Icon';

export default { title: 'Addons' };

const style = {
    width: '200px'
};

export const officialAddons = () => (
    <Grid container>
        <Grid item xs='4'>
            <Icon style={style} src='knobs' />
        </Grid>
        <Grid item xs='4'>
            <Icon style={style} src='actions' />
        </Grid>
        <Grid item xs='4'>
            <Icon style={style} src='source' />
        </Grid>
        <Grid item xs='4'>
            <Icon style={style} src='docs' />
        </Grid>
        <Grid item xs='4'>
            <Icon style={style} src='viewport' />
        </Grid>
        <Grid item xs='4'>
            <Icon style={style} src='storyshots' />
        </Grid>
        <Grid item xs='4'>
            <Icon style={style} src='backgrounds' />
        </Grid>
        <Grid item xs='4'>
            <Icon style={style} src='accessibility' />
        </Grid>
        <Grid item xs='4'>
            <Icon style={style} src='console' />
        </Grid>
        <Grid item xs='4'>
            <Icon style={style} src='links' />
        </Grid>
    </Grid>
);