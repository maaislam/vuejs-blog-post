<template>
    <div class="ui container">
        <div class="ui segment center aligned btn-container">
            <button 
                class="ui primary button"
                @click="newPostForm">Add Post
            </button>
            <button 
                class="ui button"
            >Add Category
            </button>
            <button 
                class="ui button green"
                @click="getAllPost"
            >Show All Post
            </button>
        </div>
        <ul >
            <li class="ui raised segment post-list" v-for="post in getPosts" :key="post.id">
                
                <h1 class="ui huge header">{{post.title}}</h1>
                <p>{{post.body}}</p>
                <div class="post__meta-panel">
                    <ul class ="post__tags">
                        <li class="category-list" v-for="category in post.category" :key="category.id">
                            <div class="ui red horizontal label">{{category}}</div>
                        </li>
                    </ul >
                    <div class="ui vertical red animated button" tabindex="0" @click="editPost(post.id)">
                        <div class="hidden content">Edit</div>
                        <div class="visible content">
                            <i class="pencil alternate icon"></i>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex';
   
    export default {
        name: 'AllPost',

    computed:{

            
        ...mapGetters(['getPosts'])
          
        },

    
    methods:{
            
            ...mapActions(['newPostForm','getAllPost', 'editPost']),
           
           
        }
       
    }
</script>

<style scoped>

    li{
        list-style: none;
    }
   
    .post-list{
        padding: 3rem;
    }
   
  
    .category-list{
        display: inline-block;
        padding-top: 0.8rem;
    }

    
    

    h1{
        font-size: 2.5rem !important;
    }
    p{
        font-size: 1.3rem;
        line-height: 2.0rem;
        font-weight: 300;
        color: rgb(0, 0, 0);

    }
    .post__meta-panel{
        
        display: flex;
        flex: 1;
        justify-content: space-between;
        padding-right: 2rem;
        
    }
    .post__tags{
        padding-left: 0 !important;
    }
</style>