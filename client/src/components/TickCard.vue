<script>
import { mapActions } from 'pinia';
import { useCounterStore } from '../stores/counter';

export default{
    props: ['ticker'],
    methods:{
        ...mapActions(useCounterStore, ['addWl'])
    }
}
</script>

<template>
    <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-[#FFDE7D] dark:border-gray-700">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">{{ ticker.name }}</h5>
        </a>
        <p class="mb-3 font-normal text-gray-800 dark:text-gray-800">{{ ticker.symbol }}</p>
        <a @click="addWl(ticker.id)" href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#F6416C] rounded-lg hover:bg--[#F6416C] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-[#F6416C] dark:hover:bg-[#00B8A9] dark:focus:ring-blue-800">
            Add to WatchList
            <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</template>