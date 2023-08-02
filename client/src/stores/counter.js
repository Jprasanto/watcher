import { defineStore } from 'pinia'
import axios from 'axios'

const baseUrl = 'http://localhost:3000'
export const useCounterStore = defineStore('counter', {
  state: () => {
    return {
      email: '',
      password: '',
      access_token: localStorage.getItem('access_token') || '',
      ihsgDataDate: '',
      ihsgDataValue: '',
      stock: '',
    }
  },

  getters: {
    isLogin() {
      if (this.access_token) return true
      return false
    }
  },

  actions: {
    async login(email, password) {
      try {
        console.log(email, password, 9090)
        const response = await axios({
          method: 'post',
          url: baseUrl + '/login',
          data: {
            email,
            password
          }
        })
        localStorage.setItem('access_token', response.data.access_token)
        this.access_token = response.data.access_token
        this.router.push('/')

      } catch (err) {
        console.log(err)

      }
    },
    logout() {
      this.access_token = ''
      localStorage.clear()
      this.router.push('/')
    },
    async register(email, password) {
      console.log("FAS")
      try {
        const user = await axios({
          url: baseUrl + '/register',
          method: 'post',
          data: {
            email,
            password
          }
        })
        this.router.push('/');

      } catch (err) {
        console.log(err)

      }
    },
    async ihsg() {
      // console.log("ASDSA")
      try {
        const { data } = await axios({
          url: baseUrl,
          method: 'get',
          headers: {
            access_token: localStorage.getItem("access_token")
          }
        })
        // console.log(data, "<><><")
        const res = data.ihsg.map(el => el.date)
        console.log(res)
        const value = data.ihsg.map(el => el.last)
        this.ihsgDataDate = res
        this.ihsgDataValue = value
        // console.log(this.ihsgDataValue, 321321)
        // console.log(this.ihsgDataDate, 123)
      } catch (err) {
        console.log(err)
      }
    },
    async stockDataGraph(symbol) {
      try {
        const { data } = await axios({
          url: baseUrl + '/stocks/:symbol',
          method: 'get',
          headers: {
            access_token: localStorage.getItem("access_token")
          }
        })
        console.log(data)
        this.stock = data
      } catch (err) {
        console.log(err)
      }
    }
  }
})
