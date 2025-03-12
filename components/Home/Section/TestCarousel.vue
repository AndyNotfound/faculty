<template>
    <swiper 
        :spaceBetween="30" 
        :centeredSlides="true" 
        :autoplay="{
            delay: 2500,
            disableOnInteraction: false
        }" 
        :pagination="{
            clickable: true
        }" 
        :navigation="true" 
        :modules="modules" 
        @autoplayTimeLeft="onAutoplayTimeLeft" 
        class="hero-swiper"
    >
        <swiper-slide 
            v-for="(slide, index) in slides" 
            :key="index" 
            class="relative"
        >
            <img 
                :src="slide.image" 
                class="w-full h-[666px] md:h-[600px] object-cover" 
                alt="Slide Image" 
            />
            <div class="absolute inset-0 bg-black bg-opacity-40" />

            <!-- Text Overlay -->
            <div class="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
                <h1 class="text-3xl md:text-5xl font-bold">
                    {{ slide.title }}
                </h1>
                <p class="mt-4 text-lg md:text-xl">
                    {{ slide.description }}
                </p>
                <NuxtLink 
                    :to="slide.link"
                    class="mt-6 px-6 py-3 bg-white text-black rounded-md font-semibold hover:bg-gray-200 transition"
                >
                    {{ slide.buttonText }}
                </NuxtLink>
            </div>
        </swiper-slide>

        <template #container-end>
            <div class="autoplay-progress">
                <svg viewBox="0 0 48 48" ref="progressCircle">
                    <circle cx="24" cy="24" r="20"></circle>
                </svg>
                <span ref="progressContent"></span>
            </div>
        </template>
    </swiper>
</template>

<script>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default {
    components: {
        Swiper,
        SwiperSlide
    },
    data() {
        return {
            slides: [
                {
                    image: "/images/slide1.jpeg",
                    title: "Give. Thrift. Uplift.",
                    description: "Discover great finds while making an impact.",
                    buttonText: "Learn More",
                    link: "/learn"
                },
                {
                    image: "/images/slide2.jpeg",
                    title: "Support a Sustainable Future",
                    description: "Shop pre-loved items and reduce waste.",
                    buttonText: "Start Thrifting",
                    link: "/thrift"
                },
            ],
            modules: [Autoplay, Pagination, Navigation]
        };
    },
    setup() {
        const progressCircle = ref(null);
        const progressContent = ref(null);

        const onAutoplayTimeLeft = (s, time, progress) => {
            progressCircle.value.style.setProperty("--progress", 1 - progress);
            progressContent.value.textContent = `${Math.ceil(time / 1000)}s`;
        };

        return {
            progressCircle,
            progressContent,
            onAutoplayTimeLeft
        };
    }
};
</script>

<style>
.hero-swiper {
    position: relative;
    width: 100%;
    height: auto;
}

.autoplay-progress {
    position: absolute;
    bottom: 10px;
    right: 10px;
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
}

.autoplay-progress svg {
    transform: rotate(-90deg);
    stroke-dasharray: 125.6;
    stroke-dashoffset: calc(125.6 * var(--progress, 1));
    transition: stroke-dashoffset 0.2s;
}

.autoplay-progress circle {
    stroke: white;
    stroke-width: 4;
    fill: none;
}
</style>