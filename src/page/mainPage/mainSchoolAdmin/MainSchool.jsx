import React from 'react'
import AdminIcon from '../../../assets/mainPageIcon/admin-icon.svg'
import BackgroundImage from '../../../assets/mainPageIcon/background-image.svg'
import StudentIcon from '../../../assets/mainPageIcon/student-icon.svg'
import TeacherIcon from '../../../assets/mainPageIcon/teacher-icon.svg'
import Footer from '../../../components/UI/Footer/Footer'
import Header from '../../../components/UI/Header/Header'
import Progress from '../../../components/UI/Progress/Progress'
import classes from './MainSchool.module.css'

const MainSchool = () => {
  return (
    <div>
      <header>
        <Header variant='menu' prefix='schoolAdmin' />
      </header>
      <main>
        <div>
          <img
            className={classes.backgroundImage}
            src={BackgroundImage}
            alt=''
          />
        </div>
        <div className={classes.mainContainer}>
          <div className={classes.globalImageContainer}>
            <div className={classes.ImageContainer}>
              <img className={classes.Image} src={TeacherIcon} alt='' />
              <div>
                <p className={classes.ImageText}>1000</p>
                <hr className={classes.hr} />
                <p className={classes.ImageText}>Teacher</p>
              </div>
            </div>
            <div className={classes.ImageContainer}>
              <img className={classes.Image} src={StudentIcon} alt='' />
              <div>
                <p className={classes.ImageText}>1000</p>
                <hr className={classes.hr} />
                <p className={classes.ImageText}>Students</p>
              </div>
            </div>
            <div className={classes.ImageContainer}>
              <img className={classes.Image} src={AdminIcon} alt='' />
              <div>
                <p className={classes.ImageText}>1000</p>
                <hr className={classes.hr} />
                <p className={classes.ImageText}>School Admin</p>
              </div>
            </div>
          </div>
          <div className={classes.endContainer}>
            <div className={classes.ProgressContainer}>
              <Progress percent={32} />
            </div>
            <div className={classes.TextContainer}>
              <h5 className={classes.TestText}>Test</h5>
              <p className={classes.Textp}>
                Dive into detailed insights for a comprehensive overview of your
                performance.
              </p>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default MainSchool
