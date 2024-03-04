import { setCssVar } from 'quasar'
import { boot } from 'quasar/wrappers'

export default boot(() => {
  setCssVar('primary', '#3366ff')
  setCssVar('negative', '#d9534f')
  setCssVar('secondary', '#f5c018')
})
