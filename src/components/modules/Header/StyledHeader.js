// Library Imports
import styled from 'styled-components'
import media from 'globalConfig/mobile'

// Variable Imports
import defaultColors from 'globalConfig/colors'

const StyledHeader = styled.header`
/* MOBILE FIRST DEFAULT STYLES */

  border-bottom: 1px solid ${defaultColors.cyberBlue};
  padding: 10px 14px;
  max-width: 100%;

  p {
    text-align: center; 
  }


/* Min width of 375 */
  ${media.iphoneSe`
    
  `}

/* Min width of 414 */
  ${media.iphoneXr`
    
  `}

/* Min width of 576 */
  ${media.landscapePhones`
    
  `}

/* Min width of 768 */
  ${media.tablet`
    
  `}

/* Min width of 1024 */
  ${media.desktop`
    
  `}

/* Min width of 1200 */
  ${media.widescreen`
    
  `}

/* Min width of 1980 */
  ${media.udh`
    
  `}
`

export default StyledHeader
