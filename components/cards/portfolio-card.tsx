import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { tsInterfaceDeclaration } from '@babel/types';

const useStyles = makeStyles(
  createStyles({
    card: {
      maxWidth: 375,
    },
    media: {
      height: 150,
    },
  }),
);

export interface IPortfolioCardProps {
  imageUrl: string,
  mediaTitle: string,
  cardTitle: string,
  description: string,
  projectLink: string
}


export default function PortfolioCard(props: IPortfolioCardProps) {
  const classes = useStyles();
  const { imageUrl, mediaTitle, cardTitle, description, projectLink } = props;

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={imageUrl}
          title={mediaTitle}
        />

        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {cardTitle}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions>
        <Button size="small" color="primary" href={projectLink}>
          Github
        </Button>
      </CardActions>
    </Card>
  );
}