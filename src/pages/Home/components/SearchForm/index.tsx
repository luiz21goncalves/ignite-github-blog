import { useIssues } from '../../../../contexts/IsseusContexts'
import * as S from './styles'

export function SearchForm() {
  const { issues } = useIssues()

  return (
    <S.SearchFormContainer>
      <S.SearchFormHeader>
        <p>Publicações</p>
        <span>{issues.length} publicações</span>
      </S.SearchFormHeader>

      <S.SearchFormInput type="text" placeholder="Buscar conteúdo" />
    </S.SearchFormContainer>
  )
}
