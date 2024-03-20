import React from 'react'
import ArrowIcon from '../../../assets/ListIcon/arrowIcon.png'
import BlockIcon from '../../../assets/ListIcon/blockIcon.png'
import UnBlockIcon from '../../../assets/ListIcon/unBlockIcon.png'
import Actions from '../Actions/Actions'
import Button from '../Button/Button'
import classes from './List.module.css'

function List({
  studentData,
  groupData,
  variant,
  actionVariant,
  actionPage,
  isCheckedAll,
  setIsCheckedAll,
  checkboxes,
  setCheckboxes,
  studentName,
  studentId,
  setUserId,
  setFullId,
}) {
  const handleMasterCheckboxChange = () => {
    const newIsCheckedAll = !isCheckedAll
    setIsCheckedAll(newIsCheckedAll)
    setCheckboxes(Array(checkboxes.length).fill(newIsCheckedAll))
    if (newIsCheckedAll) {
      const allUserIds = studentData
        ? studentData.map((user) => user.id)
        : groupData.map((el) => el.id)
      setFullId(allUserIds)
    } else {
      setFullId([])
    }
  }
  const handleCheckboxChange = (index, userId) => {
    const newCheckboxes = [...checkboxes]
    newCheckboxes[index] = !newCheckboxes[index]
    setCheckboxes(newCheckboxes)
    setIsCheckedAll(newCheckboxes.every((isChecked) => isChecked))
    setUserId(userId)
  }

  return (
    <table className={classes.tableContainer}>
      <thead>
        <tr
          className={
            (variant !== 'SchoolFindAll' && classes.theadContainer) ||
            (variant === 'SchoolFindAll' && classes.SchoolFindAllTheadContainer)
          }
        >
          <th
            className={
              (variant === 'AdminUsers' && classes.AdminUsersCheckbox) ||
              (variant === 'AdminRequest' && classes.AdminUsersCheckbox) ||
              (variant === 'SchoolFindAll' && classes.displayNone) ||
              (variant === 'SchoolAdminReports' && classes.displayNone) ||
              (variant === 'SchoolRequestTeacher' &&
                classes.AdminUsersCheckbox) ||
              (variant === 'TeacherNoneTestChecks' &&
                classes.AdminUsersCheckbox) ||
              (variant === 'TeacherMyTest' && classes.displayNone) ||
              (variant === 'TeacherTestCheck' && classes.displayNone)
            }
          >
            <input
              className={classes.theadCheckbox}
              type='checkbox'
              checked={isCheckedAll}
              onChange={handleMasterCheckboxChange}
            />
          </th>
          <th
            className={
              (variant === 'AdminUsers' && classes.AdminUsersId) ||
              (variant === 'AdminRequest' && classes.AdminRequestId) ||
              (variant === 'SchoolFindAll' && classes.SchoolFindAllId) ||
              (variant === 'SchoolAdminReports' &&
                classes.SchoolAdminReportsId) ||
              (variant === 'SchoolRequestTeacher' &&
                classes.SchoolRequestTeacherTheadId) ||
              (variant === 'TeacherNoneTestChecks' &&
                classes.TeacherNoneTestCheckId) ||
              (variant === 'TeacherMyTest' && classes.TeacherMyTestId) ||
              (variant === 'TeacherTestCheck' && classes.TeacherTestCheckId)
            }
          >
            ID
            <img
              className={classes.ArrowIcon}
              src={ArrowIcon}
              alt='error ArrowIcon.png'
            />
          </th>
          <th
            className={
              (variant === 'AdminUsers' && classes.AdminUsersFullName) ||
              (variant === 'AdminRequest' && classes.displayNone) ||
              (variant === 'SchoolFindAll' && classes.SchoolFindAllFullName) ||
              (variant === 'SchoolAdminReports' && classes.displayNone) ||
              (variant === 'SchoolRequestTeacher' && classes.displayNone) ||
              (variant === 'TeacherNoneTestChecks' && classes.displayNone) ||
              (variant === 'TeacherMyTest' && classes.displayNone) ||
              (variant === 'TeacherTestCheck' && classes.displayNone)
            }
          >
            Full name
            <img
              className={classes.ArrowIcon}
              src={ArrowIcon}
              alt='error ArrowIcon.png'
            />
          </th>
          <th
            className={
              (variant === 'AdminUsers' && classes.displayNone) ||
              (variant === 'AdminRequest' && classes.displayNone) ||
              (variant === 'SchoolFindAll' && classes.displayNone) ||
              (variant === 'SchoolAdminReports' &&
                classes.SchoolAdminReportsGroupName) ||
              (variant === 'SchoolRequestTeacher' && classes.displayNone) ||
              (variant === 'TeacherNoneTestChecks' &&
                classes.TeacherNoneTestCheckName) ||
              (variant === 'TeacherMyTest' && classes.TeacherMyTestName) ||
              (variant === 'TeacherTestCheck' && classes.TeacherTestCheckName)
            }
          >
            Test name
            <img
              className={classes.ArrowIcon}
              src={ArrowIcon}
              alt='error ArrowIcon.png'
            />
          </th>
          <th
            className={
              (variant === 'AdminUsers' && classes.displayNone) ||
              (variant === 'AdminRequest' && classes.AdminRequestDay) ||
              (variant === 'SchoolFindAll' && classes.displayNone) ||
              (variant === 'SchoolAdminReports' && classes.displayNone) ||
              (variant === 'SchoolRequestTeacher' && classes.displayNone) ||
              (variant === 'TeacherNoneTestChecks' && classes.displayNone) ||
              (variant === 'TeacherMyTest' && classes.displayNone) ||
              (variant === 'TeacherTestCheck' && classes.displayNone)
            }
          >
            Days
            <img
              className={classes.ArrowIcon}
              src={ArrowIcon}
              alt='error ArrowIcon.png'
            />
          </th>
          <th
            className={
              variant === 'SchoolRequestTeacher'
                ? classes.SchoolRequestTeacherTheadAction
                : classes.displayNone
            }
          >
            Action
            <img
              className={classes.ArrowIcon}
              src={ArrowIcon}
              alt='error ArrowIcon.png'
            />
          </th>
          <th
            className={
              variant === 'SchoolRequestTeacher'
                ? classes.SchoolRequestTeacherTheadAction
                : classes.displayNone
            }
          >
            Action
            <img
              className={classes.ArrowIcon}
              src={ArrowIcon}
              alt='error ArrowIcon.png'
            />
          </th>
          <th
            className={
              (variant === 'AdminUsers' && classes.AdminUsersEmail) ||
              (variant === 'AdminRequest' && classes.AdminRequestEmail) ||
              (variant === 'SchoolFindAll' && classes.displayNone) ||
              (variant === 'SchoolAdminReports' &&
                classes.SchoolAdminReportsEmail) ||
              (variant === 'SchoolRequestTeacher' &&
                classes.SchoolRequestTeacherTheadEmail) ||
              (variant === 'TeacherNoneTestChecks' && classes.displayNone) ||
              (variant === 'TeacherMyTest' && classes.displayNone) ||
              (variant === 'TeacherTestCheck' && classes.displayNone)
            }
          >
            Email
            <img
              className={classes.ArrowIcon}
              src={ArrowIcon}
              alt='error ArrowIcon.png'
            />
          </th>
          <th
            className={
              (variant === 'AdminUsers' && classes.displayNone) ||
              (variant === 'AdminRequest' && classes.displayNone) ||
              (variant === 'SchoolFindAll' && classes.SchoolFindAllDate) ||
              (variant === 'SchoolAdminReports' &&
                classes.SchoolAdminReportsDate) ||
              (variant === 'SchoolRequestTeacher' && classes.displayNone) ||
              (variant === 'TeacherNoneTestChecks' &&
                classes.TeacherNoneTestCheckDataCteated) ||
              (variant === 'TeacherMyTest' &&
                classes.TeacherMyTestDataCreated) ||
              (variant === 'TeacherTestCheck' &&
                classes.TeacherTestCheckDataCreated)
            }
          >
            Data created
            <img
              className={classes.ArrowIcon}
              src={ArrowIcon}
              alt='error ArrowIcon.png'
            />
          </th>
          <th
            className={
              (variant === 'AdminUsers' && classes.displayNone) ||
              (variant === 'AdminRequest' && classes.displayNone) ||
              (variant === 'SchoolFindAll' && classes.SchoolFindAllResult) ||
              (variant === 'SchoolAdminReports' && classes.displayNone) ||
              (variant === 'SchoolRequestTeacher' && classes.displayNone) ||
              (variant === 'TeacherNoneTestChecks' && classes.displayNone) ||
              (variant === 'TeacherMyTest' && classes.displayNone) ||
              (variant === 'TeacherTestCheck' && classes.displayNone)
            }
          >
            Results
            <img
              className={classes.ArrowIcon}
              src={ArrowIcon}
              alt='error ArrowIcon.png'
            />
          </th>
          <th
            className={
              (variant === 'AdminUsers' && classes.displayNone) ||
              (variant === 'AdminRequest' && classes.displayNone) ||
              (variant === 'SchoolFindAll' && classes.SchoolFindAllPassed) ||
              (variant === 'SchoolAdminReports' && classes.displayNone) ||
              (variant === 'SchoolRequestTeacher' && classes.displayNone) ||
              (variant === 'TeacherNoneTestChecks' && classes.displayNone) ||
              (variant === 'TeacherMyTest' && classes.displayNone) ||
              (variant === 'TeacherTestCheck' && classes.TeacherTestCheckPassed)
            }
          >
            Passed
            <img
              className={classes.ArrowIcon}
              src={ArrowIcon}
              alt='error ArrowIcon.png'
            />
          </th>
        </tr>
      </thead>
      <tbody>
        {studentData &&
          studentData.map((element, index) => (
            <tr
              key={element.id}
              className={
                (variant === 'AdminUsers' && classes.AdminUsersDataContainer) ||
                (variant === 'AdminRequest' &&
                  classes.AdminUsersDataContainer) ||
                (variant === 'SchoolFindAll' &&
                  classes.SchoolFindAllDataContainer) ||
                (variant === 'SchoolRequestTeacher' &&
                  classes.SchoolRequestTeacherDataContainer)
              }
            >
              <td
                className={
                  (variant === 'AdminUsers' && classes.AdminUsersCheckbox) ||
                  (variant === 'AdminRequest' && classes.AdminUsersCheckbox) ||
                  (variant === 'SchoolFindAll' && classes.displayNone) ||
                  (variant === 'SchoolRequestTeacher' &&
                    classes.AdminUsersCheckbox)
                }
              >
                <input
                  className={classes.theadCheckbox}
                  checked={checkboxes[index]}
                  onChange={() => handleCheckboxChange(index, element.id)}
                  type='checkbox'
                />
              </td>
              <td
                className={
                  (variant === 'AdminUsers' && classes.AdminUsersDataId) ||
                  (variant === 'AdminRequest' && classes.AdminRequestDataId) ||
                  (variant === 'SchoolFindAll' &&
                    classes.SchoolFindAllDataId) ||
                  (variant === 'SchoolRequestTeacher' &&
                    classes.SchoolRequestTeacherDataId)
                }
              >
                {element.id}
              </td>
              <td
                className={
                  (variant === 'AdminUsers' && classes.AdminUsersDataName) ||
                  (variant === 'SchoolFindAll' &&
                    classes.SchoolFindAllDataName) ||
                  (variant === 'AdminRequest' &&
                    classes.AdminRequestDataName) ||
                  (variant === 'SchoolRequestTeacher' && classes.displayNone)
                }
                style={{
                  color:
                    studentName === element.name || studentId === element.id
                      ? 'rgba(0, 255, 56, 1)'
                      : 'rgba(0, 0, 0, 1)',
                }}
              >
                {element.name}
              </td>
              <td
                className={
                  (variant === 'AdminUsers' && classes.displayNone) ||
                  (variant === 'SchoolFindAll' && classes.displayNone) ||
                  (variant === 'AdminRequest' &&
                    classes.AdminRequestDataDays) ||
                  (variant === 'SchoolRequestTeacher' && classes.displayNone)
                }
              >
                {element.days}
              </td>
              <td
                className={
                  variant === 'SchoolRequestTeacher'
                    ? classes.SchoolRequestTeacherDataAction
                    : classes.displayNone
                }
              >
                <Button variant='check'>Check</Button>
              </td>
              <td
                className={
                  variant === 'SchoolRequestTeacher'
                    ? classes.SchoolRequestTeacherDataAction
                    : classes.displayNone
                }
              >
                <Button variant='check'>Create</Button>
              </td>
              <td
                className={
                  (variant === 'AdminUsers' && classes.AdminUsersDataEmail) ||
                  (variant === 'SchoolFindAll' && classes.displayNone) ||
                  (variant === 'AdminRequest' &&
                    classes.AdminRequestDataEmail) ||
                  (variant === 'SchoolRequestTeacher' &&
                    classes.SchoolRequestTeacherDataEmail)
                }
                lang='ru'
              >
                {element.email}
              </td>
              <td
                className={
                  (variant === 'AdminUsers' && classes.displayNone) ||
                  (variant === 'SchoolFindAll' &&
                    classes.SchoolFindAllDataDate) ||
                  (variant === 'AdminRequest' && classes.displayNone) ||
                  (variant === 'SchoolRequestTeacher' && classes.displayNone)
                }
              >
                {element.date}
              </td>
              <td
                className={
                  (variant === 'AdminUsers' && classes.displayNone) ||
                  (variant === 'SchoolFindAll' &&
                    classes.SchoolFindAllDataResult) ||
                  (variant === 'AdminRequest' && classes.displayNone) ||
                  (variant === 'SchoolRequestTeacher' && classes.displayNone)
                }
              >
                {element.result ? (
                  element.result
                ) : (
                  <button className={classes.checkButton}>Check</button>
                )}
              </td>
              <td
                className={
                  (variant === 'AdminUsers' && classes.displayNone) ||
                  (variant === 'SchoolFindAll' &&
                    element.passed === 'Yeas' &&
                    classes.SchoolFindAllDataPassedYeas) ||
                  (variant === 'SchoolFindAll' &&
                    element.passed === 'No' &&
                    classes.SchoolFindAllDataPassedNo) ||
                  (variant === 'SchoolFindAll' &&
                    element.passed === 'Undefined' &&
                    classes.SchoolFindAllDataPassedUndefined) ||
                  (variant === 'AdminRequest' && classes.displayNone) ||
                  (variant === 'SchoolRequestTeacher' && classes.displayNone)
                }
              >
                {element.passed}
              </td>
              <td
                className={
                  (variant === 'AdminUsers' && classes.AdminUsersDataAction) ||
                  (variant === 'SchoolFindAll' && classes.displayNone) ||
                  (variant === 'AdminRequest' &&
                    classes.AdminUsersDataAction) ||
                  (variant === 'SchoolRequestTeacher' &&
                    classes.SchoolRequestDataAction)
                }
              >
                <Actions variant={actionVariant} page={actionPage} />
              </td>
            </tr>
          ))}
        {groupData &&
          groupData.map((element, index) => (
            <tr
              key={element.id}
              className={
                (variant === 'SchoolAdminReports' &&
                  classes.AdminUsersDataContainer) ||
                (variant === 'TeacherNoneTestChecks' &&
                  classes.TeacherNoneTestCheckDataContainer) ||
                (variant === 'TeacherMyTest' &&
                  classes.TeacherNoneTestCheckDataContainer) ||
                (variant === 'TeacherTestCheck' &&
                  classes.TeacherNoneTestCheckDataContainer)
              }
            >
              <td
                className={
                  variant === 'TeacherNoneTestChecks'
                    ? classes.AdminUsersCheckbox
                    : classes.displayNone
                }
              >
                <input
                  className={classes.theadCheckbox}
                  checked={checkboxes[index]}
                  onChange={() => handleCheckboxChange(index, element.id)}
                  type='checkbox'
                />
              </td>
              <td
                className={
                  variant === 'TeacherTestCheck'
                    ? classes.TeacherTestCheckBlock
                    : classes.displayNone
                }
              >
                <img src={element.block ? UnBlockIcon : BlockIcon} alt='none' />
              </td>
              <td
                className={
                  (variant === 'SchoolAdminReports' &&
                    classes.SchoolAdminReportsDataId) ||
                  (variant === 'TeacherNoneTestChecks' &&
                    classes.TeacherNoneTestCheckDataId) ||
                  (variant === 'TeacherMyTest' &&
                    classes.TeacherMyTestDataId) ||
                  (variant === 'TeacherTestCheck' &&
                    classes.TeacherTestCheckDataId)
                }
              >
                {element.id}
              </td>
              <td
                className={
                  (variant === 'SchoolAdminReports' &&
                    classes.SchoolAdminReportsDataGroupName) ||
                  (variant === 'TeacherNoneTestChecks' &&
                    classes.TeacherNoneTestCheckDataName) ||
                  (variant === 'TeacherMyTest' &&
                    classes.TeacherMyTestDataName) ||
                  (variant === 'TeacherTestCheck' &&
                    classes.TeacherTestCheckDataName)
                }
              >
                {element.groupName}
              </td>
              <td
                className={
                  (variant === 'SchoolAdminReports' &&
                    classes.SchoolAdminReportsDataEmail) ||
                  (variant === 'TeacherNoneTestChecks' &&
                    classes.displayNone) ||
                  (variant === 'TeacherMyTest' && classes.displayNone) ||
                  (variant === 'TeacherTestCheck' && classes.displayNone)
                }
              >
                {element.email}
              </td>
              <td
                className={
                  (variant === 'SchoolAdminReports' &&
                    classes.SchoolAdminReportsDataDate) ||
                  (variant === 'TeacherNoneTestChecks' &&
                    classes.TeacherNoneTestCheckDataDataCreated) ||
                  (variant === 'TeacherMyTest' &&
                    classes.TeacherMyTestDataDataCreated) ||
                  (variant === 'TeacherTestCheck' &&
                    classes.TeacherTestCheckDataDataCreated)
                }
              >
                {element.date}
              </td>
              <td
                className={
                  variant === 'TeacherTestCheck'
                    ? classes.TeacherTestCheckDataPassed
                    : classes.displayNone
                }
              >
                {element.passed}
              </td>
              <td
                className={
                  (variant === 'SchoolAdminReports' &&
                    classes.SchoolAdminReportsDataAction) ||
                  (variant === 'TeacherNoneTestChecks' &&
                    classes.displayNone) ||
                  (variant === 'TeacherMyTest' &&
                    classes.SchoolAdminReportsDataAction) ||
                  (variant === 'TeacherTestCheck' && classes.displayNone)
                }
              >
                <Actions variant={actionVariant} page={actionPage} />
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  )
}

export default List
