import React from 'react'
import { Container } from "@chakra-ui/react"
import { SingleColorSlider } from '../components/SingleColorSlider'

const IndexPage = () => {
  const [code, setCode] = React.useState()
  const [r, setR] = React.useState(100)
  const [g, setG] = React.useState(100)
  const [b, setB] = React.useState(100)

  React.useEffect(() => {}, [])

  return (
    <Container>
      <SingleColorSlider color="R" initialValue={100} />
      <SingleColorSlider color="G" initialValue={100} />
      <SingleColorSlider color="B" initialValue={100} />
    </Container>
  )
}

export default IndexPage
