import styled from 'styled-components'
import farcryTitle from '../assets/farcry-title.png'
import farcryBanner from '../assets/farcry_img.png'


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

export default function Farcry() {
  return (
    <Container>
      <div>
        <img src={farcryBanner} alt="banner-farcry" />
      </div>
      <div className="title_banner">
        <img src={farcryTitle} alt="title-farcry" />
      </div>
    </Container>
  )
}