import React from 'react'
import { Box, Center, Container } from "@chakra-ui/react"
import { SingleColorSlider } from '../components/SingleColorSlider'
import { ColorCodeInput } from '../components/ColorCodeInput'

const IndexPage = () => {
  const [code, setCode] = React.useState()
  const [r, setR] = React.useState(100)
  const [g, setG] = React.useState(100)
  const [b, setB] = React.useState(100)

  React.useEffect(() => {}, [])

  return (
    <Container>
      <ColorCodeInput />
      <Center w="40px" h="40px" mx="2rem" bg={"#FFGG77"} color="white">
        <Box as="span" fontWeight="bold" fontSize="lg">X</Box>
      </Center>
      <SingleColorSlider color="R" initialValue={100} />
      <SingleColorSlider color="G" initialValue={100} />
      <SingleColorSlider color="B" initialValue={100} />
    </Container>
  )
}

export default IndexPage
