<template>
    <div class="ui secondary menu">
        <div class="ui container">
            <div class="left menu">
                <router-link class="item" to="/">
                    <img 
                    class="ui small image"
                    src="../assets/logo.png" 
                    alt="Ecommerce">

                    <template v-for="category in categories" :key="category.id">
                        <router-link class="item" :to="category.attributes.slug">
                            {{ category.attributes.title}}
                        </router-link>
                  </template>
                </router-link>
            </div>

            <div class="right menu">
                <router-link class="item" to="/login"> Iniciar Sesión</router-link>
            </div>    
        </div>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { getTokenApi, deleteTokenApi } from '@/api/token';
import { getCategoriesApi } from '@/api/category';


    export default {
        name: "Menu", 
        setup() {
            let categories = ref(null);
            let token = getTokenApi();

            onMounted(async() => {
                const response = await getCategoriesApi()
                // categories.value = response.data
                console.log(response)
            })

            const logout =() => {
                deleteTokenApi();
                location.replace("/");
            }

            return{
                token, 
                logout,
                categories,
            }
        }
    }
</script>

<style lang="scss" scoped>
.ui.menu.secondary{
    background-color: #16202b;

    .item{
        color: #fff;
        &:hover{
            color: #1fa1f1;
        }
    }

    .menu.left{
        width: 50%;
        .ui.image{
            width: 40px;
        }

    }

    .menu.right{
        width: 50%;
        justify-content: flex-end;

        .logout,
        .cart{
            &:hover{
                cursor: pointer;
            }
        }
    }
}


</style>