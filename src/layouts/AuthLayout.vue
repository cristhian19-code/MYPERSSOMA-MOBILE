<script setup lang="ts">
import { computed } from "vue";


const versionApp = computed(() => {
  const anio = new Date().getFullYear();

  return `© ${anio} - MYPER - 1.0.0`;
});
</script>

<template>
  <div class="full-height column justify-end items-center bg-primary" style="overflow-y: hidden;flex-wrap: nowrap;">
    <img src="/src/assets/image/auth/myper-blanco.png" class="q-mb-xl" width="150" alt="">
    <img src="/src/assets/image/auth/fondo-mobile.png" width="80%" alt="">
    <q-card class="no-shadow q-px-md q-pt-xl q-pb-lg full-width" style="border-radius: 20px 20px 0 0;">
      <p class="text-center q-mb-lg text-h4 text-weight-bolder text-primary">Bienvenido</p>
      <p class="text-center text-grey-5 text-weight-medium">Inicia sesión para continuar usando la app</p>
      <router-view />
      <div class="text-center q-mt-lg">
        <router-link class="text-center text-primary text-weight-medium" style="text-decoration: none;" to="">¿Olvidaste
          tu contraseña?</router-link>

        <p class="q-mt-lg text-grey-5 text-caption text-weight-bold">{{ versionApp }}</p>
      </div>
    </q-card>

  </div>
</template>

<style lang="sass">
.container-auth
  background-repeat: no-repeat
  background-position: bottom center
  background-color: $primary
</style>
