<template>
    <div class="container">
        <div class="advantages-block" id="advantages">
            <div class="advantages-block_title">Преимущества</div>
              <div class="advantages-block_text">
                Криптовалютный фонд  BitSmart предоставляет для клиентов возможность быстрого входа в портфельное инвестирование на криптовалютном рынке с высоким уровнем надежности и открытости.
              </div>
              <div class="advantages-block_items">
                <div class="advantages-item">
                  <div class="advantages-item_img">
                    <img src="../assets/nadezhno.svg" alt="">
                  </div>
                  <div class="advantages-item_title">Надежно</div>
                  <div class="advantages-item_text">Основанное на смартконтрактах доказательство владения</div>
                </div>
                
                <div class="advantages-item">
                  <div class="advantages-item_img">
                    <img src="../assets/vygodno.svg" alt="">
                  </div>
                  <div class="advantages-item_title">Выгодно</div>
                  <div class="advantages-item_text">Автоматизация процессов 
существенно сокращает издержки</div>
                </div>
                
                <div class="advantages-item">
                  <div class="advantages-item_img">
                    <img src="../assets/graphic.svg" alt="">
                  </div>
                  <div class="advantages-item_title">Удобно</div>
                  <div class="advantages-item_text">Отслеживайте индекс в режиме реального времени</div>
                </div>
                
                <div class="advantages-item">
                  <div class="advantages-item_img">
                    <img src="../assets/prosto.svg" alt="">
                  </div>
                  <div class="advantages-item_title">Просто</div>
                  <div class="advantages-item_text">Приобретайте несколько токенов одним кликом мышки</div>
                </div>
                
                <div class="advantages-item">
                  <div class="advantages-item_img">
                    <img src="../assets/prozrachno.svg" alt="">
                  </div>
                  <div class="advantages-item_title">Прозрачно</div>
                  <div class="advantages-item_text">echnical knowledge is required to properly protect your digital assets.</div>
                </div>
                
                
              </div>
        </div>
        
    </div>
  
  
</template>

<style lang="less" scoped>
@import '../main.less';

.advantages-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 165px;
}
.advantages-block_title {
  font-size: 46px;
  font-weight: bold;
  color: #fff;
  margin-bottom: 40px;
}
.advantages-block_text {
  font-size: 18px;
  line-height: 24px;
  color: #7e8081;
  text-align: center;
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
  margin-bottom: 100px;
}
.advantages-block_items {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
}
.advantages-block_items .advantages-item {
  max-width: 190px;
  width: 100%;
  text-align: center;
}
.advantages-block_items .advantages-item_img {
  margin-bottom: 28px;
  text-align: center;
}
.advantages-block_items .advantages-item_img img {
  width: 76px;
}
.advantages-block_items .advantages-item_title {
  font-size: 18px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 12px;
}
.advantages-block_items .advantages-item_text {
  font-size: 12px;
  color: #7e8081;
  text-align: center;
}
@media (max-width: 1280px) {
  .advantages-block_items {
    justify-content: space-around;
  }
  .advantages-block_items .advantages-item {
    margin-bottom: 30px;
  }
}
@media (max-width: 768px) {
  .advantages-block {
    margin-bottom: 60px;
  }
  .advantages-block_title {
    font-size: 24px;
    margin-bottom: 18px;
  }
  .advantages-block_text {
    font-size: 12px;
    margin-bottom: 30px;
  }
}
  
</style>

<script>
export default {
  name: "advantages"
};
</script>
