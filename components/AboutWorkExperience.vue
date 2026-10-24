<template>
  <div class="work-experience">
    <article v-for="experience in experiences" :key="experience.company" class="work-experience-item">
      <img
        :src="`/images/aboutme/${experience.logo}.png`"
        alt=""
        width="48"
        height="48"
        loading="lazy"
        class="work-experience-logo"
      >
      <AboutCvElement
        :category="`${experience.company}, ${experience.period}`"
        class="work-experience-content mt-0"
      >
        <template #slotcvelement>
          <p>{{ experience.role }}</p>
        </template>
      </AboutCvElement>
      <p class="subtitlecv work-experience-description pr-md-5">{{ experience.description }}</p>
    </article>
  </div>
</template>

<script>
export default {
  name: 'AboutWorkExperience',
  data() {
    return {
      experiences: [
        {
          company: 'AC Milan',
          period: '2024-ongoing',
          logo: 'milan',
          role: 'Visual and Brand Design Consultant',
          description: 'Design and development of graphic assets adapted from ACM’s visual identity across various sports-related areas: from creating visual identities for internal projects and defining the seasonal visual language, to supporting events, and up to sport production and live direction during matches at San Siro Stadium. Main focus on producing presentations for partnerships and graphics tailored to sponsor events, in close collaboration with marketing, sales, and strategy teams. Work performed under strict confidentiality.',
        },
        {
          company: 'IT Carlo Acutis',
          period: '2026',
          logo: 'itca',
          role: 'Graphic Design Lab Teacher',
          description: 'Teaching the fundamentals of graphic design and visual communication to high school students. Responsible for planning lessons, developing practical projects, guiding students through the creative process, and providing feedback and design revisions.',
        },
        {
          company: 'Poli.Design Master',
          period: '2025',
          logo: 'polimi',
          role: 'Teaching Assistant and Academic Tutor',
          description: 'University Assistant and Academic Tutor for the Advanced Course “Video Identity: Dynamic Communication Systems for the Entertainment Industry” at POLI.design, in collaboration with Mediaset. Role awarded following thesis research on Audiovisual Identity.',
        },
        {
          company: 'Mediaset S.p.A.',
          period: '2020-ongoing',
          logo: 'mediaset',
          role: 'Content Metadata Editor and Tagger',
          description: 'Content indexing, cataloguing, and tagging for Mediaset Infinity, with a focus on semantic organization, classification, and metadata optimization of digital media assets to improve content discoverability, accessibility, and recommendation across the platform.',
        },
        {
          company: 'Meeting di Rimini',
          period: '2020',
          logo: 'meeting',
          role: 'UX/UI Design Consultant',
          description: 'Visual branding design and development of user experience and digital interfaces to bring the exhibition online due to the Covid-19 emergency. Created graphics for exhibition panels, designed vinyl lettering, and produced the presentation for the event’s official speech.',
        },
      ],
    }
  },
}
</script>

<style scoped>
.work-experience {
  margin-top: 16px;
}

.work-experience-item {
  display: grid;
  grid-template-columns: 48px minmax(0, 1fr);
  column-gap: 18px;
  row-gap: 12px;
  align-items: start;
}

.work-experience-item + .work-experience-item {
  margin-top: 16px;
}

.work-experience-logo {
  align-self: center;
  display: block;
  width: 48px;
  height: 48px;
  object-fit: contain;
}

.work-experience-description {
  font-size: 16px;
  grid-column: 1 / -1;
}

.work-experience-content ::v-deep h6 {
  margin-bottom: 0 !important;
}

.work-experience-content {
  align-self: center;
  transform: translateY(2px);
  min-width: 0;
  margin-top: 0 !important;
}

@media (max-width: 575.98px) {
  .work-experience-item {
    grid-template-columns: 40px minmax(0, 1fr);
    gap: 12px;
  }

  .work-experience-logo {
    width: 40px;
    height: 40px;
  }
}
</style>
