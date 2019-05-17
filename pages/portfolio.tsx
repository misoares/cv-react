import React from 'react'
import Navbar from '../components/navbar'
import Grid, { GridSpacing } from '@material-ui/core/Grid';
import makeStyles from '@material-ui/styles/makeStyles';
import { createStyles, Theme, Typography } from '@material-ui/core';
import PortfolioCard, { IPortfolioCardProps } from '../components/cards/portfolio-card';
import TitleBanner from '../components/title-banner';
import Layout from '../components/layout';
import { cardData } from '../data/portfolio';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        demo: {
            height: 40,
        },
    })
);


function getCards() {
    return cardData.map((card, index) =>
        <Grid item key={index}>
            <PortfolioCard key={index} {...card}/>
        </Grid>
    )
}

export default function Portfolio() {
    const classes = useStyles();
    const portfolioCards = getCards();

    return (
        <Layout>
            <TitleBanner
                title="PORTFOLIO"
                quote='"Failure is the opportunity to begin again more intelligently"'
                quotePerson="- Henry Ford"
            />
            <br />
            <Grid container className={classes.root}>
                <Grid item>
                    <Grid
                        container
                        spacing={Number(6) as GridSpacing}
                        direction="row"
                        justify="space-evenly"
                        alignItems="center"
                    >
                        {portfolioCards}
                    </Grid>
                </Grid>
            </Grid>
        </Layout>
    )
}
