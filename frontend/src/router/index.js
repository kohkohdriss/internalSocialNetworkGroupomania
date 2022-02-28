import { createRouter, createWebHashHistory } from "vue-router"

const routes = [
    {
        path: "/",
        name: "Accueil",
        component: () => import("../components/Accueil"),
    },
    {
        path: "/connexion",
        name: "Connexion",
        component: () => import("../components/Connexion"),
    },
    {
        path: "/inscription",
        name: "Inscription",
        component: () => import("../components/Inscription")
    },
    {
        path: "/compte",
        name: "Compte",
        component: () => import("../components/Compte")
    },
    {
        path: "/compte/messages",
        name: "Mes Messages",
        component: () => import("../message/MessagesUser.vue")
    },
    {
        path: "/messages",
        name: "Messages",
        component: () => import("../message/Messages")
    },
    {
        path: "/message/edit/:id",
        name: "Message Edit",
        component: () => import("../message/MessageEdit")
    },
    {
        path: "/message/drop/:id",
        name: "Message Drop",
        component: () => import("../message/MessageDrop")
    },
    {
        path: "/commentaires/:id",
        name: "Commentaires",
        component: () => import("../commentaire/Commentaires.vue")
    },
    {
        path: "/commentaire/edit/:id",
        name: "Commentaires Edit",
        component: () => import("../commentaire/CommentaireEdit")
    },
    {
        path: "/commentaire/drop/:id",
        name: "Commentaires Drop",
        component: () => import("../commentaire/CommentaireDrop")
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

router.beforeEach((to, from, next) => {
   const publicPages = ["/", "/aide", "/connexion", "/inscription"]
    const authRequired = !publicPages.includes(to.path)
    const loggedIn = localStorage.getItem("userId")
    const loggedToken = localStorage.getItem("token")
    if (authRequired && !loggedIn && !loggedToken) {
        return next("/connexion")
    }
    next()
})

export default router