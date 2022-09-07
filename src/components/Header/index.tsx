import githubBlogLogo from '../../assets/github-blog-log.png'
import headerBackground from '../../assets/header-background.png'
import * as S from './styles'

export function Header() {
  return (
    <S.HeaderContainer>
      <S.HeaderLogo src={githubBlogLogo} alt="" />

      <S.HeaderBackground src={headerBackground} alt="" />
    </S.HeaderContainer>
  )
}
