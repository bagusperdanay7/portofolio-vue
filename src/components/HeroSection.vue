<script setup>
import HeroButton from "@/components/HeroButton.vue";
</script>

<template>
    <section class="mt-[50px]">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center">
            <div>
                <h1
                    class="font-black text-[40px] mb-0 order-last lg:order-first"
                >
                    Hello!, My name is
                    <span class="text-primary-600">Bagus Perdana Yusuf</span>. I
                    am
                    <strong
                        class="bg-gradient-to-r from-secondary-600 to-primary-500 text-transparent bg-clip-text"
                        >Junior Web Developer</strong
                    >
                </h1>
                <p class="mt-4 text-light-80 mb-6">
                    Building websites on the front-end and back-end is my
                    primary focus. Additionally, I have a strong passion for
                    machine learning and UI/UX design.
                </p>
                <HeroButton />
            </div>
            <div class="justify-self-center order-first lg:order-last">
                <div
                    class="lg:w-[400px] lg:h-[400px] rounded-full bg-gradient-to-r from-primary-300 to-secondary-400"
                >
                    <img
                        src="../assets/profile.png"
                        alt="Profile"
                        class="w-64 mx-auto"
                    />
                </div>
            </div>
        </div>
    </section>
</template>
