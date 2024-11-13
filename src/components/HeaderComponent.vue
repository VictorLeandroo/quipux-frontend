<template>
    <div class="bg-white g-0 d-flex justify-content-between w-100 align-items-center px-5 py-2">
        <div class="col-auto">
            <img v-if="selectedMenu" src="../assets/images/logo.png" alt="">
            <span class="titles" v-else>
                <router-link to="/">
                    <i class="bi bi-house-door"></i>
                </router-link>
                /
                <span v-if="currentPage.includes('articulo')">
                    EMPRESAS
                    /
                    <span class="item-selected">ARTICULO</span>
                </span>
                <span v-else>
                    {{ currentPage.toUpperCase() }}
                    /
                    <span class="item-selected">NOMBRE EMPRESA</span>
                </span>
            </span>
        </div>
        <div class="col-auto d-flex align-items-center gap-4">
            <i class="bi-person-circle d-flex" style="font-size: 2.5rem; color: black;"></i>
            <span id="#userName">Usuario Apellido</span>
        </div>
    </div>
</template>

<script>
import '../assets/styles/headerComponent.css'

export default {
    name: 'HeaderComponent',

    props: {
        selectedMenu: {
            type: Boolean,
        }
    },

    computed: {
        currentPage(){
            return (this.$route.path).replace('/', '')
        }
    },

    data() {
        return {

        }
    }
}
</script>