<template>
    <div class="navbar-bg">
      <div class="container">
        <nav id="navigator" class="navbar" :class="{navbaropen: opened}">
          <span class="open-slide" @click="opened = !opened">
            <a class="btn-menu" href="#" >
              <div class="con">
                <div class="bar" :class="{baropened: opened}"></div>
              </div>
            </a>
          </span>
          <span class="profile">
            <div class="profilebox" @click="isShowing ^= true">
              <img class="user-img" src="../assets/main/profile1.png" alt="img">
              <b>Jonathan Doe</b>
              <img class="dropdown-img" src="../assets/main/dropdown.png" alt="">
              <ul class="dropdown-menu" v-show="isShowing">
                <li @click="goTo('/');">На главную</li>
                <li @click="goTo('/myContracts');">Мои контракты</li>
                <li @click="goTo('/contract');">Контракты</li>
                <li @click="goTo('/portfolio');">Портфели</li>
                <li @click="goTo('/products');">Продукты</li>
                <li>Настройки</li>
                <li>Выход</li>
              </ul>
            </div>
            
            <div class="profilexit" @click="goTo('/login');">
              <img class="logout-img" src="../assets/main/logout.svg" alt="">
              <img class="logout-img_hover" src="../assets/main/logout_hover.svg" alt="">
              <b>Выйти</b>
            </div>
              
          </span>
        </nav>
        
        <div id="side-menu" class="side-nav" :class="{sidenavopen: opened}">
          
          <span class="open-slide open-slide__active" @click="opened = !opened">
            <a class="btn-menu btn-menu__active" href="#" >
              <div class="con">
                <div class="bar1" :class="{baropened1: opened}"></div>
              </div>
            </a>
          </span>
          
          <div class="toplist">
            <div class="toplist-item" @click="goTo('/');">
              <div class="toplist-item_img toplist-item_img-logo">
                <img src="../assets/main/logo_menu.png" alt="">
              </div>
            </div>
            <div class="toplist-item">
              <div class="toplist-item_img">
                <img src="../assets/main/dashboard.svg" alt="">
              </div>
              <div class="toplist-item_name">Dashboard</div>
            </div>
            <div class="toplist-item">
              <div class="toplist-item_img">
                <img src="../assets/main/menu.svg" alt="">
              </div>
              <div class="toplist-item_name">Products</div>
            </div>
            <div class="toplist-item">
              <div class="toplist-item_img">
                <img src="../assets/main/network.svg" alt="">
              </div>
              <div class="toplist-item_name">Referds</div>
            </div>
            <div class="toplist-item">
              <div class="toplist-item_img">
                <img src="../assets/main/transfer.svg" alt="">
              </div>
              <div class="toplist-item_name">Transaction</div>
            </div>
          </div>
          
          <div class="botlist">
            <div class="botlist-item">
              <div class="botlist-item_img">
                <img src="../assets/main/headphones.svg" alt="">
              </div>
              <div class="botlist-item_name">Support</div>
            </div>
            <div class="botlist-item">
              <div class="botlist-item_img">
                <img src="../assets/main/info.svg" alt="">
              </div>
              <div class="botlist-item_name">Information</div>
            </div>
          </div>
          
        </div>
        
      </div>
    </div>
  
</template>

<style scoped lang="less">
@import '../main.less';
.navbar-bg{
  background-color: #3b60d0;
}
.navbar{
  height: 46px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #3b60d0;
  margin-bottom: 45px;
}
.open-slide{
  cursor: pointer;
  padding: 10px;
  margin-left: -10px;
}
.navbaropen{
  margin-left: 160px;
}

.navbar a{
  display: block;
  float: left;
  color: #f2f2f2;
  text-align: center;
  text-decoration: none;
  font-size: 17px;
}
.navbar ul{
  margin: 8px 0 0 0;
  list-style: none;
}
.side-nav{
  height: 100%;
  width: 130px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: -180px;
  background-color: #2e3339;
  /*overflow-x: hidden;*/
  transition: 0.3s;
  padding-top: 34px;
  padding-bottom: 78px;
}
.sidenavopen{
  height: 100%;
  width: 130px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #2e3339;
  /*overflow-x: hidden;*/
  transition: 0.3s;
  padding-top: 34px;
  padding-bottom: 78px;
}
.side-nav .btn-menu{
  padding: 10px 10px 10px 30px;
  text-decoration: none;
  font-size: 22px;
  color: #ccc;
  display: block;
  transition: 0.3s;
}
.side-nav .btn-menu:hover{
  color: #fff;
}
.side-nav .btn-close{
  position: absolute;
  top: 0;
  right: 22px;
  font-size: 36px;
  margin-left: 50px;
}
.side-nav {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.side-nav .toplist .toplist-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 45px;
  cursor: pointer;
}
.side-nav .toplist .toplist-item .toplist-item_img {
  width: 25px;
  height: 25px;
  margin-bottom: 10px;
}
.side-nav .toplist .toplist-item .toplist-item_img-logo {
  width: 47px;
  height: 47px;
}
.side-nav .toplist .toplist-item .toplist-item_name {
  font-size: 12px;
  line-height: 12px;
  color: #fff;
}
.side-nav .toplist .toplist-item:hover .toplist-item_name {
  color: #3b60d0;
}
.side-nav .botlist .botlist-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 45px;
  cursor: pointer;
}
.side-nav .botlist .botlist-item .botlist-item_img {
  width: 25px;
  height: 25px;
  margin-bottom: 10px;
}
.side-nav .botlist .botlist-item .botlist-item_name {
  font-size: 12px;
  line-height: 12px;
  color: #fff;
}
.side-nav .botlist .botlist-item:hover .botlist-item_name {
  color: #3b60d0;
}
.side-nav::-webkit-scrollbar-track{
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	background-color: #F5F5F5;
}
.side-nav::-webkit-scrollbar{
	width: 3px;
	background-color: #F5F5F5;
}
.side-nav::-webkit-scrollbar-thumb{
	background-color: #000000;
	border: 2px solid #555555;
}

.mainopen{
  transition: margin-left 0.3s;
  padding: 20px;
  overflow: hidden;
  width: 100%;
  margin-left: 250px;
}
nav{
  transition: margin-left 0.3s;
}
.bar{
  display: block;
  position: relative;
  height: 2px;
  width: 16px;
  background: #fff;
  transition: all .3s ease;
}
.bar:after{
  content: "";
  display: block;
  position: absolute;
  top: 4px;
  height: 2px;
  width: 16px;
  background: #fff;
  transition: all .3s ease;
  /*transform: translateY(-2px) rotateZ(45deg);*/
}
.bar:before{
  content: "";
  display: block;
  position: absolute;
  bottom: 4px;
  height: 2px;
  width: 16px;
  background: #fff;
  transition: all .3s ease;
  /*transform: translateY(0px) rotateZ(-45deg);*/
}
.baropened{
  display: none;
  position: relative;
  height: 0px;
  width: 16px;
  background: #fff;
  transition: all .3s ease;
}
.baropened:after{
  content: "";
  display: block;
  position: absolute;
  top: 4px;
  height: 2px;
  width: 16px;
  background: #fff;
  transition: all .3s ease;
  transform: translateY(-5px) rotateZ(45deg);
}
.baropened:before{
  content: "";
  display: block;
  position: absolute;
  bottom: 4px;
  height: 2px;
  width: 16px;
  background: #fff;
  transition: all .3s ease;
  transform: translateY(5px) rotateZ(-45deg);
}

.bar1{
  display: block;
  position: relative;
  height: 2px;
  width: 16px;
  background: #fff;
  transition: all .3s ease;
}
.bar1:after{
  content: "";
  display: block;
  position: absolute;
  top: 4px;
  height: 2px;
  width: 16px;
  background: #fff;
  transition: all .3s ease;
  /*transform: translateY(-2px) rotateZ(45deg);*/
}
.bar1:before{
  content: "";
  display: block;
  position: absolute;
  bottom: 4px;
  height: 2px;
  width: 16px;
  background: #fff;
  transition: all .3s ease;
  /*transform: translateY(0px) rotateZ(-45deg);*/
}
.baropened1{
  display: block;
  position: relative;
  height: 0px;
  width: 16px;
  background: #fff;
  transition: all .3s ease;
}
.baropened1:after{
  content: "";
  display: block;
  position: absolute;
  top: 4px;
  height: 2px;
  width: 16px;
  background: #fff;
  transition: all .3s ease;
  transform: translateY(-5px) rotateZ(45deg);
}
.baropened1:before{
  content: "";
  display: block;
  position: absolute;
  bottom: 4px;
  height: 2px;
  width: 16px;
  background: #fff;
  transition: all .3s ease;
  transform: translateY(5px) rotateZ(-45deg);
}
.open-slide__active{
  padding: 0px;
  margin-left: 0px;
}
.side-nav .btn-menu__active{
  padding: 0px;
  position: absolute;
  right: -40px;
  top: 25px;
}

.profile{
  display: flex;
  flex-direction: row;
  align-items: center;
}
.profile .profilebox{
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  cursor: pointer;
  margin-right: 40px;
}
.profile .profilebox .user-img {
  width: 30px;
  height: 30px;
  border-radius: 100%;
  margin-right: 7px;
}
.profile .profilebox b{
  font-size: 12px;
  margin-right: 10px;
}
.profile .profilebox .dropdown-img{
  width: 8px;
  height: 5px;
}
.profile .profilebox .dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1000;
  display: block;
  text-align: left;
  min-width: 160px;
  padding: 5px 0;
  margin: 2px 0 0;
  font-size: 14px;
  text-align: left;
  list-style: none;
  background-color: #fff;
  -webkit-background-clip: padding-box;
  background-clip: padding-box;
  border: 1px solid #ccc;
  border: 1px solid rgba(0, 0, 0, .15);
  border-radius: 4px;
  -webkit-box-shadow: 0 6px 12px rgba(0, 0, 0, .175);
  box-shadow: 0 6px 12px rgba(0, 0, 0, .175);
}
.profile .profilebox .dropdown-menu > li {
  display: block;
  padding: 5px 20px;
  clear: both;
  font-weight: normal;
  line-height: 1.42857143;
  color: #333;
  white-space: nowrap;
}
.profile .profilebox .dropdown-menu > li:hover{
  color: #262626;
  background-color: #f5f5f5;
}
.profile .profilexit{
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  color: #fff;
}
.profile .profilexit b{
  font-size: 12px;
  line-height: 10px;
}
.profile .profilexit:hover{
  color: #1d2982;
}
.profile .profilexit img{
  width: 13px;
  height: 13px;
  margin-right: 6px;
}
.profile .profilexit .logout-img_hover{
  display: none;
}
.profilexit:hover .logout-img {
  display: none;
}
.profilexit:hover .logout-img_hover {
  display: block;
}



@media (max-width: 500px) {
  .profile .profilebox{
    margin-right: 15px;
  }
  .profile .profilebox b{
    display: none;
  }
  .profile .profilexit img {
    display: none;
  }
  .profile .profilebox .dropdown-menu{
    left: -62px;
  }
}

@media(max-width: 1240px) {
  .navbaropen{
    margin-left: 160px;
  }
}

</style>


<script>
export default {
  name: "navbar",
  data() {
    return{
      opened: false,
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
