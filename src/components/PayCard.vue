<template>
    <div class="card-wrapper">
        <div class="card">
            <div class="top-card">
                <div class="menu">
                    <span></span>
                </div>
                <img class="settings" src="../assets/visa-settings.png" alt="">
                <h1 class="payment">Payment</h1>
            </div> 

            <!--plus symbol decoration-->
            <img class="plus-left" src="../assets/plus.png" alt="plus">
            <img class="plus-right" src="../assets/plus.png" alt="plus">

            <!--visa card-->
            <vue-flip
            active-click
            height="100px"
            width="325px">
                <template  v-slot:front>
                    <div class="visa">
                        <img class="visa-logo" src="../assets/visa.png" alt="visa">
                        <div class="number-visa">
                            <img class="num-img" src="../assets/visa-num.png" alt="number visa">
                        </div>
                        <div class="visa-group">
                            <img style="margin-left:15px;" src="../assets/123.png" alt="subnumber">
                            <img class="visa-name" src="../assets/visa-name.png" alt="visa name">
                        </div>
                        <div class="visa-date">
                            <img class="valid" src="../assets/valid.png" alt="valid date">
                            <img class="date" src="../assets/date.png" alt="date">
                        </div>
                    </div>
                </template>
                <template v-slot:back>
                    <div class="visa">
                        <div class="magnetic-bar">
                            <h1 class="phone-num">915 123 123</h1>
                        </div>
                        <div class="sec-code">
                            <p class="sec-number">389</p>
                        </div>
                        <div class="label"></div>
                    </div>
                </template>
            </vue-flip>
            <!-- END visa card -->

            <img class="plus-left-bot" src="../assets/plus.png" alt="plus">
            <div class="bottom-card">
                <img class="pag" src="../assets/visa-pagination.png" alt="">
                <h1 class="total">TOTAL</h1>
            </div>
            <div class="bottom-card">
                <h1 class="price">{{price}}</h1>
            </div>
            <img class="plus-right-bot" src="../assets/plus.png" alt="plus">
            <div class="bottom-card">
                <h1 class="pay-now">Pay Now</h1>
                <img class="touch-id" src="../assets/touch-id.png" alt="">
            </div>
        </div>
    </div>
</template>

<script>
import VueFlip from 'vue-flip';

export default {
    name: 'PayCard',
    components: {
        'vue-flip': VueFlip
    },
    data () {
        return {
            price: '$0',
            priceNumber: 0
        }
    },
    created(){
        this.$root.$on('newBuy', () => {
            this.priceNumber += 50;
            this.price = "$" + String(this.priceNumber);
        })
    }
}
</script>

<style scoped>
.card-wrapper{
    display: grid;
    align-items: center;
    justify-content: center;
}

.card {
    width: 350px;
    height: 600px;
    background-color: white;
    align-self: center;
    border-radius: 25px;
	box-shadow: 0 10px 13px -1px #777;
}

.top-card {
    background-image: linear-gradient(to top, #359fe7, #2299ef, #1b91f6, #2989fb, #3f7ffe, #4a79ff, #5672ff, #626bff, #6467ff, #6762ff, #6a5eff, #6d59ff);
    width: 100%;
    height: 180px;
    border-top-right-radius: 25px;
    border-top-left-radius: 25px;
    text-align: center;
}

.menu {
    float: left;
    width: 25px;
    height: 4px;
    background-color: white;
    margin-left: 30px;
    margin-top: 30px;
    cursor: pointer;
}

.menu::after {
	float: left;
    width: 50%;
    height: 100%;
    background-color: white;
    margin-top: 8px;
	content: '';
}

.menu::before {
	float: left;
    width: 0%;
    height: 100%;
    background-color: white;
    margin-top: -8px;
	content: '';
}

.menu:hover::after {
    width: 100%;
    transition: all 0.30s ease-in-out;
}

.menu:hover::before {
    width: 100%;
    transition: all 0.40s ease-in-out;
}

.settings {
    margin-right: 20px;
    margin-top: 20px;
    float:right;
    cursor: pointer;
    transition: transform .8s ease-in-out;
}

.settings:hover {
    transform: rotate(180deg);
}

.payment{
    padding-top: 10px;
    padding-left: 5px;
    color: white;
    font-family: Tahoma;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 43px;
}

/*VISA CARD */
.visa {
    width:300px;
    height: 180px;
    background-color: #F1F1F1;
    margin-left: 25px;
    margin-top: -90px;
    border-radius: 15px;
    box-shadow: 0 3px 13px -6px #777;
    cursor: pointer;
}

/* front card*/
.visa-logo {
    float:right;
    margin-top: 20px;
    margin-right: 35px;
}
.number-visa {
    display: flex;
    width: 100%;
    padding-top: 40px;
    flex-wrap: wrap;
    
}
.num-img {
    width: 80%;
    margin-left: 15px;
}

.visa-group {
    display: inline-block;
}

.visa-name {
    display: block;
    width: 80%;
    margin-left: 15px;
}

.visa-date {
    float:right;
    margin-top: 18px;
    margin-right: 30px;
}

.valid {
    width: 30%;
    margin-right: 3px;
}

.date {
    width: 60%;
}
/*end front card*/

/*back card*/
.magnetic-bar {
    width: 300px;
    height: 40px;
    background-color: #8770FF;
    position: absolute;
    margin-top: 20px;
    text-align: center;
}

.phone-num {
    font-family:'Segoe UI';
    font-style: normal;
    font-weight: lighter;
    color: white;
    font-size: 18px;
}

.sec-code {
    position: absolute;
    width:100px;
    height: 25px;
    margin-top: 70px;
    margin-left: 20px;
    background-color: #8870ff4f;
    text-align: right;
}

.sec-number {
    margin-right: 8px;
    margin-top: 2px;
    font-style: italic;
}

.label {
    position:absolute;
    width: 60px;
    height: 30px;
    margin-top: 130px;
    margin-left: 20px;
    border-radius: 50px;
    background-color: #8870ffb4;
}

/*end back card*/
/*END VISA CARD */

.bottom-card {
    width: 100%;
    display: grid;
    justify-content: center;
}

.pag {
    margin-top: 20px;
}

.total {
    margin-top: 60px;
    font-family: Tahoma;
    font-style: normal;
    font-weight: lighter;
    font-size: 18px;
    color:#777777;
}

.price {
    font-family: Tahoma;
    font-style: normal;
    font-weight: bold;
    font-size: 25px;
    color: #7054FF;
}

.pay-now {
    margin-top: 45px;
    font-family: Tahoma;
    font-style: normal;
    font-weight: lighter;
    font-size: 16px;
    color: #7054FF;
}

.touch-id {
    margin-top: 10px;
    transition: 0.3s;
}

.touch-id:hover {
    transform: scale(1.05);
}

.plus-left {
    width: 35px;
    position:absolute;
    left:0;
    margin-left: 10%;
    z-index: -1;
}

.plus-left-bot {
    width: 25px;
    position:absolute;
    left:0;
    margin-left: 20%;
    z-index: -1;
}

.plus-right {
    width: 35px;
    position:absolute;
    right: 0;
    margin-right: 10%;
    z-index: -1;
}

.plus-right-bot {
    width: 20px;
    position:absolute;
    right: 0;
    margin-right: 25%;
    z-index: -1;
}

</style>