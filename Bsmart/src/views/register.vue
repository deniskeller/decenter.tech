<template>
  <div class="modal-bg">
    <div class="modal-block">
      <div class="overflow"></div>
      <img src="../assets/Logo.svg" alt="" class="logo">
      <div class="modal-block_title">Регистрация</div>
      <div class="modal-block_input modal-block_input-mail">
        <input class="input input-email" type="text" placeholder="E-mail" name="" autofocus required/>
      </div>
      <div class="modal-block_eth modal-block_personal">
        <input id="eth" type="checkbox"   @click="ethShowing ^= true">
        <label for="eth"></label>
        <div class="personal-items">
          <p class="personal-text">Я согласен на обработку персональных данных</p>
          <p class="personal">Пользовательское соглашение</p>
        </div>
      </div>
      <div class="modal-block_btn" @click="goTo('/registerNext');">Далее</div>
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
  name: "register",
  data() {
    return{
      show: false,
      isShowing: false,
      ethShowing: false,
    }
  },
  methods: {
    goTo(path) {
      this.$router.push({ path: path });
    }
  }
};
</script>
