import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  color: ${({ theme }) => theme.COLORS.GRAY_DARK};

  margin-bottom: 0.8rem;
  border-radius: 1rem;

  > input {
    height: 5.5rem;
    width: 100%;

    padding: 1.9rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;
    border: none;

    &placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_DARK};
    }
  }
`
