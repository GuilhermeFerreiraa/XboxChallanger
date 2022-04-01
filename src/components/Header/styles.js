import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
`;

export const NavigationBar = styled.nav`
  display: flex;
  padding: 3.5rem 1rem 1rem 1rem;
  margin: 0 auto;
  width: 95%;
  align-items: center;
  justify-content: space-around;

  img{
    cursor: pointer;
  }
`

export const TextButton = styled.div`
  display: flex; 
  justify-content: space-around;
  width: 600px;

  span{
    font-family: 'Inter', sans-serif;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 17px;
    color: #fff;
    
    :hover{
      color: #eee;
      cursor: pointer;
      transition: .3s;
    }
  }
`;

export const Button = styled.button`
  border: none;
  background: #9BF00B;
  padding: 1.3rem;
  font-family: 'Inter', sans-serif;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 15px;
  color: #000;
  cursor: pointer;
  transition: .2s ease-in-out;

  :hover{
    color: #1d1d1d;
    transition: .2s ease-in-out;
    box-shadow: 0px 0px 10px #a9ff16;
  }

  `
