<template>
  <div class="acmilan partner-visibility">
    <div class="container pt-4">
      <ProjectHeader />
      <ProjectIntro
        title="ACM Partner Visibility"
        :subtitle="project.bio" :project-type="project.projectType"
      :pill1="project.pill1" :pill2="project.pill2" :pill3="project.pill3" />
      <div class="pt-md-3 d-none d-md-block">
        <div v-responsive-background="'/images/acm-partner-visibility/9d3325330553433f.jpg'" data-image-src="/images/acm-partner-visibility/9d3325330553433f.jpg" class="cover-parallax" :aria-label="$t(&quot;Partner branding at Milanello&quot;)" data-parallax-image v-parallax  role="img"></div>
      </div>
      <div class="cover-mobile d-block d-md-none">
        <PortfolioImage src="/images/acm-partner-visibility/acm2_sm.png" :alt="$t(&quot;Partner backdrop in the AC Milan press conference room&quot;)" loading="eager" fetchpriority="high" />
      </div>
      <section class="project-section" aria-labelledby="project-overview">
        <div class="section-copy">
          <h4 aria-level="2" id="project-overview">{{ $t("Project Overview", "acm-partner-visibility.overviewTitle") }}</h4>
          <p>{{ $t(project.overview) }}</p>
        </div>
        <div class="gallery-row overview-gallery">
          <div v-responsive-background="'/images/acm-partner-visibility/press-conference-partner-backdrop.jpg'" v-parallax data-parallax-image data-image-src="/images/acm-partner-visibility/press-conference-partner-backdrop.jpg" class="gallery-image" role="img" :aria-label="$t(&quot;AC Milan press conference with partner backdrop and branded desk&quot;)" style="--image-ratio: 3 / 2"></div>
          <div v-responsive-background="'/images/acm-partner-visibility/9cba1f1538066c0b.jpg'" v-parallax data-parallax-image data-image-src="/images/acm-partner-visibility/9cba1f1538066c0b.jpg" class="gallery-image" role="img" :aria-label="$t(&quot;Partner branding at the Milanello entrance&quot;)" style="--image-ratio: 2285 / 1080"></div>
        </div>
      </section>
      <section class="project-section" aria-labelledby="section-0">
        <div class="section-copy">
          <h4 aria-level="2" id="section-0">{{ $t("Venue Branding", "acm-partner-visibility.sections.0.title") }}</h4>
          <p>{{ $t("Design of branded graphics for Milanello, the Vismara Sports Centre, and San Siro, covering training pitches, sports facilities, and dedicated partner spaces. Partner visibility is updated whenever new commercial agreements are signed, according to each partner's tier and allocated spaces. To manage these updates efficiently, we developed a graphic system that simplifies the integration of new partners and the adaptation of assets across different formats.") }}</p>
        </div>
        <div class="gallery-split venue-gallery">
          <div class="gallery-column">
            <div v-responsive-background="'/images/acm-partner-visibility/milanello-aerial-entrance.jpeg'" v-parallax data-parallax-image data-image-src="/images/acm-partner-visibility/milanello-aerial-entrance.jpeg" class="gallery-image" role="img" :aria-label="$t(&quot;Aerial view of the branded Milanello entrance and training facilities&quot;)" style="--image-ratio: 2 / 1"></div>
            <div v-responsive-background="'/images/acm-partner-visibility/5445b3632a86b159.jpg'" v-parallax data-parallax-image data-image-src="/images/acm-partner-visibility/5445b3632a86b159.jpg" class="gallery-image" role="img" :aria-label="$t(&quot;Partner visibility during training at Milanello&quot;)" style="--image-ratio: 2.1"></div>
          </div>
          <div class="gallery-column">
            <div v-responsive-background="'/images/acm-partner-visibility/e9704d636e30733f.jpg'" v-parallax data-parallax-image data-image-src="/images/acm-partner-visibility/e9704d636e30733f.jpg" class="gallery-image" role="img" :aria-label="$t(&quot;Partner banners around the Milanello training pitch&quot;)" style="--image-ratio: 1885 / 1080"></div>
            <div v-responsive-background="'/images/acm-partner-visibility/f9c5929b3b67765f.jpg'" v-parallax data-parallax-image data-image-src="/images/acm-partner-visibility/f9c5929b3b67765f.jpg" class="gallery-image mobile-hidden" role="img" :aria-label="$t(&quot;Aerial view of branded training pitches at Milanello&quot;)" style="--image-ratio: 1201 / 1080"></div>
          </div>
        </div>
        <div class="gallery-row venue-row">
          <div v-responsive-background="'/images/acm-partner-visibility/c1a270e6455dd652.jpg'" v-parallax data-parallax-image data-image-src="/images/acm-partner-visibility/c1a270e6455dd652.jpg" class="gallery-image" role="img" :aria-label="$t(&quot;Partner branding alongside the training pitch&quot;)" style="--image-ratio: 1924 / 1080"></div><div v-responsive-background="'/images/acm-partner-visibility/68c1649453b74a41.jpg'" v-parallax data-parallax-image data-image-src="/images/acm-partner-visibility/68c1649453b74a41.jpg" class="gallery-image" role="img" :aria-label="$t(&quot;Co-branded wayfinding at the Vismara Sports Centre&quot;)" style="--image-ratio: 1472 / 1080"></div><div v-responsive-background="'/images/acm-partner-visibility/53359ec6ea87445f.jpg'" v-parallax data-parallax-image data-image-src="/images/acm-partner-visibility/53359ec6ea87445f.jpg" class="gallery-image mobile-hidden" role="img" :aria-label="$t(&quot;PUMA House of Football entrance signage&quot;)" style="--image-ratio: 1417 / 1080"></div>
        </div>
      <p class="image-credits">{{ $t("Selected photographs are sourced from Getty Images and are used solely to provide visual context for the design work presented. All image rights remain with their respective copyright holders.") }}</p>
      </section>
      <section class="project-section" aria-labelledby="section-1">
        <div class="section-copy">
          <h4 aria-level="2" id="section-1">{{ $t("Media Assets", "acm-partner-visibility.sections.1.title") }}</h4>
          <p>{{ $t("Creation of visual assets for partner visibility across the Club's media and digital touchpoints, including press conference backdrops, flash interviews, mixed zones, LED boards, and screens. Development of static and animated content, adapted to different formats and event requirements. As with physical spaces, digital assets are regularly updated to reflect partner agreements and visibility requirements, ensuring consistency across all applications.") }}</p>
        </div>
        <div class="gallery-split media-gallery">
          <div class="gallery-column">
            <div v-responsive-background="'/images/acm-partner-visibility/5cea1f75d1d9ee93.jpg'" v-parallax data-parallax-image data-image-src="/images/acm-partner-visibility/5cea1f75d1d9ee93.jpg" class="gallery-image" role="img" :aria-label="$t(&quot;Partner backdrop for a press conference&quot;)" style="--image-ratio: 1826 / 1080"></div><div v-responsive-background="'/images/acm-partner-visibility/23ce4f53b22f9848.jpg'" v-parallax data-parallax-image data-image-src="/images/acm-partner-visibility/23ce4f53b22f9848.jpg" class="gallery-image" role="img" :aria-label="$t(&quot;Partner backdrop in the San Siro mixed zone&quot;)" style="--image-ratio: 2290 / 1080"></div>
            <div class="gallery-row media-pair">
              <div v-responsive-background="'/images/acm-partner-visibility/38d50002ac667b21.jpg'" v-parallax data-parallax-image data-image-src="/images/acm-partner-visibility/38d50002ac667b21.jpg" class="gallery-image" role="img" :aria-label="$t(&quot;Partner screen above the San Siro tunnel&quot;)" style="--image-ratio: 1930 / 1080"></div><div v-responsive-background="'/images/acm-partner-visibility/c8497b1ed5ca8189.jpg'" v-parallax data-parallax-image data-image-src="/images/acm-partner-visibility/c8497b1ed5ca8189.jpg" class="gallery-image mobile-hidden" role="img" :aria-label="$t(&quot;Pitch-side interview backdrops at San Siro&quot;)" style="--image-ratio: 1937 / 1080"></div>
            </div>
          </div>
          <div class="gallery-column">
            <div v-responsive-background="'/images/acm-partner-visibility/8d07e439fa08eb27.jpg'" v-parallax data-parallax-image data-image-src="/images/acm-partner-visibility/8d07e439fa08eb27.jpg" class="gallery-image" role="img" :aria-label="$t(&quot;Co-branded press conference desk&quot;)" style="--image-ratio: 1827 / 1080"></div>
            <div v-responsive-background="'/images/acm-partner-visibility/ca033d25409fb367.jpg'" v-parallax data-parallax-image data-image-src="/images/acm-partner-visibility/ca033d25409fb367.jpg" class="gallery-image mobile-hidden" role="img" :aria-label="$t(&quot;Partner branding around the San Siro benches&quot;)" style="--image-ratio: 1593 / 1080"></div>
            <div v-responsive-background="'/images/acm-partner-visibility/4ad57687a0455563.jpg'" v-parallax data-parallax-image data-image-src="/images/acm-partner-visibility/4ad57687a0455563.jpg" class="gallery-image" role="img" :aria-label="$t(&quot;Partner backdrop for a flash interview&quot;)" style="--image-ratio: 1440 / 1080"></div>
          </div>
        </div>
      <p class="image-credits">{{ $t("Selected photographs are sourced from Getty Images and are used solely to provide visual context for the design work presented. All image rights remain with their respective copyright holders.") }}</p>
      </section>
      <section class="project-section" aria-labelledby="section-2">
        <div class="section-copy">
          <h4 aria-level="2" id="section-2">{{ $t("Partner Co-Branding", "acm-partner-visibility.sections.2.title") }}</h4>
          <p>{{ $t("Creation of graphics for new partnership announcements and production of co-branded communication materials for commercial partners' activities and initiatives. Writing and layout design of AC Milan's Partnership Style Guide, a reference document for partners on the correct use of the Club's visual identity and brand assets. Review of partner-produced materials, verification of compliance with brand guidelines, and management of the approval process.") }}</p>
        </div>
        <div class="gallery-row partner-pair">
          <div v-responsive-background="'/images/acm-partner-visibility/d9ad496ad4c0eb47.jpg'" v-parallax data-parallax-image data-image-src="/images/acm-partner-visibility/d9ad496ad4c0eb47.jpg" class="gallery-image" role="img" :aria-label="$t(&quot;Coca-Cola co-branding at San Siro&quot;)" style="--image-ratio: 2397 / 1080"></div><div v-responsive-background="'/images/acm-partner-visibility/b8b5291a81b57bbd.jpg'" v-parallax data-parallax-image data-image-src="/images/acm-partner-visibility/b8b5291a81b57bbd.jpg" class="gallery-image" role="img" :aria-label="$t(&quot;Clivet branding on a stadium screen&quot;)" style="--image-ratio: 2397 / 1080"></div>
        </div>
        <div class="gallery-row partner-row">
          <div v-responsive-background="'/images/acm-partner-visibility/0eda9cf12926c906.jpg'" v-parallax data-parallax-image data-image-src="/images/acm-partner-visibility/0eda9cf12926c906.jpg" class="gallery-image mobile-hidden" role="img" :aria-label="$t(&quot;Banco BPM partnership on a stadium screen&quot;)" style="--image-ratio: 1417 / 1080"></div><div v-responsive-background="'/images/acm-partner-visibility/a621ac585fb8718a.jpg'" v-parallax data-parallax-image data-image-src="/images/acm-partner-visibility/a621ac585fb8718a.jpg" class="gallery-image" role="img" :aria-label="$t(&quot;Clivet pitch-side LED boards&quot;)" style="--image-ratio: 1907 / 1080"></div><div v-responsive-background="'/images/acm-partner-visibility/b124a2fd1b9b811b.jpg'" v-parallax data-parallax-image data-image-src="/images/acm-partner-visibility/b124a2fd1b9b811b.jpg" class="gallery-image mobile-hidden" role="img" :aria-label="$t(&quot;Clivet branding in the hospitality area&quot;)" style="--image-ratio: 1407 / 1080"></div>
        </div>
      <p class="image-credits">{{ $t("Selected photographs are sourced from Getty Images and are used solely to provide visual context for the design work presented. All image rights remain with their respective copyright holders.") }}</p>
      </section>
      <ProjectNextPrevious
        thumbnail="/images/acm-partner-visibility/acm3.png"
        class="column card-large biowhite acmilan3"
        to="/acmilan3"
        nextproject="ACM Events &amp; Matchday"
      :pill1="projectContent.acmilan3.pill1" :pill2="projectContent.acmilan3.pill2" :pill3="projectContent.acmilan3.pill3" :bionext="projectContent.acmilan3.bio" />
    </div>
    <PortfolioFooter />
  </div>
</template>

<script>
import projectContent from '~/utils/project-content'
export default {
  data() { return { project: projectContent['acm-partner-visibility'], projectContent } },
  name: 'AcmPartnerVisibility',
}
</script>

<style scoped>
.cover-parallax,
.cover-mobile,
.gallery-image {
  position: relative;
}

.cover-parallax::after,
.cover-mobile::after,
.gallery-image::after {
  content: '@GettyImages';
  position: absolute;
  right: 12px;
  bottom: 8px;
  z-index: 1;
  color: #fff;
  font-size: 10px;
  font-weight: 400;
  line-height: 1.2;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.65);
  pointer-events: none;
}

.image-credits {
  text-align: center;
  margin-top: 16px;
  color: #767676;
  font-size: 12px;
  line-height: 1.5;
}

.partner-visibility .cover-parallax {
  display: block;
  border-radius: 20px;
  overflow: hidden;
}
.partner-visibility {
  background: #fff;
}
.partner-visibility ::v-deep .subtitle {
  max-width: 85%;
  text-wrap: balance;
}
.section-copy {
  width: 80%;
  padding: 48px 0;
}
.section-copy p {
  text-wrap: pretty;
  margin-bottom: 0;
}
.section-copy + .gallery-row {
  margin-top: 0;
}
.cover-mobile {
  height: auto;
}
.cover-mobile img {
  display: block;
  width: 100%;
  height: auto;
}
.gallery-split,
.gallery-row,
.gallery-column {
  display: grid;
  gap: 30px;
  min-width: 0;
}
.gallery-split {
  grid-template-columns: 3fr 2fr;
}
.gallery-column {
  align-content: start;
}
.gallery-row {
  margin-top: 30px;
}
.gallery-row > .gallery-image,
.gallery-column > .gallery-image {
  display: block;
  width: 100%;
  height: auto;
  aspect-ratio: var(--image-ratio);
  min-height: 0;
  overflow: hidden;
  background-size: cover;
  background-position: center;
  border-radius: 20px;
}
/* Let the aerial photo fill the remaining height of the right column. */
@media (min-width: 768px) {
  /* The left column determines the height; crop the last image on the right. */
  .media-gallery > .gallery-column:last-child {
    min-height: 0;
    grid-template-rows: auto auto minmax(0, 1fr);
    align-content: stretch;
  }
  .media-gallery > .gallery-column:last-child > .gallery-image:last-child {
    height: 100%;
    aspect-ratio: auto;
  }
  /* The first image sets the row height; every sibling fills the same track. */
  .gallery-row > .gallery-image {
    height: 100%;
    aspect-ratio: auto;
  }
  .gallery-row > .gallery-image:first-child {
    height: auto;
    aspect-ratio: var(--image-ratio);
  }
  .venue-gallery > .gallery-column:last-child {
    align-content: stretch;
    grid-template-rows: auto minmax(0, 1fr);
  }
  .venue-gallery > .gallery-column:last-child > .gallery-image:last-child {
    height: 100%;
    aspect-ratio: auto;
  }
}
.overview-gallery {
  grid-template-columns: 3fr 4fr;
}
.venue-row {
  grid-template-columns: 4fr 3fr 3fr;
}
.media-pair,
.partner-pair {
  grid-template-columns: 1fr 1fr;
}
.media-pair {
  margin-top: 0;
}
.partner-row {
  grid-template-columns: 3fr 4fr 3fr;
}
@media (max-width: 767.98px) {
  .cover-mobile {
    margin-top: 40px;
    margin-bottom: 16px;
  }
  .image-credits {
    width: calc(100% - 16px);
    max-width: 340px;
    margin: 10px auto 0;
    text-align: center;
    text-wrap: balance;
  }
  .gallery-image.mobile-hidden {
    display: none;
  }
  .partner-visibility ::v-deep .subtitle,
  .section-copy {
    max-width: 100%;
    width: 100%;
  }
  .gallery-split,
  .gallery-row,
  .gallery-column {
    gap: 16px;
  }
  .gallery-split,
  .gallery-row {
    grid-template-columns: 1fr;
    aspect-ratio: auto;
  }
  .gallery-row {
    margin-top: 16px;
  }
  .media-pair {
    margin-top: 0;
  }
  .venue-gallery .gallery-column,
  .media-gallery .gallery-column {
    grid-template-rows: auto;
  }
  .gallery-row > .gallery-image,
  .gallery-column > .gallery-image {
    height: auto;
    aspect-ratio: var(--image-ratio);
    border-radius: 20px;
  }
}
</style>
