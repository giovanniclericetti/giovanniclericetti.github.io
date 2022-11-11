<template>
<div>


  <head>

    <script>

      filterSelection("all")

      function filterSelection(c) {
        var x, i;
        x = document.getElementsByClassName("column");
        if (c == "all") c = "";
        for (i = 0; i < x.length; i++) {
          RemoveClass(x[i], "show");
          if (x[i].className.indexOf(c) > -1) AddClass(x[i], "show");
        }
      }

      function AddClass(element, name) {
        var i, arr1, arr2;
        arr1 = element.className.split(" ");
        arr2 = name.split(" ");
        for (i = 0; i < arr2.length; i++) {
          if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
        }
      }

      function RemoveClass(element, name) {
        var i, arr1, arr2;
        arr1 = element.className.split(" ");
        arr2 = name.split(" ");
        for (i = 0; i < arr2.length; i++) {
          while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
          }
        }
        element.className = arr1.join(" ");
      }


      // Add active class to the current button (highlight it)
      var btnContainer = document.getElementById("myBtnContainer");
      var btns = btnContainer.getElementsByClassName("btn");
      for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function(){
          var current = document.getElementsByClassName("active");
          current[0].className = current[0].className.replace(" active", "");
          this.className += " active";
        });
      }

    </script>

  </head>

  <div id="myBtnContainer"  class="text-center my-5">
    <button class="btn active mx-2" onclick="filterSelection('all')"> All </button>
    <button class="btn mx-2" onclick="filterSelection('ux-ui')"> UX/UI </button>
    <button class="btn mx-2" onclick="filterSelection('branding')"> Branding </button>
    <button class="btn mx-2" onclick="filterSelection('coding')"> Coding </button>
    <button class="btn mx-2" onclick="filterSelection('graphic')"> Graphic </button>
  </div>

  <b-row>

    <b-col cols="12" md="6" lg="4">

      <NuxtLink to="about"> <PortfolioCard class="column ux-ui card-large card-it-back"
      bio="Design-centered digital exhibition on Sergio Marchionne and his reconstruction story."
      ></PortfolioCard> </NuxtLink>

        <PortfolioCard class="column ux-ui card-large card-sourdata"></PortfolioCard>

      <div class="column coding">
        <div class="content">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg" alt="coding" style="width:100%">
        </div>
      </div>


    </b-col>

    <b-col cols="12" md="6" lg="4">

      <div class="column coding">
        <div class="content bg-image hover-zoom">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg" alt="coding" style="width:100%">
        </div>
      </div>

      <div class="column branding graphic ">
        <div class="content">
          <img src="https://m.media-amazon.com/images/I/71+mhWHnBdL._SL1500_.jpg" alt="Car" style="width:100%">
        </div> </div>

    </b-col>

    <b-col cols="12" md="6" lg="4">
    <div class="column branding">
      <div class="content"> ciao
        <img src="https://m.media-amazon.com/images/I/71+mhWHnBdL._SL1500_.jpg" alt="Car" style="width:100%">
      </div>
    </div>

      <div class="column ux-ui">
        <div class="content "> quale
          <img src="https://images.unsplash.com/photo-1610878180933-123728745d22?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FuYWRhJTIwbmF0dXJlfGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="Lights" style="width:100%">
        </div>
      </div>

      <div class="column ux-ui">
        <div class="content">
          <img src="https://images.unsplash.com/photo-1610878180933-123728745d22?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FuYWRhJTIwbmF0dXJlfGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="Lights" style="width:100%">
        </div>
      </div>
    </b-col>




  </b-row>



</div>
</template>

<script>
export default {
  name: "Portfolio-Grid",

}




</script>



<style scoped>

.card-small{
  height: 300px;
}

.card-medium{
  height: 400px;
}

.card-large{
  height: 500px;
}

.card-it-back{
  background-image: url("~static/images/cards/itback.png");
  background-color: red;
}

.card-sourdata{
  background-image: url("~static/images/cards/sourdata.png");
}

/* Create three equal columns that floats next to each other */
.column {
  float: left;
  margin-bottom: 20px;
  display: none; /* Hide columns by default */
  border: 3px;
  overflow: hidden;
}

.column img{
  transform: scale(1.0);
  transition: 0.3s ease-in-out;
}


.column:hover img{
  transform: scale(1.05);
  transition: 0.3s ease-in-out;
}

/* Clear floats after rows */
.row:after {
  content: "";
  display: table;
  clear: both;
}

/* Content */
.content {
  background-color: pink;
  overflow: hidden ;
}




/* The "show" class is added to the filtered elements */
.show {
  display: block;
}

/* Style the buttons */
.btn {
  border: none;
  outline: none;
  padding: 12px 16px;
  background-color: white;
  cursor: pointer;
}

/* Add a grey background color on mouse-over */
.btn:hover {
  background-color: pink;
}

/* Add a dark background color to the active button */
.btn.active {
  background-color: red;
  color: white;
}

@media (max-width: 768px) {

  .card-small{
    height: 300px;
  }

  .card-medium{
    height: 300px;
  }

  .card-large{
    height: 300px;
  }

  .card-it-back{
    background-image: url("~static/images/cards/sourdata_sm.png");
  }

}



</style>
