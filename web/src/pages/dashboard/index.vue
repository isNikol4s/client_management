<script setup lang="ts">
import { ref } from 'vue';

definePage({
  meta: {
    title: 'Dashboard',
    icon: 'gauge',
  },
});

type Chekin = {
  _id: string;
  animal: {
    _id: string;
    name: string;
    age: number;
  }[];
  weight: number;
  temperature: number;
  type: string;
  reason: string;
  created_at: string;
  updated_at: string;
};

const document = ref('');
const chekins = ref<Chekin[]>([]);

const searchChekins = async () => {
  const { error, result } = await aeria().list.chekin.GET({
    document: document.value,
  });
  if (error) {
    console.log('error');
    return;
  }
  chekins.value = result;

};
</script>

<template>
  <h1>Welcome to the Demo</h1>
  <aeria-input v-model="document" type="text" class="tw-w-100 tw-border tw-border-black"
    placeholder="Digite o número do documento"></aeria-input>
  <aeria-button @click="searchChekins" class="tw-border tw-border-black">Procurar</aeria-button>

  <div v-if="chekins.length">
    <div v-for="chekin in chekins" :key="chekin._id" class="tw-border tw-p-4 tw-mt-4">
      <p><strong>ID:</strong> {{ chekin._id }}</p>
      <p><strong>Animal:</strong> {{ chekin.animal[0].name }}</p>
      <p><strong>Idade do Animal:</strong> {{ chekin.animal[0].age }}</p>
      <p><strong>Peso:</strong> {{ chekin.weight }} kg</p>
      <p><strong>Temperatura:</strong> {{ chekin.temperature }} °C</p>
      <p><strong>Tipo:</strong> {{ chekin.type }}</p>
      <p><strong>Motivo:</strong> {{ chekin.reason }}</p>
      <p><strong>Criado em:</strong> {{ new Date(chekin.created_at).toLocaleString() }}</p>
      <p><strong>Atualizado em:</strong> {{ new Date(chekin.updated_at).toLocaleString() }}</p>
    </div>
  </div>
</template>
