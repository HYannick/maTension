<script setup lang="ts">
import BaseCard from '../components/BaseCard.vue';
import {ref} from 'vue';
import type {PulseLog, PulseLogToCreate} from '../components/PulseLog.ts';
import BPStatus from '../components/BPStatus.vue';

const pulseLog = ref<PulseLogToCreate>({
  sys: '',
  dia: '',
  pul: ''
});

const save = () => {
  if(!pulseLog.value.sys || !pulseLog.value.dia || !pulseLog.value.pul) {
    console.error('All fields are required');
    return;
  }

  const logs = window.localStorage.getItem('logList');
  const logArray = (logs ? JSON.parse(logs) : []) as PulseLog[];
  const newLog: PulseLog = {
    id: Math.floor(Math.random() * Math.floor(Math.random() * Date.now())).toString(),
    sys: pulseLog.value.sys,
    dia: pulseLog.value.dia,
    pul: pulseLog.value.pul,
  };
  logArray.push(newLog);
  window.localStorage.setItem('logList', JSON.stringify(logArray));
  pulseLog.value = { sys: '', dia: '', pul: '' };
};
</script>

<template>
  <div class="p-5 bg-base-200 rounded-b-3xl">
    <h1 class="text-4xl mb-5 font-bold">Journal de santé</h1>
    <p>Enregistrez vos mesures de tension artérielle et de pouls.</p>
    <BPStatus :systolic="pulseLog.sys" :diastolic="pulseLog.dia" :pulse="pulseLog.pul"/>
  </div>
  <div class="p-5 space-y-5">
    <BaseCard title="SYS" unit="mmHg" placeholder="120" v-model="pulseLog.sys"/>
    <div class="divider"></div>
    <BaseCard title="DIA" unit="mmHg" placeholder="80" v-model="pulseLog.dia"/>
    <div class="divider"></div>
    <BaseCard title="PUL" unit="/min" placeholder="60" v-model="pulseLog.pul"/>
    <div class="divider"></div>
    <button class="btn btn-xl btn-primary btn-block" :class="{
      'btn-disabled': !pulseLog.sys || !pulseLog.dia || !pulseLog.pul
    }" @click="save">Enregistrer</button>
    <div class="h-12"></div>
  </div>
</template>
