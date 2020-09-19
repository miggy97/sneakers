<template>
    <div class="header">
        <img alt="Sneakers logo" src="../assets/logo-sneakers.png" >
        <h1 class="brand">SNEAKERS</h1>
        <button class="contact">contact</button>
        <button class="about">about</button>
        <a class="carrito" href="#"></a>
    </div>
</template>

<script>
export default {
    name: 'NavBar'
}
</script>

<style scoped>

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