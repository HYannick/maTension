<script setup lang="ts">
import { Activity, History } from 'lucide-vue-next';
</script>

<template>
  <RouterView></RouterView>
  <div class="dock">
    <RouterLink to="/" :class="{
      'dock-active' : $route.path === '/',
    }">
      <Activity class="size-[1.2em]" />
      <span class="dock-label">Mesurer</span>
    </RouterLink>

    <RouterLink to="/history"
                :class="{
      'dock-active' : $route.path === '/history',
    }"
    >
      <History class="size-[1.2em]" />
      <span class="dock-label">Historique</span>
    </RouterLink>
  </div>
</template>