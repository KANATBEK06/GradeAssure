import React from 'react'
import styles from './Card.module.css'

const Card = ({ children, variant }) => {
  return (
    <div
      className={
        (variant === 'adminSignIn' && styles.signInCardContiner) ||
        (variant === 'adminCodeConfirmation' && styles.codeCardContainer) ||
        (variant === 'resertpasswordAdmin' && styles.resertpasswordContainer) ||
        (variant === 'schoolAdminSignUp' && styles.schAdminSignUpContainer) ||
        (variant === 'schoolAdminSuccssesfully' &&
          styles.schoolAdminSuccessfullyContainer) ||
        (variant === 'teacherDays' && styles.divContainer)
      }
    >
      <div
        className={
          (variant === 'adminSignIn' && styles.signInCard) ||
          (variant === 'adminCodeConfirmation' && styles.codeCard) ||
          (variant === 'resertpasswordAdmin' && styles.resertpassword) ||
          (variant === 'schoolAdminSignUp' && styles.schAdminSignUp) ||
          (variant === 'schoolAdminSuccssesfully' &&
            styles.schoolAdminSuccessfully) ||
          (variant === 'teacherDays' && styles.cardContainer)
        }
      >
        <div
          className={
            (variant === 'adminSignIn' && styles.signInRoundFirst) ||
            (variant === 'adminCodeConfirmation' && styles.codeRoundFirst) ||
            (variant === 'resertpasswordAdmin' &&
              styles.resertpasswordRoundFirst) ||
            (variant === 'schoolAdminSignUp' &&
              styles.schAdminSignUpRoundFirst) ||
            (variant === 'schoolAdminSuccssesfully' &&
              styles.schoolAdminSuccessfullyRound1) ||
            (variant === 'teacherDays' && styles.roundFirst)
          }
        />
        <div
          className={
            (variant === 'adminSignIn' && styles.signInRoundSecond) ||
            (variant === 'adminCodeConfirmation' &&
              styles.codeCardRoundSecond) ||
            (variant === 'resertpasswordAdmin' &&
              styles.resertpasswordRoundSecond) ||
            (variant === 'schoolAdminSignUp' &&
              styles.schAdminSignUpRoundSecond) ||
            (variant === 'schoolAdminSuccssesfully' &&
              styles.schoolAdminSuccessfullyRound2) ||
            (variant === 'teacherDays' && styles.roundSecond)
          }
        />
        <div
          className={
            (variant === 'adminSignIn' && styles.signInCardRoundThird) ||
            (variant === 'adminCodeConfirmation' &&
              styles.codeCardRoundThird) ||
            (variant === 'resertpasswordAdmin' &&
              styles.resertpasswordRoundThird) ||
            (variant === 'schoolAdminSignUp' &&
              styles.schAdminSignUpRoundThird) ||
            (variant === 'schoolAdminSuccssesfully' &&
              styles.schoolAdminSuccessfullyRound3) ||
            (variant === 'teacherDays' && styles.roundThird)
          }
        />
      </div>
      <div
        className={
          (variant === 'adminSignIn' && styles.signInCardValue) ||
          (variant === 'adminCodeConfirmation' && styles.codeCardValue) ||
          (variant === 'resertpasswordAdmin' &&
            styles.resertpasswordContainerValue) ||
          (variant === 'schoolAdminSignUp' && styles.schAdminSignUpValue) ||
          (variant === 'schoolAdminSuccssesfully' &&
            styles.schoolAdminSuccessfullyValue) ||
          (variant === 'teacherDays' && styles.valueCard)
        }
      >
        {children}
      </div>
      {/* <summary>
        <details>
          Click me
          <p>hi</p>
          <p>hello</p>
          <p>bye</p>
        </details>
      </summary> */}
    </div>
  )
}

export default Card
