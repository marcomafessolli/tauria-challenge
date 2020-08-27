import React from 'react'
import { render } from '@testing-library/react'

import CheckYourPizza from '../../components/check-your-pizza'

test('should have descriptive page title', () => {
  const { getByText } = render(<CheckYourPizza />)

  expect(getByText('Check your Pizza')).toBeInTheDocument()
})
