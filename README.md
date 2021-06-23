# sanity-plugin-user-select-input

Select a User ID from the Project's User Store. The ID is stored as a string, like a [weak reference](https://www.sanity.io/docs/reference-type#f45f659e7b28). Users can be removed from the Project without first checking if their ID is used in any Document. And once removed their ID will remain stored as the field value.

This is not a replacement for creating your own schema for example `staff`, `author`, `profile`, `person` etc but rather useful for binding a Document to a Project User account. For example `task`, `reviewer` etc

## Installation

```
sanity install user-select-input
```

You have two options:

Fast: Import the function helper to just customise the `name`

```js
import {userSelectField} from 'sanity-plugin-user-select-input'

export default {
  // ... all other schema details
  fields: [
    // ... all other fields
    userSelectField('reviewer'),
  ],
}
```

Customisable: Import just the Component to use in your own schema field:

```js
import UserSelectInput from 'sanity-plugin-user-select-input'

export default {
  // ... all other schema details
  fields: [
    // ... all other fields
    {
      name: 'reviewer',
      title: 'Reviewer',
      description: 'Select a User',
      type: 'string',
      inputComponent: UserSelectInput,
    },
  ],
}
```

## License

MIT © Simeon Griggs
See LICENSE
