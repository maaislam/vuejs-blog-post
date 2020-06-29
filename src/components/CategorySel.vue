<template>
  <sui-dropdown
    fluid
    multiple
    :options="options"
    placeholder="Category"
    selection
    v-model="categories"
    
  />
</template>

<script>

import { mapFields } from 'vuex-map-fields';

export default {
  name: 'CategorySel',
  data() {
    return {
      selected:[],
      options: [
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

         

      }
  



};
</script>
