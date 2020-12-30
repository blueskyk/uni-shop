import Vue from 'vue'
import App from './App'
import request from "utils/request.js"

Vue.config.productionTip = false
Vue.prototype.$request = request
Vue.filter("formtDate",(date) => {
	const nDate = new Date(date)
	const year = nDate.getFullYear()
	const mounth = nDate.getMonth().toString().padStart(2,0)
	const day = nDate.getDay().toString().padStart(2,0)
	return year + "-" + mounth +"-"+day
})

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
