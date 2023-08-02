<script lang="ts">
  import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  } from 'chart.js'
  import { Line } from 'vue-chartjs'
  import { mapActions, mapState } from 'pinia'
  import { useCounterStore } from '../stores/counter'
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  )
  
  export default {
    name: 'App',
    components: {
      Line
    },
    props: ['stockClose', 'stockDate'],
    methods:{

    },
    computed:{
     
    },
    data() {
      return {
        data: {
            labels: this.stockDate,
            datasets: [
                 {
                 label: 'Data One',
                 backgroundColor: '#F6416C',
                 borderColor: '#00B8A9',
                 data: this.stockClose   // semua yang ada di data ini berupa default value
                 }
             ]
        },
        chartOptions: {
            responsive: true,
            maintainAspectRatio: true
        },
      }
    },
    watch: {
        stockClose() {
            this.data =  {
                labels: this.stockDate,
                datasets: [
                    {
                    label: 'Data One',
                    backgroundColor: '#F6416C',
                    borderColor: '#00B8A9',
                    data: this.stockClose
                    }
                ]
            }
        }
    }
  }
  </script>

<template>
    <Line :options="chartOptions" :data="data"/>
</template>
  
  
  