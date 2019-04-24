<template>
    <div class="container">
        <div class="getting-block" id="getting">
            <div class="getting-block_title">Как получить токен?</div>
              <div class="getting-block_text">
                Инвестирование осуществляется путем перечисления средств на адрес смарт-контрактов, которые обеспечивают открытость, надёжность и безопасность выполняемых платежей.
              </div>
              <div class="getting-block_items">
                <div class="getting-item">
                  <div class="getting-item_img">
                    <img src="../assets/token1.png" alt="">
                  </div>
                  <div class="getting-item_title">Register and verify</div>
                  <div class="getting-item_text">Complete the registration and pass the Verification</div>
                </div>
                
                <div class="getting-item">
                  <div class="getting-item_img">
                    <img src="../assets/token2.png" alt="">
                  </div>
                  <div class="getting-item_title">Choose Token</div>
                  <div class="getting-item_text">Select tokens you want to invest in</div>
                </div>
                
                <div class="getting-item">
                  <div class="getting-item_img">
                    <img src="../assets/token3.png" alt="">
                  </div>
                  <div class="getting-item_title">Invest</div>
                  <div class="getting-item_text">Buy desired amount of tokens and keep them in your personal wallet</div>
                </div>
                
              </div>
              
              <div class="getting-block_btn">
                <img src="../assets/play.svg" alt="">Смотреть видео
              </div>
              
        </div>
        
    </div>
  
  
</template>

<style lang="less" scoped>
@import '../main.less';

.getting-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 165px;
}
.getting-block_title {
  font-size: 46px;
  font-weight: bold;
  color: #fff;
  margin-bottom: 40px;
}
.getting-block_text {
  font-size: 18px;
  line-height: 24px;
  color: #7e8081;
  text-align: center;
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
  margin-bottom: 100px;
}
.getting-block_items {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 35px;
}
.getting-block_items .getting-item {
  max-width: 390px;
  width: 100%;
  text-align: center;
}
.getting-block_items .getting-item_img {
  margin-bottom: 28px;
  text-align: center;
}
.getting-block_items .getting-item_title {
  font-size: 18px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 12px;
}
.getting-block_items .getting-item_text {
  max-width: 210px;
  font-size: 12px;
  color: #7e8081;
  margin: 0 auto;
}
.getting-block_btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 32px;
  width: 190px;
  color: #fff;
  background: #4169e2;
  text-align: center;
  border-radius: 50px;
  border: 1px solid #4169e2;
  cursor: pointer;
}
.getting-block_btn img {
  width: 20px;
  height: 20px;
  margin-right: 13px;
}
.getting-block .getting-block_btn:hover {
  background: none;
  box-sizing: border-box;
}
@media (max-width: 1280px) {
  .getting-block_items {
    justify-content: space-around;
  }
  .getting-block_items .getting-item {
    margin-bottom: 30px;
  }
}
@media (max-width: 768px) {
  .getting-block {
    margin-bottom: 60px;
  }
  .getting-block_title {
    font-size: 24px;
    margin-bottom: 18px;
  }
  .getting-block_text {
    font-size: 12px;
    margin-bottom: 30px;
  }
}

  
</style>
<script>
export default {
  name: "getting"
};
</script>
