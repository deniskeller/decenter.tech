<template>
    <div class="bg-content">
        <div class="container">
          
          <div class="header-block">
            <navbarSecond/>
          </div>
          <div class="content-page">
            <div class="portfolio-content">
                <div class="portfolio-content_header">
                    <div class="header-title">
                        <img src="../assets/portfolio.svg" alt="" class="header-title_img" >
                        <div class="header-title_text">Портфель 1</div>
                    </div>
                    <div class="header-create">
                      <div class="btn btn-create"><span>+</span> Создать новый контракт</div>
                    </div>
                </div>
                
                <div class="portfolio-content_description">
                  <div class="description-description">
                    <div class="description-description__title">
                      <img src="../assets/info.svg" alt="">Описание портфеля
                    </div>
                    <div class="description-description__text">Появление таких технологий, как Bitcoin и Ethereum, знаменует создание революционного новоего класса активов: цифровых активов. Но успешно управлять вашим собственными цифровыми активами сложно и требует интенсивных исследований, мер безопасности без места для ошибок. BitSmart - это структура построенная на основе блокчейн которая позволяет.иверсифицировать свой портфель одним щелчком. Работа на смарт контрактах делает операции прозрачными, а работа профессиональной команды обеспечивает безопасность хранения ваших активов.</div>
                  </div>
                  
                  <div class="description-advantages">
                    <div class="description-advantages__title">
                      <img src="../assets/dumbbell.svg" alt="">Сильные стороны
                    </div>
                    <div class="description-advantages__text">
                      - Описание сильной стороны 1 Проявление таких технологий, как Bitcoin и Ethereum <br>
                      - Описание сильной стороны 1 <br>
                      - Описание сильной стороны 1оявление таких технологий, как Bitcoin и Ethereum <br>
                      - Описание сильной стороны 1 <br>
                    </div>
                  </div>
                </div>
                
                
                
                
                
                <contractChart/>
                
                <portfolioItemTable/>
            </div>
          </div>
          
        </div>
        <footerBlock/>
    </div>
  
</template>

<style lang="less" scoped>
@import '../main.less';
.portfolio-content .portfolio-content_header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 70px;
}
.portfolio-content .portfolio-content_header .header-title {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.portfolio-content .portfolio-content_header .header-title .header-title_img {
  margin-right: 19px;
  width: 34px;
  height: 34px;
}
.portfolio-content .portfolio-content_header .header-title .header-title_text {
  font-size: 28px;
  line-height: 20px;
  margin-bottom: -8px;
}
.portfolio-content .portfolio-content_header .header-create .btn-create {
  font-size: 12px;
  line-height: 34px;
  padding: 0px 24px;
  background: #4169e2;
  text-align: center;
  border-radius: 50px;
  border: 1px solid #4169e2;
  cursor: pointer;
}
.portfolio-content .portfolio-content_header .header-create .btn-create span {
  font-size: 18px;
  margin-right: 9px;
  display: inline-block;
  vertical-align: middle;
}
.portfolio-content .portfolio-content_header .header-create .btn-create:hover {
  background: none;
}

/*Portfolio view*/
.portfolio-content_description {
  margin-bottom: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
}
.portfolio-content_description .description-description {
  width: 60%;
}
.portfolio-content_description .description-description .description-description__title {
  display: inline-flex;
  font-size: 22px;
  line-height: 32px;
  margin-bottom: 30px;
}
.portfolio-content_description .description-description .description-description__title img {
  width: 25px;
  height: 25px;
  margin-right: 15px;
}
.portfolio-content_description .description-description .description-description__text {
  font-size: 16px;
  line-height: 26px;
}
.portfolio-content_description .description-advantages {
  width: 35%;
}
.portfolio-content_description .description-advantages .description-advantages__title {
  display: inline-flex;
  font-size: 22px;
  line-height: 32px;
  margin-bottom: 30px;
}
.portfolio-content_description .description-advantages .description-advantages__title img {
  width: 32px;
  height: 32px;
  margin-right: 15px;
}
.portfolio-content_description .description-advantages .description-advantages__text {
  font-size: 16px;
  line-height: 26px;
}
@media (max-width: 860px) {
  .portfolio-content_description .description-description {
    width: 100%;
    margin-bottom: 20px;
  }
  .portfolio-content_description .description-advantages {
    width: 100%;
  }
}
@media (max-width: 768px) {
  .bg-content .content-page {
    margin-bottom: 80px;
    padding: 33px 20px 43px !important;
  }
  .portfolio-content .portfolio-content_header .header-title .header-title_text {
    font-size: 20px;
  }
  .portfolio-content .portfolio-content_header{
    margin-bottom: 30px;
  }
  .portfolio-content .portfolio-content_header .header-title {
    padding-right: 13px;
  }
  .portfolio-content_description .description-description {
    width: 100%;
    margin-bottom: 20px;
  }
  .portfolio-content_description .description-description .description-description__title {
    font-size: 16px;
    margin-bottom: 5px;
  }
  .portfolio-content_description .description-description .description-description__text {
    font-size: 12px;
    line-height: 18px;
  }
  .portfolio-content_description .description-advantages {
    width: 100%;
  }
  .portfolio-content_description .description-advantages .description-advantages__title {
    font-size: 16px;
    margin-bottom: 5px;
  }
  .portfolio-content_description .description-advantages .description-advantages__text {
    font-size: 12px;
    line-height: 18px;
  }
}
@media (max-width: 500px) {
  .portfolio-content .portfolio-content_header .header-title {
    margin-bottom: 10px;
  }
}
  
</style>

<script>

import footerBlock from "../components/footerBlock.vue";
import portfolioItemTable from "../components/portfolioItemTable.vue";
import contractChart from "../components/contractChart.vue";
import navbarSecond from "../components/navbarSecond.vue";
export default {
  name: "portfolio",
  components: {
    footerBlock,
    portfolioItemTable,
    contractChart,
    navbarSecond
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
