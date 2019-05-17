import React from 'react'
import Navbar from '../components/navbar'
import makeStyles from '@material-ui/styles/makeStyles';
import { createStyles, Theme, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        home: {
            background: `url("../static/images/background.jpg")`,
            /* Full height */
            height: '100vh',
            /* Center and scale the image nicely */
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }
    })
);

export default function Home() {
    const classes = useStyles();

    return (
        <div>
            <Navbar />
            <div className={classes.home}>
                <div>
                    <Typography variant='h1' align='center' style={{ color: 'white'}}>
                        Miguel Soares
                        <hr/>
                    </Typography>
                    <Typography variant='h2' align='center' style={{ color: 'white' }}>
                        Software Engenieer
                    </Typography>
                </div>
            </div>
        </div >
    )
}