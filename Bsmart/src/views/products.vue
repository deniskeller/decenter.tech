
  <template>
    <div class="bg-content">
      <navbar/>
        <div class="container">
          
          <div class="products-page">
            <div class="product-item" v-for="(product, title) in products" v-bind:key="title">
              <div class="product-item__img">
                <img :src="product.image" width="63" height="63" alt="">
              </div>
              <div class="product-item__title">{{ product.title }}</div>
              <div class="product-item__border"></div>
              <div class="product-item__progresbar">
                <div class="progresbar__title">Risk & Return</div>
                <div class="progresbar__progresbar">
                  <div class="progresbar__progresbar__progress" :style="{'width':product.value + '%'}">
                  
                  </div>
                </div>
              </div>
              <div class="product-item__coin"> 
                <div class="coin-item">
                  <div class="coin-item__name">BTC</div>
                  <div class="coin-item__value">{{ product.btcValue }}</div>
                </div>
                <div class="coin-item">
                  <div class="coin-item__name">ETH</div>
                  <div class="coin-item__value">{{ product.ethValue }}</div>
                </div>
                <div class="coin-item">
                  <div class="coin-item__name">USD</div>
                  <div class="coin-item__value">{{ product.usdValue }}</div>
                </div>
              </div>
            <div class="product-item__btn btn-invest" @click="showModalWithProduct(title)">
                <img src="../assets/main/credit-card.svg" width="16" height="16" alt="">
                <p>Инвестировать</p>
              </div>
            </div>
            <div class="product-item__last"></div>
            
          </div>
          
        </div>
        <!--<productsModal/>-->
        <div class="modal-vue" v-if="showModal">
          <!-- overlay -->
          <div class="overlay" v-if="showModal" @click="showModal = false"></div>
          <!-- modal -->
          <div class="product-modal">
            
            <span class="close" @click="showModal = false">+</span>
            
            <div class="product-modal__title">Купить <span>{{ title }}</span></div>
            
            <div class="product-modal__choice">Выберите валюту</div>
            
            <div class="product-modal__currency">
              <div class="currency-item" :class="{ 'choice' : choice == 'BTC'}" @click="changeChoice('BTC')">
                <div class="currency-item_img">
                  <img src="../assets/main/bitcoin.svg" alt="">
                </div>
                <div class="currency-item_value">BTC</div>
              </div>
              <div class="currency-item" :class="{ 'choice' : choice == 'ETH'}" @click="changeChoice('ETH')">
                <div class="currency-item_img">
                  <img src="../assets/main/ethereum.svg" alt="">
                </div>
                <div class="currency-item_value">ETH</div>
              </div>
              <div class="currency-item" :class="{ 'choice' : choice == 'USD'}" @click="changeChoice('USD')">
                <div class="currency-item_img">
                  <img src="../assets/main/dollar-coin-money.svg" alt="">
                </div>
                <div class="currency-item_value">USD</div>
              </div>
            </div>
            
            <div class="product-modal__buy">
              <input class="buy-enter" type="" name="" placeholder="Enter amount" @change="recalculate()" v-model="amount"/>
              <span class="buy-course">
                <span class="buy-course__value">{{recalculated}}</span>
                <span class="buy-course__currency">{{ title }}</span>
              </span>
            </div>
            
            <div class="product-modal_btn">Инвестировать</div>
            
            <div class="product-modal__support">
              Есть вопросы?
              <span class="support-question">Обратитесь в службу поддержки</span> 
            </div>
            
          </div>
        </div>
        
        
    </div>
  
</template>
  


<style scoped lang="less">
@import '../main.less';
.choice{
  background: #3b60d0;
}
.choice .currency-item_value{
  color:#fff !important;
}

</style>


<script>
import navbar from "../components/navbar.vue";
export default {
  name: "products",
  components: {
    navbar
  },
  data() {
    return{
      opened: false,
      show: false,
      isShowing: false,
      showModal: false,
      btcCurrent: 1,
      ethCurrent: 1,
      usdCurrent: 1,
      choice: null,
      rate: 1,
      amount: 1,
      products: { 
        'VENTURE': {
          title: "VENTURE",
          value: 80,
          btcValue: 0.123,
          ethValue: 0.123,
          usdValue: 0.555,
          image: require('@/assets/main/cannabis.svg')
        },
        'SMART':{
          title: "SMART",
          value: 20,
          btcValue: 0.456,
          ethValue: 0.456,
          usdValue: 0.233,
          image: require('@/assets/main/cannabis.svg')
        },
        'cannabis':{
          title: "cannabis",
          value: 95,
          btcValue: 0.321,
          ethValue: 0.789,
          usdValue: 0.222,
          image: require('@/assets/main/cannabis.svg')
        }
      }
    }
  },
  methods: {
    goTo(path) {
      this.$router.push({ path: path });
    },
    showModalWithProduct: function(product_title) {
      this.showModal = true;
      let temp_product = this.products[product_title];
      this.title = temp_product['title'];
      this.btcCurrent = temp_product['btcValue'];
      this.ethCurrent = temp_product['ethValue'];
      this.usdCurrent = temp_product['usdValue'];
    },
    changeChoice: function(currency) {
      this.choice=currency;
      if (currency == 'BTC') {
        this.rate = this.btcCurrent;
      }
      if (currency == 'ETH') {
        this.rate = this.ethCurrent;
      }
      if (currency == 'USD') {
        this.rate = this.usdCurrent;
      }
    }
  },
  computed: {
    recalculated: function() {
      return this.rate * this.amount;
    }
  }
};
</script>
