<template>
  <div class="container container--list mx-auto py-10 flex justify-center">
    <div class="w-full h-fit flex flex-col">
      <div :class="getClass" id="journal-scroll">
        <table class="w-full">
          <tbody>
            <tr
              v-for="(item, index) in state.items"
              :key="index"
              class="relative transform scale-100 text-xs py-1 border-b-2 border-blue-100 cursor-default bg-gray-200 bg-opacity-25"
            >
              <td class="pl-1 pr-3">
                <div class="text-left">{{item.link}}</div>
              </td>
              <td class="py-5">
                <div class="leading-5 font-medium">
                  <a
                    :id="`shortened_link-${index}`"
                    class="text-blue-500 hover:underline"
                    :href="item.shortened"
                    target="_blank"
                  >{{item.shortened}}</a>
                </div>
              </td>
              <td class="pl-1 pr-3">
                <button
                  @click="copyToClipboard(item.shortened)"
                  class="inline-flex text-white border-0 py-1 px-3 focus:outline-none rounded text-md bg-fusio-light hover:bg-fusio-dark"
                >
                  <Icon icon="carbon:copy" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, toRefs, computed } from "vue";
import { isDark } from "/~/utils";
import { dataStored } from "/~/store/local.ts";
import { useToast } from "vue-toastification";
const Toast = useToast();

export const state = reactive({
  items: dataStored.value
});

export const copyToClipboard = (link: string) => {
  navigator.clipboard.writeText(link);
  Toast.success("Copied to clipboard !");
};

export const getClass = computed(() => {
	const base  = "w-full h-full overflow-auto shadow rounded";
	return isDark.value ? base + " bg-black" : base;
})
</script>

<style scoped>
.container--list {
  height: -moz-fit-content;
  height: -webkit-fit-content;
  height: fit-content;
  max-height: 50vh;
}
#journal-scroll::-webkit-scrollbar {
  width: 4px;
  cursor: pointer;
}
#journal-scroll::-webkit-scrollbar-track {
  background-color: rgba(229, 231, 235);
  cursor: pointer;
}
#journal-scroll::-webkit-scrollbar-thumb {
  cursor: pointer;
  background-color: #a0aec0;
}
</style>