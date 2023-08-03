<script >
import Barchart from '../components/Barchart.vue' 
import { mapActions, mapState } from 'pinia';
import {useCounterStore} from '../stores/counter'
import StockChart from '../components/stockChart.vue';
import TickCard from '../components/TickCard.vue';

export default{
    components:{
    Barchart,
    StockChart,
    TickCard
},
    methods:{
        ...mapActions(useCounterStore,['ihsg', 'stockDataGraph'])
    },
    computed:{
        ...mapState(useCounterStore, ['ihsgDataDate', 'ihsgDataValue', 'stockClose', 'stockDate', 'stockName', 'stockOpen', 'stockHigh', 'stockLow', 'stockVolume'])
    },
    created(){
        this.ihsg()
        this.stockDataGraph()
        // this.readTicker()
        // console.log(this.ihsgDataValue, ">>>><<<")
    }
}
</script>

<template>
<section class="py-5 bg-[#F8F3D4]">
        <div class="container mx-auto">
            <div class=" pl-20">
                <h1 class="text-2xl font-black text-gray-800 pb-6 px-6 md:px-10">
                    IDX Composite
                </h1>
            </div>
            <div class="w-4/6 mx-auto">
                <Barchart :ihsgDataDate="ihsgDataDate" :ihsgDataValue="ihsgDataValue"/>
            </div>
            <div>
                <hr class="h-px my-9 bg-gray-200 border-0 dark:bg-gray-700 w-[1200px] mx-auto">
            </div>
            <div class="text-center text-xl">
                {{ stockName }}
            </div>
            <div class="flex mx-auto px-6 pt-6">
                <div class="w-full lg:w-1/2  mx-auto md:px-4 lg:px-6 py-5">
                    <div class="bg-[#F8F3D4] hover:shadow-xl">
                        <div class="">
                           <StockChart :stockClose="stockClose" 
                           :stockDate="stockDate" 
                           :stockName="stockName" 
                           :stockOpen="stockOpen" 
                           :stockHigh="stockHigh" 
                           :stockLow="stockLow" 
                           :stockVolume="stockVolume"/>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <hr class="h-px my-9 bg-gray-200 border-0 dark:bg-gray-700 w-[1200px] mx-auto">
            </div>
        </div>
    </section>
</template>
