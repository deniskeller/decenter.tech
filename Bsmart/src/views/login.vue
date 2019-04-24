<template>
  <div class="modal-bg">
    <div class="modal-block">
      <div class="overflow"></div>
      <img src="../assets/Logo.svg" alt="" class="logo">
      <div class="modal-block_title">Войти</div>
      <div class="modal-block_input modal-block_input-mail">
        <input class="input input-email" type="text" placeholder="E-mail" name="" autofocus required/>
        <input class="input password" type="password" placeholder="Пароль" name=""  required/>
      </div>
      
      <div class="modal-block_recaptcha">
        <vue-recaptcha  class="g-recaptcha"
          :sitekey="sitekey">
        </vue-recaptcha>
      </div>
      
      <div class="modal-block_btn" @click="goTo('/');">Войти</div>
      <div class="modal-block_enter modal-block_action">
        <span class="btn-action btn-forgot" @click="goTo('/forgot');">Забыли пароль?</span> <span class="btn-action btn-register" @click="goTo('/register');">Зарегистрироваться</span>
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
import VueRecaptcha from 'vue-recaptcha';
export default {
  name: "login",
  components: { 'vue-recaptcha': VueRecaptcha },
  data() {
    return{
      show: false,
      isShowing: false,
      ethShowing: false,
      sitekey: '6LcFXpwUAAAAAIruxmH51oq0nQ6SsD8au3DFnFxm'
    }
  },
  methods: {
    goTo(path) {
      this.$router.push({ path: path });
    }
  }
};
</script>
