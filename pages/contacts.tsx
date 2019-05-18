import React from 'react';
import Layout from '../components/layout';
import { makeStyles, Grid, ListItemIcon, ListItemText, Typography, List, ListItem } from '@material-ui/core';
import TitleBanner from '../components/title-banner';
import { GridSpacing } from '@material-ui/core/Grid';
import { contactsData } from '../data/contacts';

export interface IContactsProps {
}

function getContacts(contacts) {
  return contacts.map((contact, index) =>
    <ListItem>
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
      </List>
    </Layout>
  );
}
