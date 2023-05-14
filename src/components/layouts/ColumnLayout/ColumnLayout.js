// Framework Imports
import React from 'react'
import PropTypes from 'prop-types'

// CSS Imports
import StyledColumnLayout from './StyledColumnLayout'

/**
 * This the ColumnLayout component.
 *
 * Its purpose is just to give an example of a single column layout.
 */
// Proptypes

const ColumnLayout = ({ headlineText }) => (
  <StyledColumnLayout>
    <section id='contentWrap'>
      <h1>{headlineText}</h1>
      <h2>Font Examples:</h2>
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <h4>Heading 4</h4>
      <h5>Heading 5</h5>
      <h6>Heading 6</h6>
      <p>Paragraph/body</p>
    </section>
  </StyledColumnLayout>
)
ColumnLayout.propTypes = {
  headlineText: PropTypes.string.isRequired
}

export default ColumnLayout
