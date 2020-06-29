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
                <h3>{{post.title}}</h3>
                <p>{{post.body}}</p>
                <ul>
                    <li class="category-list" v-for="category in post.category" :key="category.id">
                        <div class="ui red horizontal label">{{category}}</div>
                    </li>
                </ul>
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
            
            ...mapActions(['newPostForm','getAllPost']),
           
           
        }
       
    }
</script>

<style scoped>

    li{
        list-style: none;
    }
   
    .post-list{
        padding: 2rem;
    }
   
    h3{
        text-align: center;
    }
 
    .category-list{
        display: inline-block;
    }

    .post-list ul{
        text-align: right;
       
        padding: 1rem;
    }
    .label{
        text-transform: capitalize;
    }

    .btn-container{
        margin-left: 2.7rem;
    }

</style>