import React from 'react'
import { render } from '@testing-library/react'

import SelectSize from '../../components/select-size'

test('should have descriptive page title', () => {
  const { getByText } = render(<SelectSize />)

  expect(getByText('Choose your Size')).toBeInTheDocument()
})
