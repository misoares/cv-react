import React from 'react'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

function populateCardContent(content : String[]) {
  return content.map((line, index) =>
    <Typography key={index} variant="body1" color="textPrimary" align="justify" component="li">
      {line}
    </Typography>
  )
}

export interface IExperienceCardProps{
  logo: string,
  avatar: string,
  title: string,
  datePlace: string,
  cardContent:string[],
  techStack: string
}

function ExperienceCard(props: IExperienceCardProps) {
  const {logo,avatar, title, datePlace, cardContent, techStack} = props

  return (
    <Card >
      <CardHeader
        avatar={
          <Avatar aria-label="Experience" src={logo}>
          {avatar}
          </Avatar>
        }
        titleTypographyProps={{ variant: 'h5' }}
        title={title}
        subheader={datePlace}
      />
      <hr />
      <CardContent>
        {populateCardContent(cardContent)}
      </CardContent>
      <hr />
      <CardActions disableSpacing>
        <Typography variant="overline" component="p">
        Tech Stack:{techStack}
        </Typography>
      </CardActions>
    </Card>
  );
}

export default ExperienceCard;
