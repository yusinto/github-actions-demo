import React, { FunctionComponent } from 'react'

interface HomeProps {
  firstName: string
  lastName?: string
}

const Home: FunctionComponent<HomeProps> = ({ firstName, surname }) => {
  return (
    <>
      Hi there {firstName} {surname}!
    </>
  )
}

export default Home
