<template>
  <div class="ui card product">
    <div class="image">
        <img :src="API_URL + product.attributes.image.data.attributes.formats.thumbnail.url" :alt="product.attributes.name">
    </div>

    <div class="content">
        <div class="header">{{ product.attributes.name }}</div>
        <div class="price"> {{ product.attributes.price }} €</div>
    </div> 
    <div class="ui button primary ">Comprar</div>
  </div>

</template>

<script>
import { API_URL } from "../utils/constants"

    export default {
        name: "Product",
        props: {
            product: Object,
        },
        setup(props){
            console.log(props.product);

            return{
                API_URL,
            };
        },
    };
</script>

<style lang="scss" scoped>
.product{
    &:hover{
        min-height: 36px;
    }

    .ui.button{
        max-width: 0;
        min-height: 0;
        overflow: hidden;
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: min-height 0.6s ease;
    }
}

</style>