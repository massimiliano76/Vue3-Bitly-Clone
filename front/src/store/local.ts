import { Ref, computed } from 'vue'
import { useStorage } from '@vueuse/core'

export const colorSchema = useStorage('vitesse-schema', 'auto') as Ref<'auto' | 'dark' | 'light'>

const name = import.meta.env.VITE_LOCAL_STORAGE || "_-bitly-clone-_";
interface Item {
	shortened: string;
	link: string;
};
//@ts-ignore
const data = useStorage(name, []) as Ref;

export const dataStored = computed({
	get() {
		return data.value;
	},
	set(item: Item) {
		//@ts-ignore
		dataStored.value.push(item);
	}
})