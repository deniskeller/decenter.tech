<template>
    
    <div class="container">
      <div class="whatbsmart-block" id="bsmart">
        <div class="whatbsmart-block_title">Что такое BitSmart?</div>
        <div class="whatbsmart-block_text">
          Появление таких технологий, как Bitcoin и Ethereum, знаменует создание революционного нового класса активов: цифровых активов. Но успешно управлять вашим собственными цифровыми активами сложно и требует интенсивных исследований, мер безопасности без места для ошибок. BitSmart - это структура построенная на основе блокчейн которая позволяет диверсифицировать свой портфель одним щелчком. Работа на смарт контрактах делает операции прозрачными, а работа профессиональной команды обеспечивает безопасность хранения ваших активов.
        </div>
        <div class="whatbsmart-block_chart">
          
          <chart/>
        </div>
        <div class="whatbsmart-block_btn">
            <img src="../assets/login.svg" alt="">Регистрация
        </div>
        
        
      </div>
        
    </div>
  
  
</template>

<style lang="less" scoped>
/*@import '../main.less';*/
.whatbsmart-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 165px;
}
.whatbsmart-block_title {
  font-size: 46px;
  font-weight: bold;
  color: #fff;
  margin-bottom: 40px;
}
.whatbsmart-block_text {
  font-size: 18px;
  line-height: 24px;
  color: #7e8081;
  text-align: center;
  max-width: 1050px;
  width: 100%;
  margin: 0 auto;
  margin-bottom: 30px;
}
.whatbsmart-block_chart {
  max-width: 1180px;
  width: 100%;
  max-height: 5900px;
  height: 100%;
  margin: 0 auto;
  margin-bottom: 60px;
}
.whatbsmart-block_btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 32px;
  width: 167px;
  color: #fff;
  background: #4169e2;
  text-align: center;
  border-radius: 50px;
  border: 1px solid #4169e2;
  cursor: pointer;
}
.whatbsmart-block_btn img {
  width: 20px;
  height: 20px;
  margin-right: 13px;
}
.whatbsmart-block .whatbsmart-block_btn:hover {
  background: none;
  box-sizing: border-box;
}
@media (max-width: 768px) {
  .whatbsmart-block {
    margin-bottom: 60px;
  }
  .whatbsmart-block_title {
    font-size: 24px;
    margin-bottom: 18px;
  }
  .whatbsmart-block_text {
    font-size: 12px;
  }
  .whatbsmart-block_chart {
    margin-bottom: 40px;
  }
}
  
</style>

<script>
import chart from "../components/chart.vue";
export default {
  name: "whatBsmart",
  components: { chart }
};
</script>
