<template>
    <div class="card" :style="{backgroundColor: bgColor}">
        <transition name="fade">
            <img class="shoe" alt="shoe" src="../assets/shoe-logo.png" v-if="!isDescription" @click="description">
        </transition>
        <transition name="fade">
            <div class="des" v-if="isDescription" @click="description">
                <b class="des-title">Sneaker {{color}}</b>
                <p class="des-text">This is the vesion {{color}} of the best brand of sneaker. Only 50$, just press the buy button and add it to cart.</p>
            </div>
        </transition>
        <h3 class="color" v-if="!isDescription">{{color}}</h3>
        <div class="container" :style="{backgroundColor: bgColor}">
            <button class="coin" @click="playAnimation">
                <h2 class="simbol" v-if="isDollar">$</h2>
                <h2 class="simbol" v-if="!isDollar">€</h2>
            </button>
            <button class="price">
                
                <number
                class="bold transition"
                ref="number2"
                :from="numberFrom"
                :format="theFormat"
                animationPaused
                :to="numberTo"
                :duration="duration"
                easing="Power4.easeOut"/>

                <b v-if="isDollar"> $</b>
                <b v-if="!isDollar"> €</b>
            </button>
            <button class="buy" :style="{color: bgColor}" @click="buySneaker()"><b>BUY</b></button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SneakerCard',
    props: {
        color: String,
        bgColor: String
    },
    data() {
        return {
            numberFrom: 50,
            numberTo: 43,
            duration: 2,
            isDollar: true,
            isDescription: false
        };
    },   
    methods: {
        theFormat(number) {
            return number.toFixed(0);
        },
        playAnimation() {
            this.isDollar = !this.isDollar;
            if (this.isDollar){
                this.numberFrom = 50;
                this.numberTo = 43;
            }
            else{
                this.numberFrom = 43;
                this.numberTo = 50;
            }
            this.$refs.number2.play();
        },
        buySneaker() {
            this.$root.$emit('newBuy');
        },
        description() {
            this.isDescription = !this.isDescription;
        }
    }
}
</script>

<style scoped>
.card{
    background-color: #222A2C;
    width: 200px;
    border-radius: 30px;
    margin-top: 30px;
    transition: 0.3s;
    z-index: 1;
}

.card:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 18px 0 rgba(0,0,0,0.2);
}

.shoe{
    width:100%;
    margin-top: 15px;
}

.des {
    width: 100%;
    height: 145px;
    text-align: center;
    text-decoration: none;
    font-family: Tahoma;
    font-size: 20px;
    color: white;
    padding-top: 15px;
}

.des-text {
    margin-top: 8px;
    text-decoration: none;
    font-family: Tahoma;
    font-size: 18px;

}

.fade-enter-active {
  transition: opacity 1s
}

.fade-enter,
.fade-leave-to
{
  opacity: 0
}
.container {
    background-color: #222A2C;
    height: 80px;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
}

.coin{
    width: 38px;
    height: 38px;
    display: inline-block;
    border-radius: 50%;
    background-color: white;
    margin-top: 28px;
    margin-left: 13px;
    text-align: center;
    cursor: pointer;
    text-decoration: none;
    border: none;
    transition: 0.2s;
}


button:focus {
    outline-style: none;
}

.simbol{
    margin: -2.5px 0px 0px 0px;
    color:  #222A2C;
    font-family: Tahoma;
    font-style: normal;
    font-size: 21px;
}

.price{
    background-color:white ;
    border: none;
    color:  #222A2C;
    text-align: center;
    text-decoration: none;
    font-family: Tahoma;
    font-style: normal;
    font-size: 14px;
    padding: 5px 15px 5px 15px;
    vertical-align:middle;
    border-radius: 12px;
    margin-left: 7px;
}

.bold {
  font-weight: bold;
  font-size: 14px;
}
.transition {
  transition: all 0.3s ease-in;
}

.buy{
    background-color:white ;
    border: none;
    color: #222A2C;
    text-align: center;
    text-decoration: none;
    font-family: Tahoma;
    font-style: normal;
    font-size: 14px;
    padding: 5px 15px 5px 15px;
    vertical-align:middle;
    border-radius: 12px;
    cursor: pointer;
    margin-left: 7px;
    transition: 0.2s;
}

.buy:hover, .coin:hover {
    transform: scale(1.08);
    box-shadow: 0 10px 18px 0 rgba(0,0,0,0.2);
}

.color{
    margin: 0;
    text-align: center;
    color: white;
    font-family: Tahoma;
    font-style: normal;
    font-size: 20px;
}

</style>