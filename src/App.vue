<template>
  <div id="app">
    
    <NavBar/>
    <div style="height: 100px"></div>
    <vue-particles
        class="particles"
        color="#6D59FF"
        :particleOpacity="1"
        :particlesNumber="80"
        shapeType="circle"
        :particleSize="4"
        linesColor="#fff"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.6"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
      >
      </vue-particles>
      
    <div :class="[{'cards':!isMobile}, {'smallCard': isMobile}]">
      <SneakerCard color="black" bgColor="#222A2C"/>
      <SneakerCard color="yellow" bgColor="#D6BE4A"/>
      <SneakerCard color="blue" bgColor="#557CE2"/>
      <SneakerCard color="pink" bgColor="#ED5ECD"/>
    </div>
    
    <div class="vec">
      <div :class="[{'cards':!isMobile}, {'smallCard': isMobile}]">
        <SneakerCard color="green" bgColor="#00BF97"/>
        <SneakerCard color="red" bgColor="#D16F51"/>
        <SneakerCard color="purple" bgColor="#8E60B4"/>
        <SneakerCard color="pink" bgColor="#B6804C"/>
      </div> 
    </div>
    <div class="bg-bottom"></div>
  </div>
</template>

<script>
import NavBar from './components/NavBar'
import SneakerCard from './components/SneakerCard'

export default {
  name: 'App',
  components: {
    NavBar,
    SneakerCard
  },
  data:( ) => {
    return {
      isMobile: false
    }
  },
  methods: {
    handleView(){
      this.isMobile = window.innerWidth <= 420;
    }
  },
  mounted() {
    window.addEventListener('resize', () => {
        this.handleView();
    });  
  },
  created() {
    this.handleView();
  },
}
</script>

<style>

*{
  margin: 0;
}

#app {
  font-family: Tahoma,Verdana,Segoe,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.cards{
  display: flex;
  flex-wrap: wrap;
  justify-content:space-evenly;
  margin-left: 100px;
  margin-right: 100px;
}

.smallCard{
  display: flex;
  flex-wrap: wrap;
  justify-content:space-evenly;
  margin-left: 15px;
  margin-right: 15px;
}

.particles {
  position: absolute;
  width: 100%;
  height:65%;
}

.vec{
  background-image: linear-gradient(to top, #359fe7, #2299ef, #1b91f6, #2989fb, #3f7ffe, #4a79ff, #5672ff, #626bff, #6467ff, #6762ff, #6a5eff, #6d59ff);
  margin-top: 20px;
  border-top-left-radius: 40px;
  transform: skewY(-2deg);
  z-index: -1;
}

.vec::before {
  content: "";
  width: 40px;
  height: 40px;
  background-color: #6D59FF;
  position:absolute;
  top: -39px;
  right: 0;
  z-index: -3;
}

.vec::after {
  content: "";
  width: 80px;
  height: 80px;
  background-color: white;
  top: -80px;
  position:absolute;
  right: 0;
  border-radius: 50%;
  z-index: -2;
}

.vec .cards{
  transform: skewY(2deg);
}

.bg-bottom {
  background-color: #359FE7;
  width: 100%;
  height: 150px;
  margin-top: -50px;
}
</style>
