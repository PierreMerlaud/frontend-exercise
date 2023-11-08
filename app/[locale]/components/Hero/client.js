'use client'

import { Herobase } from './Herobase'
import { useTranslation } from '../../../i18n/client'

export const Hero = ({ lng }) => {
  const { t } = useTranslation(lng, 'default')
  return <Herobase t={t} lng={lng} />
}