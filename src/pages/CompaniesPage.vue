<template>
  <div class="d-flex flex-column flex-lg-row w-100 gap-5 g-0 px-5 pt-4">
    <div
      class="col-auto col-lg-4 d-flex flex-column align-content-center align-items-center g-0 bg-white p-2 rounded-2 gap-4">
      <span class="fw-bold align-self-start">INFORMACIÓN DE LA EMPRESA</span>
      <div class="d-flex flex-column align-items-center">
        <span class="fw-bold">Nombre</span>
        <span>{{ companyInfo.name }}</span>
      </div>
      <div class="d-flex flex-column align-items-center">
        <span class="fw-bold">Fecha de creación</span>
        <span>{{ companyInfo.creationDate }}</span>
      </div>
      <div class="d-flex flex-column align-items-center">
        <span class="fw-bold">Dirección</span>
        <span v-html="companyInfo.address"></span>
      </div>
      <div class="d-flex flex-column align-items-center">
        <span class="fw-bold">Número de teléfonos</span>
        <span v-html="companyInfo.phone"></span>
      </div>
      <div class="d-flex flex-column align-items-center">
        <span class="fw-bold">Sitio Web</span>
        <a target="_blank" :href="`https://${companyInfo.webSite}`">{{ companyInfo.webSite }}</a>
      </div>
    </div>
    <div class="row w-100 d-flex flex-column align-content-center align-items-center g-0 bg-white px-2 pt-2 rounded-2">
      <span class="fw-bold mb-5 align-self-start">INFORMACIÓN DEL CONTACTO</span>
      <div class="d-flex flex-column flex-lg-row col gap-4 gap-lg-0">
        <div class="col d-flex flex-column g-0 gap-5 border-2 border-end align-items-center">
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
            <a v-for="(item, index) in companyInfo.socialNetwork" :href="`https://${item}`" :key="index" target="_blank" v-text="item"></a>
          </div>
        </div>
        <div class="col d-flex flex-column g-0 gap-5 align-items-center">
          <div class="d-flex flex-column align-items-center">
            <span class="fw-bold">Dirección de correspondencia de correo</span>
            <span v-html="companyInfo.mailAddress"></span>
          </div>
          <div class="d-flex flex-column align-items-center">
            <span class="fw-bold">Número de teléfonos</span>
            <span class="text-center" v-html="companyInfo.phone"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import companyInfo from '../store/company'

export default {
  name: 'CompaniesPage',

  data() {
    return {
      companyInfo,
    }
  }
}
</script>
