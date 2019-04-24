<template>
  <div class="modal-bg">
    <div class="modal-block">
      <div class="overflow"></div>
      <img src="../assets/Logo.svg" alt="" class="logo">
      <div class="modal-block_title">Регистрация</div>
      <div class="modal-block_input">
        <input class="input first-name" type="text" placeholder="Имя" name="" autofocus required/>
        <input class="input second-name" type="text" placeholder="Фамилия" name=""  required/>
        <input class="input password" type="password" placeholder="Пароль" name=""  required/>
        <input class="input confirm-password" type="password" placeholder="Повторите пароль" name=""  required/>
      </div>
      <div class="modal-block_eth">
        <input id="eth" type="checkbox"   @click="ethShowing ^= true">
        <label for="eth"></label><p class="eth-text" >У меня есть ETH-адрес</p>
      </div>
      
      <div class="modal-block_input modal-block_input-eth" v-show="ethShowing">
        <input class="input eth-address" type="text" placeholder="ETH-адреc" name="" required/>
      </div>
      <div class="confirm-text" >Созданный адрес отправлен на ваш e-mail</div>
      <div class="modal-block_btn" >Зарегистрироваться</div>
      <div class="modal-block_enter">
        Уже есть аккаунт? <span class="enter" @click="goTo('/login');">Войти</span>
      </div>
    </div>
    
    <div class="copyright-block">
      
      <ul class="copyright-block_title">
        <li @click="goTo('/');">Главная страница</li>
        <li class="after">Поддержка</li>
        <li class="lang" @click="isShowing ^= true">
          <img class="earth_blue" src="../assets/earth_blue.svg" alt="">
          <img class="earth_white" src="../assets/earth_white.svg" alt="">Русский
          <ul class="lang-items" v-show="isShowing">
            <li>Английский</li>
            <li>Немецкий</li>
          </ul>
        </li>
      </ul>
      
      <div class="copyright-block_copyright">
        © 2017 - 2019 BitSmart.ru     <span>All rights reserved</span>
      </div>
      
    </div>
    
  </div>
</template>

<style lang="less" scoped>
@import '../modal.less';


  
</style>

<script>
export default {
  name: "registerNext",
  data() {
    return{
      show: false,
      isShowing: false,
      ethShowing: false
    }
  },
  methods: {
    goTo(path) {
      this.$router.push({ path: path });
    }
  }
};
</script>
