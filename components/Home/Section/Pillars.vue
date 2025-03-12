<template>
    <div class="bg-black text-white">
        <div
            v-for="(section, index) in sections"
            :key="index"
            v-motion
            :initial="{ opacity: 0, y: 100 }"
            :visible="{ opacity: 1, y: 0 }"
            :delay="index * 200"
            class="relative min-h-screen flex items-center justify-center"
        >
            <div class="max-w-4xl mx-auto flex flex-col items-center text-center px-6">
                <!-- Image -->
                <div class="overflow-hidden rounded-2xl shadow-lg">
                    <img :src="section.image" :alt="section.title" class="w-full h-[400px] object-cover" />
                </div>

                <!-- Content -->
                <h2 class="text-4xl font-bold mt-8">{{ section.title }}</h2>
                <p class="text-lg mt-4">{{ section.description }}</p>

                <!-- Link -->
                <NuxtLink
                    :to="section.link"
                    class="mt-6 px-6 py-3 bg-white text-black rounded-md hover:bg-gray-200 transition"
                >
                    Learn More
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
const sections = [
    {
        image: '/images/store.jpg',
        title: 'Store',
        description: 'Discover unique finds and support a good cause.',
        link: '/store',
    },
    {
        image: '/images/community.jpg',
        title: 'Community',
        description: 'Join our mission to uplift and empower communities.',
        link: '/community',
    },
    {
        image: '/images/partners.jpg',
        title: 'Partners',
        description: 'Partner with us to make a lasting impact.',
        link: '/partners',
    },
    {
        image: '/images/lives.jpg',
        title: 'Lives',
        description: 'See how your contributions change lives.',
        link: '/lives',
    },
];
</script>

<style scoped>
html {
    scroll-behavior: smooth;
}
</style>
