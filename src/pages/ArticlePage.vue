<template>
    <div class="d-flex flex-column flex-lg-row gap-5 g-0 px-5 pt-4">
        <div
            class="col-auto col-lg-4 d-flex flex-column align-content-center align-items-center g-0 bg-white p-2 rounded-2 gap-4">
            <span class="fw-bold align-self-start">INFORMACIÓN DE LA EMPRESA</span>
            <div class="d-flex flex-column align-items-center">
                <span class="fw-bold">Dirección</span>
                <span v-html="companyInfo.address"></span>
            </div>
            <div class="d-flex flex-column align-items-center">
                <span class="fw-bold">Correo electrónico</span>
                <span>{{ companyInfo.email }}</span>
            </div>
            <div class="d-flex flex-column align-items-center">
                <span class="fw-bold">Sitio Web</span>
                <span>{{ companyInfo.website }}</span>
            </div>
            <div class="d-flex flex-column align-items-center">
                <span class="fw-bold">Red social</span>
                <a v-for="(item, index) in companyInfo.socialNetwork" :href="item" :key="index" target="_blank" v-text="item"></a>
            </div>
            <div class="d-flex flex-column align-items-center">
                <span class="fw-bold">Dirección de correspondencia de correo</span>
                <span v-html="companyInfo.mailAddress"></span>
            </div>
            <div class="d-flex flex-column align-items-center">
                <span class="fw-bold">Número de teléfonos</span>
                <span class="text-center" v-html="companyInfo.phone"></span>
            </div>
        </div>
        <div class="col w-100 d-flex flex-column g-0 gap-5">
            <div class="d-flex row bg-white px-2 pt-2 rounded-2 h-100">
                <div id="carouselExample" class="carousel slide d-flex align-items-lg-center">
                    <div class="carousel-inner d-flex justify-content-center align-content-center">
                        <div class="carousel-item active">
                            <img src="https://via.placeholder.com/100" class="d-block" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="https://via.placeholder.com/100" class="d-block" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="https://via.placeholder.com/100" class="d-block" alt="...">
                        </div>
                    </div>
                    <button class="carousel-control-prev color-gray" type="button">
                        <i class="bi bi-chevron-left"></i>
                    </button>
                    <button class="carousel-control-next color-gray" type="button">
                        <i class="bi bi-chevron-right"></i>
                    </button>
                </div>
            </div>
            <div class="d-flex row bg-white px-5 py-3 rounded-2 overflow-y-auto h-100">
                <div v-for="item in articleList" :key="item.id"
                    class="d-flex flex-column align-items-center col-6 col-lg-3 gap-3 mb-4">
                    <img src="https://via.placeholder.com/100" class="item-image" alt="...">
                    <span class="fw-bold">{{ item.titulo }}</span>
                    <span class=" text-center">{{ item.descripcion }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import articleList from '../store/articles'
import companyInfo from '../store/company'

export default {
    name: 'ArticlePage',

    data() {
        return {
            articleList,
            companyInfo,
        }
    },

    methods: {

    }
}
</script>
