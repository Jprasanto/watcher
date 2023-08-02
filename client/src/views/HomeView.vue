<script >
import Barchart from '../components/Barchart.vue' 
import { mapActions, mapState } from 'pinia';
import {useCounterStore} from '../stores/counter'
import StockChart from '../components/stockChart.vue';

export default{
    components:{
    Barchart,
    StockChart
},
    methods:{
        ...mapActions(useCounterStore,['ihsg', 'stockDataGraph'])
    },
    computed:{
        ...mapState(useCounterStore, ['ihsgDataDate', 'ihsgDataValue', 'stockClose', 'stockDate'])
    },
    created(){
        this.ihsg()
        this.stockDataGraph()
        // console.log(this.ihsgDataValue, ">>>><<<")
    }
}
</script>

<template>
<section class="py-5 bg-[#F8F3D4]">
        <div class="container mx-auto">
            <div class=" pl-20">
                <h1 class="text-2xl font-black text-gray-900 pb-6 px-6 md:px-10">
                    IDX Composite
                </h1>
            </div>
            <div class="w-4/6 mx-auto">
                <Barchart :ihsgDataDate="ihsgDataDate" :ihsgDataValue="ihsgDataValue"/>
            </div>
            <div class="flex flex-wrap px-6">
                <div class="w-full lg:w-1/2   md:px-4 lg:px-6 py-5">
                    <div class="bg-[#F8F3D4] hover:shadow-xl">
                        <div class="">
                           <StockChart :stockClose="stockClose" :stockDate="stockDate"/>
                        </div>
                       
                    </div>
                </div>
            </div>

        </div>
    </section>
</template>
