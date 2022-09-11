import { useEffect, useState } from 'react'
import {
  FaGithub,
  FaBuilding,
  FaUserFriends,
  FaExternalLinkAlt,
} from 'react-icons/fa'
import { useTheme } from 'styled-components'

import { Link } from '../../../../components/Link'
import { getUser, User } from '../../../../services/api/get-user'
import * as S from './styles'

export function Profile() {
  const [user, setUser] = useState<User>({} as User)
  const { 'gray-400': gray400 } = useTheme()

  useEffect(() => {
    getUser().then(setUser)
  }, [])

  return (
    <S.ProfileContainer>
      <img src={user.avatar_url} alt="" />

      <S.ProfileContent>
        <S.ProfileHeader>
          <h1>{user.name}</h1>

          <Link href={user.html_url} target="_blank" rel="noopener noreferrer">
            GITHUB
            <FaExternalLinkAlt size={12} />
          </Link>
        </S.ProfileHeader>

        <p>{user.bio}</p>

        <S.ProfileFooter>
          <div>
            <FaGithub size={16} color={gray400} />
            <span>{user.name}</span>
          </div>
          {user?.company && (
            <div>
              <FaBuilding size={16} color={gray400} />
              <span>{user?.company}</span>
            </div>
          )}
          <div>
            <FaUserFriends size={16} color={gray400} />
            <span>{user?.followers} seguidores</span>
          </div>
        </S.ProfileFooter>
      </S.ProfileContent>
    </S.ProfileContainer>
  )
}
