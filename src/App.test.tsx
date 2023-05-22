// Framework Imports
import React from 'react'

// Library Imports
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

// Component Imports
import App from './App'

/**
 * Renders Landing Page:
 * - Renders basic landing page
 * - Checks for header with the text "ReactJS Basic Template"
 */
test('renders learn react link', () => {
  // Render App
  render(<App />)

  // Find the H1 Text in the component
  const linkElement = screen.getByText(/ReactJS TS Template 2023/i)

  // Assert the text exists
  expect(linkElement).toBeInTheDocument()
})
