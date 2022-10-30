import svgLogo from '@/assets/logo.svg'
import styled from 'styled-components'

const Container = styled.header`
  background: ${({ theme }) => theme['gray-700']};
  height: 12.5rem;
  display: flex;
  justify-content: center;
`

const Logo = styled.img`
  height: 3rem;
  width: 7.875rem;
  margin-top: 4.5rem;
`

export const Header = () => {
  return (
    <Container>
      <Logo src={svgLogo} alt="Logo: foquete apontando pra cima" />
    </Container>
  )
}
