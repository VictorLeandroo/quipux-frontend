<template>
    <div class="sidebar" :class="{ 'expanded': isExpanded }">
        <div class="d-flex flex-column" :class="{ 'expanded': isExpanded }">
            <div class="toggle-button" :class="{ 'justify-content-center': !isExpanded }" @click="toggleSidebar">
                <i class="bi bi-list icon"></i>
                <img v-if="isExpanded" width="160px" src="../assets/images/logo-white.png" alt="">
            </div>
            <div class="color-gray" v-if="isExpanded">
                <span>ENTITIES</span>
                <hr>
            </div>

            <div class="item-side" :class="{ 'item-side-selected': item.id === activeSubMenu }"
                v-for="item in filteredItensBar" :key="item.id" @click="toggleSubSidebar(item.id)">
                <div>
                    <i class="bi icon" :class="item.icon"></i>
                    <div class="menu-button" v-if="isExpanded">
                        <span class="w-100 text-white">{{ item.name }}</span>
                        <i class="bi bi-chevron-down"></i>
                    </div>
                </div>

                <router-link :to="item.link" @click="closeMenu">
                    <div class="submenu" :class="{ 'submenu-expanded': item.id === activeSubMenu }">
                        <p class="mb-0">{{ item.subItem }}</p>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>


<script>
import '../assets/styles/sidebarComponent.css'

const itensBar = [
    { id: 1, name: 'EMPRESAS', icon: 'bi bi-archive', subItem: 'Empresa', link: '/empresa' },
    { id: 2, name: 'ARTICULOS', icon: 'bi bi-file-earmark-text', subItem: 'Articulo', link: '/articulo' },
    { id: 3, name: 'COLABORADORES', icon: 'bi bi-person-fill', subItem: 'Colaborador', link: '/' },
]

export default {
    name: 'HeaderComponent',

    props: {
        selectedMenu: {
            type: Boolean,
        }
    },

    computed: {
        currentPage() {
            return this.$route.path
        },

        filteredItensBar() {
            return this.itensBar.filter(item => this.isExpanded || item.id <= 2);
        }
    },

    data() {
        return {
            isExpanded: false,
            activeSubMenu: null,
            itensBar,
        }
    },

    methods: {
        toggleSidebar() {
            this.isExpanded = !this.isExpanded
        },

        toggleSubSidebar(itemId) {
            if (this.isExpanded) {
                if (this.activeSubMenu === itemId) {
                    this.activeSubMenu = null;
                } else {
                    this.activeSubMenu = itemId;
                }
            } else {
                this.toggleSidebar()
            }
        },

        handleClickOutside(event) {
            const sidebar = this.$el;
            if (!sidebar.contains(event.target)) {
                this.isExpanded = false;
                this.activeSubMenu = null;
            }
        },

        closeMenu() {
            this.isExpanded = false; 
            this.activeSubMenu = null;
        },
    },

    mounted() {
        document.addEventListener('click', this.handleClickOutside);
    },

    unmounted() {
        document.removeEventListener('click', this.handleClickOutside);
    },
}
</script>

