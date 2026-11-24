<template>
  <div class="work-experience">
    <article v-for="experience in experiences" :key="experience.company" class="work-experience-item">
      <component
        :is="experience.url ? 'a' : 'span'"
        :href="experience.url"
        :target="experience.url ? '_blank' : undefined"
        :rel="experience.url ? 'noopener noreferrer' : undefined"
        :aria-label="$t(experience.url ? experience.company : undefined)"
        class="work-experience-logo-container"
        :class="{ 'work-experience-logo-outlined': experience.logo === 'polimi' }"
      >
        <PortfolioImage
          :src="`/images/aboutme/${experience.logo}.png`"
          alt=""
          width="48"
          height="48"
          loading="lazy"
          class="work-experience-logo"
          sizes="48px"
        />
      </component>
      <AboutCvElement
        :category="`${$t(experience.company)}, ${$t(experience.period)}`"
        class="work-experience-content mt-0"
      >
        <template #slotcvelement>
          <p>{{ $t(experience.role) }}</p>
        </template>
      </AboutCvElement>
      <p class="subtitlecv work-experience-description pr-md-5">{{ $t(experience.description) }}</p>
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
          period: '2024–Present',
          logo: 'milan',
          url: 'https://www.acmilan.com/it',
          role: 'Visual & Brand Design Consultant',
          description: "Visual design and brand communication for AC Milan, with a focus on commercial presentations, partner visibility, branded events and matchday activities. I work with the Commercial, Marketing and Strategy teams to develop materials aligned with the Club's identity across digital channels, physical spaces and live environments. The role also includes event support and live visual operations at San Siro, from coordinating camera operators and incoming television feeds to managing content across the stadium's main screens, LED boards and video towers. Some of the work is subject to confidentiality restrictions.",
        },
        {
          company: 'IT Carlo Acutis',
          period: '2026',
          logo: 'itca',
          url: 'https://itcarloacutis.it/',
          role: 'Graphic Design Lab Teacher',
          description: "Teaching the fundamentals of graphic design and visual communication to secondary school students. Responsibilities include planning lessons, developing practical assignments, guiding students through the design process and providing feedback on their work.",
        },
        {
          company: 'POLI.design',
          period: '2025',
          logo: 'polimi',
          url: 'https://www.polidesign.net/it/formazione/communication-design/corso--video-identity/',
          role: 'Teaching Assistant and Academic Tutor',
          description: "Teaching assistance and academic tutoring for the postgraduate course “Video Identity: Dynamic Communication Systems for the Entertainment Industry”, developed by POLI.design in collaboration with Mediaset. The role followed my Master's thesis research on audiovisual identity.",
        },
        {
          company: 'Mediaset S.p.A.',
          period: '2020–Present',
          logo: 'mediaset',
          role: 'Content Metadata Editor and Tagger',
          description: "Content indexing, cataloguing and tagging for Mediaset Infinity, focusing on semantic organisation, classification and metadata quality. The work helps make the digital catalogue easier to navigate and supports content search and discovery across the platform.",
        },
        {
          company: 'Meeting di Rimini',
          period: '2020',
          logo: 'meeting',
          role: 'UX/UI Design Consultant',
          description: "Visual identity and interface design for an exhibition adapted for online access during the COVID-19 restrictions. The work also included graphics for exhibition panels, vinyl lettering and a presentation supporting the event's official speech.",
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
  margin-top: 28px;
}

.work-experience-logo-container {
  align-self: center;
  display: block;
  width: 48px;
  height: 48px;
  overflow: hidden;
  text-decoration: none;
}

.work-experience-logo-container:hover {
  text-decoration: none;
}

.work-experience-logo-outlined {
  box-shadow: 0 0 0 1pt #666;
}

.work-experience-logo-container:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 4px;
  border-radius: var(--radius-subtle, 4px);
}

.work-experience-logo {
  display: block;
  width: 48px;
  height: 48px;
  object-fit: contain;
  transition: transform 0.3s ease-in-out;
}

@media (hover: hover) and (pointer: fine) {
  .work-experience-logo-container:hover .work-experience-logo {
    transform: scale(1.05);
  }
}

@media (prefers-reduced-motion: reduce) {
  .work-experience-logo {
    transition: none;
  }

  .work-experience-logo-container:hover .work-experience-logo {
    transform: none;
  }
}

.work-experience-description {
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

  .work-experience-logo-container,
  .work-experience-logo {
    width: 40px;
    height: 40px;
  }
}
</style>
