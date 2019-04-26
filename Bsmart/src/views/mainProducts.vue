<template>
  <div class="main-content">
    <div class="navbar-bg">
      <div class="container">
      
      <nav id="navigator" class="navbar" :class="{navbaropen: opened}">
      <span class="open-slide">
        <a href="#" @click="opened = !opened">
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
            <li @click="goTo('/myContracts');">На контракты</li>
            <li>Настройки</li>
            <li>Выход</li>
          </ul>
        </div>
        
        <div class="profilexit">
          
        </div>
          
      </span>
      
    </nav>
      <div id="side-menu" class="side-nav" :class="{sidenavopen: opened}">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Contact</a>
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
}
.navbaropen{
  margin-left: 250px;
}
.navbar a{
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}
.navbar ul{
  margin: 8px 0 0 0;
  list-style: none;
}
.side-nav{
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  padding-top: 60px;
  transition: 0.3s;
}
.sidenavopen{
  height: 100%;
  width: 250px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  padding-top: 60px;
  transition: 0.3s;
}
.side-nav a{
  padding: 10px 10px 10px 30px;
  text-decoration: none;
  font-size: 22px;
  color: #ccc;
  display: block;
  transition: 0.3s;
}
.side-nav a:hover{
  color: #fff;
}
.side-nav .btn-close{
  position: absolute;
  top: 0;
  right: 22px;
  font-size: 36px;
  margin-left: 50px;
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
  display: block;
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

</style>


<script>
export default {
  name: "mainProducts",
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
