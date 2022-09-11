import format from 'date-fns/format'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import ptBR from 'date-fns/locale/pt-BR'

export function formatRelativeDate(date: Date) {
  return formatDistanceToNow(date, {
    addSuffix: true,
    locale: ptBR,
  })
}

export function longFormatDate(date: Date) {
  return format(date, "dd ' de ' MMMM ' de ' uuuu 'ás' HH':'mm", {
    locale: ptBR,
  })
}
