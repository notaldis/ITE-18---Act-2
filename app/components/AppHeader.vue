<template>
  <header class="site-header">
    <div class="header-inner">
      <NuxtLink class="brand" to="/" aria-label="Campus Connect home">
        <span class="brand-mark" aria-hidden="true">C</span>
        <span>campus<span class="brand-light">connect</span></span>
      </NuxtLink>

      <nav class="main-nav" aria-label="Main navigation">
        <NuxtLink to="/" exact-active-class="nav-link-active">Students</NuxtLink>
        <NuxtLink to="/about" active-class="nav-link-active">About</NuxtLink>
      </nav>

      <NuxtLink class="header-cta" to="/about">
        Our community <span aria-hidden="true">↗</span>
      </NuxtLink>
    </div>
  </header>
</template>

<style scoped>
.site-header {
  position: relative;
  z-index: 1;
  border-bottom: 1px solid var(--color-line);
  background: rgb(247 246 241 / 92%);
}

.header-inner {
  display: flex;
  width: min(1120px, calc(100% - 48px));
  height: 78px;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: var(--color-ink);
  font-size: 17px;
  font-weight: 750;
  letter-spacing: -0.7px;
  text-decoration: none;
}

.brand-mark {
  display: grid;
  width: 34px;
  height: 34px;
  place-items: center;
  border-radius: 11px;
  background: var(--color-green);
  color: white;
  font-family: var(--font-display);
  font-size: 19px;
}

.brand-light {
  color: var(--color-muted);
  font-weight: 500;
}

.main-nav {
  display: flex;
  align-items: center;
  gap: 34px;
}

.main-nav a,
.header-cta {
  color: var(--color-muted);
  font-size: 13px;
  font-weight: 600;
  text-decoration: none;
  transition: color 160ms ease;
}

.main-nav a:hover,
.main-nav .nav-link-active,
.header-cta:hover {
  color: var(--color-green);
}

.header-cta {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--color-ink);
}

@media (max-width: 600px) {
  .header-inner {
    width: calc(100% - 32px);
  }

  .main-nav {
    gap: 16px;
  }

  .header-cta {
    display: none;
  }
}
</style>
