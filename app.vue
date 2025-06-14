<template>
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>
</template>
<script setup>
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} | Сенсация Новости` : 'Сенсация Новости - Yangiliklar, Tahlil va Video Reportajlar';
  },
  htmlAttrs: {
    lang: 'uz',
  },
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'theme-color', content: '#ffffff' },
    { name: 'description', content: 'Eng so‘nggi yangiliklar, tahlillar, video reportajlar va dolzarb voqealarni Сенсация Новости saytida o‘qing. Ishonchli manba, dolzarb xabarlar va jonli efirlar!' },
    { name: 'keywords', content: 'yangiliklar, O‘zbekiston yangiliklari, Jahon yangiliklari, video yangiliklar, tahlil, dolzarb, Сенсация Новости' },
    { name: 'author', content: 'Сенсация Новости' },

    // OpenGraph for Facebook, Telegram, LinkedIn
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: 'Сенсация Новости' },
    { property: 'og:title', content: 'Сенсация Новости - So‘nggi yangiliklar va video reportajlar' },
    { property: 'og:description', content: 'Eng dolzarb voqealar, so‘nggi yangiliklar va tahlillarni Сенсация Новости orqali kuzating.' },
    { property: 'og:url', content: '/img/logo.jpg' },
    { property: 'og:image', content: '/img/logo.jpg' },

    // Twitter Card
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:site', content: '@sensatsiyanews' },
    { name: 'twitter:title', content: 'Сенсация Новости - Yangiliklar' },
    { name: 'twitter:description', content: 'Dolzarb yangiliklar va video reportajlar' },
    { name: 'twitter:image', content: 'https://sensatsiya-novosti.uz/og-image.jpg' },
  ],
  link: [
    { rel: 'icon', type: 'image/png', href: '/img/logo.jpg' },
    { rel: 'canonical', href: 'https://sensatsiya-novosti.uz' }
  ]
})
</script>
