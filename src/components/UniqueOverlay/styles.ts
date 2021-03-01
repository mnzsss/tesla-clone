import styled from 'styled-components'
import { motion } from 'framer-motion'

import { LogoSVG, BurgerSVG } from './IconSVG'

export const Container = styled.div`
  position: sticky;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
`

export const Header = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 20px;
  min-height: 56px;
`

export const Logo = styled(LogoSVG)`
  height: 17px;
  cursor: pointer;
`

export const Burger = styled(BurgerSVG)`
  width: 24px;
  height: 24px;
  cursor: pointer;
  padding-right: 5px;
`

export const Footer = styled(motion.footer)`
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    li {
      color: ${({ theme }) => theme.colors.primary};
      line-height: 0.5;

      & + li {
        margin: 10px 0 0;
      }

      a {
        color: ${({ theme }) => theme.colors.primary};
        text-decoration: none;

        &:hover {
          color: #000;
        }
      }
    }
  }

  margin-bottom: 30px;

  @media (min-width: 600px) {
    margin-bottom: 38px;

    ul {
      flex-direction: row;

      li + li {
        margin: 0 0 0 30px;
      }
    }
  }
`
