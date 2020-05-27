import { mount } from 'cypress-vue-unit-test'
import HelloWorld from './HelloWorld.vue'

describe('HelloWorld', () => {
  it('renders a title', () => {
    mount(HelloWorld)
    cy.get('[data-testid=hello-world-title]').should('exist')
  })
})
