import React from 'react'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import {  useTheme, makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

function populateCardContent(content: String[]) {
  return content.map((line, index) =>
    <Typography key={index} variant="body1" color="textPrimary" align="justify" component="li">
      {line}
    </Typography>
  )
}

export interface IExperienceCardProps {
  logo: string,
  avatar: string,
  title: string,
  position: string,
  datePlace: string,
  cardContent: string[],
  keywords: string
}

function ExperienceCard(props: IExperienceCardProps) {
  const { logo, avatar, title, position, datePlace, cardContent, keywords } = props
  const theme = useTheme();
  const isBigScreen = useMediaQuery(theme.breakpoints.up('md'));
  const cardStyle = isBigScreen ? { minWidth: "1000px"} : {}

  return (
    <Card style={cardStyle}>
      <CardHeader
        avatar={
          <Avatar aria-label="Experience" src={logo} alt="Logo" style={{backgroundColor: red[500]}}>
            {avatar}
          </Avatar>
        }
        title={
          <div style={{ display: "flex", flexDirection: 'row', justifyContent: 'space-between', flexWrap: "wrap" }}>
            <Typography variant='h5' >{title}</Typography>
            <Typography variant='h6' style={{ color: '#795548', fontWeight: 'normal' }}>{position}</Typography>
          </div>
        }
        subheader={datePlace}
        style={{padding: '8px'}}>
         </CardHeader>
      <hr />
      <CardContent style={{padding: '0px'}}>
        <ul>
          {populateCardContent(cardContent)}
        </ul>
      </CardContent>
      <hr />
      <CardActions >
        <Typography variant="overline" component="p">
          Tech Stack: {keywords}
        </Typography>
      </CardActions>
    </Card>
  );
}

export default ExperienceCard;
