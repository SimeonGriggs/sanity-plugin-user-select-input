import React from 'react'
import {Avatar, Card, Text, Flex, Box} from '@sanity/ui'

export default function Option({payload}) {
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
