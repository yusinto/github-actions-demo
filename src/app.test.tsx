import React from 'react'
import { render } from '@testing-library/react'
import App from './app'

describe('app', () => {
  test('renders root app component correctly', () => {
    const { asFragment } = render(<App firstName="Yus" />)
    expect(asFragment()).toMatchSnapshot()
  })
})
