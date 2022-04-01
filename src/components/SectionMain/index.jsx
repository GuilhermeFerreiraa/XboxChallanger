import * as C from './style'
import xboxIcon from '../../assets/xbox.png'
import luzverde from '../../assets/luz-verde.png'

export default function SectionMain() {
  return (
    <C.Container>
      <C.Title>Xbox series X</C.Title>
      <C.SubTitle>Pedido Antecipado</C.SubTitle>
      <C.Img>
        <img src={xboxIcon} className="img_banner" alt="img-xbox" />
        <img src={luzverde} className="img_light" alt="img-luz" />
      </C.Img>
    </C.Container>
  )
}