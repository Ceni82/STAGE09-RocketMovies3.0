import styled from 'styled-components'

export const Container = styled.button`
  background: none;
  color: ${({ theme }) => theme.COLORS.PINK};

  border: none;
  font-size: 1.6rem;

  display: flex;
  align-items: center;

  > svg {
    margin-right: 0.8rem;
    padding: 0.2rem 0;
  }
`
