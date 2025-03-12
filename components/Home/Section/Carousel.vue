<template>
    <div class="relative w-full h-[500px] md:h-[600px] overflow-hidden">
        <!-- Slides -->
        <div class="flex transition-transform duration-700 ease-in-out"
            :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
            <div v-for="(slide, index) in slides" :key="index" class="w-full flex-shrink-0 relative">
                <img :src="slide.image" class="w-full h-full object-cover" alt="Carousel Image" />
                <div class="absolute inset-0 bg-black bg-opacity-30"></div>

                <!-- Text Overlay -->
                <div class="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
                    <h1 class="text-3xl md:text-5xl font-bold">{{ slide.title }}</h1>
                    <p class="mt-4 text-lg md:text-xl">{{ slide.description }}</p>
                    <NuxtLink :to="slide.link"
                        class="mt-6 px-6 py-3 bg-white text-black rounded-md font-semibold hover:bg-gray-200 transition">
                        {{ slide.buttonText }}
                    </NuxtLink>
                </div>
            </div>
        </div>

        <!-- Navigation Buttons -->
        <button @click="prevSlide"
            class="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full">
            <ChevronLeftIcon class="w-6 h-6 text-white" />
        </button>
        <button @click="nextSlide"
            class="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full">
            <ChevronRightIcon class="w-6 h-6 text-white" />
        </button>

        <!-- Dots -->
        <div class="absolute bottom-4 flex justify-center w-full space-x-2">
            <button v-for="(slide, index) in slides" :key="index" @click="goToSlide(index)" class="w-3 h-3 rounded-full"
                :class="currentSlide === index ? 'bg-white' : 'bg-gray-500'"></button>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-vue-next";

const slides = ref([
    {
        image: "/images/slide1.jpeg",
        title: "Give. Thrift. Uplift.",
        description: "Discover great finds while making an impact.",
        buttonText: "Learn More",
        link: "/learn",
    },
    {
        image: "/images/slide2.jpg",
        title: "Support a Sustainable Future",
        description: "Shop pre-loved items and reduce waste.",
        buttonText: "Start Thrifting",
        link: "/thrift",
    },
    {
        image: "/images/slide3.jpg",
        title: "Donate & Make a Difference",
        description: "Your items can help those in need.",
        buttonText: "Donate Now",
        link: "/donate",
    },
]);

const currentSlide = ref(0);
let interval = null;

const nextSlide = () => {
    currentSlide.value = (currentSlide.value + 1) % slides.value.length;
};

const prevSlide = () => {
    currentSlide.value = (currentSlide.value - 1 + slides.value.length) % slides.value.length;
};

const goToSlide = (index) => {
    currentSlide.value = index;
};

const startAutoplay = () => {
    interval = setInterval(nextSlide, 5000); // Auto-slide every 5 seconds
};

onMounted(startAutoplay);
onUnmounted(() => clearInterval(interval));
</script>