import {definePlugin} from 'sanity'

import {userSelect as userSelectSchema} from './schemas/userSelect'

export const userSelect = definePlugin(() => {
  return {
    name: 'sanity-plugin-user-select-input',
    schema: {
      types: [userSelectSchema],
    },
  }
})
