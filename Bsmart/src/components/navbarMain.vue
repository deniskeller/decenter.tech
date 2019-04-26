<template>
  
  <div class="header_nav">
    
    <div class="header-nav_left">
      <div class="header_nav-logo">
        <img src="../assets/Logo.svg" alt="">
      </div>
    </div>
    
    <div class="header-nav_right">
      
      
      <scrollactive class="my-nav" v-on:itemchanged="onItemChanged" active-class="active" :offset="80" :duration="800" bezier-easing-value=".5,0,.35,1">
        <ul class="header_nav-navbar">
          <li><a href="#bsmart" class="scrollactive-item">Что такое BitSmart?</a></li>
          <li><a href="#advantages" class="scrollactive-item">Преимущества</a></li>
          <li><a href="#getting" class="scrollactive-item">Как получить токен?</a></li>
          <li><a href="#team" class="scrollactive-item">Командам</a></li>
          <li><a href="#questions" class="scrollactive-item">FAQ</a></li>
        </ul>
      </scrollactive>
      
      
      <div class="header_nav-social">
        <img class="social-img inst" src="../assets/instagram.svg" @click="goTo('/myContracts');">
        <img class="social-img fb" src="../assets/facebook.svg">
        <img class="social-img vk" src="../assets/telegram.svg">
      </div>
      
      <div class="header_nav-lang">
        <transition name="fade" mode="out-in">
          <div class="lang-item" @click="isShowing ^= true">RU</div>
        </transition>
        
        <transition name="fade">
          <ul class="other" v-show="isShowing">
            <li>EN</li>
            <li>DE</li>
          </ul>
        </transition>
      </div>
      
      <div class="header_nav-login">
        
        <div class="btn btn-check" @click="goTo('/register');">Регистрация</div>
        
        <div class="btn btn-entrance" @click="goTo('/login');">
            <img class="entrance-img login_hover" src="../assets/login_hover.svg" alt="">
            <img class="entrance-img login_activ" src="../assets/login.svg" alt="" >Вход
        </div>
        
      </div>
      
    </div>
    <transition name="fade" mode="out-in">
       <div class="menu-btn" >
        <i class="material-icons menu" v-if="!show" @click="show = !show" key="menu">menu</i>
        <i class="material-icons clear" v-else @click="show = !show" key="clear">clear</i>
      </div>
    </transition>  
   
    <transition name="fade">
      <div class="menu-mobile" v-if="show">
      
          <div class="header-top__menu-mobile">
            <img src="../assets/Logo.svg" class="logo_mobile">
            
            
            <scrollactive class="my-nav" v-on:itemchanged="onItemChanged" active-class="active" :offset="80" :duration="800" bezier-easing-value=".5,0,.35,1">
              <ul class="header_nav-navbar">
                <li><a href="#bsmart">Что такое BitSmart?</a></li>
                <li><a href="#advantages">Преимущества</a></li>
                <li><a href="#getting">Как получить токен?</a></li>
                <li><a href="#team">Командам</a></li>
                <li><a href="#questions">FAQ</a></li>
              </ul>
            </scrollactive>
            
            
          </div>
          
          <div class="header_nav-social">
            <img class="social-img inst" src="../assets/instagram.svg">
            <img class="social-img fb" src="../assets/facebook.svg">
            <img class="social-img vk" src="../assets/telegram.svg">
          </div>
          
          <div class="header_nav-login">
            
            <div class="header_nav-lang">
              <transition name="fade" mode="out-in">
                <div class="lang-item" @click="isShowing ^= true">RU</div>
              </transition>
              
              <transition name="fade">
                <ul class="other" v-show="isShowing">
                  <li>EN</li>
                  <li>DE</li>
                </ul>
              </transition>
            </div>
          
            <div class="btn btn-check" @click="goTo('/register');">Регистрация</div>
            
              <div class="btn btn-entrance" @click="goTo('/login');">
                  <img class="entrance-img login_hover" src="../assets/login_hover.svg" alt="">
                  <img class="entrance-img login_activ" src="../assets/login.svg" alt="">Вход
              </div>
            
          </div>
          
      </div>
    </transition>
    
  </div>
  
</template>

<style scoped>
@import '../main.less';

.header-block .header_nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}
.header-block .header_nav .header-nav_left .header_nav-logo {
  width: 126px;
  height: 28px;
  cursor: pointer;
  margin-right: 50px;
}
.header-block .header_nav .header-nav_left .header_nav-logo:hover {
  opacity: 0.5;
}
.header-block .header_nav .header-nav_right {
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
}
.header-block .header_nav .header-nav_right .header_nav-navbar {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding-top: 6px;
  margin-right: 54px;
}
.header-block .header_nav .header-nav_right .header_nav-navbar li {
  font-size: 12px;
  line-height: 14px;
  color: #fff;
  margin-right: 45px;
  cursor: pointer;
  list-style: none;
}
.header-block .header_nav .header-nav_right .header_nav-navbar li a {
  color: #fff;
  text-decoration: none;
}
.header-block .header_nav .header-nav_right .header_nav-navbar li:last-child {
  margin-right: 0px;
}
.header-block .header_nav .header-nav_right .header_nav-navbar li:after {
  display: block;
  content: "";
  height: 2px;
  width: 0%;
  background-color: #3b60d0;
  transition: width 0.4s ease-in-out;
}
.header-block .header_nav .header-nav_right .header_nav-navbar li:hover:after,
.header-block .header_nav .header-nav_right .header_nav-navbar li:focus:after {
  width: 100%;
}
.header-block .header_nav .header-nav_right .header_nav-social {
  display: flex;
  flex-direction: row;
  margin-right: 43px;
}
.header-block .header_nav .header-nav_right .header_nav-social .social-img {
  width: 15px;
  height: 15px;
  margin-right: 20px;
  cursor: pointer;
}
.header-block .header_nav .header-nav_right .header_nav-social .social-img:last-child {
  margin-right: 0px;
}
.header-block .header_nav .header-nav_right .header_nav-social .social-img:hover {
  opacity: 0.5;
}
.header-block .header_nav .header-nav_right .header_nav-lang {
  width: 35px;
  font-size: 12px;
  line-height: 24px;
  text-transform: uppercase;
  color: #fff;
  background-image: url('../assets/mini_arrow.png');
  background-repeat: no-repeat;
  background-position: 20px 10px;
  cursor: pointer;
  position: relative;
}
.header-block .header_nav .header-nav_right .header_nav-lang .other {
  position: absolute;
}
.header-block .header_nav .header-nav_right .header_nav-lang .other li {
  list-style: none;
}
.header-block .header_nav .header-nav_right .header_nav-lang .other li:hover {
  background: #1e2123;
  width: 30px;
}
.header-block .header_nav .header-nav_right .header_nav-login {
  margin-left: 35px;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.header-block .header_nav .header-nav_right .header_nav-login .btn {
  font-size: 12px;
  color: #fff;
}
.header-block .header_nav .header-nav_right .header_nav-login .btn-check {
  line-height: 29px;
  width: 115px;
  background: #4169e2;
  margin-right: 34px;
  text-align: center;
  border-radius: 50px;
  border: 1px solid #4169e2;
  cursor: pointer;
}
.header-block .header_nav .header-nav_right .header_nav-login .btn-check:hover {
  background: none;
  box-sizing: border-box;
}
.header-block .header_nav .header-nav_right .header_nav-login .btn-entrance {
  display: flex;
  align-items: center;
  cursor: pointer;
}
.header-block .header_nav .header-nav_right .header_nav-login .btn-entrance .login_hover {
  display: none;
}
.header-block .header_nav .header-nav_right .header_nav-login .btn-entrance img {
  width: 13px;
  height: 13px;
  margin-right: 5px;
}
.header-block .header_nav .header-nav_right .header_nav-login .btn-entrance:hover {
  color: #3b60d0;
}
.header-block .header_nav .header-nav_right .header_nav-login .btn-entrance:hover .login_hover {
  display: block;
}
.header-block .header_nav .header-nav_right .header_nav-login .btn-entrance:hover .login_activ {
  display: none;
}
.header-block .header_nav .menu-btn {
  z-index: 1000;
  display: none;
  width: 22px;
  height: 22px;
  position: relative;
}
.header-block .header_nav .menu-mobile {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  padding-top: 75px;
  background: #0f151b;
}
.header-block .header_nav .menu-mobile .logo_mobile {
  width: 126px;
}
.header-block .header_nav .menu-mobile .header-top__menu-mobile {
  margin-left: 20px;
  margin-right: 20px;
}
.header-block .header_nav .menu-mobile .header-top__menu-mobile .header_nav-navbar {
  width: 100%;
  display: inlime-flex;
  flex-direction: column;
  margin-top: 30px;
}
.header-block .header_nav .menu-mobile .header-top__menu-mobile .header_nav-navbar li {
  display: block;
  font-size: 12px;
  line-height: 14px;
  color: #fff;
  cursor: pointer;
  list-style: none;
  margin-bottom: 25px;
  max-width: 120px;
}
.header-block .header_nav .menu-mobile .header-top__menu-mobile .header_nav-navbar li a {
  color: #fff;
  text-decoration: none;
}
.header-block .header_nav .menu-mobile .header-top__menu-mobile .header_nav-navbar li:after {
  display: block;
  content: "";
  height: 2px;
  width: 0%;
  background-color: #3b60d0;
  transition: width 0.4s ease-in-out;
}
.header-block .header_nav .menu-mobile .header-top__menu-mobile .header_nav-navbar li:hover:after,
.header-block .header_nav .menu-mobile .header-top__menu-mobile .header_nav-navbar li:focus:after {
  width: 100%;
}
.header-block .header_nav .menu-mobile .header_nav-social {
  display: flex;
  flex-direction: row;
  margin-right: 20px;
  margin-left: 20px;
  margin-bottom: 30px;
}
.header-block .header_nav .menu-mobile .header_nav-social .social-img {
  width: 15px;
  height: 15px;
  margin-right: 20px;
  cursor: pointer;
}
.header-block .header_nav .menu-mobile .header_nav-social .social-img:last-child {
  margin-right: 0px;
}
.header-block .header_nav .menu-mobile .header_nav-social .social-img:hover {
  opacity: 0.5;
}
.header-block .header_nav .menu-mobile .header_nav-lang {
  width: 35px;
  font-size: 12px;
  line-height: 24px;
  text-transform: uppercase;
  color: #fff;
  background-image: url('../assets/mini_arrow.png');
  background-repeat: no-repeat;
  background-position: 20px 10px;
  cursor: pointer;
  position: relative;
}
.header-block .header_nav .menu-mobile .header_nav-lang .other {
  position: absolute;
}
.header-block .header_nav .menu-mobile .header_nav-lang .other li {
  list-style: none;
}
.header-block .header_nav .menu-mobile .header_nav-lang .other li:hover {
  background: #1e2123;
  width: 30px;
}
.header-block .header_nav .menu-mobile .header_nav-login {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 20px;
  margin-bottom: 30px;
}
.header-block .header_nav .menu-mobile .header_nav-login .btn {
  font-size: 12px;
  color: #fff;
}
.header-block .header_nav .menu-mobile .header_nav-login .btn-check {
  line-height: 29px;
  width: 115px;
  background: #4169e2;
  margin-right: 34px;
  text-align: center;
  border-radius: 50px;
  border: 1px solid #4169e2;
  cursor: pointer;
}
.header-block .header_nav .menu-mobile .header_nav-login .btn-check:hover {
  background: none;
  box-sizing: border-box;
}
.header-block .header_nav .menu-mobile .header_nav-login .btn-entrance {
  display: flex;
  align-items: center;
  cursor: pointer;
}
.header-block .header_nav .menu-mobile .header_nav-login .btn-entrance .login_hover {
  display: none;
}
.header-block .header_nav .menu-mobile .header_nav-login .btn-entrance img {
  width: 13px;
  height: 13px;
  margin-right: 5px;
}
.header-block .header_nav .menu-mobile .header_nav-login .btn-entrance:hover {
  color: #3b60d0;
}
.header-block .header_nav .menu-mobile .header_nav-login .btn-entrance:hover .login_hover {
  display: block;
}
.header-block .header_nav .menu-mobile .header_nav-login .btn-entrance:hover .login_activ {
  display: none;
}

@media (max-width: 1211px) {
  .header-nav_right {
    width: 100%;
    justify-content: space-between !important;
    margin-top: 30px;
  }
}
@media (max-width: 1135px) {
  .header-nav_right {
    display: none !important;
  }
  .menu-btn {
    display: block !important;
  }
}
@media (max-width: 768px) {
  .header_video {
    justify-content: center !important;
  }
  .header_video-title {
    text-align: center;
  }
  .spot {
    margin-left: 0px !important;
  }
  .down-arrow {
    height: 50px;
  }
}
@media (max-width: 600px) {
  .header {
    height: auto !important;
  }
  .header_video {
    margin-top: 30px !important;
    margin-bottom: 30px !important;
  }
  .header_video-title {
    font-size: 24px !important;
  }
  .spot {
    font-size: 24px !important;
    line-height: 50px !important;
    max-width: 340px !important;
    margin: 0 auto !important;
  }
}
@media (max-width: 320px) {
  .header-block .header_video .header_video-item .item-img {
    width: 112px;
    height: 70px;
    margin-bottom: 0px;
  }
}

</style>


<script>
export default {
  name: "navbarMain",
  data() {
    return{
      show: false,
      isShowing: false
    }
  },
  methods: {
    goTo(path) {
      this.$router.push({ path: path });
    }
  }
};
</script>
