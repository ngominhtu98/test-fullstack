import React from 'react'
import { useRouter } from 'next/router'
import { makeStyles } from '@material-ui/core/styles';
import {
  Container,
  Button
} from '@material-ui/core/';
import styles from './Styles.module.scss'

const Menu = () => {

  const menu = [
    'categories',
    'collections',
    'resources',
  ]


  return (
    <div className={styles.topHeader}>
      <Container className={styles.container} fixed>
        {menu && menu.map((item, key) => (
          <Button
            key={key}
          >
            {item}
          </Button>
        ))}

      </Container>
    </div>
  )
}

export default Menu;