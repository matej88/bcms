<template>

  <div>
<h1> THIS IS THE SCHEDULE </h1>  
  <GChart
    :settings="{packages: ['timeline']}" 
    :data="chartData"
    :options="chartOptions"
    :createChart="(el, google) => new google.charts.Timeline(el)"
    @ready="onChartReady"
  />
</div>
</template>

<script>
import { GChart } from 'vue-google-charts'

export default {
  name: 'Schedule',
  components: {
    GChart
  },
  data () {
    return {
      chartsLib: null, 
      // Array will be automatically processed with visualization.arrayToDataTable function
      chartData: [
        ['Year', 'Sales', 'Expenses', 'Profit'],
        ['2014', 1000, 400, 200],
        ['2015', 1170, 460, 250],
        ['2016', 660, 1120, 300],
        ['2017', 1030, 540, 350]
      ]
    }
  },
  computed: {
    chartOptions () {
      if (!this.chartsLib) return null
      return this.chartsLib.charts.Timeline.convertOptions({
        chart: {
          title: 'Company Performance',
          subtitle: 'Sales, Expenses, and Profit: 2014-2017'
        },
        hAxis: { format: 'decimal' },
        height: 400,
        colors: ['#1b9e77', '#d95f02', '#7570b3']
      })
    }
  },
  methods: {
    onChartReady (chart, google) {
      this.chartsLib = google
    }
  }
}

</script>

<style scoped>
  h1 {
    color: black;
  }
</style>
