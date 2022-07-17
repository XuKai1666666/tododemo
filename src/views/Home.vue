<template>
    <div class="item">
        <nav-header @add ='add'></nav-header>
        <nav-main :list='list' @del='del'></nav-main>
        <nav-footer :list='list'  @clear='clear'></nav-footer>
    </div>
      
</template>
 
<script>
    //编写js内容
import NavHeader from '@/components/navHeader/NavHeader.vue'   
import NavMain   from '@/components/navMain/NavMain.vue'
import NavFooter from '@/components/navFooter/NavFooter.vue'
import {defineComponent,ref,computed} from 'vue'
import{useStore} from 'vuex'
  
 
 
export default defineComponent({
    name:'Home',
    components:{
        NavHeader,
        NavMain,
        NavFooter
    },
    setup(){
        let store = useStore()
        let list = computed(()=>{
            return store.state.list
        })
        let value = ref('')
        let add =(val)=>{
             value.value = val
             //设置flag 判断输入的信息是否已经存在
             let flag = true
             list.value.map(item =>{
                 if(item.title===value.value){
                     //有重复任务
                     flag = false;
                     alert('任务已经存在')
                 }
                  
             })
              
             if(flag){
             //调用mutation
                store.commit('addTodo',{
                    title:value.value,
                    complete:false
                })
             }
      
         }
         //删除任务
         let del =(val)=>{
            console.log(val)
            store.commit('delTodo',val)
         }
         let clear =(val)=>{
             store.commit('clear',val)
         }
         return {
             add,
             value,
             list,
             del,
             clear
         }
    }
  
          
})
     
     
</script>
 
<style scoped lang="scss">
    .item{
         text-align:left;
    }
</style>