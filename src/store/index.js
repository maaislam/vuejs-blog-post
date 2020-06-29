import Vue from 'vue'
import Vuex from 'vuex'
import blogManager from './modules/blogManager'


Vue.use(Vuex)

export default new Vuex.Store({
    
    modules:{
        blogManager
    }

    
});