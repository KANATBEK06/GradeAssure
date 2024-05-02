import React from 'react'
import Button from '../../../components/UI/Button/Button'
import Header from '../../../components/UI/Header/Header'
import Progress from '../../../components/UI/Progress/Progress'
import classes from './StudentProfile.module.css'

const StudentProfile = () => {
  return (
    <div className={classes.Container}>
      <Header />
      <main>
        <div className={classes.HeadContainer}>
          <div className={classes.ProgressContainer}>
            <Progress variant='mini' percent={45} />
          </div>
          <div className={classes.TextContainer}>
            <h5 className={classes.TestText}>Test successfully</h5>
            <p className={classes.DescriptionText}>
              It passes 91% of tests successfully.
            </p>
          </div>
        </div>
        <div className={classes.bodyContainer}>
          <div className={classes.NameContainer}>
            <h2 className={classes.NameText}>Daniel Ahatzhanov</h2>
            <a className={classes.emailText} href='daniel@gmail.com'>
              daniel@gmail.com
            </a>
          </div>
          <div className={classes.InfoContainer}>
            <p className={classes.infoText}>Passing tests: 12</p>
            <p className={classes.infoText}>Successfully: 11</p>
            <p className={classes.infoText}>Retake: 1</p>
          </div>
          <div className={classes.ButtonContainer}>
            <Button variant='back'>Back</Button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default StudentProfile
