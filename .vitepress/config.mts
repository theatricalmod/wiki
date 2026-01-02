import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "src",
  
  title: "Theatrical",
  description: "Wiki with documentation for the Theatrical Minecraft mod",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Download', link: '/download' },
      { text: 'Documentation', link: '/fixtures/led_fresnel' }
    ],

    sidebar: [
      { text: 'Downloads', link: '/download' },
      {
        text: 'Fixtures',
        items: [
          { text: 'LED Fresnel', link: '/fixtures/led_fresnel' },
          { text: 'Moving Light', link: '/fixtures/moving_light' },
          { text: 'Moving Wash', link: '/fixtures/moving_wash' },
          { text: 'LED Panel', link: '/fixtures/led_panel' },
          { text: 'Redstone Interface', link: '/fixtures/redstone_interface' }
        ]
      },
      {
        text: 'Tutorials',
        link: '/tutorials',
        items: [
        ]
      },
      {
        text: 'Development',
        items: [
          { text: 'Building an Addon', link: '/dev/addon' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
