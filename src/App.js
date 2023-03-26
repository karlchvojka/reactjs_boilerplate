// Framework Imports
import React from 'react'

// Library Imports
import Header from 'modules/Header/Header'
import Footer from 'modules/Footer/Footer'

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
      <Footer />
    </StyledApp>
  )
}

export default App
