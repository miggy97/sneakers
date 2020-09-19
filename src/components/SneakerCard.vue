<template>
    <div class="card" :style="{backgroundColor: bgColor}">
        <img class="shoe" alt="shoe" src="../assets/shoe-logo.png">
        <h3 class="color">{{color}}</h3>
        <div class="container" :style="{backgroundColor: bgColor}">
            <a class="coin" href="#"><h2 class="simbol">$</h2></a>
            <button class="price"><b>25 $</b></button>
            <button class="buy" :style="{color: bgColor}"><b>BUY</b></button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SneakerCard',
    props: {
        color: String,
        bgColor: String
    }   
}
</script>

<style scoped>
.card{
    background-color: #222A2C;
    width: 200px;
    border-radius: 30px;
}

.shoe{
    width:100%;
    margin-top: 15px;
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
}

.simbol{
    margin: 3px;
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