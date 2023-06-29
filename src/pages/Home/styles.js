import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 11.5rem auto;
  grid-template-areas:
    'header'
    'content';

  > main {
    grid-area: content;
    overflow-y: auto;
    padding: 0 12.3rem;
  }

  > main::-webkit-scrollbar {
    width: 0.8rem;
  }

  > main::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 0.8rem;
  }

  > header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 3.8rem;
    
  }
  .titles{
      display: flex;
      justify-content: space-between;
      align-items:center;
      flex-direction:row;

      margin-bottom: 37px;
    }

  > h1 {
    font-weight: 400;
    font-size: 3.2rem;
    line-height: 4.2rem;
  }
`

export const Content = styled.div`
  grid-area: content;
  padding: 5rem 12.3rem 0;
  overflow-y: auto;
`
export const NewMovie = styled(Link)`
  background-color: ${({ theme }) => theme.COLORS.PINK};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  border: none;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  font-size: 1.6rem;
  
  width: 207px;
  height: 48px;

  padding: 1.35rem 3.2rem;
  border-radius: 0.8rem;

  > svg {
    margin-right: 8px;
  }
`
