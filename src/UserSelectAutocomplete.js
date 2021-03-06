/* eslint-disable react/display-name */
import React from 'react'
import {Autocomplete} from '@sanity/ui'
import PatchEvent, {set, unset} from '@sanity/form-builder/PatchEvent'
import {UsersIcon} from '@sanity/icons'

import {useProjectUsers} from './lib/user/index'
import Option from './Option'
import Feedback from './components/Feedback'

// eslint-disable-next-line complexity
export const UserSelectAutocomplete = React.forwardRef((props, focusableRef) => {
  const {value, onChange, type, readOnly} = props

  const {projectUsers, loading, error} = useProjectUsers()

  const handleClick = React.useCallback(
    (userId) => onChange(PatchEvent.from(userId ? set(userId) : unset())),
    [value]
  )

  if (error) {
    return (
      <Feedback>
        {error?.message
          ? `Your account may not have permissions to view all Users on this Project. See message: ${error.message}`
          : `Error`}
      </Feedback>
    )
  }

  const userList = projectUsers?.length
    ? projectUsers.filter((user) => !user.displayName.includes(`(Robot)`))
    : []
  const userSelected = userList.find((user) => user.id === value)
  const userRender = userSelected?.displayName ?? `No user found with this ID: ${value}`

  return (
    <Autocomplete
      icon={UsersIcon}
      radius={1}
      ref={focusableRef}
      id={type?.name ?? `user-select`}
      filterOption={(query, option) =>
        option.payload.displayName.toLowerCase().indexOf(query.toLowerCase()) > -1
      }
      openButton
      options={userList.map((user) => ({
        key: user.id,
        value: user.id,
        payload: user,
      }))}
      onChange={(event) => handleClick(event)}
      readOnly={readOnly || loading}
      renderOption={Option}
      renderValue={() => (userList?.length > 0 && value && userRender ? userRender : ``)}
      padding={3}
      fontSize={2}
      placeholder={type?.placeholder ?? `Search Users`}
      loading={loading}
      value={value ?? ``}
    />
  )
})
