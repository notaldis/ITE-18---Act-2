export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: 'Campus Connect | Student Directory',
      meta: [
        {
          name: 'description',
          content: 'Meet the students, stories, and community that make Campus Connect.',
        },
        { name: 'theme-color', content: '#f7f6f1' },
      ],
    },
  },
})
