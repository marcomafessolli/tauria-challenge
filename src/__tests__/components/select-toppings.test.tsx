import React from 'react'
import { render } from '@testing-library/react'

import SelectToppings from '../../components/select-toppings'

test('should have descriptive page title', () => {
  const { getByText } = render(<SelectToppings />)

  expect(getByText('Choose your Toppings')).toBeInTheDocument()
})
