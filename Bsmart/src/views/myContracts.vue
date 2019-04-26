<template>
    <div class="bg-content">
      <navbar/>
        <div class="container">
          
          <div class="content-page">
            <div class="contract-content">
              
              <div class="contract-content_header">
                  <div class="header-title">
                      <img src="../assets/portfolio.svg" alt="" class="header-title_img" >
                      <div class="header-title_text">Мои контракты</div>
                  </div>
                  <div class="header-create">
                    <div class="btn btn-create"><span>+</span> Создать новый контракт</div>
                  </div>
              </div>
              
              <div class="contract-content_info">
                
                <div class="info-item info-item_invested">
                  <div class="info-item_title">ВЛОЖЕНО</div>
                  <div class="info-item_border"></div>
                  <div class="info-item_value">
                    <span class="currency">$ </span>
                    <span class="item-value">5, 193. 29</span>
                    <span class="item-value_indicator">
                      <span class="indicator-direction"></span>
                      <span class="indicator-value"></span>
                    </span>
                  </div>
                </div>
                
                <div class="info-item info-item_loss">
                  <div class="info-item_title">ПРИБЫЛЬ / ПОТЕРИ</div>
                  <div class="info-item_border"></div>
                  <div class="info-item_value">
                    <span class="currency">$ </span>
                    <span class="item-value">-852.29</span>
                    <span class="item-value_indicator">
                      <span class="indicator-direction">
                        <img src="../assets/direction_loss.png" alt="">
                      </span>
                      <span class="indicator-value">-15.14%</span>
                    </span>
                  </div>
                </div>
                
                <div class="info-item info-item_profit">
                  <div class="info-item_title">24Ч ПРИБЫЛЬ / ПОТЕРИ</div>
                  <div class="info-item_border"></div>
                  <div class="info-item_value">
                    <span class="currency">$ </span>
                    <span class="item-value">+852.29</span>
                    <span class="item-value_indicator">
                      <span class="indicator-direction">
                        <img src="../assets/direction_profit.png" alt="">
                      </span>
                      <span class="indicator-value">+15.14%</span>
                    </span>
                  </div>
                </div>
                
              </div>
              
              <contractChart/>
              
              <contractTable/>
              
          </div>
          </div>
          
        </div>
        <footerBlock/>
    </div>
  
</template>

<style lang="less" scoped>
@import '../main.less';

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
.contract-content .contract-content_info {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 55px;
}
.contract-content .contract-content_info .info-item {
  width: 100%;
  max-width: 350px;
  height: 136px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.contract-content .contract-content_info .info-item .info-item_title {
  font-size: 16px;
  line-height: 14px;
  text-transform: uppercase;
  margin-bottom: 16px;
}
.contract-content .contract-content_info .info-item .info-item_border {
  max-width: 224px;
  width: 100%;
  height: 2px;
  background: #fff;
  opacity: 0.1;
  margin-bottom: 20px;
}
.contract-content .contract-content_info .info-item .info-item_value {
  font-size: 28px;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.contract-content .contract-content_info .info-item .info-item_value .item-value_indicator {
  font-size: 16px;
  margin-left: 20px;
  margin-top: -5px;
}
.contract-content .contract-content_info .info-item .info-item_value .item-value_indicator .indicator-direction {
  display: block;
  text-align: center;
}
.contract-content .contract-content_info .info-item .info-item_value .item-value_indicator .indicator-value {
  display: block;
}
.contract-content .contract-content_info .info-item_invested {
  background: linear-gradient(-180deg, #4c8fff 0%, #202b9a 100%);
}
.contract-content .contract-content_info .info-item_loss {
  background: linear-gradient(-180deg, #ff4064 0%, #202b9a 100%);
}
.contract-content .contract-content_info .info-item_profit {
  background: linear-gradient(-180deg, #3ee064 0%, #202b9a 100%);
}
@media (max-width: 1280px) {
  .contract-content .contract-content_info {
    justify-content: space-around;
  }
  .contract-content .contract-content_info .info-item {
    margin-bottom: 30px;
  }
  .contract-content .contract-content_info .info-item:last-child {
    margin-bottom: 0px;
  }
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
  .contract-content .contract-content_info .info-item .info-item_title {
    font-size: 12px;
  }
  .contract-content .contract-content_info .info-item .info-item_value {
    font-size: 18px;
  }
  .contract-content .contract-content_info .info-item .info-item_value .item-value_indicator {
    font-size: 12px;
  }
}

  
</style>

<script>
import contractTable from "../components/contractTable.vue";
import contractChart from "../components/contractChart.vue";
import footerBlock from "../components/footerBlock.vue";
import navbar from "../components/navbar.vue";
export default {
  name: "myContracts",
  components: {
    footerBlock,
    contractTable,
    contractChart,
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
