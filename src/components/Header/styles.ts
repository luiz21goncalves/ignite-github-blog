import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  height: 296px;
  position: relative;
  z-index: -1;
`

export const HeaderLogo = styled.img`
  height: 98px;
  margin-top: 4rem;
`

export const HeaderBackground = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  object-fit: fill;
`
