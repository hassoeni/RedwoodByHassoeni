// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof Artikel> = (args) => {
//   return <Artikel {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import Artikel from './Artikel'

export const generated = () => {
  return <Artikel />
}

export default {
  title: 'Components/Artikel',
  component: Artikel,
} as ComponentMeta<typeof Artikel>
