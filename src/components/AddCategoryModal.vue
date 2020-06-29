<template>
    <div class="category__form hide" :class="{show:addCategory}">
        <div class=" category__form-container ui segment container " >
            <div class="ui form">
                <h3>🤔Create New Category🤔</h3>
                
                <div class="field">
                    <label >Add New Category</label>
                    <input
                    v-model="newCategory"
                    
                    type="text" 
                    placeholder="Add New Category">
                </div>
                <button type="submit" class="ui primary button" @click="addCat">
                    Add
                </button>
                <button class="ui button" @click="closeCatModal">
                    Close
                </button>
            </div>
        </div>
    </div>
</template>

<script>

     import { mapFields } from 'vuex-map-fields';
    import {mapGetters, mapActions } from 'vuex';

    export default {
        name: 'AddCategoryModal',

        computed:{

            ...mapGetters(['addCategory']),
             ...mapFields(['newCategory']),

        },
        methods:{

            ...mapActions(['addCat', 'closeCatModal']),

        }
        



    }
</script>

<style scoped>


        .category__form{

        position: absolute;;
        top: 0;
        height: 100vh;
        width: 100%;
        background-color: rgba(199, 199, 199, 0.37);
        padding-top: 20rem;
        z-index: 15;
    }

    .category__form-container{
        padding: 2rem;
        width: 30%;
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