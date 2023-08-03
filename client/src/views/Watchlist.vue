<script>
import { mapActions, mapState } from 'pinia';
import { useCounterStore } from '../stores/counter';

export default{
    methods:{
        ...mapActions(useCounterStore,['readWl'])
    },
    computed:{
        ...mapState(useCounterStore, ['wlName', 'wlSymbol'])
    },
    created(){
        this.readWl()
    }
}
</script>

<template>
    <div class="relative overflow-x-auto">
        <div class="flex mx-auto justify-center mt-16">
            <div class="text-center border-2 pr-2 pl-2">
                <table>
                    <thead >
                        <tr >
                            <th scope="col">Ticker</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="ticker in wlSymbol" >
                            <td> {{ ticker }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="text-center border-2 pr-2 pl-2">
                <table>
                    <thead>
                        <tr>
                            <th scope="col">Company Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="name in wlName" >
                            <td> {{ name }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>                            
        </div>
    </div>
</template>