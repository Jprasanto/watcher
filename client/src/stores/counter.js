import { defineStore } from 'pinia'
import axios from 'axios'

const baseUrl = 'https://watchers-iproject.joniprasanto.com'

export const useCounterStore = defineStore('counter', {
  state: () => {
    return {
      email: '',
      password: '',
      access_token: localStorage.getItem('access_token') || '',
      role: localStorage.getItem('role') || '',
      ihsgDataDate: '',
      ihsgDataValue: '',
      stockClose: '',
      stockDate: '',
      user: '',
      fsSymbol: '',
      fsRevenue: '',
      fsEPS: '',
      fsNetIncomie: '',
      fsYear: '',
      stockName: '',
      stockOpen: '',
      stockHigh: '',
      stockLow: '',
      stockVolume: '',
      ticker: [],
      wl: [],
      wlName: '',
      wlSymbol: ''
    }
  },

  getters: {
    isLogin() {
      if (this.access_token) return true
      return false
    },
    isPremium() {
      if (this.role === "premium") return true
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
        // console.log(responsedata.role, "ini respon")
        localStorage.setItem('access_token', response.data.access_token)
        localStorage.setItem('role', response.data.role)
        this.access_token = response.data.access_token
        this.router.push('/')
        if (response.data.role !== "premium") {
          Swal.fire({
            icon: 'success',
            text: "Become a Premium Member to access US market Financial Statement data",
          })
        } else {
          Swal.fire({
            icon: 'success',
            text: "Welcome !",
          })
        }
      } catch (err) {
        console.log(err)
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        })
      }
    },
    logout() {
      this.access_token = ''
      localStorage.clear()
      this.router.push('/login')
      Swal.fire({
        icon: 'success',
        text: "Logout Success",
      })
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
        Swal.fire({
          icon: 'success',
          text: "Register Success",
        })
      } catch (err) {
        console.log(err)
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        })
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
        const name = data.apiResponse.data.name
        const open = data.apiResponse.data.eod.map(el => el.open)
        const high = data.apiResponse.data.eod.map(el => el.high)
        const low = data.apiResponse.data.eod.map(el => el.low)
        const vol = data.apiResponse.data.eod.map(el => el.volume)
        // console.log(name, "ini name")
        // console.log(dateStock, "<<< ini date")
        this.stockClose = close
        this.stockDate = dateStock
        this.stockName = name
        this.stockOpen = open
        this.stockHigh = high
        this.stockLow = low
        this.stockVolume = vol
      } catch (err) {
        console.log(err, '<<< error')
      }
    },
    async stockDataGraph(symbol) {
      try {
        const { data } = await axios({
          url: baseUrl + `/stocks/${symbol}`,
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
        // console.log(data.apiResponse, "<data fs")
        const tick = data.apiResponse.map(el => el.symbol)
        const revenue = data.apiResponse.map(el => el.revenue)
        const eps = data.apiResponse.map(el => el.eps)
        const netIncome = data.apiResponse.map(el => el.netIncome)
        const calenderYear = data.apiResponse.map(el => el.calendarYear)
        // console.log(tick, "<data tick")
        // console.log(eps, "<data eps")

        this.fsSymbol = tick,
          this.fsRevenue = revenue,
          this.fsEPS = eps,
          this.fsNetIncomie = netIncome,
          this.fsYear = calenderYear
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
            Swal.fire({
              icon: 'success',
              text: "You have become a Premium Member, please log out from your account first",
            })
          },
        })
      } catch (err) {
        console.log(err)
      }
    },
    async readTicker() {
      try {
        const { data } = await axios({
          url: baseUrl + '/ticker',
          method: 'get',
          headers: {
            access_token: localStorage.getItem("access_token")
          }
        })
        console.log(data.message.rows, "<><><")
        this.ticker = data.message
      } catch (err) {
        console.log(err)
      }
    },
    async addWl(TickerId) {
      try {
        const { data } = await axios({
          url: baseUrl + `/wlist/${TickerId}`,
          method: 'post',
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        this.wl.push(data)
        // console.log(this.wl)
        this.router.push('/wl')
        Swal.fire({
          icon: 'success',
          text: "Success add to wishlist",
        })
      } catch (err) {
        console.log(err)
      }
    },
    async readWl() {
      try {
        const { data } = await axios({
          url: baseUrl + '/wlist',
          method: 'get',
          headers: {
            access_token: localStorage.getItem("access_token")
          }
        })
        const name = data.wl.map(el => el.Ticker.name)
        const tick = data.wl.map(el => el.Ticker.symbol)
        // console.log(name, tick, "<")
        this.wlName = name
        this.wlSymbol = tick
      } catch (err) {
        console.log(err)
      }
    },
    async handlePagination(page) {
      try {
        const { data } = await axios({
          url: baseUrl + '/ticker?page=' + page,
          method: 'get',
          headers: {
            access_token: localStorage.getItem("access_token")
          }
        })
        this.ticker = data.message
      } catch (err) {
        console.log(err)
      }
    },
  }
})
