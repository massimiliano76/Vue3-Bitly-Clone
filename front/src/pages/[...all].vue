<template>
<div class="gradient flex items-center">
  <div class="container mx-auto p-4 flex flex-wrap items-center">
    <div class="w-full md:w-5/12 text-center p-4">
      <img src="https://themichailov.com/img/not-found.svg" alt="Not Found" />
    </div>
    <div class="w-full md:w-7/12 text-center md:text-left p-4">
      <div class="text-6xl font-medium">404</div>
      <div class="text-xl md:text-3xl font-medium mb-8">
        {{t('not-found.missing-page')}}
      </div>
	  <router-link :to="{name : 'index'}" class="border rounded p-4">{{t('not-found.go-home')}}</router-link>
    </div>
  </div>
</div>
</template>

<script setup lang='ts'>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
export { t }
</script>
