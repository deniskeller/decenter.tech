<template>
  <div class="header-block">
    <div class="container">
      <div class="header">
          <navbarMain/>
          <div class="header_video">
            <div class="header_video-title">
              CLICK. INVEST. TRADE.
              <span class="spot">WE DO ALL THE HARD</span>
              WORK FOR YOU.
            </div>
            
            <div class="header_video-item">
              <img class="item-img" src="../assets/PlayButtonBig.svg" alt="">
              <div class="btn-show">Смотреть видео</div>
            </div>
            
            
          </div>
          
          <div class="header_down-arrow">
            <img class='down-arrow' src="../assets/scrolldown.gif">
          </div>
      </div>
    </div>
    
    
  </div>
  
  
  
</template>

<style scoped>
@import '../main.less';

.fade-enter-active,
.fade-leave-active{
  transition: opacity .3s ease;
}
.fade-enter,
.fade-leave-to{
  opacity: 0;
}
.menu, .clear {
  cursor: pointer;
  font-size: 24px;
  color: #fff;
  transition: all .3s ease;
}


/*headerBlock component*/
.header-block {
  background: url('../assets/Background.jpg') no-repeat center;
  background-size: cover;
  position: relative;
}
.header-block .header {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 74px;
  padding-bottom: 20px;
}

.header-block .header_video {
  max-width: 990px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}
.header-block .header_video .header_video-title {
  max-width: 590px;
  width: 100%;
  font-size: 46px;
  font-weight: bold;
  text-transform: uppercase;
  color: #fff;
}
.header-block .header_video .header_video-title .spot {
  display: block;
  text-align: center;
  font-size: 50px;
  line-height: 75px;
  max-width: 590px;
  width: 100%;
  background: #3e64d5;
  margin-left: -25px;
}
.header-block .header_video .header_video-item {
  cursor: pointer;
  text-align: center;
}
.header-block .header_video .header_video-item .item-img {
  width: 136px;
  height: 111px;
  margin-bottom: 19px;
}
.header-block .header_video .header_video-item .btn-show {
  font-family: Raleway, sans-serif;
  font-size: 14px;
  color: #fff;
}
.header-block .header_video .header_video-item:hover {
  -webkit-transform: scale();
  transform: scale(0.8, 0.8);
  transition: 1s linear;
}
.header-block .header_down-arrow {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.header-block .header_down-arrow .down-arrow {
  width: 144px;
  height: 98px;
  cursor: pointer;
}
.header-block .header_down-arrow .down-arrow:hover {
  opacity: 0.5;
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
import navbarMain from "../components/navbarMain.vue";
export default {
  name: "headerBlock",
  components: {
    navbarMain
  },
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
