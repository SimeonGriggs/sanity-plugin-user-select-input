import React from 'react'
import {Autocomplete} from '@sanity/ui'
import {UsersIcon} from '@sanity/icons'
import {set, StringInputProps, unset} from 'sanity'
import {useProjectUsers, UserExtended} from 'sanity-plugin-utils'

import Option from './Option'

type UserOption = {
  key: string
  value: string
  payload: UserExtended
}

export default function UserSelectAutocomplete(props: StringInputProps) {
  const {value, id, onChange, readOnly} = props

  const projectUsers = useProjectUsers({apiVersion: `2023-01-01`})

  const handleChange = React.useCallback(
    (userId: string) => onChange(userId ? set(userId) : unset()),
    [onChange]
  )

  const handleFilterOption = React.useCallback((query: string, option: UserOption) => {
    return option.payload.displayName.toLowerCase().indexOf(query.toLowerCase()) > -1
  }, [])

  const userList = projectUsers?.length
    ? projectUsers.filter((user) => !user.displayName.includes(`(Robot)`))
    : []
  const userSelected = userList.find((user) => user.id === value)
  const userRender = userSelected?.displayName ?? `No user found with this ID: ${value}`

  return (
    <Autocomplete
      icon={UsersIcon}
      radius={1}
      id={`user-select-${id}`}
      filterOption={handleFilterOption}
      openButton
      options={userList.map((user) => ({
        key: user.id,
        value: user.id,
        payload: user,
      }))}
      onChange={handleChange}
      readOnly={readOnly}
      renderOption={Option}
      renderValue={() => (userList?.length > 0 && value && userRender ? userRender : ``)}
      padding={3}
      fontSize={2}
      placeholder={props.schemaType.type?.placeholder ?? `Search Users`}
      value={value ?? ``}
    />
  )
}
