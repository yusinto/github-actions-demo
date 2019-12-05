import React, { FunctionComponent, useState } from 'react'

interface AppProps {
  firstName: string
}
const App: FunctionComponent<AppProps> = ({ name }) => {
  return <div>Welcome github actions {name}! Oops</div>
}

export default App
