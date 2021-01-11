import React from 'react'
import { Heading } from "@chakra-ui/react"
import { SingleColorSlider } from '../components/SingleColorSlider'

const IndexPage = () => {
  return (
    <main>
      <SingleColorSlider color="R" initialValue={100} />
      <SingleColorSlider color="G" initialValue={100} />
      <SingleColorSlider color="B" initialValue={100} />
    </main>
  )
}

export default IndexPage
