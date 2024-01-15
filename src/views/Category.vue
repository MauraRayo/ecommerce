<template>
    <BasicLayout>
        <h1>Estamos en categorias</h1>
    </BasicLayout>

</template>

<script>
import { onMounted} from "vue";
import BasicLayout from '@/layout/BasicLayout.vue';
import {getProductscategory} from "../api/product"
    export default {
        name:"Categoty", 
        components:{
            BasicLayout
        },
        watch:{
            $route(to, from){
                console.log(to);
            },
        },

        setup(){
            onMounted(async() => {
                const response = await getProductscategory("cereales");
                console.log(response);
            })
        }
        
    }
</script>

<style lang="scss" scoped>

</style>