<template>

  <div class="acmilan">



    <div class="container mt-4">

      <ProjectHeader/>

      <Project-Intro
        title="AC Milan"
        subtitle="Editorial project of an indie independent magazine for
social change to chronicle the lives of health workers"
        pill1="Editorial"
        pill2="Visual"
        pill3="Branding"

      />

      <div cols="12" md="12" class=" mt-md-0 py-md-3 py-md-2 d-none d-md-block "
      >



        <img class="cover-parallax" style="


     background-image: url(/images/covers/hero/acm.svg)"




             v-prlx.background="{ speed: 0.1 }">
      </div>


      <div cols="12" class="pt-0 my-4 cover-mobile d-block d-md-none" >

        <img class=""
     src="/images/covers/sm/referto_sm.jpg"
        >

      </div>

      <div class="text-center m-4 p-3">
        <p>This material is confidential. <br>Get in touch to learn more.</p>
        <a href="mailto:giovanni.clericetti@gmail.com" class="m-3 custom-outline-btn px-4 py-2 rounded-pill d-inline-block text-decoration-none">
          <p> Contact me    </p>
        </a>
      </div>

      <ProjectDescription
        description="
According to the vocabulary, Referto is a clinical document written by a doctor, putting his or her perspective on the patient and the disease on paper. Similarly, REFERTO magazine is the story of healthcare at its most genuine, human and emotional state, delivered directly from the hands of those who dedicate themselves to protecting our health every day. For this project, the first issue of the magazine has been created, focusing on Soccorso (First Aid), with subsequent issues planned on Hospitalisation, Surgery and Prognosis, each with its own unique cover design. The design of this indie magazine for social change evolved from the research phase, which included collecting photographic material, researching sources, producing interviews and writing articles. The REFERTO brand was established, with choices of color, paper and typography tailored to the content being communicated.

"        team="S. Bonfanti, A. Burchiani, E. Ceriani, T. Prinetti"
        role="Brand Identity, Visual, Editorial Layout"
        delivery="Editorial Design Lab, 2023"
        class="my-md-3"
      >

      </ProjectDescription>



      <div>

      </div>


      <ProjectNextPrevious
        title="AC Milan"
        thumbnail="/images/covers/next/cc-next.jpg
"
        class="column card-large biowhite carachioggia"
        to="acmilan"
        pill1="UX-UI"
        pill2="Visual"
        pill3="Branding"
        nextproject="Cara Chioggia ti scrivo"
        bionext="Digital experience of letters to relive fishing places in Chioggia"
      />


    </div>


    <PortfolioFooter/>
  </div>


</template>

<script>
export default {
  name: 'audiovisual-identity',
}


</script>


<style>

.cover-mobile{
  width: 100%;
  height: 300px;
  background-size: contain;
  background-position: center;
  border-radius: 20px;
  overflow: hidden;

  img{
    width: 100%;
  }
}

.custom-outline-btn {
  border: 2px solid #e0071b;
  color: #e0071b;
  background-color: transparent;
  transition: all 0.2s ease;
}

.custom-outline-btn:hover {
  border: 2px solid #e0071b;
  background-color: #e0071b;
  color: #fff;
}

.custom-outline-btn:active,
.custom-outline-btn:focus,
.custom-outline-btn:visited {
  background-color: transparent;
  color: #e0071b;
  box-shadow: none;
  outline: none;
}

.acmilan .subtitle{
  max-width: 55%;
}

.ref-3{
  height: 630px;
}

.ref-video{
  height: 530px;
}

.quartapill {
  visibility: hidden;
}

@media (max-width: 768px) {

  .acmilan .subtitle   {
    max-width: 100%;
  }

  .ref-pc{
    height: 270px;
  }

  .ref-video{
    height: 270px;
  }

  .ref-3{
    height: 400px;
  }
}

</style>
