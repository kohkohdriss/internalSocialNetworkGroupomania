<template>
    <div class="container">
        <div class="row">
            <nav class="col navbar navbar-dark mb-3">
                <NavLogoWhite></NavLogoWhite>
                <NavUserMenu v-if="isLogged"></NavUserMenu>
                <NavDefault v-else></NavDefault>
            </nav>
        </div>
    </div>
</template>

<script>
import NavLogoWhite from "./NavLogoWhite.vue"
import NavUserMenu from "./NavUserMenu.vue"
import NavDefault from "./NavDefault.vue"

export default {
    name: "NavHeader",
    components: { 
        NavUserMenu, 
        NavDefault, 
        NavLogoWhite
    },
    computed:{
        isLogged() {
            if (localStorage.getItem("token") !== null) {   
                return true
            }
            return false
        }
    }
}
</script>

<style>
    body {
        background-color: #074e0d
    }
</style>