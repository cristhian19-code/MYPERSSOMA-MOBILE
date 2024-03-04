<script setup lang="ts">
import { QInputProps } from "quasar";
import { useRules } from "src/composables/useRules";
import { useVModel } from "src/composables/useVModel";
import { defineProps, withDefaults, defineEmits } from "vue";

interface Props extends QInputProps {
  modelValue: string | number | null;
  noRequired?: boolean;
  customRules?: Function[];
  step: number;
}

const props = withDefaults(defineProps<Props>(), {
  type: "text",
  customRules: () => [],
});

const emit = defineEmits(["blur"]);

const { initRules, rulesInput } = useRules(
  props.noRequired,
  props.type,
  props.customRules
);

const model = useVModel(props);

const onBlur = () => {
  emit("blur");
};

initRules();
</script>

<template>
  <q-input class="q-mb-md" outlined v-model="model" @blur="onBlur" :disable="props.disable" :step="props.step" dense
    :rules="rulesInput" hide-bottom-space :type="type" :max="props.maxlength" :label="label"></q-input>
</template>

<style lang="scss"></style>
