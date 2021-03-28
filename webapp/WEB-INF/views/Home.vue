<template>
  <div>
    <h1>{{msg}}</h1>
    <b-card bg-variant="dark" text-variant="white" title="Card Title">
      <b-card-group deck>
        <b-card bg-variant="primary" text-variant="white" header="Primary" class="text-center">
          <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
        </b-card>

        <b-card bg-variant="secondary" text-variant="white" header="Secondary" class="text-center">
          <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
        </b-card>

        <b-card bg-variant="success" text-variant="white" header="Success" class="text-center">
          <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
        </b-card>
      </b-card-group>
    </b-card>
    <div style="width:200px; height:200px;">
      <pie-chart :data="chartData" :options="chartOptions"></pie-chart>
    </div>
    <div style="width:200px; height:200px;">
      <bar-chart :data="chartData" :options="chartOptions"></bar-chart>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import PieChart from './js/chart/PieChart.js'
import BarChart from './js/chart/BarChart.js'

export default {
  components: {
    PieChart,
    BarChart
  },
  data () {
    return {
      msg: 'Home!',
      title: '',
      chartOptions: {
        hoverBorderWidth: 10
      },
      chartData: {
        hoverBackgroundColor: 'red',
        hoverBorderWidth: 10,
        labels: ['Green', 'Red', 'Blue'],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: ['#41B883', '#E46651', '#00D8FF'],
            data: [1, 10, 5]
          }
        ]
      }
    }
  },
  methods: {
    goMatchResult () {
      this.$router.push('/matchResult')
    },
    testApi () {
      // axios.get('http://127.0.0.1:8080/test1/')
      axios.get('/api/test1', {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json; charset = utf-8'
        }
      })
        .then(response => {
          console.log(response)
        })
        .catch(e => {
          console.log('error : ', e) // 에러가 나는 경우 콘솔에 에러를 출력한다
        })
    }
  }
}
</script>

<style scoped lang="scss">
h1 {
  $color:red;
  color: $color;
  display : flex;
}
</style>
