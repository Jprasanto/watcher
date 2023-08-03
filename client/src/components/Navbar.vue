<script>
import { RouterLink } from 'vue-router';
import { mapState, mapActions } from 'pinia';
import { useCounterStore } from '../stores/counter';

export default{
    components: { RouterLink },
    computed:{
        ...mapState(useCounterStore, ['isLogin', 'isPremium'])
    },
    methods:{
        ...mapActions(useCounterStore, ['logout', 'handleSearch', 'subscribe']),
    },
    data(){
        return{
          symbol: ''
        }
    },
}
</script>

<template>
    <!-- Navbar -->
    <nav class="inset-x-0 z-30 bg-[#00B8A9]">
        <div class="left-0">
            <div class="relative flex h-16 items-center justify-between">
                <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                    <div class="flex flex-shrink-0 items-center">
                        <RouterLink to="/">
                            <span class="ml-16 py-2 px-4 rounded font-family: 'Roboto', sans-serif; font-extrabold text-[#00B8A9] bg-white"> WATCHER </span>
                        </RouterLink>
                    </div>
                    <div v-if="isLogin" class="hidden sm:ml-6 sm:block">
                        <div class="flex space-x-4">
                            <RouterLink 
                            to="/ticker"
                            class=" hover:bg-white hover:text-[#00B8A9] text-white rounded-md px-3 py-2 text-sm font-medium"
                            >
                            StocksList
                            </RouterLink>
                        </div>
                    </div>
                    <div v-if="isLogin" class="hidden sm:ml-6 sm:block">
                        <div class="flex space-x-4">
                            <RouterLink 
                            to="/wl"
                            class=" hover:bg-white hover:text-[#00B8A9] text-white rounded-md px-3 py-2 text-sm font-medium"
                            >
                            Watchlist
                            </RouterLink>
                        </div>
                    </div>
                    <div v-if="isLogin && isPremium" class="hidden sm:ml-6 sm:block">
                        <div class="flex space-x-4">
                            <RouterLink 
                            to="/fs"
                            class=" hover:bg-white hover:text-[#00B8A9] text-white rounded-md px-3 py-2 text-sm font-medium"
                            >
                            Financial Statement (Premium)
                            </RouterLink>
                        </div>
                    </div>
                </div>
                <div v-if="isLogin && !isPremium" class="hidden sm:ml-6 sm:block">
                    <div class="flex space-x-4 mr-6">
                        <button
                        @click.prevent="subscribe"
                        class=" hover:bg-white hover:text-[#00B8A9] text-white rounded-md px-3 py-2 text-sm font-medium"
                        >
                            GET PREMIUM !!
                        </button>
                    </div>
                </div>
                <div v-if="isLogin && isPremium" class="hidden sm:ml-6 sm:block">
                    <div class="flex space-x-4 mr-6">
                        <button
                        class=" hover:bg-white hover:text-[#00B8A9] text-white rounded-md px-3 py-2 text-sm font-medium"
                        >
                            You are a PREMIUM member
                        </button>
                    </div>
                </div>
                <div>    
                    <form @submit.prevent="handleSearch(symbol)">
                      <input
                          v-model="symbol"
                          class="border-2 p-2 w-full rounded"
                          placeholder="Search here ..."
                          autocomplete="off"
                          type="search"
                      />
                    </form>
                </div>
                    <div v-if="!isLogin" class="row flex justify-end">
                        <div class="hidden sm:ml-6 sm:block">
                            <div class="flex space-x-4">
                                <RouterLink 
                                to="/register"
                                class=" hover:bg-white hover:text-[#00B8A9] text-white rounded-md px-3 py-2 text-sm font-medium"
                                >
                                Register
                                </RouterLink>
                            </div>
                        </div>
                        <div v-if="!isLogin" class="hidden sm:ml-6 sm:block">
                            <div class="flex space-x-4 mr-12">
                                <RouterLink 
                                to="/login"
                                class=" hover:bg-white hover:text-[#00B8A9] text-white rounded-md px-3 py-2 text-sm font-medium"
                                >
                                Login
                                </RouterLink>
                            </div>
                        </div>
                    </div> 
                    
                    <div v-if="isLogin" class="hidden sm:ml-6 sm:block">
                        <div class="flex space-x-4 mr-10">
                            <button
                            @click.prevent="logout" 
                            class=" hover:bg-white hover:text-[#00B8A9] text-white rounded-md px-3 py-2 text-sm font-medium"
                            >
                                Logout
                           </button>
                        </div>
                    </div>
            </div>
        </div>
    </nav>
    <!-- End Navbar -->
</template>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
</style>