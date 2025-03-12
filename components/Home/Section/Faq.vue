<script setup lang="ts">
import { useRouter } from '#vue-router'

const router = useRouter();
</script>

<template>
    <section
        class="relative w-full h-48 md:h-[243px] flex items-center justify-center bg-cover bg-center"
        style="background-image: url('/images/faq.png')"
    >
        <div class="absolute inset-0 bg-black/40"></div>

        <div class="relative text-center text-white px-4">
        <h2 class="text-[32px] md:text-[48px] font-medium">
            Questions on your mind?
        </h2>
        <Button
            @click="router.push({ path: '/faq' })"
            class="mt-4 px-[24px] py-[12px] text-sm md:text-base bg-white text-black rounded-full font-medium shadow hover:bg-gray-200 transition"
        >
            See our FAQs
        </Button>
        </div>
    </section>
</template>  