import styled from 'styled-components'

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
    overflow-y: scroll;
    padding: 6.4rem 0;
  }
`

export const Content = styled.div`
  max-width: 113rem;
  margin: 0 auto;

  display: flex;
  flex-direction: column;

  > button:first-child {
    margin-right: auto;
  }

  > div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1.9rem;

    h1 {
      font-weight: 500;
      font-size: 3.6rem;
      margin-bottom: 2.4rem;
      padding-top: 2.4rem;
    }
  }

  .user-post {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    text-align: justify;
    flex-wrap: nowrap;
    gap: 0.8rem;
    margin-bottom: 4rem;
    font-size: 1.6rem;

    img {
      width: 1.6rem;
      height: 1.6rem;
      border-radius: 50%;
    }

    svg {
      color: ${({ theme }) => theme.COLORS.PINK};
      font-size: 1.6rem;
    }
  }

  .tags {
    width: 100%;
    padding: 0 1.6rem;
    margin-bottom: 4rem;

    span {
      margin-right: 2.4rem;
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      font-size: 1.2rem;
      line-height: 1.4rem;
    }
  }

  > p {
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 2.1rem;
    display: flex;
    align-items: center;
    text-align: justify;
  }
`
