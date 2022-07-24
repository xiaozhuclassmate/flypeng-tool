import { defineConfig } from 'vitepress'

// @ts-ignore
import sideBar from '../sideBar'
// @ts-ignore
import navBar from '../navBar'

const defaultSideBar = [
  {
    text: 'Guide',
    items: [{ text: 'Get Started', link: '/guide/' }]
  }
]

const docsSideBar = [...defaultSideBar, ...sideBar]

const defaultNav = [{ text: 'Guide', items: [{ text: 'Get Started', link: '/guide/' }] }]

const docsNav = [...defaultNav, ...navBar]

export default defineConfig({
  title: '@flypeng/tool',
  description: 'Integrate a collection of common tools and methods',
  markdown: {
    theme: {
      light: 'vitesse-light',
      dark: 'vitesse-dark'
    }
  },
  themeConfig: {
    nav: docsNav,
    sidebar: docsSideBar,
    socialLinks: [{ icon: 'github', link: 'https://github.com/flingyp/-flingyp-util' }]
  }
})
