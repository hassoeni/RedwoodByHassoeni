import type { Berichten } from '@prisma/client'

import {
  berichtens,
  berichten,
  createBerichten,
  updateBerichten,
  deleteBerichten,
} from './berichtens'
import type { StandardScenario } from './berichtens.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('berichtens', () => {
  scenario('returns all berichtens', async (scenario: StandardScenario) => {
    const result = await berichtens()

    expect(result.length).toEqual(Object.keys(scenario.berichten).length)
  })

  scenario('returns a single berichten', async (scenario: StandardScenario) => {
    const result = await berichten({ id: scenario.berichten.one.id })

    expect(result).toEqual(scenario.berichten.one)
  })

  scenario('creates a berichten', async () => {
    const result = await createBerichten({
      input: { title: 'String', content: 'String' },
    })

    expect(result.title).toEqual('String')
    expect(result.content).toEqual('String')
  })

  scenario('updates a berichten', async (scenario: StandardScenario) => {
    const original = (await berichten({
      id: scenario.berichten.one.id,
    })) as Berichten
    const result = await updateBerichten({
      id: original.id,
      input: { title: 'String2' },
    })

    expect(result.title).toEqual('String2')
  })

  scenario('deletes a berichten', async (scenario: StandardScenario) => {
    const original = (await deleteBerichten({
      id: scenario.berichten.one.id,
    })) as Berichten
    const result = await berichten({ id: original.id })

    expect(result).toEqual(null)
  })
})
