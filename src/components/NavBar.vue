<template>
    <div class="navbar">
        <div class="side-menu">
            <ul>
                <li>about</li>
                <li>contact</li>
            </ul>
        </div>
        <div class="header" :class="{'open':showNav}">
            <!-- Logo -->
            <transition name="anim" appear 
            :appear-class="appear"
            :appear-active-class="appear-active">
                <img v-if="showLogo" alt="Sneakers logo" src="../assets/logo-sneakers.png" >
            </transition>
            <!-- Brand name -->
            <h1 class="sortBrand" v-if="!showLogo">SNK</h1>
            <transition name="anim" appear 
            :appear-class="appear"
            :appear-active-class="appear-active">
                <h1 class="brand" v-if="showBrand">SNEAKERS</h1>
            </transition>
            <div :class="['bt-menu-trigger', {'bt-menu-open': showNav}, 'menu']" v-if="mobileView" @click="showNav= !showNav">
                <span></span>
            </div>
            <button class="contact" v-if="!mobileView">contact</button>
            <button class="about" v-if="!mobileView">about</button>
            <a class="carrito" href="#">
                <div class="count-buy" v-if="buyCount >= 1"><h6 class="buy-counter">{{ buyCount }}</h6></div>
                <!-- Wave animation -->
                <div :class="{'container': buyAnim}">
                    <div class="box">
                        <span style="--i:1;"></span>
                        <span style="--i:2;"></span>
                        <span style="--i:3;"></span>
                    </div>
                </div>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NavBar',
    data: ( ) => {
        return {
            mobileView: false,
            showNav: false,
            showBrand: true,
            showLogo:true,
            buyAnim: false,
            buyCount: 0
        }
    },
    methods: {
        handleView(){
            this.mobileView = window.innerWidth <= 700;
            this.showBrand = window.innerWidth >= 500;
            this.showLogo = window.innerWidth >= 420;
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
        });
        
    },
    created(){
        this.handleView(),
        this.$root.$on('newBuy', () => {
            this.buyCount += 1;
            this.buyAnim = true;
            setTimeout(() => this.buyAnim = false, 3000);
        })
    }
}
</script>

<style scoped>


.side-menu {
    z-index: 2;
    width: 100%;
    height: 70px;
    position: fixed;
    text-align:right; 
    padding-top: 30px;
    background: rgb(109,89,255);
    background: linear-gradient(180deg, rgba(109,89,255,1) 0%, rgba(53,159,231,1) 85%);
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
    z-index: 2;
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
    color: #6D59FF;
}

.sortBrand {
    display: inline-block;
    font-family: Tahoma;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 43px;
    color: #5A6C79;
    margin-top: 30px;
    margin-left: 20px
}

.anim-enter-to,
.anim-leave-to {
  transition: all 2s ease;
}

.anim-enter, .anim-leave-to {
  transform: translateX(50px);
  opacity: 0;
}

.container{
    position: absolute;
    display: flex;
    justify-content: center;
    float: right;
    align-items: center;
    flex-direction: column;
    z-index: -1;
}

.container .box {
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.container .box span {
    position: absolute;
    box-sizing: border-box;
    border: none;
    border-radius: 50%;
    background: rgba(90, 108, 121, 0.25);
    animation: animate 2s linear infinite;
    animation-delay: calc(0.8s * var(--i));
}

@keyframes animate {
    0%
    {
        width: 50px;
        height: 50px;
    }
    100%
    {
        width: 80px;
        height: 80px;
    }
}

.carrito {
  height: 50px;
  width: 50px;
  border-radius: 50%;
  vertical-align: middle;
  background-color: #6D59FF;
  background-image: url(../assets/carrito.png);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
  float: right;
  margin-top: 30px;
  margin-right:20px;
  transition: 0.3s;
}

.carrito:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 18px 0 rgba(0,0,0,0.2);
}

.count-buy {
    height: 15px;
    width: 15px;
    border-radius: 50%;
    vertical-align: middle;
    background-color: #D16F51;
    float:right
}

.buy-counter {
    position: absolute;
    margin-top: -0.8px;
    margin-left: 3.5px;
    font-size: 14px;
    font-style: normal;
    color: white;
}

.menu {
    float: right;
    vertical-align: middle;
    margin-top: 28px;
    margin-right: 15px;
}

.about, .contact {
    background-color:#6D59FF ;
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
    transition: 0.3s;
}

.about:hover, .contact:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 18px 0 rgba(0,0,0,0.2);
}

/*Hamburger animation */
.bt-menu-trigger {
    font-size: 25px;
    position: relative;
    display: inline-block;
    width: 1.9em;
    height: 2em;
    cursor: pointer;
}

.bt-menu-trigger span {
	position: absolute;
	top: 50%;
	left: 0;
	display: block;
	width: 100%;
	height: 0.2em;
	margin-top: -0.1em;
	background-color: #6D59FF;
	-webkit-touch-callout: none;
	-webkit-user-select: none;
	-khtml-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	-webkit-transition: background-color 0.3s;
	transition: background-color 0.3s;
}


.bt-menu-trigger span:after,
.bt-menu-trigger span:before {
	position: absolute;
	left: 0;
	width: 100%;
	height: 100%;
	background: #6D59FF;
	content: '';
	-webkit-transition: -webkit-transform 0.5s;
	transition: transform 0.5s;
}

.bt-menu-trigger span:before {
	-webkit-transform: translateY(-0.5em);
	transform: translateY(-0.5em);
}

.bt-menu-trigger span:after {
	-webkit-transform: translateY(0.5em);
	transform: translateY(0.5em);
}

.bt-menu-trigger.bt-menu-open span:before {
	-webkit-transform: translateY(-0.36em) translateX(0.65em) rotate(45deg) scaleX(0.6);
	transform: translateY(-0.35em) translateX(0.65em) rotate(45deg) scaleX(0.6);
}

.bt-menu-trigger.bt-menu-open span:after {
	-webkit-transform: translateY(0.36em) translateX(0.65em) rotate(-45deg) scaleX(0.6);
	transform: translateY(0.35em) translateX(0.65em) rotate(-45deg) scaleX(0.6);
}
/*End Hamburger animation */


</style>