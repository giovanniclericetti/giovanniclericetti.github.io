<template>
  <Nuxt/>
</template>

<script>
export default {
  name: "DefaultLayout",
  head() {
    return {
      link: [
        {href: 'https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500&display=swap', rel: 'stylesheet'}
      ]
    }
  }
}
</script>


<style>

body {
  background-color: #F6F2F2;
}

h1 {
  font-family: "title-bold";
  color: var(--color-primary);
  font-size: 64pt;
  font-weight: 100;
}

h2 {
  font-family: 'DM Sans';
  font-size: 32px;
  font-weight: 400;
}

h3 {
  font-family: 'DM Sans', sans-serif;
  font-size: 24px;
  font-weight: 400;
}

h4 {
  font-family: 'title-regular';
  font-size: 22px;
  font-weight: 400;
  color: var(--color-primary);
}

h5 {
  font-family: 'title-regular';
  font-size: 20px;
  font-weight: 400;
}

h6 {
  font-family: 'title-regular';
  font-size: 14px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.5);
}

p {
  font-family: 'DM Sans', sans-serif;
  font-size: 18px;
  font-weight: 400;
  margin: 0px;
}

p2 {
  font-family: 'DM Sans', sans-serif;
  font-size: 14px;
}

a{
  color: black;
}

.gradient {
  background: -webkit-linear-gradient(45deg, #FFA857, #FF4466);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  width: fit-content;
  --color-primary: #FF6E60;
}

.it-back {
  --color-primary: #EA4A3C;
  --color-secondary: green; /* Progetto Successivo */
  --color-success: red; /* Progetto Precedente */
}

.sourdata {
  --color-primary: #FF5880;
  --color-secondary: green; /* Progetto Successivo */
  --color-success: red; /* Progetto Precedente */
}

.pills {
  border-radius: 20px;
  background-color: var(--color-primary);
  border: none;
  font-family: 'DM Sans';
  font-weight: 400;
  font-size: 16px;

}

.hover-underline-animation {
  display: inline-block;
  position: relative;
  color: var(--color-primary);
}

.hover-underline-animation:after {
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: var(--color-primary);
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}

.img-parallax{
  width: 100%;
  height: 500px;
  background-size: cover;
  border-radius: 30px;
  background-color: white;
}

.cover-parallax{
  width: 100%;
  height: 400px;
  background-size: cover;
  border-radius: 30px;
  background-color: white;
}

.prllx-small{
  height: 400px;
}

.projectbox {
  background-color: white;
  max-height: 600px;
  border-radius: 30px;
  overflow: hidden;
}

.hover-underline-animation:hover:after {
  transform: scaleX(1);
  transform-origin: bottom left;
}

@font-face {
  font-family: "title-bold";
  src: local("title-bold"), url(./static/font/title-bold.otf) format("opentype");
}

@font-face {
  font-family: "title-regular";
  src: local("title-regular"), url(./static/font/title-regular.otf) format("opentype");
}

@font-face {
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/dmsans/v11/rP2Hp2ywxg089UriCZOIHTWEBlw.woff2) format('woff2');
}

@media (max-width: 768px) {

h1{
  font-size: 52px;
}

h2 {
  font-size: 24px;
}

h3{
  font-size: 20px;
}


  p{
    font-size: 16px;
  }

}




</style>
