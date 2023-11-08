import { useTranslation } from '../../../i18n'
import { Herobase } from './Herobase'

export const Hero = async ({ lng }) => {
  const { t } = await useTranslation(lng, 'default')
  return <Herobase t={t} lng={lng} />
}