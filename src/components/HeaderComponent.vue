<template>
    <div class="bg-white g-0 d-flex justify-content-between w-100 align-items-center px-5 py-2">
        <div class="col-auto">
            <img v-if="props.selectedMenu === 'Inicio'" src="../assets/logo.png" alt="">
            <span v-else>{{ props.selectedMenu }}</span>
        </div>
        <div class="col-auto d-flex align-items-end gap-4">
            <i class="bi-person-circle d-flex" style="font-size: 2.5rem; color: black;"></i>
            <span>Usuario Apellido</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HeaderComponent',

    props: {
        selectedMenu: {
            type: String,
        }
    },

    data() {
        return {

        }
    }
}
</script>