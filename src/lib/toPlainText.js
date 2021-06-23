export default function toPlainText(blocks = [], excerptLength = 0) {
  const blockString = blocks
    // loop through each block
    .map((block) => {
      // if it's not a text block with children,
      // return nothing
      if (block._type !== 'block' || !block.children) {
        return ''
      }
      // loop through the children spans, and join the
      // text strings
      return block.children.map((child) => child.text).join('')
    })
    .join('\n\n')

  if (excerptLength) {
    const truncated = blockString.slice(0, excerptLength)

    return truncated.length <= excerptLength ? `${truncated}...` : truncated
  }

  return blockString
}
