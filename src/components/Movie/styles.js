import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_PINK};

  border: 0;
  border-radius: 1rem;

  padding: 3.2rem;
  margin-bottom: 2.4rem;

  > h1 {
    flex: 1;
    text-align: left;

    font-weight: 700;
    font-size: 2.4rem;

    color: ${({ theme }) => theme.COLORS.WHITE};
    margin-bottom: 0.8rem;
  }

  > p {
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 2.1rem;
    display: flex;
    align-items: center;
    text-align: justify;
    color: ${({ theme }) => theme.COLORS.GRAY_DARK};
    margin-top: 1.5rem;
  }

  > footer {
    width: 100%;
    display: flex;
    margin-top: 1.5rem;
  }
`
