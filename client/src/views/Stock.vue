<script>
import { mapActions, mapState } from 'pinia';
import TickCard from '../components/TickCard.vue';
import { useAttrs } from 'vue';
import { useCounterStore } from '../stores/counter';

export default{
    components: { TickCard },
    computed:{
        ...mapState(useCounterStore,['ticker'])
    },
    methods:{
        ...mapActions(useCounterStore, ['readTicker', 'handlePagination'])
    },
    created(){
        this.readTicker()
    }
}
</script>

<template>
    <div class="grid grid-rows-3 grid-flow-col gap-4 pt-4 pl-20 bg-[#F8F3D4]">
        <TickCard v-for="ticker in ticker.rows" :ticker="ticker"/>
    </div>
    <div class=" flex  pt-8 pb-8 justify-center bg-[#F8F3D4]">
    <nav aria-label="Page navigation example">
      <ul class="inline-flex -space-x-px text-sm">
        <li v-for="page in ticker.totalPages" :key="page.id" @click.prevent="handlePagination(page)">
          <a href="#" class="flex items-center justify-center bg-red-600 px-3 h-8 ml-0 leading-tight
           text-black border rounded-lg mx-1
            hover:bg-red-600 hover:text-white dark:bg-[#00B8A9]
             dark:border-black dark:text-white dark:hover:bg-[#F6416C]
              dark:hover:text-white">
              {{ page }}
            </a>
        </li>
      </ul>
    </nav>
  </div>
</template>