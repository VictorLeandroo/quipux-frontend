<template>
  <div class="align-items-center d-flex gap-5 g-0 px-5 w-100 mt-5">
    <div class="d-flex flex-column flex-xl-row main-content">
      <div class="d-flex flex-column justify-content-end">
        <div class="d-flex flex-column search-container">
          <h1 class="color-blue-sec title-one">¿Que quieres buscar?</h1>
          <span class="fw-medium  fs-6 mb-3">Encuentra la información que desees consultar
            ...</span>
          <div class="d-flex border-1 search-div rounded-2">
            <div class="dropdown">
              <button class="fs-24 rounded-end-0 btn btn-all dropdown-toggle">
                Todos los servicios
              </button>
            </div>
            <input placeholder="Que servicio quieres consultar" class="px-2 border-0 w-100" type="text" name="" id="" />
            <button class="btn bnt-search px-3 rounded-start-0 rounded-end-1">
              <i class="bi bi-search"></i>
            </button>
          </div>
        </div>
        <div class="bg-white rounded-2 d-flex flex-wrap shadow-sm py-3 px-4 gap-5">
          <div v-for="cardInfo in cardsInfo" :key="cardInfo.title" class="col d-flex flex-column align-items-stretch">
            <div class="d-flex flex-column flex-grow-1">
              <span class="fs-3 fw-medium color-blue-pri mb-2">{{ cardInfo.title }}</span>
              <span class="fs-14  mb-4 lh-sm">{{ cardInfo.description }}</span>
            </div>
            <button class="align-self-start green-button mt-auto">{{ cardInfo.buttonLabel }}</button>
          </div>
        </div>
      </div>
      <div class="d-flex flex-column">
        <div class="position-relative d-flex justify-content-center">
          <img class="object-fit-cover" src="../assets/images/resource-1.png" alt="">
          <div class="glass-container">
            <span class="fs-1 color-blue-pri fw-bold">SERVICIOS QUIPUX</span>
          </div>
        </div>
        <div class="d-flex flex-column bg-white rounded-2 border-card">
          <div class="d-flex flex-column">
            <span class="color-blue-pri fs-3 fw-medium mb-3">Trámites en tu mano</span>
            <span class="fs-6 lh-sm mb-5">Ahora podrás hacer todos tus trámites desde la comodidad de tu
              casa, desde cualquier dispositivo computadora, tablet o móvil.</span>
          </div>
          <div class="d-flex align-items-center gap-3">
            <div class="d-flex align-items-center text-custom-gray-light">
              <i class="bi bi-chevron-left"></i>
              <div class="px-2 position-relative py-1">
                <span class="text-primary fw-medium position-absolute top-0 start-0">1</span>
                <span>/</span>
                <span class="position-absolute bottom-0 end-0">4</span>
              </div>
              <i class="bi bi-chevron-right"></i>
            </div>
            <div class="progress-bar">
              <div class="progress-fill"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '../assets/styles/homePage.css'

const cardsInfo = [
  {
    title: "Certificado",
    description: "Conoce los beneficios que tenemos para ti al registrarte",
    buttonLabel: "+ Beneficios",
  },
  {
    title: "Crear cuenta",
    description: "Conoce los beneficios que tenemos para ti al registrarte",
    buttonLabel: "Ver todo",
  },
  {
    title: "Top trámites",
    description: "Conoce los trámites más solicitados.",
    buttonLabel: "Ver todo",
  }
]

export default {
  name: 'HomePage',

  data() {
    return {
      cardsInfo,
    }
  }
}

</script>
