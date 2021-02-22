import React from 'react'
import { useRouter } from 'next/router'
import { makeStyles } from '@material-ui/core/styles';
import {
  Container,
  Button
} from '@material-ui/core/';
import styles from './Styles.module.scss'


const Index = () => {

  const router = useRouter();

  const menu = [
    'shop',
    'recipes',
    'learn',
    'about',
    'blog'
  ]

  const handelOnclick = (pathname) => {
    router.push(`/${pathname}`)
  }

  return (
    <>
      <Container fixed>
        <div className={styles.listButton}>
          <img src="/images/t1.png" />
          {menu && menu.map((item, key) => (
            <Button
              key={key}
              className={router.pathname.includes(item)? styles.active:''}
              onClick={() => handelOnclick(item)}
            >
              {item}
            </Button>
          ))}

        </div>
      </Container>
    </>
  )
}

export default Index;