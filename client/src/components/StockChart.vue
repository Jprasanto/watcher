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
        <div class="px-4 py-4 md:px-10">
            <h1 class="font-bold text-lg">
                UI,UX Concepts
            </h1>
            <p class="py-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quas sapiente
                voluptate
                earum natus facilis dolor deserunt dolorum tempora obcaecati consequatur rem, vel
                distinctio
                perferendis tempore nemo sequi eos accusantium.
            </p>
            <div class="flex flex-wrap pt-8">
                <div class="w-full md:w-1/3 text-sm font-medium">
                    NOVEMBER 1,2019
                </div>
                <div class="2/3">
                    <div class="text-sm font-medium">
                        SHARE:
                        <a href="" class="text-blue-700 px-1 ">
                            FACEBOOk
                        </a>
                        <a href="" class="text-blue-500 px-1 ">
                            TWITTER
                        </a>
                        <a href="" class="text-red-600 px-1 ">
                            GOOGLE+
                        </a>
                    </div>
                </div>
            </div>
        </div>
</template>
  
  
  