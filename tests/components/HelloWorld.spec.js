import vuetify from '../../src/plugins/vuetify'
import { VApp } from 'vuetify/lib/components'

import { mount } from 'cypress-vue-unit-test'
import HelloWorld from '../../src/components/HelloWorld.vue'

describe('Simple HelloWorld', () => {
  beforeEach(() => {
    mount({
      vuetify,
      render(h) { return h(VApp, [h(HelloWorld)]) }
  },
  { extensions: { plugins: [ ] } })
  })

  it('CLI documentation link is correct', () => {
      cy.get('[data-testid=docs-link]')
          .and('have.attr', 'href')
          .and('include', 'vuetifyjs.com')
  })

  it.skip('Has an FAQ link', () => {})
})
