import React, { useState } from 'react'
import Button from '../../../components/UI/Button/Button'
import Header from '../../../components/UI/Header/Header'
import List from '../../../components/UI/List/List'
import classes from './SchoolUserBlocked.module.css'

function SchoolUserBlocked({ studentData }) {
  const [isCheckedAll, setIsCheckedAll] = useState(false)
  const [checkboxes, setCheckboxes] = useState(
    studentData ? Array(studentData.length).fill(false) : []
  )
  const [, setUserId] = useState(null)
  const [, setFullId] = useState(null)

  const containsTrue = checkboxes.some((value) => value === true)
  const countTrueValues = checkboxes.filter((value) => value === true).length

  const onCloseSelected = () => {
    setCheckboxes(Array(checkboxes.length).fill(false))
    setIsCheckedAll(false)
  }
  return (
    <div>
      <Header
        selected={containsTrue}
        onClose={onCloseSelected}
        selectedCount={countTrueValues}
        variant='search'
        page='blockedRequests'
      />

      <div className={classes.MainContainer}>
        <div className={classes.ButtonContainer}>
          <div className={classes.StudentButton}>
            <Button variant='students'>Students</Button>
          </div>
          <div className={classes.TeacherButton}>
            <Button variant='teacher'>Teachers</Button>
          </div>
        </div>
        <div className={classes.listContainer}>
          <List
            studentData={studentData}
            variant='AdminUsers'
            actionVariant='schoolAdmin'
            actionPage='blockedRequests'
            isCheckedAll={isCheckedAll}
            setIsCheckedAll={setIsCheckedAll}
            checkboxes={checkboxes}
            setCheckboxes={setCheckboxes}
            setUserId={setUserId}
            setFullId={setFullId}
          />
        </div>
      </div>
    </div>
  )
}

export default SchoolUserBlocked
