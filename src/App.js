// Framework Imports
import React from 'react'

// Component Imports
import ColumnLayout from 'layouts/ColumnLayout/ColumnLayout'
import Footer from 'modules/Footer/Footer'
import Header from 'modules/Header/Header'

// CSS Imports
import GlobalStyle from 'globalConfig/GlobalStyles'
import StyledApp from './StyledApp'

const App = () => (
  <StyledApp id='container'>
    <GlobalStyle />
    <Header id='headerWrap' />
    <ColumnLayout
      headlineText='ReactJS Basic Template 2023'
    />
    <Footer />
  </StyledApp>
)

export default App
