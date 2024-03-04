<script setup lang="ts">
import { useQuasar } from 'quasar';
import { api } from 'src/boot/axios';
import { ref } from 'vue';

interface Login {
  usuario: string;
  password: string;
}

const $q = useQuasar();
const loading = ref<boolean>(false);

const entityProperties = ref<Login>({
  usuario: '',
  password: '',
})

const handleLogin = async () => {
  loading.value = true;
  try {
    await api.post(`Usuarios/Login`, entityProperties.value);
  } catch (error: any) {
    $q.notify({
      color: 'negative',
      position: 'bottom',
      message: error.response.data,
    });
  }
  loading.value = false;
}
</script>


<template>
  <q-form @submit="handleLogin" class="q-mt-lg q-px-sm">
    <base-input v-model="entityProperties.usuario" label="Correo" type="email" />
    <base-input v-model="entityProperties.password" label="Contraseña" type="password" />
    <div>
      <base-button :loading="loading" type="submit" class-button="full-width" color="primary" label="Iniciar Sesion" />
    </div>
  </q-form>
</template>
