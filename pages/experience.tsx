import React from 'react'
import ExperienceCard from '../components/cards/experience-card'
import Grid, { GridSpacing } from '@material-ui/core/Grid';
import makeStyles from '@material-ui/styles/makeStyles';
import { createStyles, Theme, Typography } from '@material-ui/core';
import SkillCard from '../components/cards/skill-card';
import Layout from '../components/layout';
import TitleBanner from '../components/title-banner';
import { experienceData, skillData } from '../data/experience';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
    })
);

function getExperience(experiences) {
    return experiences.map((experience, index) => {
        return <Grid key={index} item>
                    <ExperienceCard key={index} {...experience}/>
                </Grid>
    })
}

function getSkills(skills) {
    return skills.map((skill, index) => {
        return <Grid key={index} item>
                    <SkillCard key={index} {...skill}/>
                </Grid>
    })
}

export default function Experience() {
    const classes = useStyles();
    const experiences = getExperience(experienceData);
    const skills = getSkills(skillData);

    return (
        <Layout>
            <TitleBanner
                title="EXPERIENCE"
                quote='"Most of the biggest problems in software are problems of misconception."'
                quotePerson="- Rich Hickey"
            />
            <br />
            <Grid container className={classes.root}>
                <Grid item xs={12}>
                    <Grid
                        container
                        spacing={Number(6) as GridSpacing}
                        direction="column"
                        justify="space-evenly"
                        alignItems="center"
                    >
                        {experiences}
                    </Grid>
                </Grid>
            </Grid>
            <br />
            <TitleBanner
                title="Skills"
                quote='"The most complicated skill is to be simple."'
                quotePerson="- Dejan Stojanovic"
            />
            <br />
            <Grid container className={classes.root}>
                <Grid item xs={12}>
                    <Grid
                        container
                        spacing={Number(6) as GridSpacing}
                        direction="column"
                        justify="space-evenly"
                        alignItems="stretch"
                    >
                        {skills}
                    </Grid>
                </Grid>
            </Grid>
        </Layout>
    )
}