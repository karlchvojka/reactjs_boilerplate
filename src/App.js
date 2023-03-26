// Framework Imports
import React from 'react'

// Library Imports
import Header from 'modules/Header/Header'

// Component Imports
import SidebarLayout from 'layouts/SidebarLayout/SidebarLayout'

// CSS Imports
import GlobalStyle from 'src/globalConfig/GlobalStyles'
import StyledApp from './StyledApp'

const App = () => {
  return (
    <StyledApp id='container'>
      <GlobalStyle />
      <Header id='headerWrap' />
      <SidebarLayout />
      <footer><p>&copy; 2023 - Karl Chvojka</p></footer>
    </StyledApp>
  )
}

export default App
