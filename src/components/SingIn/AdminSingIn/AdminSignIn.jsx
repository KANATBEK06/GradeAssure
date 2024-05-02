import Button from '../../UI/Button/Button'
import Card from '../../UI/Card/Card'
import Input from '../../UI/Input/Input'
import styles from './AdminSignIn.module.css'

const AdminSignIn = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cardContainer}>
        <Card variant='adminSignIn'>
          <h1 className={styles.headline}>Sign In</h1>
          <div className={styles.firstForm}>
            <Input variant='login' label='Email' validated='login' />
          </div>
          <div className={styles.secondForm}>
            <Input
              variant='login'
              label='Password'
              validated='login'
              type='password'
            />
          </div>
          <div className={styles.button}>
            <Button variant='login'>Sign In</Button>
          </div>
          <div className={styles.linecontainer}>
            <div className={styles.line1}>
              <hr />
            </div>
            <div className={styles.line2}>
              <p>or</p>
              <hr />
            </div>
          </div>
          <p className={styles.text}>Forgot your password?</p>
        </Card>
      </div>
    </div>
  )
}
export default AdminSignIn
