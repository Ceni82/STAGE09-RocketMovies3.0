import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.PINK};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  border: none;
  height: 5.6rem;
  padding: 0 1.6rem;
  margin-top: 1.6rem;
  font-weight: 500;
  border-radius: 1rem;

  &:disabled {
    opacity: 0.5;
  }
`
