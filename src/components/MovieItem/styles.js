import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;

  height: 5.6rem;
  width: ${({ isNew }) => (isNew ? '20rem' : '15rem')};

  background-color: ${({ theme, isNew }) =>
    isNew ? 'transparent' : theme.COLORS.BACKGROUND_800};
  color: ${({ theme }) => theme.COLORS.GRAY_DARK};
  border: ${({ theme, isNew }) =>
    isNew ? `0.2rem dashed ${theme.COLORS.WHITE}` : 'none'};

  margin-bottom: 0.8rem;
  border-radius: 1rem;
  padding: 1.6rem;

  > button {
    border: none;
    background: none;
  }

  .button-delete {
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  .button-add {
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  > input {
    height: 5.6rem;
    width: 100%;

    padding: 1.6rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;
    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_DARK};
    }
  }
`
