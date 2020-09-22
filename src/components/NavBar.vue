<template>
    <div class="navbar">
        <div class="side-menu">
            <ul>
                <li>about</li>
                <li>contact</li>
            </ul>
        </div>
        <div class="header" :class="{'open':showNav}">
            <img alt="Sneakers logo" src="../assets/logo-sneakers.png" >
            <h1 class="brand">SNEAKERS</h1>
            <a href="javascript:void();" class="btn-menu" v-if="mobileView"
            @click="showNav= !showNav">
                <img src="../assets/menu.svg" alt="menu button" class="menu">
            </a>
            <button class="contact" v-if="!mobileView">contact</button>
            <button class="about" v-if="!mobileView">about</button>
            <a class="carrito" href="#"></a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NavBar',
    data: ( ) => {
        return {
            mobileView: false,
            showNav: false
        }
    },
    methods: {
        handleView(){
            this.mobileView = window.innerWidth <= 700;
        },
        handleMenu(){
            if(this.showNav === true && window.innerWidth > 700){
                this.showNav = false;
            }
        }
    },

    mounted() {
        window.addEventListener('resize', () => {
            this.handleView();
            this.handleMenu();
        })
    },
    created(){
        this.handleView();
    }
}
</script>

<style scoped>


.side-menu {
    z-index: 1;
    width: 100%;
    height: 70px;
    position: fixed;
    text-align:right; 
    padding-top: 30px;
    background-color: #809cb1;
    font-family: Tahoma;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    color: white;
}


li {
    display: block;
    margin-right: 15px;
    margin-top: 5px;
    cursor: pointer;
}

li:hover{
    color: black;
}

.header{
    background-color: white;
    position: fixed;
    right: 0;
    top: 0;
    width: 100%;
    height: 100px;
    z-index: 1;
    transition: 1s transform cubic-bezier(0, .12, .14, 1);
}

.open {
    transform: translateX(-200px);
}

img {
    display: inline-block;
    vertical-align:middle;
    width: 153px;
    height: 120.01px;
}

.brand {
    display: inline-block;
    font-family: Tahoma;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 43px;

    color: #5A6C79;
}

.carrito {
  height: 50px;
  width: 50px;
  border-radius: 50%;
  vertical-align: middle;
  background-color: #5A6C79;
  background-image: url(../assets/carrito.png);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
  float: right;
  margin-top: 30px;
  margin-right:20px;
}

.btn-menu {
    float: right;
}

.menu {
    width: 45px;
    height: 45px;
    vertical-align: middle;
    margin-top: 30px;
    margin-right: 15px;
}

.about, .contact {
    background-color:#5A6C79 ;
    border: none;
    color: white;
    text-align: center;
    text-decoration: none;
    font-family: Tahoma;
    font-style: normal;
    font-size: 16px;
    padding: 5px 15px 5px 15px;
    vertical-align:middle;
    border-radius: 12px;
    float: right;
    margin-top: 40px;
    margin-right: 15px;
    cursor: pointer;
}


</style>