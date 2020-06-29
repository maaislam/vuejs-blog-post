
import axios from 'axios';
import { getField, updateField } from 'vuex-map-fields';

const state = {

    addPostBtn: false,
    allPost:[],
    form:{
        author:'',
        title:'',
        body:'',
        categories:[]

    }
    
};



const getters = {

    addPostForm:(state)=>{
     
        return state.addPostBtn;
      },
    
    getPosts:(state)=>{
        return state.allPost;
    },
    getField


};



const mutations= {


    setAllPost:(state, response) => state.allPost = response,

    resetState:(state)=>{
        state.form.author='';
        state.form.title = '';
        state.form.categories = [];
        state.form.body = '';
        state.addPostBtn = false;
    },

    newPostForm:(state, payload)=>{
        if (payload){
           
           state.addPostBtn = true;
           
        }
  
    },
    discard:(state, payload)=>{
        if (payload){
           
           state.addPostBtn = false;
           console.log(state.addPostBtn)
        }
  
    },
   

    updateCategory (state, category) {
        state.form.categories = category
    },

    updateField,

};


const actions = {

    newPostForm:(context, payload)=>{

        context.commit('newPostForm', payload)
    },
    discard:(context, payload)=>{

        context.commit('discard', payload)
    },
    async getAllPost(context, payload){

        if (payload){
           
            const response = await axios.get('http://localhost:3000/posts');
            console.log(response)
            context.commit('setAllPost', response.data)
          }
    },
    async submit(context, payload){

        if (payload){
             await axios({
                method: 'post',
                url: 'http://localhost:3000/posts',
                data: {
                  author: state.form.author,
                  title: state.form.title,
                  category:state.form.categories,
                  body: state.form.body,
                }
              });
              context.commit('resetState')
        }
    },

   
  
    
};


export default {
    state,
    getters,
    mutations,
    actions
}

