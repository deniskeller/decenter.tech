<template>
    <div class="container">
        <div class="questions-block" id="questions">
            <div class="questions-block_title">FAQ</div>
              <div class="questions-block_text">
                Ознакомьтесь с ответами на наиболее часто задаваемые вопросы
              </div>
              <div class="questions">
                
                <div class="questions_items">
                  <div class="questions-item"  @click="setShowing(1)" >
                    <div class="questions-item_header" >
                      <span class="questions-item_num">1.</span>
                      <span class="questions-item_title">Что нужно для того, чтобы стать инвестором фонда?</span>
                      <span class="questions-item_arrow"><img src="../assets/arrow_down.png" alt=""></span>
                    </div>
                    <div class="modal-hidden" v-show="isShowing == 1">
                      <div class="questions-item_header">
                        <span class="questions-item_num">1.</span>
                        <span class="questions-item_title">Что нужно для того, чтобы стать инвестором фонда?</span>
                        <span class="questions-item_arrow"><img src="../assets/arrow_down.png" alt=""></span>
                      </div>
                      <div class="questions-item_content" >В последнее время в сети все чаще стали появляться обычные статические сайты, что не может не радовать. Неповоротливость некоторых популярных CMS только растет, при этом довольно часто CMS вообще не нужна. В последнее время в сети все чаще стали появляться обычные статические сайты, что не может не радовать. Неповоротливость некоторых популярных CMS только растет, при этом довольно часто CMS вообще не нужна.
                      </div>
                    </div>
                  </div>
                  <div class="questions-item" @click="setShowing(2)">
                    <div class="questions-item_header" >
                      <span class="questions-item_num">2.</span>
                      <span class="questions-item_title">Где купить криптовалюту Ethereum?</span>
                      <span class="questions-item_arrow"><img src="../assets/arrow_down.png" alt=""></span>
                    </div>
                    <div class="modal-hidden" v-show="isShowing == 2">
                      <div class="questions-item_header">
                        <span class="questions-item_num">2.</span>
                        <span class="questions-item_title">Где купить криптовалюту Ethereum?</span>
                        <span class="questions-item_arrow"><img src="../assets/arrow_down.png" alt=""></span>
                      </div>
                      <div class="questions-item_content" >В последнее время в сети все чаще стали появляться обычные статические сайты, что не может не радовать. Неповоротливость некоторых популярных CMS только растет, при этом довольно часто CMS вообще не нужна. В последнее время в сети все чаще стали появляться обычные статические сайты, что не может не радовать. Неповоротливость некоторых популярных CMS только растет, при этом довольно часто CMS вообще не нужна.
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="questions_items">
                  <div class="questions-item" @click="setShowing(3)">
                    <div class="questions-item_header" >
                      <span class="questions-item_num">3.</span>
                      <span class="questions-item_title">Что делать, если не отображаются токены RTB?</span>
                      <span class="questions-item_arrow"><img src="../assets/arrow_down.png" alt=""></span>
                    </div>
                    <div class="modal-hidden" v-show="isShowing == 3">
                      <div class="questions-item_header">
                        <span class="questions-item_num">3.</span>
                        <span class="questions-item_title">Что делать, если не отображаются токены RTB?</span>
                        <span class="questions-item_arrow"><img src="../assets/arrow_down.png" alt=""></span>
                      </div>
                      <div class="questions-item_content" >В последнее время в сети все чаще стали появляться обычные статические сайты, что не может не радовать. Неповоротливость некоторых популярных CMS только растет, при этом довольно часто CMS вообще не нужна. В последнее время в сети все чаще стали появляться обычные статические сайты, что не может не радовать. Неповоротливость некоторых популярных CMS только растет, при этом довольно часто CMS вообще не нужна.
                      </div>
                    </div>
                  </div>
                  <div class="questions-item" @click="setShowing(4)">
                    <div class="questions-item_header" >
                      <span class="questions-item_num">4.</span>
                      <span class="questions-item_title">Что такое токен фонда?</span>
                      <span class="questions-item_arrow"><img src="../assets/arrow_down.png" alt=""></span>
                    </div>
                    <div class="modal-hidden" v-show="isShowing == 4">
                      <div class="questions-item_header">
                        <span class="questions-item_num">4.</span>
                        <span class="questions-item_title">Что такое токен фонда?</span>
                        <span class="questions-item_arrow"><img src="../assets/arrow_down.png" alt=""></span>
                      </div>
                      <div class="questions-item_content" >В последнее время в сети все чаще стали появляться обычные статические сайты, что не может не радовать. Неповоротливость некоторых популярных CMS только растет, при этом довольно часто CMS вообще не нужна. В последнее время в сети все чаще стали появляться обычные статические сайты, что не может не радовать. Неповоротливость некоторых популярных CMS только растет, при этом довольно часто CMS вообще не нужна.
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="questions_items">
                  <div class="questions-item" @click="setShowing(5)">
                    <div class="questions-item_header" >
                      <span class="questions-item_num">5.</span>
                      <span class="questions-item_title">Что такое смарт-контракт?</span>
                      <span class="questions-item_arrow"><img src="../assets/arrow_down.png" alt=""></span>
                    </div>
                    <div class="modal-hidden" v-show="isShowing == 5">
                      <div class="questions-item_header">
                        <span class="questions-item_num">5.</span>
                        <span class="questions-item_title">Что такое смарт-контракт?</span>
                        <span class="questions-item_arrow"><img src="../assets/arrow_down.png" alt=""></span>
                      </div>
                      <div class="questions-item_content" >В последнее время в сети все чаще стали появляться обычные статические сайты, что не может не радовать. Неповоротливость некоторых популярных CMS только растет, при этом довольно часто CMS вообще не нужна. В последнее время в сети все чаще стали появляться обычные статические сайты, что не может не радовать. Неповоротливость некоторых популярных CMS только растет, при этом довольно часто CMS вообще не нужна.
                      </div>
                    </div>
                  </div>
                  <div class="questions-item" @click="setShowing(6)">
                    <div class="questions-item_header" >
                      <span class="questions-item_num">6.</span>
                      <span class="questions-item_title">Зачем регистрироваться на сайте?</span>
                      <span class="questions-item_arrow"><img src="../assets/arrow_down.png" alt=""></span>
                    </div>
                    <div class="modal-hidden" v-show="isShowing == 6">
                      <div class="questions-item_header">
                        <span class="questions-item_num">6.</span>
                        <span class="questions-item_title">Зачем регистрироваться на сайте?</span>
                        <span class="questions-item_arrow"><img src="../assets/arrow_down.png" alt=""></span>
                      </div>
                      <div class="questions-item_content" >В последнее время в сети все чаще стали появляться обычные статические сайты, что не может не радовать. Неповоротливость некоторых популярных CMS только растет, при этом довольно часто CMS вообще не нужна. В последнее время в сети все чаще стали появляться обычные статические сайты, что не может не радовать. Неповоротливость некоторых популярных CMS только растет, при этом довольно часто CMS вообще не нужна.
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="questions_items">
                  <div class="questions-item" @click="setShowing(7)">
                    <div class="questions-item_header" >
                      <span class="questions-item_num">7.</span>
                      <span class="questions-item_title">Где можно узнать адрес смарт-контракта?</span>
                      <span class="questions-item_arrow"><img src="../assets/arrow_down.png" alt=""></span>
                    </div>
                    <div class="modal-hidden" v-show="isShowing == 7">
                      <div class="questions-item_header">
                        <span class="questions-item_num">7.</span>
                        <span class="questions-item_title">Где можно узнать адрес смарт-контракта?</span>
                        <span class="questions-item_arrow"><img src="../assets/arrow_down.png" alt=""></span>
                      </div>
                      <div class="questions-item_content" >В последнее время в сети все чаще стали появляться обычные статические сайты, что не может не радовать. Неповоротливость некоторых популярных CMS только растет, при этом довольно часто CMS вообще не нужна. В последнее время в сети все чаще стали появляться обычные статические сайты, что не может не радовать. Неповоротливость некоторых популярных CMS только растет, при этом довольно часто CMS вообще не нужна.
                      </div>
                    </div>
                  </div>
                  <div class="questions-item" @click="setShowing(8)">
                    <div class="questions-item_header" >
                      <span class="questions-item_num">8.</span>
                      <span class="questions-item_title">Как я могу следить за своими инвестициями?</span>
                      <span class="questions-item_arrow"><img src="../assets/arrow_down.png" alt=""></span>
                    </div>
                    <div class="modal-hidden" v-show="isShowing == 8">
                      <div class="questions-item_header">
                        <span class="questions-item_num">8.</span>
                        <span class="questions-item_title">Как я могу следить за своими инвестициями?</span>
                        <span class="questions-item_arrow"><img src="../assets/arrow_down.png" alt=""></span>
                      </div>
                      <div class="questions-item_content" >В последнее время в сети все чаще стали появляться обычные статические сайты, что не может не радовать. Неповоротливость некоторых популярных CMS только растет, при этом довольно часто CMS вообще не нужна. В последнее время в сети все чаще стали появляться обычные статические сайты, что не может не радовать. Неповоротливость некоторых популярных CMS только растет, при этом довольно часто CMS вообще не нужна.
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="questions_items">
                  <div class="questions-item" @click="setShowing(9)">
                    <div class="questions-item_header" >
                      <span class="questions-item_num">9.</span>
                      <span class="questions-item_title">В какой валюте принимаются инвестиции?</span>
                      <span class="questions-item_arrow"><img src="../assets/arrow_down.png" alt=""></span>
                    </div>
                    <div class="modal-hidden" v-show="isShowing == 9">
                      <div class="questions-item_header">
                        <span class="questions-item_num">9.</span>
                        <span class="questions-item_title">В какой валюте принимаются инвестиции?</span>
                        <span class="questions-item_arrow"><img src="../assets/arrow_down.png" alt=""></span>
                      </div>
                      <div class="questions-item_content" >В последнее время в сети все чаще стали появляться обычные статические сайты, что не может не радовать. Неповоротливость некоторых популярных CMS только растет, при этом довольно часто CMS вообще не нужна. В последнее время в сети все чаще стали появляться обычные статические сайты, что не может не радовать. Неповоротливость некоторых популярных CMS только растет, при этом довольно часто CMS вообще не нужна.
                      </div>
                    </div>
                  </div>
                  <div class="questions-item" @click="setShowing(10)">
                    <div class="questions-item_header" >
                      <span class="questions-item_num">10.</span>
                      <span class="questions-item_title">Гарантирует ли фонд доходность?</span>
                      <span class="questions-item_arrow"><img src="../assets/arrow_down.png" alt=""></span>
                    </div>
                    <div class="modal-hidden" v-show="isShowing == 10">
                      <div class="questions-item_header">
                        <span class="questions-item_num">10.</span>
                        <span class="questions-item_title">Гарантирует ли фонд доходность?</span>
                        <span class="questions-item_arrow"><img src="../assets/arrow_down.png" alt=""></span>
                      </div>
                      <div class="questions-item_content" >В последнее время в сети все чаще стали появляться обычные статические сайты, что не может не радовать. Неповоротливость некоторых популярных CMS только растет, при этом довольно часто CMS вообще не нужна. В последнее время в сети все чаще стали появляться обычные статические сайты, что не может не радовать. Неповоротливость некоторых популярных CMS только растет, при этом довольно часто CMS вообще не нужна.
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>
              
        </div>
        
    </div>
  
  
</template>

<style lang="less" scoped>
@import '../main.less';

.questions-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 100px;
}
.questions-block_title {
  font-size: 46px;
  font-weight: bold;
  color: #fff;
  margin-bottom: 40px;
}
.questions-block_text {
  font-size: 18px;
  line-height: 24px;
  color: #7e8081;
  text-align: center;
  max-width: 320px;
  width: 100%;
  margin: 0 auto;
  margin-bottom: 40px;
}
.questions-block .questions {
  width: 100%;
}
.questions-block .questions .questions_items {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
}
.questions-block .questions .questions_items .questions-item {
  width: 100%;
  max-width: 600px;
  margin-bottom: 27px;
  cursor: pointer;
  position: relative;
}
.questions-block .questions .questions_items .questions-item .questions-item_header {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 37px;
  width: 100%;
  max-width: 600px;
  min-height: 63px;
  background: #3f4449;
  border-radius: 10px;
}
.questions-block .questions .questions_items .questions-item .questions-item_header .questions-item_num {
  font-size: 18px;
  font-weight: 700;
  margin-right: 30px;
  color: #4169e2;
}
.questions-block .questions .questions_items .questions-item .questions-item_header .questions-item_title {
  font-size: 16px;
  color: #fff;
  font-weight: 500;
  text-align: left;
}
.questions-block .questions .questions_items .questions-item .questions-item_header .questions-item_arrow {
  margin-left: auto;
}
.questions-block .questions .questions_items .questions-item .questions-item_header:hover {
  background: #252b30;
}
.questions-block .questions .questions_items .questions-item .modal-hidden {
  position: absolute;
  z-index: 1000;
  top: 0;
  width: 100%;
}
.questions-block .questions .questions_items .questions-item .modal-hidden .questions-item_header {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 37px;
  width: 100%;
  max-width: 600px;
  min-height: 63px;
  background: #3f4449;
  border-radius: 10px;
  box-shadow: 0px 0px 17px 0px rgba(12, 18, 24, 0.5);
}
.questions-block .questions .questions_items .questions-item .modal-hidden .questions-item_header .questions-item_num {
  font-size: 18px;
  font-weight: 700;
  margin-right: 30px;
  color: #4169e2;
}
.questions-block .questions .questions_items .questions-item .modal-hidden .questions-item_header .questions-item_title {
  font-size: 16px;
  color: #fff;
  font-weight: 500;
  text-align: left;
}
.questions-block .questions .questions_items .questions-item .modal-hidden .questions-item_header .questions-item_arrow {
  margin-left: auto;
}
.questions-block .questions .questions_items .questions-item .modal-hidden .questions-item_header:hover {
  background: #252b30;
}
.questions-block .questions .questions_items .questions-item .modal-hidden .questions-item_content {
  position: absolute;
  z-index: -1;
  top: 56px;
  width: 100%;
  max-width: 600px;
  background: #1e2123;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  font-size: 12px;
  line-height: 21px;
  color: #7e8081;
  text-align: left;
  padding: 31px 53px;
  box-shadow: 0px 0px 17px 0px rgba(12, 18, 24, 0.5);
}
.questions-block .questions .questions_items:last-child {
  margin-bottom: 0px;
}
@media (max-width: 1239px) {
  .questions_items {
    justify-content: center !important;
  }
}
@media (max-width: 768px) {
  .questions-block {
    margin-bottom: 30px;
  }
  .questions-block_title {
    font-size: 24px;
    margin-bottom: 18px;
  }
  .questions-block_text {
    font-size: 12px;
    margin-bottom: 30px;
  }
  .questions-item_header {
    padding: 0px 14px !important;
  }
  .questions-item_num {
    font-size: 12px !important;
    margin-right: 16px !important;
  }
  .questions-item_title {
    font-size: 12px !important;
  }
  .questions-block .questions .questions_items .questions-item .modal-hidden .questions-item_content {
    padding: 23px 39px;
  }
}

  
</style>

<script>


export default {
  name: "questions",
  data() {
    return{
      isShowing: false,
      
    }
  },
  methods: {
    setShowing: function (newNumber) {
      if(this.isShowing == newNumber) {
        this.isShowing = 0;
      } else {
        this.isShowing = newNumber;
      }
    }
  }
};
</script>
