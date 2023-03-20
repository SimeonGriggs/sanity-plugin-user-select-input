import {defineType} from 'sanity'

import UserSelectAutocomplete from '../components/UserSelectAutocomplete'

export const userSelect = defineType({
  name: 'userSelect',
  type: 'string',
  components: {
    input: UserSelectAutocomplete,
  },
})
