// Framework Imports
import React from 'react'

// Library Imports
import Header from 'modules/Header/Header'

// CSS Imports
import GlobalStyle from 'src/globalConfig/GlobalStyles'
import StyledApp from './StyledApp'

const App = () => {
  return (
    <StyledApp>
      <GlobalStyle />
      <Header />
      <section id='contentWrap'>
        <section id='sidebarWrap'>
          <p>Sidebar:</p>
        </section>
        <section id='contentWrap'>
          <h1>Welcome to React App thats build using Webpack and Babel separately</h1>
          <h2>Heading 2</h2>
          <h3>Heading 3</h3>
          <h4>Heading 4</h4>
          <h5>Heading 5</h5>
          <h6>Heading 6</h6>
          <p>Paragraph/body</p>
        </section>
      </section>
      <footer><p>&copy; 2023 - Karl Chvojka</p></footer>
    </StyledApp>
  )
}

export default App
