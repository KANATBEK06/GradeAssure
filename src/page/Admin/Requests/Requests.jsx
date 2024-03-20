import React, { useState } from 'react'
import Header from '../../../components/UI/Header/Header'
import List from '../../../components/UI/List/List'
import classes from './Requests.module.css'

function RequestsLIst({ studentData }) {
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
        page='requests'
        blocked
      />

      <div className={classes.MainContainer}>
        <div className={classes.listContainer}>
          <List
            studentData={studentData}
            variant='AdminRequest'
            actionVariant='admin'
            actionPage='requests'
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

export default RequestsLIst
