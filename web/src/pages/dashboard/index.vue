<script setup lang="ts">
definePage({
  meta: {
    title: 'Dashboard',
    icon: 'gauge',
  },
})
aeria().describe
import { ref } from 'vue';

const cpf = ref<string>('');
const submitMessage = await aeria().list.chekin.GET({
  document: cpf.value
});

watch(cpf.value as any, function(value) {console.log(value);
}) 
</script>

<template>
  <h1>Welcome</h1>
  <form class="tw-border tw-p-10">
    <input :on-input="function(value: any) {console.log(value)}" v-model="cpf" type="text" class="tw-p-3 tw-w-80" placeholder="Digite o número do documento">
    <button type="submit" class="tw-m-5 tw-p-3">Procurar</button> 
  </form>
  <pre class="tw-border tw-p-10">{{ submitMessage }}</pre>
</template>
