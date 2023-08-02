<script>
import { mapActions, mapState } from 'pinia';
import { useCounterStore } from '../stores/counter';

export default{    
    methods:{
        ...mapActions(useCounterStore, ['fsStock'])
    },
    created(){
        this.fsStock()
    }
}
</script>

<template>
    <div>
        <form @submit.prevent="fsStock(symbol)">
            <input
                v-model="symbol"
                class="border-2 p-2 w-1/3 rounded"
                placeholder="Search here ..."
                autocomplete="off"
            />
        </form>
    </div>
</template>