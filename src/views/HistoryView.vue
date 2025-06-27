<script setup lang="ts">
import {onMounted, ref} from 'vue';
import type {PulseLog} from '../components/PulseLog.ts';

const logList = ref<PulseLog[]>([]);

const removeLog = (id: string) => {
  logList.value = logList.value.filter(log => log.id !== id);
  const logs = window.localStorage.getItem('logList');
  if (logs) {
    const logArray = JSON.parse(logs) as PulseLog[];
    const updatedLogs = logArray.filter(log => log.id !== id);
    window.localStorage.setItem('logList', JSON.stringify(updatedLogs));
  }
};

onMounted(() => {
  const logs = window.localStorage.getItem('logList');
  if (logs) {
    logList.value = JSON.parse(logs) as PulseLog[];
  } else {
    logList.value = [];
  }
})
</script>

<template>
  <div class="p-5 bg-base-200 rounded-b-3xl">
    <h1 class="text-2xl font-bold">Historique des mesures</h1>
  </div>
  <div class="p-5 mt-5">
    <ul>
      <li v-for="log in logList" :key="log.id" class="mb-2 flex" :class="{
        'border-b-2 border-base-300 pb-2': logList.length > 1 && log.id !== logList[logList.length - 1].id,
      }">
        <p><span class="font-bold">SYS:</span> {{ log.sys }} mmHg</p>
        <p><span class="font-bold">DIA:</span> {{ log.dia }} mmHg</p>
        <p><span class="font-bold">PUL:</span> {{ log.pul }} /min</p>
        <button class="btn btn-error btn-sm ml-2" @click="removeLog(log.id)">Supprimer</button>
      </li>
    </ul>
  </div>
  <div class="h-50"></div>
</template>
