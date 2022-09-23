import type { ComponentMeta } from '@storybook/react'

import ArtikelPage from './ArtikelPage'

export const generated = () => {
  return <ArtikelPage />
}

export default {
  title: 'Pages/ArtikelPage',
  component: ArtikelPage,
} as ComponentMeta<typeof ArtikelPage>
