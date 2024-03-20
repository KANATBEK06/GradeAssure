import React, { useState } from 'react'
import Header from '../../../components/UI/Header/Header'
import List from '../../../components/UI/List/List'
import classes from './TeacherMyTests.module.css'

function TeacherMyTests({ groupData }) {
  const [isCheckedAll, setIsCheckedAll] = useState(false)
  const [checkboxes, setCheckboxes] = useState(
    groupData ? Array(groupData.length).fill(false) : []
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
        prefix='teacher'
      />

      <div className={classes.MainContainer}>
        <div className={classes.listContainer}>
          <List
            groupData={groupData}
            variant='TeacherMyTest'
            actionVariant='teacher'
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

export default TeacherMyTests
