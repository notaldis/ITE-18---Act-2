<script setup lang="ts">
defineProps<{
  name: string
  program: string
  year: string
  quote: string
  photo: string
  accent: string
}>()
</script>

<template>
  <article class="student-card">
    <div class="card-topline">
      <div class="student-avatar" :style="{ '--avatar-accent': accent }">
        <img :src="photo" :alt="`Portrait of ${name}`" loading="lazy" decoding="async">
      </div>
      <span class="student-year">{{ year }}</span>
    </div>
    <div class="student-details">
      <h3>{{ name }}</h3>
      <p class="student-program">{{ program }}</p>
      <p class="student-quote">“{{ quote }}”</p>
    </div>
    <div class="card-bottomline">
      <span>STUDENT STORY</span>
      <span class="card-arrow" aria-hidden="true">↗</span>
    </div>
  </article>
</template>

<style scoped>
.student-card {
  display: flex;
  min-height: 276px;
  flex-direction: column;
  padding: 24px;
  border: 1px solid var(--color-line);
  border-radius: 16px;
  background: var(--color-paper);
  transition: border-color 180ms ease, transform 180ms ease, box-shadow 180ms ease;
}

.student-card:hover {
  transform: translateY(-4px);
  border-color: #cbd6c9;
  box-shadow: 0 16px 38px rgb(34 54 42 / 7%);
}

.card-topline,
.card-bottomline {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.student-avatar {
  display: grid;
  width: 52px;
  height: 52px;
  place-items: center;
  overflow: hidden;
  border-radius: 17px;
  background: var(--avatar-accent);
}

.student-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.student-year {
  padding: 7px 10px;
  border-radius: 99px;
  background: #f0f1eb;
  color: var(--color-muted);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.3px;
}

.student-details {
  margin: 22px 0 20px;
}

.student-details h3 {
  margin: 0 0 4px;
  color: var(--color-ink);
  font-family: var(--font-display);
  font-size: 21px;
  font-weight: 600;
  letter-spacing: -0.6px;
}

.student-program {
  margin: 0;
  color: var(--color-green);
  font-size: 12px;
  font-weight: 650;
}

.student-quote {
  margin: 15px 0 0;
  color: var(--color-muted);
  font-size: 13px;
  line-height: 1.65;
}

.card-bottomline {
  margin-top: auto;
  padding-top: 16px;
  border-top: 1px solid var(--color-line);
  color: #8a9188;
  font-size: 9px;
  font-weight: 750;
  letter-spacing: 1.2px;
}

.card-arrow {
  color: var(--color-green);
  font-size: 15px;
}
</style>
