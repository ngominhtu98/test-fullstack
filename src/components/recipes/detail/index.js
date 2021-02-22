import React from 'react'
import { useRouter } from 'next/router'
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';

import {
  Container,
  Breadcrumbs,
  Link,
  Typography,
  Grid,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar
} from '@material-ui/core';
import {
  NavigateNext,
  Schedule,
  Mode_standby,
  GroupWorkOutlined
} from '@material-ui/icons';

import styles from './Styles.module.scss'

const Index = () => {

  let theme = createMuiTheme();
  theme = responsiveFontSizes(theme);

  const menu = [
    'categories',
    'collections',
    'resources',
  ]


  return (
    <Container className={styles.container} fixed>
      <Grid container spacing={3}>
        <Grid item className={styles.px15} xs={12} md={6} >
          <Breadcrumbs separator={<NavigateNext fontSize="small" />} aria-label="breadcrumb">
            <Link color="textPrimary" href="/" >
              recipes
             </Link>
            <Link color="textPrimary" href="/" >
              bread
             </Link>
            <Typography color="textPrimary" >quick bread</Typography>
          </Breadcrumbs>

          <div className={styles.textTitle}>
            <h3>ahihi</h3>
          </div>

          <div className={styles.textContent}>
            <h3>this one-bowl banana -- our 2018 Recipe of the year -- uses the simplest ingredients, but is incredibly moist and flavorful. While the recipe calls for a 50/50 mix ef flours (all-purpose and whole wheat), we often make the bead 100% whole wheat, and honestly? No one can tell, it's that good! And not only is this bread delicious -- it's versatile.</h3>
          </div>

          <div>
            <List>
              <ListItem>
                <ListItemAvatar>
                  <Schedule />
                </ListItemAvatar>
                <ListItemText primary="Photos" secondary="Jan 9, 2014" />
                <ListItemText primary="Photos" secondary="Jan 9, 2014" />
                <ListItemText primary="Photos" secondary="Jan 9, 2014" />
              </ListItem>
            </List>
          </div>

          <div>
            <List>
              <ListItem>
                <ListItemAvatar>
                  <GroupWorkOutlined />
                </ListItemAvatar>
                <ListItemText primary="Photos" secondary="Jan 9, 2014" />
                <ListItemText primary="Photos" secondary="Jan 9, 2014" />
                <ListItemText primary="Photos" secondary="Jan 9, 2014" />
              </ListItem>
            </List>
          </div>

        </Grid>


        <Grid item className={styles.px15} xs={12} md={6} >
          <img src="/images/quickbread.jpeg" />
        </Grid>
      </Grid>

    </Container>
  )
}

export default Index;