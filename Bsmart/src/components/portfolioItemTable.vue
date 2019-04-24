<template>
  <table>
    <thead>
      <tr>
        <th class="tr-head" v-for="col in columns" v-bind:key="col.id">
          <span class="sortable" v-on:click="sortTable(col)">
            <span class="before-arrow">{{ col }}</span><span class="arrow" v-if="col == sortColumn" v-bind:class="ascending ? 'arrow_up' : 'arrow_down'"></span> 
          </span>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="row in rows" v-bind:key="row.id">
        <td data-label="Coin"><span class="">{{ row.Coin }}</span></td>
        <td data-label="Ticker"><span class="">{{ row.Ticker}}</span></td>
        <td data-label="Share"><span class="">{{ row.Share }}</span></td>
        <td data-label="Price"><span class="">{{ row.Price }}</span></td>
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
/*table th:hover{*/
/*  color: #315fb2;*/
/*}*/
table tbody tr:nth-child(2n+1) td {
  background: rgba(255, 255, 255, 0.051);
}

.arrow {
  position: absolute;
  width: 10px;
  height: 5px;
  background-repeat: no-repeat;
  background-size: contain;
  float: left;
}
.arrow_up {
  content: '';
  width: 10px;
  height: 5px;
  position: absolute;
  right: -20px;
  top: 6px;
  background: #001548;
  background-repeat: no-repeat;
  background-size: contain;
}
.arrow_down {
  content: '';
  width: 10px;
  height: 5px;
  position: absolute;
  right: -20px;
  bottom: 8px;
  background: #001548;
  background-repeat: no-repeat;
  background-size: contain;
}
.sortable{
  position: relative;
  cursor: pointer;
}
.before-arrow:after{
  content: '';
  width: 10px;
  height: 5px;
  position: absolute;
  right: -20px;
  top: 6px;
  background: url('../assets/arrow_down1.png');
  background-repeat: no-repeat;
  background-size: contain;
}
.before-arrow:before{
  content: '';
  width: 10px;
  height: 5px;
  position: absolute;
  right: -20px;
  bottom: 8px;
  background: url('../assets/arrow_up1.png');
  background-repeat: no-repeat;
  background-size: contain;
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
  name: "portfolioItemTable",
  data() {
    return{
      ascending: false,
      sortColumn: '',
      rows: [
        { 
          Coin: 'Ethereum',
          Ticker: 'BTH',
          Share:'50%',
          Price: '$ 600'
        },
        { 
          Coin: 'lol',
          Ticker: 'ETH',
          Share:'40%',
          Price: '$ 300'
        },
        { 
          Coin: 'wer1',
          Ticker: 'ETC',
          Share:'10%',
          Price: '$ 800'
        }
      ]
    }
  },
  methods: {
    "sortTable": function sortTable(col) {
      if (this.sortColumn === col) {
        this.ascending = !this.ascending;
      } else {
        this.ascending = false;
        this.sortColumn = col;
      }

      var ascending = this.ascending;

      this.rows.sort(function(a, b) {
        if (a[col] > b[col]) {
          return ascending ? 1 : -1
        } else if (a[col] < b[col]) {
          return ascending ? -1 : 1
        }
        return 0;
      })
    },
    goTo(path) {
      this.$router.push({ path: path });
    }
  },
  computed: {
    "columns": function columns() {
      if (this.rows.length == 0) {
        return [];
      }
      return Object.keys(this.rows[0])
    }
  }
};
</script>


