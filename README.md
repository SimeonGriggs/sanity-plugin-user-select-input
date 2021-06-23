# sanity-plugin-user-select-input

Custom Input for selecting a User from the Project and storing the ID as a string.

![Searching and selecting a Project User](https://user-images.githubusercontent.com/9684022/123063150-12301c80-d405-11eb-9b4e-c5f8a5413833.gif)

Note: Think of the string [like a weak reference](https://www.sanity.io/docs/reference-type#f45f659e7b28). Users can be removed from the Project without first checking if their ID is used in any Document. And once removed their ID will remain stored as the field value.

This is not a replacement for creating your own schema for example `staff`, `author`, `profile`, `person` etc but rather useful for linking a Document to a Project User. For example `brief`, `task`, `reviewer` etc

## Installation

```
sanity install user-select-input
```

You have two options:

Fast: Import a helper function and customise the field's `name`

```js
import { userSelectField } from "sanity-plugin-user-select-input";

export default {
  // ... all other schema details
  fields: [
    // ... all other fields
    userSelectField("reviewer"),
  ],
};
```

Customisable: Import just the Component to use in your own field:

```js
import UserSelectInput from "sanity-plugin-user-select-input";

export default {
  // ... all other schema details
  fields: [
    // ... all other fields
    {
      name: "reviewer",
      title: "Task Reviewer",
      description: "Select a User",
      type: "string",
      inputComponent: UserSelectInput,
    },
  ],
};
```

## License

MIT © Simeon Griggs
See LICENSE
