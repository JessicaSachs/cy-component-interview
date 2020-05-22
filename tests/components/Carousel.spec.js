import Carousel from '../../src/components/Carousel.vue'
import { mount } from 'cypress-vue-unit-test'
import vuetify from '../../src/plugins/vuetify'
import Vuetify from 'vuetify/lib';
import { VApp } from 'vuetify/lib/components'

describe('Carousel', () => {
  it('displays 5 images', () => {
    mount({
      vuetify,
      render: h => h(VApp, [h(Carousel)])
    },
      { extensions: { plugins: [Vuetify] } })
  })

  describe('cycles', () => {
    beforeEach(() => {
      mount({
        vuetify,
        render: h => h(VApp,
          [h(Carousel, {
            props: { initialCycle: true, interval: 200 }
          })]
        )
      },
        { extensions: { plugins: [Vuetify] } })
    })
  })
})
