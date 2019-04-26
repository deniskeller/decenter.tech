
  <template>
    <div class="bg-content">
      <navbar/>
        <div class="container">
          
          <div class="products-page">
            <div class="product-item" v-for="product in products" v-bind:key="product.id">
              <div class="product-item__img">
                <img src="../assets/main/cannabis.svg" width="63" height="63" alt="">
              </div>
              <div class="product-item__title">{{ product.title }}</div>
              <div class="product-item__border"></div>
              <div class="product-item__progresbar">
                <div class="progresbar__title">Risk & Return</div>
                <div class="progresbar__progresbar">
                  {{ product.value }}
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
              <div class="product-item__btn btn-invest">
                <img src="../assets/main/credit-card.svg" width="16" height="16" alt="">
                <p>Инвестировать</p>
              </div>
            </div>
            <div class="product-item__last"></div>
          </div>
          
        </div>
        <footerBlock/>
    </div>
  
</template>
  


<style scoped lang="less">
@import '../main.less';

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
      products: [
        {
          title: "VENTURE",
          // value: "50",
          btcValue: "0,123",
          ethValue: "0,00234",
          usdValue: "0,234"
        },
        {
          title: "SMART",
          // value: "50",
          btcValue: "0,123",
          ethValue: "0,00234",
          usdValue: "0,234"
        },
        {
          title: "cannabis",
          // value: "50",
          btcValue: "0,123",
          ethValue: "0,00234",
          usdValue: "0,234"
        }
      ]
    }
  },
  methods: {
    goTo(path) {
      this.$router.push({ path: path });
    }
  }
};
</script>
