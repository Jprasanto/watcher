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
    props: ['stockClose', 'stockDate', 'stockName', 'stockOpen', 'stockHigh', 'stockLow', 'stockVolume'],
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
        <div class="px-4 py-4 md:px-10">
            <h1 class="font-bold text-lg">
                {{ stockName }}
            </h1>
            <div class="flex flex-wrap pt-8">
                <div class="w-full md:w-1/3 text-sm font-medium">
                    {{ stockDate[0] }}
                </div>
                <div class="flex">
                    <div>
                        <div>
                            Open : {{ stockOpen[0] }}
                        </div>
                        <div>
                            Close : {{ stockClose[0] }}
                        </div>
                        <div>
                            Volume : {{ stockVolume[0] }}
                        </div>
                    </div>
                    <div class="pl-4">
                        <div>
                            High : {{ stockHigh[0] }}
                        </div>
                        <div>
                            Low : {{ stockLow[0] }}
                        </div>
                    </div>
                </div>
                

            </div>
        </div>
</template>
  
  
  