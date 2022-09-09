import { FaGithub, FaBuilding, FaUserFriends } from 'react-icons/fa'
import { useTheme } from 'styled-components'

import { Link } from '../../../../components/Link'
import * as S from './styles'

export function Profile() {
  const { 'gray-400': gray400 } = useTheme()

  return (
    <S.ProfileContainer>
      <img src="https://github.com/luiz21goncalves.png" alt="" />

      <div>
        <S.ProfileHeader>
          <h1>Luiz Gonçalves</h1>
          <Link>GITHUB</Link>
        </S.ProfileHeader>

        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>

        <S.ProfileFooter>
          <div>
            <FaGithub size={16} color={gray400} />
            <span>luiz21goncalves</span>
          </div>
          <div>
            <FaBuilding size={16} color={gray400} />
            <span>Ferreri</span>
          </div>
          <div>
            <FaUserFriends size={16} color={gray400} />
            <span>1 seguidor</span>
          </div>
        </S.ProfileFooter>
      </div>
    </S.ProfileContainer>
  )
}
