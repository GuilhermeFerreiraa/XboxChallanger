import * as C from './style'
import xboxIcon from '../../assets/xbox.png'

export default function SectionMain() {
  return (
    <C.Container>
      <C.Title>Xbox series X</C.Title>
      <C.SubTitle>Pedido Antecipado</C.SubTitle>
      <img src={xboxIcon} alt="img-xbox" />
    </C.Container>
  )
}