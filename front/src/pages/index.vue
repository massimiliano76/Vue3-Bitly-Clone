<template>
  <section class="text-700 body-font">
    <div class="container mx-auto flex flex-col px-5 py-16 justify-center items-center">
      <div class="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-900">{{ t('main.title') }}</h1>
        <p class="mb-8 leading-relaxed">{{ t('main.sub-title')}}</p>
        <div class="flex w-full justify-center">
          <input
            v-model="state.URL"
            @keydown.enter="shortenUrl"
            class="border text-fusio-dark bg-100 rounded mr-4 border-400 focus:outline-none focus:border-fusio-dark text-base px-4 lg:w-full md:w-full"
            :placeholder="t('main.type-your-link')"
            type="text"
            id="main_input"
          />
          <button
            @click="shortenUrl"
            class="inline-flex text-white bg-fusio-light border-0 py-2 px-6 focus:outline-none hover:bg-fusio-dark rounded text-lg"
          >{{t('main.shorten')}}</button>
        </div>
        <List />
      </div>
    </div>
  </section>
</template>

<script setup lang='ts'>
import { reactive } from "vue";
import { useI18n } from "vue-i18n";
import { dataStored } from "/~/store/local.ts";
import { useToast } from "vue-toastification";
const Toast = useToast();

const { t } = useI18n();
export { t };

export const state = reactive({
  URL: "",
});

export const validateURL = (url: String) => {
	const regex = new RegExp(/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi);
	return url.match(regex);
};

export const shortenUrl = async () => {
  try {
	if(!validateURL(state.URL)) throw new Error('Invalid link');
    let request = await fetch("http://localhost:3000/", {
      method: "POST",
      mode: "cors",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ link: state.URL }),
    });
    let response = await request.json();
    if (response.error) throw new Error(response.message);
    dataStored.value = { shortened: response.link, link: state.URL };
  } catch (error) {
    Toast.error(error.message);
  } finally {
    state.URL = "";
  }
};
</script>
