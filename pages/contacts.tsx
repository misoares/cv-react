import React from 'react';
import Layout from '../components/layout';
import { ListItemIcon, ListItemText, Typography, List, ListItem, ListItemAvatar } from '@material-ui/core';
import TitleBanner from '../components/title-banner';
import { contactsData } from '../data/contacts';
import PDF from '../static/images/pdf.svg'

export interface IContactsProps {
}

function getContacts(contacts) {
  return contacts.map((contact, index) =>
    <ListItem key={index}>
      <ListItemIcon>
        {contact.icon}
      </ListItemIcon>
      <ListItemText primary={contact.contact} />
    </ListItem>
  )
}

export default function Contacts() {
  const [dense, setDense] = React.useState(false);

  return (
    <Layout>
      <TitleBanner
        title="Contacts"
        quote='"Life isnt about finding yourself. Life is about creating yourself."'
        quotePerson="- George Bernard Shaw"
      />
      <br />
      <Typography variant='h4' paragraph >
        Want to have a chat? Hit me up in one of the contacts bellow!
          </Typography>
      <List dense={dense}>
        {getContacts(contactsData)}
        <ListItem>
        <ListItemIcon><PDF width={48} height={48}/></ListItemIcon>
        <a href="https://github.com/misoares/CV/raw/master/CV.pdf"><ListItemText primary="Resume" /></a>
    </ListItem>
      </List>
    </Layout>
  );
}
