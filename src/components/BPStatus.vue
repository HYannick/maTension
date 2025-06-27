<script setup lang="ts">
import {bpStatusConfig} from '../pressure-sheet.ts';
import {computed} from 'vue'

const props = defineProps<{
  systolic: string
  diastolic: string
  pulse: string
}>()


const status = computed(() => {
  if (!props.systolic || !props.diastolic || !props.pulse) return null
  return bpStatusConfig.evaluateReading(
      parseInt(props.systolic),
      parseInt(props.diastolic),
      parseInt(props.pulse)
  )
})
</script>

<template>
  <div v-if="status" :style="{ color: status.color }" class="mt-5">
    {{ status.icon }} {{ status.message }}
  </div>
</template>