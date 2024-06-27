<script setup lang="ts">
definePage({
  meta: {
    title: 'Dashboard',
    icon: 'gauge',
  },
})
aeria().describe
import { ref } from 'vue';

type Chekins = {
  animal: {
    name: string;
  };
    weigth: number;
    temperature: number;
    reason: string
    created_at: Date;
 }

const document =ref('');
const chekins =ref<any>([])

const searchChekins = async () => {
  const {error,result} = await aeria().list.chekin.GET({
    document: document.value
  });
  if (error) {
    console.log('error');
    return
  }
  chekins.value = result
}
</script>

<template>
   <h1>Welcome</h1>
  <aeria-input v-model="document" type="text" class="tw-w-100 tw-border tw-border-black" placeholder="Digite o número do documento"></aeria-input>
  <aeria-button @click="searchChekins" class="tw-border tw-border-black">Procurar</aeria-button>
  <pre class="tw-p-5 tw-border tw-border-black">{{ chekins }}</pre>
</template>
