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
    overflow-y: auto;
    padding: 4rem 12.3rem ;

   
 
   
  }

  > main::-webkit-scrollbar {
    width: 0.8rem;
  }

  > main::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 0.8rem;
  }
`

export const Content = styled.div`
  max-width: 100%;
  margin: 0 12.3rem 0;

  display: flex;
  flex-direction: column;


  > button:first-child {
    margin-right: auto;
  }

  > h1 {
    font-weight: 500;
    font-size: 3.6rem;
    margin-bottom: 4rem;
    padding-top: 2.4rem;
  }

  > p {
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 2.1rem;
    text-align: justify;
  }

  .inputs {
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
    gap: 4rem;
  }

  .tags {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    align-content: flex-start;
    gap: 2.4rem;
    padding: 1.6rem;

    max-width: 100%;
    height: 8.8rem;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    border-radius: 0.8rem;
  }

  > div {
    display: flex;
    gap: 40px;
    button:nth-child(1) {
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
      color: ${({ theme }) => theme.COLORS.PINK};
    }
  }
`
