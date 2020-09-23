<template>
  <header class="text-700 body-font">
    <div class="container mx-auto flex flex-wrap p-5  flex-row items-center">
      <a class="flex title-font font-medium items-center text-900">
		  <img src="/~/assets/icon_48.png" class="w-10 h-10 p-1 rounded-full" />
        <span class="ml-3 text-xl">Bitly-clone</span>
      </a>
      <div class="ml-auto">
        <button
          @click="isDark = !isDark"
          class="inline-flex items-center border border-1 py-1 px-3 mr-3 focus:outline-none rounded text-base mt-0"
        >
          <Icon :icon="isDark ? 'twemoji:sun' :'carbon:moon' " class="inline-block" />
        </button>
        <button
		@click="toggleLocales"
          class="inline-flex items-center border border-1 py-1 px-3 focus:outline-none rounded text-base mt-0"
        >
          <Icon :icon="i18n.locale.value === 'fr' ? 'cif:us' : 'cif:fr' " class="inline-block" />
        </button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { defineComponent } from "vue";
import { useI18n } from 'vue-i18n';
import { locales } from '/~/messages';
export { isDark } from "/~/utils";

export const i18n = useI18n();

export const toggleLocales = () => {
  i18n.locale.value = locales[(locales.indexOf(i18n.locale.value) + 1) % locales.length]
}
</script>
