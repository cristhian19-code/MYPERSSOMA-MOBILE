<script setup lang="ts">
import { QBtnProps } from 'quasar';

interface Button extends QBtnProps {
  classButton?: string;
}

const props = withDefaults(defineProps<Button>(), {
  color: 'primary',
  classButton: '',
})
</script>

<template>
  <q-btn class="q-px-md no-shadow text-weight-bolder" :type="props.type" :outline="props.outline"
    :text-color="props.textColor" :loading="props.loading" :class="props.classButton" :color="props.color"
    :icon="props.icon" :label="props.label" no-caps />
</template>
