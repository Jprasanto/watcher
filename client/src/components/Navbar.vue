<script>
import { RouterLink } from 'vue-router';
import { mapState, mapActions } from 'pinia';
import { useCounterStore } from '../stores/counter';

export default{
    components: { RouterLink },
    computed:{
        // ...mapState(storeLogin, ['isLogin'])
    },
    methods:{
        ...mapActions(useCounterStore, ['logout']),
        // ...mapActions(productStore, ['handleSearch'])
    },
    data(){
        return{
          search: ''
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
                            <span class="ml-32 py-2 px-4 rounded font-family: 'Roboto', sans-serif; font-extrabold text-[#00B8A9] bg-white"> WATCHER </span>
                        </RouterLink>
                    </div>
                    <div class="hidden sm:ml-6 sm:block">
                    <div class="flex space-x-4">
                        <RouterLink 
                        to="/wl"
                        class=" hover:bg-white hover:text-[#00B8A9] text-white rounded-md px-3 py-2 text-sm font-medium"
                        >
                        Watchlist
                        </RouterLink>
                    </div>
                    </div>
                </div>
                <div>
                    <form >
                      <input
                          v-model="search"
                          class="border-2 p-2 w-full rounded"
                          placeholder="Search here ..."
                          autocomplete="off"
                      />
                    </form>
                </div>
                    <div  class="row flex justify-end">
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
                        <div class="hidden sm:ml-6 sm:block">
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
                    <div  class="hidden sm:ml-6 sm:block">
                        <div class="flex space-x-4 mr-16">
                            <RouterLink 
                           @click.prevent="logout"
                            to="/login"
                            class=" hover:bg-white hover:text-[#00B8A9] text-white rounded-md px-3 py-2 text-sm font-medium"
                            >
                            Logout
                            </RouterLink>
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