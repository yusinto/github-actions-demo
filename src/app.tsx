import React, { FunctionComponent, useState } from 'react'

interface AppProps {
  firstName: string
  lastName?: string
}
const App: FunctionComponent<AppProps> = ({ firstName, surname }) => {
  return (
    <div>
      Welcome github actions {firstName} {surname}!
    </div>
  )
}

export default App
