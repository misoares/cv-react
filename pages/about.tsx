import React from 'react'
import Typography from '@material-ui/core/Typography';
import Layout from '../components/layout';
import TitleBanner from '../components/title-banner'
import MyMap from '../components/my-map';
import Grid, { GridSpacing } from '@material-ui/core/Grid';

function AboutText() {
    return (
        <Grid
            container
            spacing={Number(1) as GridSpacing}
            direction="row"
            justify="space-evenly"
            alignItems="center"
        >
            <Grid item md>
                <Typography variant='body1' paragraph >
                    I am an allround web developer. I am a senior programmer with good knowledge of front-end techniques. I love structure and order and I also stand for quality. I love spending time on fixing little details and optimizing web apps. Also I like working in a team, you'll learn faster and much more. As the saying goes: 'two heads are better than one'.
                </Typography>
                <Typography variant='overline' >
                    Current focus: Clojure // React
                </Typography>
            </Grid>
            <Grid item lg align="center">
                <img src='../static/images/foto.webp' alt='Miguel Soares' style={{ height: 'auto', width: 'auto', maxHeight: 256, borderRadius: '50%', filter: 'grayscale(50%)' }} />
            </Grid>
            <Grid item lg>
                <Typography variant='body1'  paragraph>
                    <strong>Birthday:</strong>
                    <br />
                    09/09/1990
                    <br />
                    <strong>Location:</strong>
                    <br />
                    Kloten, Zurich, Switzerland
                    <br />
                    <strong>Nationality:</strong>
                    <br />
                    Portuguese
                    <br />
                    <strong>Languages:</strong>
                    <br />
                    Portuguese (Native)
                    <br />
                    English (No problem)
                    <br />
                    German (Strugling)
                    <br />
                </Typography>
            </Grid>
        </Grid>
    )
}

export default function About() {
    return (
        <Layout>
            <TitleBanner
                title="ABOUT ME"
                quote='"Life isnt about finding yourself. Life is about creating yourself."'
                quotePerson="- George Bernard Shaw"
            />
            <br />
            <AboutText />
            <br />
            <TitleBanner
                title="MY JOURNEY"
                quote="If you want to go east, don't go west"
                quotePerson="- Ramakrishna"
            />
            <br />
            <MyMap />
        </Layout>)
}