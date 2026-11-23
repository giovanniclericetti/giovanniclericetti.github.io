<template>
  <div class="container">
    <b-row>
      <b-col cols="5" style="padding-left: 0px; padding-right: 0px">
        <div v-responsive-background="'/images/aboutme/aboutme.png'" data-image-src="/images/aboutme/aboutme.png" data-parallax-image v-parallax class="photobox" style="background-color: #EF344D">
          <span class="sr-only">Giovanni Clericetti</span>
        </div>
      </b-col>
      <b-col cols="7" style="padding-left: 0px; padding-right: 0px">
        <div class="blocchisx">
          <div style="padding-left: 0px; padding-bottom: 20px">
            <b-row class="d-flex no-gutters" style="height:230px">
              <b-col cols="8" style="padding-left: 20px; padding-right: 20px;">
                <a href="documents/giovanniclericetti.pdf" target="_blank" style="text-decoration: none;">
                  <div class="boxround bggradient resume-gradient" style="height: 230px;" ref="container" @mousemove="moveImage">
                    <div class="d-flex justify-content-center align-items-center pt-3" style="height: 40%">
                      <h4 class="tile-label resume-label" style="color: white">My Resume</h4>
                    </div>
                    <div class="boxcv justify-content-center d-flex" style="height: 150%; width: 100%;">
                      <PortfolioImage ref="cvImage" src="/images/aboutme/cvbox.png" style="transform: translateZ(0); height: 100%; width: auto;"  sizes="269px" />
                    </div>
                  </div>
                </a>
              </b-col>
              <b-col cols="">
                <div class="bg-white boxround" style="height: 230px;">
                  <div class="zoombvs" style="height: 100%">
                    <a :href="randomOption.href" target="_blank">
                      <div class="mx-4 pt-4">
                        <img src="~static/images/aboutme/spotify.svg"/>
                      </div>
                      <b-row class="mx-4 pb-3 mb-4 d-block" style="bottom:0px; position: absolute">
                        <p2 style="color: #3CCC76; font-size: 15px"> Always listening...</p2>
                        <h4 style="font-size: 25px" id="song">{{ randomOption.song }}</h4>
                        <p style="font-size: 18px; line-height: 5px" id="singer">{{ randomOption.singer }}</p>
                      </b-row>
                    </a>
                  </div>
                </div>
              </b-col>
            </b-row>
          </div>
          <div class="contact-tiles">
            <a class="contact-tile mail-tile" href="mailto:giovanni.clericetti@gmail.com">
              <span class="contact-content">
              <span class="tile-label">Mail me</span>
              <img src="~static/images/aboutme/mail-icon.svg" alt="" />
                          </span>
            </a>
            <a class="contact-tile linkedin-tile" href="https://www.linkedin.com/in/giovanniclericetti/" target="_blank" rel="noopener noreferrer" aria-label="Check my LinkedIn">
              <span class="contact-content">
              <span class="tile-label">Check my</span>
              <span class="linkedin-logo" aria-hidden="true"><img src="~static/images/aboutme/checklinkedin.svg" alt="" /></span>
                          </span>
            </a>
            <a class="contact-tile instagram-tile" href="https://www.instagram.com/giovanniclericetti.png/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <img src="~static/images/aboutme/instagram.svg" alt="" />
            </a>
          </div>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "About-Box",
  methods: {
    moveImage(event) {
      const container = this.$refs.container;
      const image = this.$refs.cvImage.$el;

      const containerRect = container.getBoundingClientRect();
      const centerX = containerRect.left + containerRect.width / 2;
      const centerY = containerRect.top + containerRect.height / 2;

      const offsetX = event.clientX - centerX;
      const offsetY = event.clientY - centerY;

      const rotateX = offsetY / containerRect.height * 30; // Adjust sensitivity here
      const rotateY = -offsetX / containerRect.width * 35; // Adjust sensitivity here

      image.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(50px)`;
    }
  },
  data() {
    return {
      options: [
        { song: "Dove si balla", singer: "Dargen D'Amico", href: "https://open.spotify.com/intl-it/track/3FVa0R2evbgjVOd3bejudr?si=2cd9eded04694ba2" },
        { song: "Rockstar", singer: "Sfera Ebbasta", href: "https://open.spotify.com/intl-it/track/3js3wKPw8VxBWtcXtwyUnA?si=59de8edffe524d5b" },
        { song: "Mi Sento Vivo", singer: "Gianni Bismark", href: "https://open.spotify.com/intl-it/track/1c1OvbTdYjo1MJ3DhYn8P5?si=8c955201e1d4472f" },
        { song: "Vetri Neri", singer: "Capo Plaza, Anna", href: "https://open.spotify.com/intl-it/track/1K9qAxGT4cWUicf2OezSen?si=9902d4f64016412b" }
      ]
    };
  },
  computed: {
    randomOption() {
      const randomIndex = Math.floor(Math.random() * this.options.length);
      return this.options[randomIndex];
    }
  }
}

</script>

<style lang="scss" scoped>
.contact-tiles {
  display: grid;
  grid-template-columns: calc(42.857143% - 18.095238px) minmax(0, 1fr) 105px;
  gap: 20px;
  padding-left: 20px;
}
.contact-tile {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 0;
  height: 105px;
  border-radius: 35px;
  background: white;
  overflow: hidden;
  text-decoration: none;
}
.contact-tile img {
  object-fit: contain;
  max-width: 100%;
  transition: transform 0.3s ease-in-out;
}
.instagram-tile:hover img { transform: scale(1.03); }
.contact-content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: transform 0.3s ease-in-out;
}
.mail-tile .contact-content { gap: 12px; }
.contact-tile:hover .contact-content,
.contact-tile:focus-visible .contact-content { transform: scale(1.03); }
@media (prefers-reduced-motion: reduce) {
  .contact-content { transition: none; }
}
.mail-tile { padding: 12px; background: white; }
.tile-label {
  font-family: 'Bricolage Grotesque', sans-serif;
  font-size: 26px;
  font-weight: 800;
  line-height: 1.2;
  margin: 0;
  white-space: nowrap;
}
.resume-label { font-size: 32px; }
.mail-tile img { width: 52px; height: 40px; flex-shrink: 0; }
.mail-tile .tile-label { color: #DB4B3E; }
.linkedin-tile { gap: 8px; padding: 12px; }
.linkedin-tile .tile-label { color: #007EBB; }
.linkedin-logo {
  position: relative;
  display: block;
  flex: 0 0 56px;
  width: 56px;
  height: 56px;
  overflow: hidden;
}
.linkedin-logo img {
  position: absolute;
  right: 0;
  width: 191.333333px;
  height: 56px;
  max-width: none;
}
.instagram-tile { width: 105px; aspect-ratio: 1; }
.instagram-tile img { width: 100%; height: 100%; }

.photobox {

  background-size: cover;
  background-position: center;
  height: 230+105+20px;
  overflow: hidden;
  border-radius: 35px;
}
.socialbox {
  border-radius: 35px;
  overflow: hidden;
  margin-left: 20px;
  height: 105px;
}
.socialbox-large {
  border-radius: 35px;
  overflow: hidden;
  margin-left: 20px;
  width: 130%;
}
.socialbox img {
  object-fit: contain;
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
  max-width: 100%;
  &:hover { transform: scale(1.07); }
}
.socialbox-large img {
  object-fit: contain;
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
  height: 60px;
  &:hover { transform: scale(1.03); }
}
a { color: black; }
.zoombvs { transition: transform 0.3s ease-in-out; }
.boxround {
  object-fit: contain;
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
  overflow: hidden;
  border-radius: 35px;
}
.zoombvs:hover { transform: scale(1.03); }
#song,
#singer {
  color: #0B2E1A;
}
.bggradient { background: linear-gradient(114deg, #FFC793 -8.26%, #FF7B93 106.3%); }
.boxcv img { transition: transform 0.3s ease-out; }
</style>
