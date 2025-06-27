<script setup lang="ts">
defineProps<
    {
      title: string;
      unit: string;
      placeholder: string;
      modelValue: string;
    }
>()

const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <div class="w-full rounded-lg card-xs p-5 flex justify-between items-center">
    <div>
      <p class="text-4xl">{{ title }}</p>
      <p class="text-sm">{{ unit }}</p>
    </div>
    <input type="number" class="input input-primary w-24 input-xl" :placeholder="placeholder" :value="modelValue"
           @input="emit('update:modelValue', ($event.target as any).value)"/>
  </div>
</template>