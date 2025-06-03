<script setup>

useHead({
  title: 'Сенсация Новости',
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/img/logo.jpg' },
  ]
})

</script>
<template>
  <div class="min-h-screen bg-gray-50">
    <LayoutsTopbar/>
    <LayoutsBreakingNewTicker/>
    <LayoutsHeader/>
    <slot />
  </div>
</template>
