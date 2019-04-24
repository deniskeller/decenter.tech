<template>
  
  <table>
  
  <thead>
    <tr>
      <th scope="col">Контракты</th>
      <th scope="col">Токен</th>
      <th scope="col">Баланс</th>
      <th scope="col">Прибыль</th>
      <th scope="col">%</th>
      <th scope="col">Начало</th>
      <th scope="col">Завершение</th>
      <th scope="col">Статус</th>
      <th scope="col">Действие</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tr-next">
      <td data-label="Контракты">Testcontract</td>
      <td data-label="Токен"><span></span> <br> <span>12345678910 BST</span></td>
      <td data-label="Баланс"><span>37.01 USD</span> <br> <span>37.01 USD</span></td>
      <td data-label="Прибыль"><span class="loss">-37.01 USD</span> <br> <span class="profit">+37.01 USD</span></td>
      <td data-label="%"><span class="loss">137.01 %</span> <br> <span class="profit">137.01 %</span></td>
      <td data-label="Начало">2019-04-05</td>
      <td data-label="Завершение">2019-04-05</td>
      <td data-label="Статус">Активен</td>
      <td data-label="Действие"><div class="btn btn-return">Вернуть ETH</div></td>
    </tr>
    <tr class="">
      <td data-label="Контракты">Testcontract</td>
      <td data-label="Токен"><span></span> <br> <span>12345678910 BST</span></td>
      <td data-label="Баланс"><span>37.01 USD</span> <br> <span>37.01 USD</span></td>
      <td data-label="Прибыль"><span class="loss">-37.01 USD</span> <br> <span class="profit">+37.01 USD</span></td>
      <td data-label="%"><span class="loss">137.01 %</span> <br> <span class="profit">137.01 %</span></td>
      <td data-label="Начало">2019-04-05</td>
      <td data-label="Завершение">2019-04-05</td>
      <td data-label="Статус">Активен</td>
      <td data-label="Действие"><div class="btn btn-return">Вернуть ETH</div></td>
    </tr>
    <tr class="tr-next">
      <td data-label="Контракты">Testcontract</td>
      <td data-label="Токен"><span></span> <br> <span>12345678910 BST</span></td>
      <td data-label="Баланс"><span>37.01 USD</span> <br> <span>37.01 USD</span></td>
      <td data-label="Прибыль"><span class="loss">-37.01 USD</span> <br> <span class="profit">+37.01 USD</span></td>
      <td data-label="%"><span class="loss">137.01 %</span> <br> <span class="profit">137.01 %</span></td>
      <td data-label="Начало">2019-04-05</td>
      <td data-label="Завершение">2019-04-05</td>
      <td data-label="Статус">Активен</td>
      <td data-label="Действие"><div class="btn btn-return">Вернуть ETH</div></td>
    </tr>
    
    
    
  </tbody>
</table>
   

  
</template>

<style lang="less" scoped>

table {
  border-collapse: collapse; 
  margin: 0;
  padding: 0;
  width: 100%;
  /*table-layout: fixed;*/
}
table tr {
  vertical-align: top;
}
table th,
table td {
  font-size: 11px;
  line-height: 20px;
  font-weight: 300;
  height: 63px;
  color: #fff;
  padding: .625em;
  text-align: left;
  padding: 18px 28px;
}
table th{
  font-size: 12px;
  font-weight: 500;
  
}
.tr-next{
  background: rgba(255, 255, 255, 0.051);
}

.loss{
  color: #ff0724;
}
.profit{
  color: #0fff31;
}
.btn-return{
  display: block;
  max-width: 95px;
  width: 100%;
  font-size: 10px;
  padding: 8px 14px;
  line-height: 10px;
  background: #4169e2;
  text-align: center;
  border-radius: 50px;
  border: 1px solid #4169e2;
  cursor: pointer;
  float: right;
}
.btn-return:hover{
  background: none;
}

@media (max-width: 1280px) {
  table {
    border: 0;
  }
  
  
  table thead {
    border: none;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }
  
  table tr {
    border-bottom: 3px solid #ddd;
    display: block;
  }
  
  table td {
    border-bottom: 1px solid #ddd;
    display: block;
    font-size: .8em;
    text-align: right;
  }
  
  table td::before {
    content: attr(data-label);
    float: left;
    font-weight: bold;
  }
  
  table td:last-child {
    border-bottom: 0;
  }
}
   
</style>

<script>

export default {
  name: "contractTable"
};
</script>


