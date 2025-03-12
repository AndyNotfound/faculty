<script lang="ts">
import { defineComponent, ref, onUnmounted } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import type { Slide } from '@/types/types.ts'

export default defineComponent({
    components: {
        Swiper,
        SwiperSlide,
    },
    props: {
        slides: {
            type: Array as () => Slide[],
            required: true,
        },
    },
    data() {
        return {
            modules: [Autoplay, Pagination, Navigation],
            leftHover: false,
            rightHover: false,
            activeIndex: 0,
            progress: 0,
            interval: null as any,
        };
    },
    methods: {
        onSlideChange(swiper: any) {
            this.activeIndex = swiper.realIndex;
            this.resetProgress();
        },
        resetProgress() {
            this.progress = 0;
            clearInterval(this.interval);
    
            this.interval = setInterval(() => {
                if (this.progress < 100) {
                    this.progress += 1;
                } else {
                    clearInterval(this.interval);
                }
            }, 50); // Adjust for smoother animation (50ms * 100 = 5000ms/5s)
        },
    },
    mounted() {
        this.resetProgress();
    },
    onUnmounted() {
        clearInterval(this.interval);
    },
    setup() {
        const progressCircle = ref<SVGCircleElement | null>(null);
        const progressContent = ref<HTMLElement | null>(null);
    
        const onAutoplayTimeLeft = (s: any, time: number, progress: number) => {
            if (progressCircle.value) {
                progressCircle.value.style.setProperty('--progress', (1 - progress).toString());
            }
            if (progressContent.value) {
                progressContent.value.textContent = `${Math.ceil(time / 1000)}s`;
            }
        };

        return {
            progressCircle,
            progressContent,
            onAutoplayTimeLeft,
            leftHover: ref(false),
            rightHover: ref(false),
        };
    },
});
</script>

<template>
    <div class="md:py-[24px] md:px-[36px] md:rounded-[24px] h-fit relative">
        <swiper
            :spaceBetween="30"
            :centeredSlides="true"
            :autoplay="{
            delay: 2500,
            disableOnInteraction: false
            }"
            :navigation="true"
            :modules="modules"
            @slideChange="onSlideChange"
            @autoplayTimeLeft="onAutoplayTimeLeft"
            class="hero-swiper relative"
        >
            <swiper-slide 
                v-for="(slide, index) in slides" 
                :key="index" 
                class="relative"
            >
                <img 
                    :src="slide.image" 
                    class="w-full h-[666px] md:h-full object-cover" 
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
                        class="mt-6 px-6 py-3 bg-white text-black rounded-[25px] font-semibold hover:bg-gray-200 transition"
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

        <div class="custom-pagination">
            <div 
                v-for="(_, index) in slides" 
                :key="index" 
                class="pagination-bar"
            >
                <div 
                    class="progress" 
                    :style="{ 
                        width:  activeIndex === index 
                                ? progress + '%' 
                                : (index < activeIndex ? '100%' : '0%') 
                    }"
                />
            </div>
        </div>

        <!-- Hover areas for left and right -->
        <div class="absolute inset-0 flex">
            <!-- Left Hover Area -->
            <div 
                class="w-1/2 h-full left-half" 
                @mouseenter="leftHover = true" 
                @mouseleave="leftHover = false" 
            />
            <!-- Right Hover Area -->
            <div 
                class="w-1/2 h-full right-half" 
                @mouseenter="rightHover = true" 
                @mouseleave="rightHover = false" 
            />
        </div>

        <!-- Navigation Arrows -->
        <div 
            v-if="leftHover" 
            class="swiper-button-prev absolute top-1/2 left-6 transform -translate-y-1/2 z-10 opacity-100 transition-opacity duration-300" 
        />
        <div 
            v-if="rightHover" 
            class="swiper-button-next absolute top-1/2 right-6 transform -translate-y-1/2 z-10 opacity-100 transition-opacity duration-300" 
        />
    </div>
</template>

<style lang="postcss">
.hero-swiper {
    position: relative;
    width: 100%;
    height: 666px;
}

@screen md {
    .hero-swiper {
        border-radius: 24px;
        height: 733px;
    }
}

/* Hover visibility of the left and right areas */
.left-half,
.right-half {
    z-index: 1;
}

.left-half {
    cursor: pointer;
}

.right-half {
    cursor: pointer;
}

/* Default state for navigation arrows (hidden) */
.swiper-button-next,
.swiper-button-prev {
    opacity: 0;
    transition: opacity 0.3s ease;
}

/* Positioning the left and right navigation arrows */
.swiper-button-prev {
    position: absolute;
    top: 50%;
    left: 16px;
    transform: translateY(-50%);
}

.swiper-button-next {
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
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

.custom-pagination {
    position: absolute;
    bottom: 30px;
    z-index: 100;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 8px;
}

@screen md {
    .custom-pagination {
    bottom: 50px;
    }
}

.pagination-bar {
    width: 100px;
    height: 4px;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 4px;
    overflow: hidden;
}

.progress {
    height: 100%;
    background: white;
    transition: width 0.1s linear;
}
</style>
