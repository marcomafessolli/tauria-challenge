import React from 'react'
import { render } from '@testing-library/react'

import SelectCrust from '../../components/select-crust'

test('should have descriptive page title', () => {
  const { getByText } = render(<SelectCrust />)

  expect(getByText('Choose your Crust')).toBeInTheDocument()
})
