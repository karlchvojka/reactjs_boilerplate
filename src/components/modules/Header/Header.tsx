// Framework Imports
import React from 'react'

// CSS Imports
import StyledHeader from './StyledHeader'

// Types Declarations
interface HeaderProps {
  id: string
}

/**
 * This the Header component.
 * @param id - ID of the component. Used for CSS Purposes in App
 */
<<<<<<< HEAD:src/components/modules/Header/Header.js
const Header = () => (
  <StyledHeader>
    <p>ReactJS Basic Template</p>
  </StyledHeader>
)
=======
const Header = ( { id }: HeaderProps ) => {
  return (
    <StyledHeader>
      <p>ReactJS Basic Template</p>
    </StyledHeader>
  )
}
>>>>>>> 77106cd (ReactJS TS: Implement and configure Typescript.):src/components/modules/Header/Header.tsx

export default Header
