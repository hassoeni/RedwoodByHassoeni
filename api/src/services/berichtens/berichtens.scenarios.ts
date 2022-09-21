import type { Prisma, Berichten } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.BerichtenCreateArgs>({
  berichten: {
    one: { data: { title: 'String', content: 'String' } },
    two: { data: { title: 'String', content: 'String' } },
  },
})

export type StandardScenario = ScenarioData<Berichten, 'berichten'>
