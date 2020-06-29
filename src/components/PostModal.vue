<template>

    <div class="post__form hide" :class="{show:addPostForm}">
        <div class=" post__form-container ui segment container " >
            <div class="ui form">
                <h3>✍️Create New Post✍️</h3>
                
                <div class="field">
                    <label>Author</label>
                    <input
                    v-model="author" 
                    type="text" 
                    placeholder="Author">
                </div>
                <div class="field">
                    <label>Title</label>
                    <input
                    v-model="title"  
                    type="text" 
                    placeholder="Post Title">
                </div>
              
                <div class="field">
                    <label >Category</label>
                    <CategorySel/>
                </div>
                <div class="field">
                    <label>Post Body</label>
                    <textarea
                    v-model="body" 
                    style="height: 200px;" 
                    placeholder="write your contetn here...">
                    </textarea>
                </div>
                <button type="submit" class="ui primary button" @click="submit">
                    Save
                </button>
                <button class="ui button" @click="discard">
                    Discard
                </button>
            </div>
        </div>
    </div>
</template>

<script>

    import { mapFields } from 'vuex-map-fields';

    import CategorySel from './CategorySel'
    import {mapGetters, mapActions} from 'vuex';
    
    export default {
    name: 'Postmodal',
    components:{
        CategorySel
    },

    computed:{

      
    
    ...mapGetters(['addPostForm']),
     
    ...mapFields(['form.author', 'form.title','form.body']),
          
        },
    methods:{
            
    ...mapActions(['discard', 'submit']),
           
           
    }    

    }
</script>

<style scoped>

    .post__form{

        position:fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        height: 100vh;
        width: 100%;
        background-color: rgba(0, 0, 0, 0.781);
        padding: 5rem;

    }

    .post__form-container{
        padding: 2rem;
    }
    

    .hide{
        display: none;
    }

    .show{
        display: block;
    }

    h3{
        text-align: center;
    }
    label{
        font-weight: bold;
        padding: 0.5rem;
    }

</style>