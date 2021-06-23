/* eslint-disable react/display-name */
import React from 'react'
import {Autocomplete, Avatar, Card, Text, Flex, Box} from '@sanity/ui'
import PatchEvent, {set, unset} from '@sanity/form-builder/PatchEvent'
import {UsersIcon} from '@sanity/icons'

import {useProjectUsers} from './lib/user/index'

function OptionRender({payload}) {
  const {displayName, imageUrl} = payload

  return (
    <Card as="button">
      <Flex align="center">
        <Box paddingLeft={3} paddingY={1}>
          <Avatar
            alt={displayName ?? ``}
            src={imageUrl ?? ``}
            size={1}
            style={{opacity: imageUrl ? 1 : 0.1}}
          />
        </Box>
        <Box flex={1} paddingX={3} paddingY={1}>
          <Text>{displayName}</Text>
        </Box>
      </Flex>
    </Card>
  )
}

// eslint-disable-next-line complexity
export const UserSelectAutocomplete = React.forwardRef((props, focusableRef) => {
  const value = props.value || ``
  const projectUsers = useProjectUsers() || []
  const userList = projectUsers.filter((user) => !user.displayName.includes(`(Robot)`))

  const handleClick = React.useCallback(
    (userId) => props.onChange(PatchEvent.from(userId ? set(userId) : unset())),
    [value]
  )

  return (
    <Autocomplete
      icon={UsersIcon}
      radius={1}
      ref={focusableRef}
      id="user-list"
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
      renderOption={OptionRender}
      renderValue={() =>
        value ? userList.filter((user) => user.id === value)?.pop()?.displayName : ``
      }
      padding={3}
      fontSize={2}
      placeholder="Search Users"
      loading={userList.length === 0}
    />
  )
})
