<script setup lang="ts">
defineProps<{
  title: string
  description: string
}>()
</script>

<template>
  <article class="info-card">
    <span class="info-mark" aria-hidden="true">✳</span>
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
  </article>
</template>

<style scoped>
.info-card {
  padding: 26px;
  border: 1px solid var(--color-line);
  border-radius: 16px;
  background: var(--color-paper);
}

.info-mark {
  display: grid;
  width: 38px;
  height: 38px;
  place-items: center;
  border-radius: 12px;
  background: #eff2e9;
  color: var(--color-green);
  font-size: 20px;
}

.info-card h3 {
  margin: 21px 0 8px;
  color: var(--color-ink);
  font-family: var(--font-display);
  font-size: 19px;
  font-weight: 600;
  letter-spacing: -0.4px;
}

.info-card p {
  margin: 0;
  color: var(--color-muted);
  font-size: 13px;
  line-height: 1.75;
}
</style>
