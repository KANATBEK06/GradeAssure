/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Header from '../../components/UI/Header/Header'
import classes from './ErrorPage.module.css'

const ErrorPage = () => {
  return (
    <div className={classes.Container}>
      <Header />
      <div className={classes.MainContainer}>
        <h1 className={classes.h1}>404</h1>
        <h2 className={classes.Title}>Page not found</h2>
        <p className={classes.text}>
          The page you are looking for doesn't exist or has been moved.
        </p>
        <button className={classes.Button}>Back to home</button>
      </div>
    </div>
  )
}

export default ErrorPage
