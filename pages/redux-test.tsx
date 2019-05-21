import * as React from 'react';
import Layout from '../components/layout';
import MyForm from '../components/my-form';
import MyTable from '../components/table/my-table';
import { Paper, Typography, makeStyles, Theme } from '@material-ui/core';

export interface IReduxTestProps {
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(1),
        paddingTop: theme.spacing(2),
    },
    title: {
        flex: '0 0 auto',
    },
}));

export default function ReduxTest(props: IReduxTestProps) {
    const classes = useStyles();
    return (
        <Layout>
            <Paper className={classes.root}>
                <div className={classes.title}>
                    <Typography variant='h6'>Add User</Typography>
                    <MyForm />
                </div>
            </Paper>
            <MyTable />
        </Layout>
    );
}
