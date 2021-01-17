import React from 'react'
import { Box, Center, Flex, Input } from '@chakra-ui/react'

export type Props = {}

const isValidColorCode = (text: string): boolean => {
  return true
}

export const ColorCodeInput: React.FC<Props> = (props) => {
  const [value, setValue] = React.useState("")
  const [inputError, setInputError] = React.useState<string | null>(null)
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  return (
    <Flex>
      <Input value={value} onChange={handleChange} />
    </Flex>
  )
}
