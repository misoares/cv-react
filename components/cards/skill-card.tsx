import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Grid, { GridSpacing } from '@material-ui/core/Grid';
import { CardContent } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            width: '100%'
        },
    }),
);

function populateSkillCard(skills) {
    return skills.map((skill,index) =>
        <Grid key={index} item >
            {skill}
        </Grid>
    )
}


function SkillCard(props) {
    const { title } = props
    const classes = useStyles()
    const skills = populateSkillCard(props.skills);

    return (
        <Card className={classes.root}>
            <CardHeader
                titleTypographyProps={{ variant: 'h5' }}
                title={title}
            />
            <hr />
            <CardContent>
                <Grid
                    container
                    spacing={Number(6) as GridSpacing}
                    direction="row"
                    justify="space-evenly"
                    alignItems="center"
                >
                    {skills}
                </Grid>
            </CardContent>
        </Card>
    );
}

export default SkillCard;
