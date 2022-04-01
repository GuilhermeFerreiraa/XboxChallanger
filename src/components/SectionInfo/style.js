import styled from 'styled-components'

export const Container = styled.section`
  height: 100vh;
  width: 90%;
  margin: 0 auto;
  display: grid;
  column-gap: 30px;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-content: space-between;
`

export const InfoContent = styled.aside`
  display: grid;
  grid-template-rows: 1fr 1fr;
  align-items: center;
  justify-content: center;
  text-align: left;
`

export const TitleInfo = styled.div`
  display: grid;
  font-size: 4.2rem;
  text-align: left;
  color: #9BF00B;
  text-transform: capitalize;
  font-family: inter, sans-serif;    
  font-weight: 600;

  .text_highlight{
    color: #fff;
  }

  `

export const BoxInfo = styled.p`
  font-weight: 500;
  font-family: inter,sans-serif;
  font-size: 23px;
  width: 85%;
  color: #c1c1c1;
  text-align: left;
`

export const Img = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`