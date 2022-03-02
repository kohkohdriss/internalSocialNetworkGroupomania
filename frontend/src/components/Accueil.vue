<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-12 col-md-10 col-lg-8">
                <div class="card bg-light">
                    <p class="h5 my-3 text-center" style="color:#091F43;">Vous êtes sur la page d'accueil de groupomania</p>
                    <div class="card-header bg-light d-flex flex-column justify-content-center">
                        <img src="../assets/logo_black.svg" class="m-0 p-0" height="60" alt="logo groupomania">
                        <h5 class="h6 text-center" style="color:#091F43;">Avec Groupomania, partagez et restez en contact avec votre entourage.</h5>
                    </div>
                    <div class="card-body">
                        <p>Le réseau social est fait pour les employés de Groupomania</p>
                        <p>Si vous êtes un employé, vous voulez accéder, cliquez sur ce lien pour se <router-link to="/connexion">connecter</router-link>,
                         sinon vous pouvez vous <router-link to="/inscription">inscrire</router-link></p>
                    </div>
                    <div class="card-footer bg-light d-flex justify-content-between">
                        <span class="text-dark">Bonne navigation !</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    Name: "Accueil"
}
</script>

<style>
    body {
        background-color: #074e0d
    }
</style>