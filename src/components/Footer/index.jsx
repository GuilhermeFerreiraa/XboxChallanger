import react from 'react'

import * as C from './style'
import logoXbox from '../../assets/logo-xbox.svg'
import microsoftRights from '../../assets/microsoft.png'

export default function Footer(){
  return(
    <C.Container>
      <img src={logoXbox} alt="logo-xbox" className="logo_xbox" />
      <img src={microsoftRights} className="microsoft_icon" alt="microsoft-rights-icon" />
      <C.Desc>Todos os direitos reservados</C.Desc>
    </C.Container>
  )
}