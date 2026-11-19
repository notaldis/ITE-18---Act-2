<template>
  <footer class="site-footer">
    <div class="footer-inner">
      <NuxtLink class="footer-brand" to="/">campus<span>connect</span></NuxtLink>
      <p>Made for the people who make campus feel like home.</p>
      <span class="footer-year">© 2026 Campus Connect</span>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  border-top: 1px solid var(--color-line);
  background: var(--color-paper);
}

.footer-inner {
  display: flex;
  width: min(1120px, calc(100% - 48px));
  min-height: 92px;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  margin: 0 auto;
}

.footer-brand {
  color: var(--color-ink);
  font-size: 14px;
  font-weight: 750;
  letter-spacing: -0.5px;
  text-decoration: none;
}

.footer-brand span {
  color: var(--color-muted);
  font-weight: 500;
}

.footer-inner p,
.footer-year {
  margin: 0;
  color: var(--color-muted);
  font-size: 12px;
}

@media (max-width: 680px) {
  .footer-inner {
    width: calc(100% - 32px);
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 8px 20px;
    padding: 22px 0;
  }

  .footer-inner p {
    flex-basis: 100%;
    order: 1;
  }

  .footer-year {
    margin-left: auto;
  }
}
</style>
