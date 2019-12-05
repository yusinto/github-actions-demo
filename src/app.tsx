import React, { FunctionComponent, useState } from 'react'

interface AppProps {
  firstName: string
}
const App: FunctionComponent<AppProps> = ({ firstName }) => {
  return <div>Welcome github actions {firstName}!</div>
}

export default App
