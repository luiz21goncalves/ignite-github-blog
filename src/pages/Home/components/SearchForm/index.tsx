import * as S from './styles'

export function SearchForm() {
  return (
    <S.SearchFormContainer>
      <S.SearchFormHeader>
        <p>Publicações</p>
        <span>6 publicações</span>
      </S.SearchFormHeader>

      <S.SearchFormInput type="text" placeholder="Buscar conteúdo" />
    </S.SearchFormContainer>
  )
}
