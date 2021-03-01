import { useTransform } from 'framer-motion'
import useWrapperScroll from 'hooks/useWrapperScroll'
import React from 'react'

import { Container, Header, Logo, Burger, Footer } from './styles'

const UniqueOverlay: React.FC = () => {
  const { scrollYProgress } = useWrapperScroll()

  const opacity = useTransform(scrollYProgress, [0.9, 1], [0, 1])

  return (
    <Container>
      <Header>
        <Logo />
        <Burger />
      </Header>

      <Footer style={{ opacity }}>
        <ul>
          <li>Feito com ❤️</li>
          <li>
            <a href="https://github.com/mnzsss" target="_blank">
              por Gabriel Menezes
            </a>
          </li>
        </ul>
      </Footer>
    </Container>
  )
}

export default UniqueOverlay
