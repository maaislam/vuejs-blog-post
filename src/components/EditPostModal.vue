<template>
    <div class="editpost__form hide" :class="{show:editModal}">
        <div class=" editpost__form-container ui segment container " >
            <div class="ui form">
                <h1>✍️Edit Post✍️</h1>
                
                <div class="field">
                    <label>Author</label>
                    <input
                    v-model="author"
                    
                    type="text" 
                   >
                </div>
                <div class="field">
                    <label>Title</label>
                    <input
                   v-model="title"
                    type="text" 
                    placeholder="Post Title">
                </div>
              
                <div class="field" >
                    <label >Category</label>
                    <CategorySel></CategorySel>
                </div>
                <div class="field">
                    <label>Post Body</label>
                    <textarea
                   v-model="body"
                    style="height: 200px;" 
                    placeholder="write your contetn here...">
                    </textarea>
                </div>
                <button type="submit" class="ui primary button" @click="update">
                    Update
                </button>
                <button class="ui button" @click="close">
                    Cancel
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
        name: 'EditPostModal',

        components:{
            CategorySel
        },

        computed:{

      
    
    ...mapGetters(['editModal']),
     
    ...mapFields(['form.author', 'form.title','form.body']),
          
        },
    methods:{
            
    ...mapActions(['close', 'update']),
           
           
    } 
    }
</script>

<style scoped>
    
    .editpost__form{

        position:fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        height: 100vh;
        width: 100%;
        background-color: rgba(0, 0, 0, 0.781);
        padding: 5rem;
        z-index: 5;

    }

    .editpost__form-container{
        padding: 2rem;
    }
    

    .hide{
        display: none;
    }

    .show{
        display: block;
    }

    h1{
        text-align: center;
    }
    label{
        font-weight: bold;
        padding: 0.5rem;
    }
</style>