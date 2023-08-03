<script>
import { mapActions } from 'pinia';
import { useCounterStore } from '../stores/counter';
import { RouterLink } from 'vue-router';

export default{
  components:{
    RouterLink
  },
  methods:{
    ...mapActions(useCounterStore,['login'])
  },
  data(){
    return{
      email:'',
      password:''
    }
  }
}
</script>

<template>
<section class="h-screen bg-[#F8F3D4]">
  <div class="container h-full px-6 py-24">
    <div
      class="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between ">
      <!-- Left column container with background-->
      <div class="mb-12 md:mb-0 md:w-8/12 lg:w-[650px] mx-auto ">
        <img
          src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
          class="w-full"
          alt="Phone image" />
      </div>

      <!-- Right column container with form -->
      <div class="md:w-8/12 lg:ml-6 lg:w-5/12 ">
        <form @submit.prevent="login(email,password)" class="w-4/6">
          <div
            class=" flex flex-row items-center justify-center lg:justify-start mb-5">
            <p class="mb-0 mr-4 text-lg ">Login</p>
          </div>
          <!-- Email input -->
          <div class="relative mb-6 bg-[#FFDE7D]" >
            <input
              v-model="email"
              type="text"
              class=" placeholder-white bg-[#FFDE7D] rounded border-0 p-3 "
              id="exampleFormControlInput3"
              placeholder="Email address" />
          
          </div>

          <!-- Password input -->
          <div class="relative mb-6 bg-[#FFDE7D]" >
            <input
              v-model="password"
              type="password"
              class=" placeholder-white bg-[#FFDE7D] rounded border-0 p-3 "
              id="exampleFormControlInput33"
              placeholder="Password" 
              autocomplete="off"/>
          </div>

          <!-- Submit button -->
          <button
            type="submit"
            class="bg-[#FFDE7D] inline-block w-full rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
            data-te-ripple-init
            data-te-ripple-color="light">
            Sign in
          </button>

          <!-- Divider -->
          <div
            class="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
            <p
              class="mx-4 mb-0 text-center font-semibold dark:text-black">
              OR
            </p>
          </div>
        </form>
        <div class="w-4/6 text-center m-2">
            <span>Do not have an account?<RouterLink to="/register"> Register here!</RouterLink></span>
          </div> 
      </div>
    </div>
  </div>
</section>
</template>