import React from 'react'

import {
  Box,
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
}

export const SingleColorSlider: React.FC<Props> = (props) => {
  const defaultValue = props.initialValue ?? 128
  const minValue = 0
  const maxValue = 255
  const [current, setCurrent] = React.useState(defaultValue)

  const handleChange = (value: number) => {
    setCurrent(value)
  }

  return (
    <Flex>
      <Slider flex="1" value={current} min={minValue} max={maxValue} onChange={handleChange}>
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
      <NumberInput maxW="100px" mr="2rem" value={current} min={minValue} max={maxValue} onChange={(_, num) => handleChange(num)}>
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
    </Flex>
  )
}
