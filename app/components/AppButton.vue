<script setup lang="ts">
withDefaults(defineProps<{
  label: string
  color?: string
  href?: string
  type?: 'button' | 'submit' | 'reset'
}>(), {
  color: '#315b49',
  type: 'button',
})
</script>

<template>
  <NuxtLink
    v-if="href"
    class="app-button"
    :to="href"
    :style="{ '--button-color': color }"
  >
    {{ label }} <span aria-hidden="true">↗</span>
  </NuxtLink>
  <button
    v-else
    class="app-button"
    :type="type"
    :style="{ '--button-color': color }"
  >
    {{ label }} <span aria-hidden="true">↗</span>
  </button>
</template>

<style scoped>
.app-button {
  display: inline-flex;
  min-height: 48px;
  align-items: center;
  justify-content: center;
  gap: 14px;
  padding: 0 21px;
  border: 0;
  border-radius: 8px;
  background: var(--button-color);
  color: white;
  cursor: pointer;
  font: inherit;
  font-size: 12px;
  font-weight: 700;
  text-decoration: none;
  transition: filter 160ms ease, transform 160ms ease;
}

.app-button:hover {
  transform: translateY(-1px);
  filter: brightness(1.08);
}

.app-button:focus-visible {
  outline: 3px solid #d5ab73;
  outline-offset: 3px;
}
</style>
