<script>
import { mapActions, mapState } from 'pinia';
import { useCounterStore } from '../stores/counter';

export default{    
    methods:{
        ...mapActions(useCounterStore, ['fsStock'])
    },
    computed:{
        ...mapState(useCounterStore,['fsEPS','fsNetIncomie','fsRevenue','fsSymbol','fsYear'])
    },
    data(){
        return{
            symbol:''
        }
    },
    created(){
        this.fsStock()
    }
}
</script>

<template>
        <div class="w-full bg-[#F8F3D4]">
            <div>
                <form @submit.prevent="fsStock(symbol)">   
                    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div class="relative">
                        <input v-model="symbol" type="search" id="default-search" class="block w-4/6 mx-auto p-4 pl-10 mt-6 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-[#F8F3D4] dark:border-gray-600 dark:placeholder-black dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search US Stocks here...">
                    </div>
                </form>
            </div>
            <div>
                <div class="px-4 py-4 md:px-10">
                    <div class="text-center mx-auto ">
                        <h1 class="font-bold text-lg m-10">
                            {{ fsSymbol[0] }}
                        </h1>
                        <div class="flex mx-auto justify-center">
                            <div class="text-center border-2 pr-2 pl-2">
                                <table>
                                    <thead >
                                        <tr >
                                            <th scope="col">Financial Year</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="year in fsYear" >
                                            <td> {{ year }}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="text-center border-2 pr-2 pl-2">
                                <table>
                                    <thead>
                                        <tr>
                                            <th scope="col">Earning Per Share</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="eps in fsEPS" >
                                            <td> {{ eps }}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="text-center border-2 pr-2 pl-2">
                                <table>
                                    <thead>
                                        <tr>
                                            <th scope="col">Net Income</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="income in fsNetIncomie" >
                                            <td> {{ income }}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="text-center border-2 pr-2 pl-2">
                                <table>
                                    <thead>
                                        <tr>
                                            <th scope="col">Revenue</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="rev in fsRevenue" >
                                            <td> {{ rev }}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
   
</template>