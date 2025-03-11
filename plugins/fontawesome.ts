import { defineNuxtPlugin } from '#app'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// 1. Importuj konkretne ikony, które chcesz używać:
import { faSearch } from '@fortawesome/free-solid-svg-icons'

// Jeżeli potrzeba innych ikon, np.
// import { faUser } from '@fortawesome/free-solid-svg-icons'
// import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

export default defineNuxtPlugin((nuxtApp) => {
  // 2. Dodaj wybrane ikony do biblioteki
  library.add(faSearch /*, faUser, faCartShopping, ...*/)

  // 3. Zarejestruj globalnie komponent `font-awesome-icon`
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon)
})
