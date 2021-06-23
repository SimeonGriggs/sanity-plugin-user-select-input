import React from 'react'
import {FormField} from '@sanity/base/components'
import {studioTheme, ThemeProvider} from '@sanity/ui'

import {UserSelectAutocomplete} from './UserSelectAutocomplete'

const UserSelectInput = React.forwardRef((props, focusableRef) => {
  const {type, value} = props

  return (
    <ThemeProvider theme={studioTheme}>
      <FormField
        description={type?.description}
        title={type?.title}
        compareValue={value}
      >
        <UserSelectAutocomplete ref={focusableRef} {...props} />
      </FormField>
    </ThemeProvider>
  )
})

export default UserSelectInput

export const userSelectField = (name) => ({
  name,
  type: 'string',
  inputComponent: UserSelectInput,
})
