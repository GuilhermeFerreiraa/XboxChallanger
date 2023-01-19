import styled from 'styled-components'

export const Container = styled.footer`
  display: grid;
  grid-template-columns: 1fr 0.3fr 0.3fr;
  justify-content: center;
  margin: 0 auto;
  width: 90%;
  padding: 1rem 0 2rem 0;
  align-items: center;

  .logo_xbox{
    width: 100px;
  }

  .microsoft_icon{
    width: 120px;
  }
`

export const Desc = styled.span`
  color: #777777;
  font-family: inter,sans-serif;
  font-weight: 400;
  font-size: 16px;
  text-align: left;

`