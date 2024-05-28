<script>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";

export default {
    data() {
        return {
            menus: [
                {
                    name: "Home",
                    link: "#",
                },
                {
                    name: "Education",
                    link: "#education",
                },
                {
                    name: "Experience",
                    link: "#experience",
                },
                {
                    name: "Skills",
                    link: "#skills",
                },
                {
                    name: "Projects",
                    link: "#projects",
                },
                {
                    name: "Certifications",
                    link: "#certifications",
                },
                {
                    name: "Publication",
                    link: "#publication",
                },
            ],
        };
    },
    methods: {
        toggleClick() {
            // TODO: Ubah disini
            alert("Aku Diklik bos");
        },
    },
};
</script>

<template>
    <header class="flex justify-between py-6">
        <div class="logo text-light-100 text-base font-black">
            Bagus Perdana Yusuf
        </div>
        <nav class="hidden lg:block">
            <ul>
                <li
                    v-for="(menu, index) in menus"
                    v-bind:key="index"
                    class="inline"
                >
                    <a
                        :href="menu.link"
                        class="ml-6 text-base font-bold hover:text-primary-600"
                        >{{ menu.name }}</a
                    >
                </li>
            </ul>
        </nav>

        <div
            class="block lg:hidden mobile-menu-toggle cursor-pointer"
            v-on:click="toggleClick"
        >
            <box-icon
                name="menu-alt-left"
                class="hover:text-primary-600"
            ></box-icon>
        </div>
    </header>

    <RouterView />
</template>

<style scoped>
/* header {
    line-height: 1.5;
    max-height: 100vh;
}

.logo {
    display: block;
    margin: 0 auto 2rem;
}

nav {
    width: 100%;
    font-size: 12px;
    text-align: center;
    margin-top: 2rem;
}

nav a.router-link-exact-active {
    color: var(--color-text);
}

nav a.router-link-exact-active:hover {
    background-color: transparent;
}

nav a {
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
    border: 0;
}

@media (min-width: 1024px) {
    header {
        display: flex;
        place-items: center;
        padding-right: calc(var(--section-gap) / 2);
    }

    .logo {
        margin: 0 2rem 0 0;
    }

    header .wrapper {
        display: flex;
        place-items: flex-start;
        flex-wrap: wrap;
    }

    nav {
        text-align: left;
        margin-left: -1rem;
        font-size: 1rem;

        padding: 1rem 0;
        margin-top: 1rem;
    }
} */
</style>
