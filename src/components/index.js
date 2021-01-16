import searchBox from './searchBox'
import tableBox from './tableBox'
import boxB from './sBox/boxB'
import boxS from './sBox/boxS'

const searchs = {
    install(Vue) {
        Vue.component('searchBox', searchBox)
        Vue.component('tableBox', tableBox)
        Vue.component('boxB', boxB)
        Vue.component('boxS', boxS)
    }
}
export default searchs