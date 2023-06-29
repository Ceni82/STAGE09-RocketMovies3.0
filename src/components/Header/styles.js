import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.header`
  grid-area: header;
  height: 11.6rem;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 24.4rem;
  position: relative;
`

export const Brand = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  color: ${({ theme }) => theme.COLORS.PINK};
  font-size: 2.4rem;
  font-weight: 700;

  padding-right:10.4rem;
`
export const Profile = styled(Link)`
  display: flex;
  align-items: center;

  padding-left:10.4rem;
  > img {
    width: 6.4rem;
    height: 6.4rem;
    border-radius: 50%;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;

    margin-right: 0.9rem;
    line-height: 1.8rem;
    height: 4rem;

    a {
      font-size: 1.4rem;
      color: ${({ theme }) => theme.COLORS.GRAY_LIGHT};
    }

    strong {
      font-size: 1.4rem;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`

export const Search = styled.div`
  display: flex;
  align-items: center;
  padding: 0 6.4rem;
  flex-grow: 1;

  width: 60px;

  
`
