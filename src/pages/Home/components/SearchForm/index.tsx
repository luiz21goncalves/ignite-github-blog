import { useForm } from 'react-hook-form'
import * as z from 'zod'

import { useIssues } from '../../../../contexts/IsseusContexts'
import * as S from './styles'

const SearchFormSchema = z.object({
  query: z.string().min(1),
})

type SearchFormInputs = z.infer<typeof SearchFormSchema>

export function SearchForm() {
  const { register, handleSubmit } = useForm<SearchFormInputs>()

  const { issues } = useIssues()

  async function handleSearchIssue(data: SearchFormInputs) {
    const { query } = data

    console.log({ query })
  }

  return (
    <S.SearchFormContainer onSubmit={handleSubmit(handleSearchIssue)}>
      <S.SearchFormHeader>
        <p>Publicações</p>
        <span>{issues.length} publicações</span>
      </S.SearchFormHeader>

      <S.SearchFormInput
        type="text"
        placeholder="Buscar conteúdo"
        {...register('query')}
      />
    </S.SearchFormContainer>
  )
}
