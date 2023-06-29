import styled from 'styled-components'

export const Container = styled.span`
  color: ${({ theme }) => theme.COLORS.WHITE};
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  font-size: 1.2rem;
  line-height: 1.4rem;
  padding: 0.5rem 1.6rem;
  margin-right: 0.8rem;

  border-radius: 0.8rem;
`
