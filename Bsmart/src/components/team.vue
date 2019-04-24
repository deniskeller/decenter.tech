<template>
    <div class="container">
        <div class="team-block" id="team">
            <div class="team-block_title">Команда</div>
              <div class="team-block_text">
                Энтузиасты и профессионалы, уверенные в перспективах криптовалютного рынка, возможностях блокчейна, инновационного развития экономики и современных технологий.
              </div>
              <div class="team-block_items">
                <div class="team-item">
                  <div class="team-item_img">
                    <img src="../assets/team1.png" alt="">
                    <img class="team-item_img-social" src="../assets/vk_team.svg" alt="">
                  </div>
                  <div class="team-item_title">Александр</div>
                  <div class="team-item_text">Директор</div>
                </div>
                
                <div class="team-item">
                  <div class="team-item_img">
                    <img src="../assets/team2.png" alt="">
                    <img class="team-item_img-social" src="../assets/vk_team.svg" alt="">
                  </div>
                  <div class="team-item_title">Ольга</div>
                  <div class="team-item_text">Менеджер</div>
                </div>
                
                <div class="team-item">
                  <div class="team-item_img">
                    <img src="../assets/team3.png" alt="">
                    <img class="team-item_img-social" src="../assets/vk_team.svg" alt="">
                  </div>
                  <div class="team-item_title">Виталий</div>
                  <div class="team-item_text">Зам. директора</div>
                </div>
                
                <div class="team-item">
                  <div class="team-item_img">
                    <img src="../assets/team4.png" alt="">
                    <img class="team-item_img-social" src="../assets/vk_team.svg" alt="">
                  </div>
                  <div class="team-item_title">Марина</div>
                  <div class="team-item_text">Менеджер</div>
                </div>
                
              </div>
              
              
              
        </div>
        
    </div>
  
  
</template>

<style lang="less" scoped>
@import '../main.less';

.team-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 165px;
}
.team-block_title {
  font-size: 46px;
  font-weight: bold;
  color: #fff;
  margin-bottom: 40px;
}
.team-block_text {
  font-size: 18px;
  line-height: 24px;
  color: #7e8081;
  text-align: center;
  max-width: 770px;
  width: 100%;
  margin: 0 auto;
  margin-bottom: 100px;
}
.team-block_items {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
}
.team-block_items .team-item {
  max-width: 163px;
  width: 100%;
  text-align: center;
}
.team-block_items .team-item_img {
  margin-bottom: 28px;
  text-align: center;
  position: relative;
}
.team-block_items .team-item_img .team-item_img-social {
  position: absolute;
  width: 40px;
  height: 40px;
  cursor: pointer;
  bottom: 15px;
  right: 0px;
  z-index: 1000;
}
.team-block_items .team-item_img .team-item_img-social:hover {
  opacity: 0.8;
}
.team-block_items .team-item_title {
  font-size: 18px;
  line-height: 10px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 10px;
}
.team-block_items .team-item_text {
  max-width: 210px;
  font-size: 12px;
  color: #7e8081;
  margin: 0 auto;
}
.team-block_items .team-item:last-child {
  margin-bottom: 0px;
}
@media (max-width: 681px) {
  .team-item {
    margin-bottom: 30px;
  }
}
@media (max-width: 768px) {
  .team-block {
    margin-bottom: 60px;
  }
  .team-block_title {
    font-size: 24px;
    margin-bottom: 18px;
  }
  .team-block_text {
    font-size: 12px;
    margin-bottom: 30px;
  }
}
  
</style>

<script>
export default {
  name: "team"
};
</script>
