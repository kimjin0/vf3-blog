import { ref, computed } from 'vue'
export const watvUser = ref<object|null>(null)
export const isSigned = computed(() => watvUser.value != null)
