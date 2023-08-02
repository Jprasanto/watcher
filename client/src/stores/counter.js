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
      stockClose: '',
      stockDate: '',
      user: ''
    }
  },

  getters: {
    isLogin() {
      if (this.access_token) return true
      return false
    },
    isPremium() {
      if (this.user.role === "premium") return true
      return false
    }
  },

  actions: {
    async login(email, password) {
      try {
        // console.log(email, password, 9090)
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
      this.router.push('/login')
    },
    async register(email, password) {
      // console.log("FAS")
      try {
        const user = await axios({
          url: baseUrl + '/register',
          method: 'post',
          data: {
            email,
            password
          }
        })
        this.router.push('/login');
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
        // console.log(res)
        const value = data.ihsg.map(el => el.last)
        this.ihsgDataDate = res
        this.ihsgDataValue = value
        // console.log(this.ihsgDataValue, 321321)
        // console.log(this.ihsgDataDate, 123)
      } catch (err) {
        console.log(err)
      }
    },
    async handleSearch(symbol) {
      // console.log(symbol, '<<<< symbol nih')
      try {
        const { data } = await axios({
          url: baseUrl + `/stocks/` + symbol,
          method: 'get',
          headers: {
            access_token: localStorage.getItem("access_token")
          }
        })
        const close = data.apiResponse.data.eod.map(el => el.close)
        const dateStock = data.apiResponse.data.eod.map(el => el.date.split("T")[0])
        // console.log(close, "ini close")
        // console.log(dateStock, "<<< ini date")
      } catch (err) {
        console.log(err, '<<< error')
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
    },
    async fsStock(symbol) {
      try {
        const { data } = await axios({
          url: baseUrl + `/fs/` + symbol,
          method: 'get',
          headers: {
            access_token: localStorage.getItem("access_token")
          }
        })
      } catch (err) {
        console.log(err, '<<< error')
      }
    },
    async getProfile() {
      try {
        const { data } = await axios.get(baseUrl + '/profile', {
          headers: {
            access_token: localStorage.getItem("access_token")
          }
        })
        this.user = data
      } catch (err) {
        console.log(err)
      }
    },
    async premium() {
      try {
        const { data } = await axios({
          url: baseUrl + '/subscription',
          method: 'patch',
          headers: {
            access_token: localStorage.getItem("access_token")
          }
        })
        this.getProfile()
      } catch (err) {
        console.log(err)
      }
    },
    async subscribe() {
      try {
        const { data } = await axios({
          url: baseUrl + '/generate-midtrans-token',
          method: 'post',
          headers: {
            access_token: localStorage.getItem("access_token")
          }
        })
        // console.log(data.midtransToken, "token midtrans")
        const role = this.premium

        window.snap.pay(data.midtransToken.token, {
          onSuccess: function (result) {
            role()
          },
        })
      } catch (err) {
        console.log(err)
      }
    }
  }
})
