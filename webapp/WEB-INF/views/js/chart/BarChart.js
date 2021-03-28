import { Bar } from 'vue-chartjs'
export default {
  extends: Bar,
  props: ['data', 'options'],
  mounted () {
    // this.chartData is created in the mixin.
    // If you want to pass options please create a local options object
    this.renderChart(this.data, {
      borderWidth: '10px',
      hoverBackgroundColor: 'red',
      hoverBorderWidth: '10px'
    })
  }
}