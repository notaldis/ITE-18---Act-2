<script setup lang="ts">
const students = [
  {
    name: 'Maya Santos',
    program: 'Environmental Science',
    year: '3RD YEAR',
    quote: 'I found my people through the campus garden club.',
    photo: '/images/student-maya-santos.png',
    accent: '#e8d8c6',
  },
  {
    name: 'Ethan Reyes',
    program: 'Computer Science',
    year: '2ND YEAR',
    quote: 'The best ideas start when we build things together.',
    photo: '/images/student-ethan-reyes.png',
    accent: '#d8e2d1',
  },
  {
    name: 'Leah Cruz',
    program: 'Visual Communication',
    year: '4TH YEAR',
    quote: 'Campus has space for every kind of creative mind.',
    photo: '/images/student-leah-cruz.png',
    accent: '#e8d9dd',
  },
]

const scrollToStudents = () => {
  document.getElementById('students')?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <div>
    <section class="hero-section">
      <div class="hero-inner">
        <div class="hero-copy">
          <span class="eyebrow"><span class="eyebrow-dot" /> A student-first community</span>
          <h1>Every student has a story.<br><em>Here's where it begins.</em></h1>
          <p>
            Get to know the people behind our campus community — their passions, their paths,
            and the little moments that make this place feel like home.
          </p>
          <div class="hero-actions">
            <AppButton label="Meet our students" color="#315b49" @click="scrollToStudents" />
            <NuxtLink class="text-link" to="/about">Get to know us <span aria-hidden="true">→</span></NuxtLink>
          </div>
          <div class="community-note">
            <div class="note-avatars" aria-hidden="true">
              <span>J</span><span>M</span><span>A</span><span>+</span>
            </div>
            <span>A community of <strong>curious minds</strong></span>
          </div>
        </div>

        <div class="hero-art" aria-label="Illustration of a welcoming campus">
          <div class="art-sun" />
          <div class="art-path" />
          <div class="art-building">
            <div class="building-roof" />
            <div class="building-body">
              <span /><span /><span />
              <div class="building-door" />
            </div>
          </div>
          <div class="art-tree tree-one"><i /><b /></div>
          <div class="art-tree tree-two"><i /><b /></div>
          <div class="art-label">A place to grow <span>✳</span></div>
        </div>
      </div>
    </section>

    <section id="students" class="students-section">
      <div class="section-heading">
        <div>
          <span class="eyebrow">THE PEOPLE OF CAMPUS</span>
          <h2>Meet a few of us<span>.</span></h2>
        </div>
        <p>Different paths, shared spaces, and a lot to learn from one another.</p>
      </div>
      <div class="student-grid">
        <StudentCard
          v-for="student in students"
          :key="student.name"
          v-bind="student"
        />
      </div>
    </section>

    <section class="community-section">
      <div class="community-copy">
        <span class="eyebrow">MORE THAN A CLASSROOM</span>
        <h2>Find your place<br>in the <em>everyday.</em></h2>
      </div>
      <InfoCard
        title="Room to explore"
        description="Join a club, start a project, or discover something new alongside people who are happy to help."
      />
      <InfoCard
        title="People who show up"
        description="From study partners to lifelong friends, meaningful connections make every step feel a little lighter."
      />
    </section>
  </div>
</template>

<style scoped>
.hero-section {
  overflow: hidden;
  background: var(--color-paper);
}

.hero-inner {
  display: grid;
  width: min(1120px, calc(100% - 48px));
  min-height: 548px;
  grid-template-columns: 1.05fr 0.95fr;
  align-items: center;
  gap: 42px;
  margin: 0 auto;
  padding: 60px 0 66px;
}

.hero-copy {
  position: relative;
  z-index: 1;
}

.eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--color-green);
  font-size: 10px;
  font-weight: 750;
  letter-spacing: 1.5px;
  text-transform: uppercase;
}

.eyebrow-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #d79461;
}

.hero-copy h1,
.community-copy h2 {
  margin: 21px 0 17px;
  color: var(--color-ink);
  font-family: var(--font-display);
  font-size: clamp(42px, 5vw, 61px);
  font-weight: 500;
  letter-spacing: -2.7px;
  line-height: 1.04;
}

.hero-copy h1 em,
.community-copy h2 em {
  color: var(--color-green);
  font-weight: 500;
}

.hero-copy > p {
  max-width: 470px;
  margin: 0;
  color: var(--color-muted);
  font-size: 14px;
  line-height: 1.85;
}

.hero-actions {
  display: flex;
  align-items: center;
  gap: 23px;
  margin-top: 27px;
}

.text-link {
  color: var(--color-ink);
  font-size: 12px;
  font-weight: 700;
  text-decoration: none;
}

.text-link span {
  margin-left: 5px;
  color: var(--color-green);
}

.community-note {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 44px;
  color: var(--color-muted);
  font-size: 11px;
}

.community-note strong {
  color: var(--color-ink);
  font-weight: 700;
}

.note-avatars {
  display: flex;
  padding-left: 3px;
}

.note-avatars span {
  display: grid;
  width: 25px;
  height: 25px;
  place-items: center;
  margin-left: -3px;
  border: 2px solid var(--color-paper);
  border-radius: 50%;
  background: #e8d8c6;
  color: #475b4a;
  font-size: 9px;
  font-weight: 750;
}

.note-avatars span:nth-child(2) { background: #d8e2d1; }
.note-avatars span:nth-child(3) { background: #e8d9dd; }
.note-avatars span:nth-child(4) { background: #dce5e4; }

.hero-art {
  position: relative;
  min-height: 380px;
  overflow: hidden;
  border-radius: 48% 48% 18px 18px;
  background: #e7ece2;
}

.art-sun {
  position: absolute;
  top: 44px;
  right: 57px;
  width: 71px;
  height: 71px;
  border-radius: 50%;
  background: #e9c99c;
}

.art-path {
  position: absolute;
  right: -25px;
  bottom: -134px;
  left: -20px;
  height: 220px;
  transform: rotate(-8deg);
  border-radius: 50%;
  background: #d6dfd0;
}

.art-building {
  position: absolute;
  top: 113px;
  left: 50%;
  width: 196px;
  transform: translateX(-50%);
}

.building-roof {
  width: 220px;
  height: 59px;
  margin-left: -12px;
  clip-path: polygon(50% 0, 100% 100%, 0 100%);
  background: #789080;
}

.building-body {
  position: relative;
  display: flex;
  height: 145px;
  justify-content: space-evenly;
  padding-top: 25px;
  background: #f4eddf;
  box-shadow: inset 0 -7px #dfd6c6;
}

.building-body > span {
  width: 22px;
  height: 49px;
  border: 5px solid #d5c7ae;
  border-bottom: 0;
  border-radius: 12px 12px 0 0;
  background: #c5d1c5;
}

.building-door {
  position: absolute;
  bottom: 7px;
  left: 50%;
  width: 38px;
  height: 69px;
  transform: translateX(-50%);
  border-radius: 19px 19px 0 0;
  background: #8a9d8d;
}

.art-tree {
  position: absolute;
  bottom: 62px;
  width: 92px;
  height: 157px;
}

.tree-one { left: 29px; }
.tree-two { right: 31px; transform: scale(0.82); transform-origin: bottom; }

.art-tree i {
  position: absolute;
  top: 0;
  left: 10px;
  width: 73px;
  height: 98px;
  border-radius: 48% 52% 43% 46%;
  background: #91a58e;
}

.art-tree b {
  position: absolute;
  bottom: 0;
  left: 43px;
  width: 12px;
  height: 74px;
  background: #9c886c;
}

.art-label {
  position: absolute;
  right: 21px;
  bottom: 20px;
  padding: 9px 13px;
  border: 1px solid rgb(255 255 255 / 70%);
  border-radius: 99px;
  background: rgb(255 255 255 / 76%);
  color: var(--color-ink);
  font-size: 10px;
  font-weight: 700;
}

.art-label span {
  margin-left: 5px;
  color: #c48754;
}

.students-section,
.community-section {
  width: min(1120px, calc(100% - 48px));
  margin: 0 auto;
}

.students-section {
  padding: 83px 0 87px;
}

.section-heading {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 32px;
  margin-bottom: 28px;
}

.section-heading h2 {
  margin: 10px 0 0;
  color: var(--color-ink);
  font-family: var(--font-display);
  font-size: 38px;
  font-weight: 500;
  letter-spacing: -1.5px;
}

.section-heading h2 span {
  color: var(--color-green);
}

.section-heading > p {
  max-width: 300px;
  margin: 0 0 5px;
  color: var(--color-muted);
  font-size: 12px;
  line-height: 1.7;
}

.student-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 17px;
}

.community-section {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 17px;
  padding: 0 0 94px;
}

.community-copy {
  padding: 17px 0;
}

.community-copy h2 {
  margin-top: 17px;
  font-size: 39px;
  letter-spacing: -1.5px;
}

@media (max-width: 850px) {
  .hero-inner {
    min-height: auto;
    grid-template-columns: 1fr 0.8fr;
    gap: 25px;
    padding: 60px 0;
  }

  .hero-art {
    min-height: 320px;
  }

  .student-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .community-section {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 620px) {
  .hero-inner,
  .students-section,
  .community-section {
    width: calc(100% - 32px);
  }

  .hero-inner {
    grid-template-columns: 1fr;
    padding: 48px 0 42px;
  }

  .hero-copy h1 {
    font-size: 45px;
  }

  .hero-art {
    min-height: 300px;
    margin: 4px 10px 0;
  }

  .students-section {
    padding: 60px 0;
  }

  .section-heading {
    align-items: flex-start;
    flex-direction: column;
    gap: 10px;
  }

  .student-grid,
  .community-section {
    grid-template-columns: 1fr;
  }

  .community-section {
    padding-bottom: 65px;
  }
}
</style>
