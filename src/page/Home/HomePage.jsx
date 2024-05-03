import React from 'react'
// import BackgroundIcon from '../../assets/homeIcon/background-icon.svg'
import classes from './HomePage.module.css'

const HomePage = () => {
  return (
    <div className={classes.MainContainer}>
      <header className={classes.Header}>
        <h3 className={classes.HeaderText}>GradeAssure</h3>
        <p className={classes.HeaderDescription}>Contact Us</p>
      </header>
      <main className={classes.Container}>
        <div className={classes.LeftContainer}>
          <h1 className={classes.Title}>Inspired Learning</h1>
          <p className={classes.Description}>
            Step into a realm of educational exploration with our
            state-of-the-art testing platform. Elevate your learning experience
            through thoughtfully crafted assessments, tailored to unveil
            individual potential and inspire a lifelong love for knowledge. Join
            us in shaping brighter academic futures, where every test is a step
            toward success.
          </p>
          <div>
            <button className={classes.StartButton}>Get start</button>
          </div>
        </div>
        <div className={classes.RightContainer} />
      </main>
    </div>
  )
}

export default HomePage
