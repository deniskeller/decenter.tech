<template>
  <div class="modal-bg">
    <div class="modal-block">
      <div class="overflow"></div>
      <img src="../assets/Logo.svg" alt="" class="logo">
      <div class="modal-block_title">Восстановить пароль</div>
      <div class="modal-block_input modal-block_input-mail">
        <input class="input input-email" type="text" placeholder="E-mail" name="" autofocus required/>
      </div>
      <div class="confirm-text">Новый пароль отправлен на ваш e-mail</div>
      
      <div class="modal-block_btn" >Отправить</div>
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
  name: "forgot",
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
