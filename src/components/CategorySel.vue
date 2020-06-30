<template>
  <sui-dropdown
    @click="check"
    fluid
    multiple
    allowAdditions
    
    :options="options"
    placeholder="Category"
    selection
    v-model="categories">
    
    </sui-dropdown>
</template>

<script>

import { mapFields  } from 'vuex-map-fields';
import { mapActions} from 'vuex';

export default {
  name: 'CategorySel',
  data() {
    return {
      
      selected:[],
      options: [
        { key: 'Add New', text: 'Create New Category', value: 'Add New'},
        { key: 'science', text: 'science', value: 'science' },
        { key: 'programming', text: 'programming', value: 'programming' },
        { key: 'lifestyle', text: 'lifestyle', value: 'lifestyle' },
        { key: 'fashion', text: 'fashion', value: 'fashion' },
        { key: 'sports', text: 'sports', value: 'sports' },
        { key: 'entertainment', text: 'entertainment', value: 'entertainment' }
      ],
    };
  },

     computed:{


    

    ...mapFields([
      'form.categories',
      
      // ...
    ]),

     
    },
    methods:{
            
    ...mapActions(['check']),
           
           
    } 



};
</script>
