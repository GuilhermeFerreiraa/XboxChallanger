import styled from 'styled-components'

export const Container = styled.main`
  display: grid;
  row-gap: 30px;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  margin-top: 10rem;
`;

export const Img = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;

  .img_banner{
    position: relative;
    z-index: 2;
  }

  .img_light{
    position: absolute;
    z-index: 1;
    left: 150px;
    top: 340px;
    width: 80%;
    margin: 0 auto;
  }
`

export const Title = styled.h1`
  font-family: inter;
  margin: 0 auto;
  text-align: center;
  font-size: 4rem;
  color: #ffffff;
  font-weight: bold;
  text-transform: capitalize;
`;

export const SubTitle = styled.h3`
  font-family: inter;
  margin: 0 auto;
  text-align: center;
  font-size: 1.5rem;
  color: #9BF00B;
  font-weight: bold;
  text-transform: uppercase;
`;

export const Background = styled.caption`
background-image: linear-gradient(to top, rgba(100,0,0,1), rgba(0,0,0,0));
  width: 100%;
`