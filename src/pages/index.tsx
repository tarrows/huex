import React from 'react'
import { Heading } from "@chakra-ui/react"
import { SingleColorSlider } from '../components/SingleColorSlider'

const IndexPage = () => {
  return (
    <SingleColorSlider initialValue={30} />
  )
}

export default IndexPage
