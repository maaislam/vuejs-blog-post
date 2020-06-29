
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
    savePost:(state, title)=>{

        state.title = title;

        
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
    getAllPost:( payload)=>{

        if (payload){
           
            axios.get('http://localhost:3000/posts').then(response =>{
 
            state.allPost = response.data;
            
 
            });
            
 
         }
    },
    submit:(payload)=>{

        if (payload){
            axios({
                method: 'post',
                url: 'http://localhost:3000/posts',
                data: {
                  author: state.form.author,
                  title: state.form.title,
                  category:state.form.categories,
                  body: state.form.body,
                }
              });
        }
    },

  
    
};



export default {
    state,
    getters,
    mutations,
    actions
}