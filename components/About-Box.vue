<template>

  <div class="mt-5">

    <b-row align-v="stretch" class="bg-secondary">
      <b-col cols="5" >

        <div class="bg-primary photo">CIAO</div>

      </b-col>


      <b-col class="photo">

        <b-row class="bg-primary" style="height: 65%; " >
          <b-col cols="7" class="bg-white square " >
            ciao
          </b-col>

          <b-col cols="" class="bg-white square ">
            ciao
          </b-col>
        </b-row>

        <b-row class="bg-danger" style="height: 35%" >
          <b-col cols="" class="bg-white square">
            BELLA BRO
          </b-col>

          <b-col cols="" class="bg-white square">
            <h4>ottobre</h4>
            milo, filo mari, sicci

          </b-col>

          <b-col cols="" class="bg-white square">
            ciao
          </b-col>

          <b-col cols="" class="bg-white square ">
            ciao
          </b-col>

          <b-col cols="" class="bg-white square">
            ciao
          </b-col>

        </b-row>



      </b-col>
    </b-row>

  </div>

</template>

<script>
export default {
  name: "About-Box"
}
</script>

<style scoped>

.photo{
  border: 1px solid;
  height: 400px;
}

.square{

  width: 100%;
  box-sizing: border-box;
  border-radius: 30px;
}

</style>
