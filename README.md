> This is a **Sanity Studio v3** plugin.

# sanity-plugin-user-select-input

*This is a Sanity Studio v3 plugin*

Adds a searchable dropdown for all users on the project, and stores their User ID as a string field.

Note: Think of the string as a weak reference. Users can be removed from the project without first checking if their ID is used in any Document. And once removed their ID will remain stored as the field value.

This is not a replacement for creating your schema types like `staff`, `author`, `profile`, `person` etc. It's useful for using a single field to link a document to a user. For example a field like `brief`, `task`, `reviewer` etc.

## Installation

```sh
npm install sanity-plugin-user-select-input
```

<img width="645" alt="Screenshot 2023-03-20 at 19 34 18" src="https://user-images.githubusercontent.com/9684022/226446947-6624eaff-1911-4fe5-9aff-e4221fd80115.png">

## Usage

Add it as a plugin in `sanity.config.ts` (or .js):

```ts
// ./sanity.config.ts

import {defineConfig} from 'sanity'
import {userSelect} from 'sanity-plugin-user-select-input'

export default defineConfig({
  //...
  plugins: [userSelect()],
})
```

Add a `userSelect` type field to any document type. It will act like a string field and so can be extended such as using validation rules such as `required`.

```ts
defineField({
  name: 'userId',
  type: 'userSelect',
}),
```

## License

[MIT](LICENSE) © Simeon Griggs

## Develop & test

This plugin uses [@sanity/plugin-kit](https://github.com/sanity-io/plugin-kit)
with default configuration for build & watch scripts.

See [Testing a plugin in Sanity Studio](https://github.com/sanity-io/plugin-kit#testing-a-plugin-in-sanity-studio)
on how to run this plugin with hotreload in the studio.


### Release new version

Run ["CI & Release" workflow](https://github.com/SimeonGriggs/sanity-plugin-user-select-input/actions/workflows/main.yml).
Make sure to select the main branch and check "Release new version".

Semantic release will only release on configured branches, so it is safe to run release on any branch.