import React from 'react'
import Typography from '@material-ui/core/Typography';
import Layout from '../components/layout';
import TitleBanner from '../components/title-banner'
import MyMap from '../components/my-map';

function AboutText() {
    return (
        <>
            <Typography variant='body1' paragraph >
                I’ve always sought out opportunities and challenges that are meaningful to me. Although my professional path has taken many twists and turns — from touring and recording artist, to employee of the year at a non-profit, to dean's scholar at UPenn, to small business owner and entrepreneur — I've never stopped engaging my passion to help others and solve problems.
                    <br />
                As a web developer, I enjoy using my obsessive attention to detail, my unequivocal love for making things, and my mission-driven work ethic to literally change the world. That's why I’m excited to make a big impact at a high growth company.
                </Typography>
            <Typography variant='overline' >
                Current focus: Clojure // React
            </Typography>
        </>
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
            <br/>
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