<template>
    <div class="bg-content">
      <navbar/>
        <div class="container">
          
          <div class="content-page">
            <div class="contract-content">
                <div class="contract-content_header">
                    <div class="header-title">
                        <img src="../assets/portfolio.svg" alt="" class="header-title_img" >
                        <div class="header-title_text">Портфели</div>
                    </div>
                </div>
                <portfolioTable/>
            </div>
          </div>
          
        </div>
        <footerBlock/>
    </div>
  
</template>

<style lang="less" scoped>
@import '../main.less';
/*Portfolio component*/
.contract-content .contract-content_header {
  margin-bottom: 34px;
}
.contract-content .contract-content_header .header-title {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.contract-content .contract-content_header .header-title .header-title_img {
  margin-right: 19px;
  width: 34px;
  height: 34px;
}
.contract-content .contract-content_header .header-title .header-title_text {
  font-size: 28px;
  line-height: 20px;
  margin-bottom: -8px;
}




/*MyContract component*/
.contract-content .contract-content_header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 34px;
}
.contract-content .contract-content_header .header-title {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.contract-content .contract-content_header .header-title .header-title_img {
  margin-right: 19px;
  width: 34px;
  height: 34px;
}
.contract-content .contract-content_header .header-title .header-title_text {
  font-size: 28px;
  line-height: 20px;
  margin-bottom: -8px;
}
.contract-content .contract-content_header .header-create .btn-create {
  font-size: 12px;
  line-height: 34px;
  padding: 0px 24px;
  background: #4169e2;
  text-align: center;
  border-radius: 50px;
  border: 1px solid #4169e2;
  cursor: pointer;
}
.contract-content .contract-content_header .header-create .btn-create span {
  font-size: 18px;
  margin-right: 9px;
  display: inline-block;
  vertical-align: middle;
}
.contract-content .contract-content_header .header-create .btn-create:hover {
  background: none;
}



@media (max-width: 768px) {
  .content-page {
    margin-bottom: 80px;
    padding: 33px 20px 43px !important;
  }
  .contract-content .contract-content_header .header-title .header-title_text {
    font-size: 20px;
  }
  .contract-content .contract-content_header .header-title {
    padding-right: 13px;
  }
}
@media (max-width: 500px) {
  .contract-content .contract-content_header .header-title {
    margin-bottom: 10px;
  }
}
  
</style>

<script>

import footerBlock from "../components/footerBlock.vue";
import portfolioTable from "../components/portfolioTable.vue";
import navbar from "../components/navbar.vue";
export default {
  name: "contract",
  components: {
    footerBlock,
    portfolioTable,
    navbar
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
