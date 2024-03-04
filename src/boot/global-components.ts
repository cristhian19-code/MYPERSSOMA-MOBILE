import { boot } from 'quasar/wrappers'
import BaseButton from 'src/components/button/BaseButton.vue'
import BaseInput from 'src/components/input/BaseInput.vue'

export default boot(async ({ app }) => {
  app.component('base-input', BaseInput)
  app.component('base-button', BaseButton)
})
