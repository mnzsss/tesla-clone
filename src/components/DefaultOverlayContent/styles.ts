import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
`

export const Heading = styled.div`
  margin-top: 16.5vh;
  text-align: center;

  > h1 {
    font-weight: 500;
    font-size: 40px;
    line-height: 48px;
    color: ${({ theme }) => theme.colors.primary};
  }

  > h2 {
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    color: ${({ theme }) => theme.colors.gray};
  }
`

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-bottom: 130px;

  > button {
    background-color: ${({ theme }) => theme.colors.black};
    color: #fff;
    opacity: 0.8;

    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.4px;
    text-transform: uppercase;

    padding: 13px 40px;
    border-radius: 20px;
    border: 0;

    &.white {
      background-color: #fff;
      color: ${({ theme }) => theme.colors.black};
      opacity: 0.65;
    }

    & + button {
      margin: 16px 0 0;
    }
  }

  @media (min-width: 600px) {
    flex-direction: row;
    margin-bottom: 90px;

    > button + button {
      margin: 0 0 0 10px;
    }
  }
`
