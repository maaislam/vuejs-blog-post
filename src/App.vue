<template>
  <div>
    <AppHeader></AppHeader>
    <router-view></router-view>
    
      <PostModal/>
      <AddCategoryModal/>
      <EditPostModal/>
      
    
  </div>
</template>

<script>

  //import AllPost from './components/AllPost';
  import AppHeader from './components/AppHeader';
  import PostModal from './components/PostModal';
  import AddCategoryModal from './components/AddCategoryModal';
  import EditPostModal from './components/EditPostModal';
 


  export default {
    name: 'App',
  components:{
   // AllPost,
    AppHeader,
    PostModal,
    AddCategoryModal,
    EditPostModal,
    
    
  }
    
  }
</script>

<style scoped>

</style>