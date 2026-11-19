<template>
  <div class="about-page">
    <section class="about-hero">
      <span class="eyebrow">A LITTLE ABOUT US</span>
      <h1>Campus is better<br><em>when we're in it together.</em></h1>
      <p>
        Campus Connect is a window into the people and experiences that shape student life.
        It's a reminder that a community isn't just a place — it's the people who make it one.
      </p>
      <AppButton label="Browse student stories" color="#b76d4b" href="/#students" />
    </section>

    <section class="values-section">
      <div class="values-heading">
        <span class="eyebrow">WHAT WE BELIEVE</span>
        <h2>Small moments make<br>the <em>big picture.</em></h2>
      </div>
      <div class="values-grid">
        <InfoCard
          title="Every voice matters"
          description="There isn't one way to be a student. We make room for the many backgrounds, interests, and ambitions in our community."
        />
        <InfoCard
          title="Connection takes practice"
          description="A friendly hello, a shared table, a new club — belonging grows from simple moments of showing up for one another."
        />
        <InfoCard
          title="There's always more to learn"
          description="The best campus stories keep changing. Stay curious, share what you know, and leave the door open for someone new."
        />
      </div>
    </section>
  </div>
</template>

<style scoped>
.about-page {
  background: var(--color-paper);
}

.about-hero {
  width: min(760px, calc(100% - 48px));
  margin: 0 auto;
  padding: 103px 0 105px;
  text-align: center;
}

.eyebrow {
  color: var(--color-green);
  font-size: 10px;
  font-weight: 750;
  letter-spacing: 1.5px;
}

.about-hero h1 {
  margin: 19px 0 16px;
  color: var(--color-ink);
  font-family: var(--font-display);
  font-size: clamp(44px, 6vw, 66px);
  font-weight: 500;
  letter-spacing: -3px;
  line-height: 1.04;
}

.about-hero h1 em,
.values-heading h2 em {
  color: var(--color-green);
  font-weight: 500;
}

.about-hero p {
  max-width: 590px;
  margin: 0 auto 25px;
  color: var(--color-muted);
  font-size: 14px;
  line-height: 1.85;
}

.values-section {
  padding: 78px max(24px, calc((100% - 1120px) / 2)) 92px;
  background: #f2f2eb;
}

.values-heading {
  margin-bottom: 28px;
}

.values-heading h2 {
  margin: 12px 0 0;
  color: var(--color-ink);
  font-family: var(--font-display);
  font-size: 39px;
  font-weight: 500;
  letter-spacing: -1.6px;
  line-height: 1.08;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 17px;
}

@media (max-width: 720px) {
  .about-hero {
    width: calc(100% - 36px);
    padding: 72px 0;
  }

  .about-hero h1 {
    letter-spacing: -2px;
  }

  .values-section {
    padding: 60px 18px 68px;
  }

  .values-grid {
    grid-template-columns: 1fr;
  }
}
</style>
