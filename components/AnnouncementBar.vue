<script setup lang="ts">
import { defineProps } from 'vue';

defineProps<{
    list: string[];
}>();
</script>

<template>
    <div class="w-[100vw] absolute z-30 md:static bg-black p-2">
        <div class="marquee-container">
            <ul class="inline-flex list-disc gap-8">
                <li 
                    v-for="(item, index) in list" 
                    :key="index" 
                    class="text-white text-xs font-medium font-inter w-fit"
                >
                    <nuxt-link to="/">
                        {{ item }}
                    </nuxt-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
.marquee-container {
    overflow: hidden;
    white-space: nowrap;
    width: 100vw;
    display: flex;
    justify-content: start;
}

.marquee-container ul {
    display: flex;
    animation: marquee 40s linear infinite;
}

.marquee-container li {
    padding-right: 0px;
}

@keyframes marquee {
    0% {
        transform: translateX(100%);
    }
    100% {
        transform: translateX(-100%);
    }
}
</style>

