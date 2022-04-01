import styled from 'styled-components'
import forzaTitle from '../assets/Forza_Horizon_title.png'
import forzaBanner from '../assets/forza_banner.png'


const Container = styled.div`
  display:grid;
  justify-content: center;
  align-items: flex-start;
  width: 100%;

  .title_banner{
    display: flex;
    justify-content: center;
    position: relative;
    z-index: 100;
    bottom: 130px;

    img{
      width: 60%;
    }
  }
`;

export default function Forza() {
  return (
    <Container>
      <div>
        <img src={forzaBanner} alt="banner-forza" />
      </div>
      <div className="title_banner">
        <img src={forzaTitle} alt="title-forza-horizon" />
      </div>
    </Container>
  )
}