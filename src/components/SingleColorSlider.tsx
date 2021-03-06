import React from 'react'

import {
  Box,
  Center,
  Flex,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from "@chakra-ui/react"

export type Props = {
  initialValue?: number
  // onChangeEnd: (val: number) => void
  color: 'R' | 'G' | 'B'
  value?: number
  onChange?: (val: number) => void
}

export const SingleColorSlider: React.FC<Props> = (props) => {
  const {initialValue, color } = props
  const defaultValue = initialValue ?? 128
  const minValue = 0
  const maxValue = 255
  const [current, setCurrent] = React.useState(defaultValue)

  const handleChange = (value: number) => {
    setCurrent(value)
    if (props.onChange) {
      props.onChange(value)
    }
  }

  const bg = (color: string) => (val: number) => {
    switch (color) {
      case 'R':
        return `rgba(${val},0,0,0.7)`
      case 'G':
        return `rgba(0,${val},0,0.7)`
      case 'B':
        return `rgba(0,0,${val},0.7)`
    }
  }

  return (
    <Flex>
      <Center w="40px" h="40px" mx="2rem" bg={bg(color)(current)} color="white">
        <Box as="span" fontWeight="bold" fontSize="lg">{color}</Box>
      </Center>
      <Slider flex="1" value={current} min={minValue} max={maxValue} onChange={handleChange}>
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
      <NumberInput maxW="100px" mx="2rem" value={current} min={minValue} max={maxValue} onChange={(_, num) => handleChange(num)}>
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
    </Flex>
  )
}
