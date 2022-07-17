<template>
    <div v-for="(item, index) in list" :key="index">
        <div class="item">
            <input type="checkbox" v-model="item.complete" />
            {{ item.title }}
            <button class="del" @click="del(item, index)">删除</button>
        </div>
    </div>
</template>
 
<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
    name: 'navMain',
    props: {
        list: {
            type: Array,
            required: true
        }
    },
    //放分发事件的属性名字  没有这句浏览器控制台有报错 
    emits: ['del'],
    setup(props, ctx) {
        //删除任务
        let del = (item, index) => {
            ctx.emit('del', index)
            console.log(item)
            console.log(index)
        }

        return {
            del
        }

    }
})


</script>
 
<style scoped lang="scss">
.item {
    height: 35px;
    line-height: 35px;
    position: relative;
    width: 260px;
    cursor: pointer;

    button {
        position: absolute;
        right: 20px;
        top: 6px;
        display: none;
        z-index: 99;
    }

    &:hover {
        background: #ddd;

        button {
            display: block;
        }
    }


}
</style>