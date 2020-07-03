
import axios from 'axios';
import { getField, updateField } from 'vuex-map-fields';


const url = {
    demoServer:'https://testserver1990.herokuapp.com'
};

const state = {
    
    addPostBtn: false,
    allPost:[],
    form:{
        author:'',
        title:'',
        body:'',
        categories:[]

    },
    categoryModal:false,
    newCategory:'',
    indexOfNewCat:null,
    
    //for editing posts
    
    openEditModal:false
};



const getters = {

    addCategory:(state)=>{
        return state.categoryModal;
    },

    addPostForm:(state)=>{
     
        return state.addPostBtn;
      },
    
    getPosts:(state)=>{
        return state.allPost;
    },
    
    editModal:()=>{ return state.openEditModal;},

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
        state.openEditModal = false
    },

    newPostForm:(state, payload)=>{
        if (payload){
           
           state.addPostBtn = true;

           
        }
  
    },
    discard:(state, payload)=>{
        if (payload){
           
           state.addPostBtn = false;
           //console.log(state.addPostBtn)
        }
  
    },
   

    check:( payload) => {
        // if dropdown is clicked start checking if user pressed "Add New" button
        if(payload){
            //if "Add New" is selected remove it and set categoryModal state to true 
            const test = state.form.categories.includes("Add New");
            if (test){
                state.indexOfNewCat = state.form.categories.indexOf("Add New");
                    if (state.indexOfNewCat > -1) {
                    state.form.categories.splice(state.indexOfNewCat,1);
                    state.categoryModal = true;
}
            }
        }

    },
    closeCatModal:(payload)=>{
        if(payload){
            
            state.categoryModal = false;
        }
        
    },


    addCat:(state, payload)=>{

        if (payload){
            
        state.form.categories.splice(state.indexOfNewCat,0, state.newCategory)
        //console.log(state.form.categories)
        state.categoryModal = false;
        state.newCategory = '';
        }
       
        
    },

    editPost:(state,id)=>{
        
       

        const postToEdit = state.allPost.find(post=>post.id===id);

        state.form.id = postToEdit.id
        state.form.title = postToEdit.title
        state.form.author = postToEdit.author
        state.form.body = postToEdit.body
        state.form.categories = postToEdit.category

        state.openEditModal = true
        
    },

    close:(state, payload) =>{

        if(payload){
            state.openEditModal = false;
            console.log(state.openEditModal)
        }
    
    },

    updateField,

};


const actions = {

   

    newPostForm:(context, payload)=>{

        context.commit('newPostForm', payload)
    },
    closeCatModal:(context, payload)=>{

        context.commit('closeCatModal', payload)
    },
    addCat:(context, payload)=>{

        context.commit('addCat', payload)
    },
    discard:(context, payload)=>{

        context.commit('discard', payload)
    },
    async getAllPost(context, payload){

        if (payload){
           
            const response = await axios.get(`${url.demoServer}/posts`);
            //console.log(response)
            context.commit('setAllPost', response.data)
          }
    },
    async submit(context, payload){

        if (payload){
             await axios({
                method: 'post',
                url: `${url.demoServer}/posts`,
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
    async update(context, payload){

        if (payload){
             await axios({
                method: 'put',
                url: `${url.demoServer}/posts/${state.form.id}`,
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

    check:(context, payload)=>{

        context.commit('check', payload)
    },
   
    editPost:(context,  id)=>{

        context.commit('editPost', id)
    },
    close:(context,  payload)=>{

        context.commit('close', payload)
    }
    
};


export default {
    state,
    getters,
    mutations,
    actions
}

