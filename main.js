const items = [
  {
    id: 1,
    name: 'Hoodies',
    price: 14.00,
    image: 'assets/img/featured1.png',
    category: 'hoodies',
    quantity: 10
  },
  {
    id: 2,
    name: 'Shirts',
    price: 24.00,
    image: 'assets/img/featured2.png',
    category: 'shirts',
    quantity: 15
  },
  {
    id: 3,
    name: 'Sweatshirts',
    price: 24.00,
    image: 'assets/img/featured3.png',
    category: 'sweatshirts',
    quantity: 20
  }
]

import { activeProduct } from './componentes/activeProduct.js'
import { renderCart } from './componentes/cart.js'
import { cartMenu } from './componentes/cartMenu.js'
import { darkTheme } from './componentes/darkTheme.js'
import { headerScroll } from './componentes/headerScroll.js'
import { load } from './componentes/load.js'
import { navMenu } from './componentes/navMenu.js'
import { renderProducts } from './componentes/products.js'
import { sectionActive } from './componentes/sectionActive.js'
  




window.addEventListener('load', function () {
  load()
})

document.addEventListener('DOMContentLoaded', function () {
  darkTheme()
  headerScroll()
  navMenu()
  cartMenu()
  sectionActive()
  renderCart()
  renderProducts()
  activeProduct()

  mixitup('.products__content', {
    selectors: {
      target: '.products__card'
    },
    animation: {
      duration: 300
    }
  }).filter('all')
})
export function numberToCurrency (value) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(value)
}
export function darkTheme () {
    const themeButton = document.getElementById('theme-button')
    const darkTheme = 'dark-theme'
    const iconTheme = 'bx-sun'
  
    const selectedTheme = window.localStorage.getItem('selected-theme')
    const selectedIcon = window.localStorage.getItem('selected-icon')
  
    const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
    const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'
  
    if (selectedTheme) {
      document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
      themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
    }
  
    themeButton.addEventListener('click', () => {
      document.body.classList.toggle(darkTheme)
      themeButton.classList.toggle(iconTheme)
      window.localStorage.setItem('selected-theme', getCurrentTheme())
      window.localStorage.setItem('selected-icon', getCurrentIcon())
    })
  }
  
