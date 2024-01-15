<template>
    <BasicLayout>
        <div class="ui grid">
            <div class="sixten wide mobile eight wide tablet four wide computer column" 
                v-for="product in products" 
                :key="product.id">
                
                <Product :product="product"/>
                
            </div>
        </div>
    </BasicLayout>
</template>

<script>
import {ref, onMounted} from "vue";
import {useRoute} from "vue-router"
import BasicLayout from '@/layout/BasicLayout.vue';
import Product from "../components/Product";
import { getProductsCategory } from "../api/product"
    export default {
        name:"Category", 
        components:{
            BasicLayout,
            Product
        },
        watch:{
            $route(to, from){
                this.getProducts(to.params.category);
            },
        },

        setup(){    
            let products = ref(null);        
            const {params} = useRoute();

            onMounted(() => {
                getProducts(params.category);
               
            });

            const getProducts = async(category) => {
                const response = await getProductsCategory(category);
                products.value = response;
            };

            return{
                getProducts,
                products,
            }
        }
        
    }
</script>

<style lang="scss" scoped>

</style>