import {Avatar, Card, Text, Flex, Box} from '@sanity/ui'
import {User} from 'sanity'

type OptionProps = {
  payload: User
}

export default function Option(props: OptionProps) {
  const {displayName, imageUrl} = props.payload

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
