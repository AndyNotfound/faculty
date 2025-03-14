<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useIntervalFn } from "@vueuse/core";
import { useRouter } from '#vue-router'
import type { Stat } from '@/types/types.ts'
const router = useRouter();

const props = defineProps<{
  stats: Stat[];
}>();

const animatedValues = ref(props.stats.map(() => 0));

const startCounting = () => {
  props.stats.forEach((stat, index) => {
    // Calculate step size: Ex. 150 / 50 = 3
    const step = Math.ceil(stat.value / 50);

    // Set interval to increment value every 50ms
    useIntervalFn(() => {
      // Increment animated value until it reaches the stat value
      // Ex. If animated value is 0, it will increase by 3
      if (animatedValues.value[index] < stat.value) {
        animatedValues.value[index] = Math.min(animatedValues.value[index] + step, stat.value);
      }
    }, 50);
  });
};

onMounted(startCounting);
</script>

<template>
  <section class="container m-auto text-center py-[40px] md:py-[80px] px-[16px] md:px-[152px]">
    <div class="grid grid-cols-2 md:grid-cols-4 gap-[24px]">
      <div
        v-for="(stat, index) in props.stats"
        :key="index"
        class="flex flex-col items-center"
      >
        <component
          :is="stat.icon"
          class="w-[60px] h-[60px] mb-[16px]"
          :class="stat.color"
        />
        <p class="text-xl font-medium">
          {{ stat.label }}
        </p>
        <p class="text-[32px] md:text-[48px] font-bold">
          {{ animatedValues[index] }}
        </p>
      </div>
    </div>

    <div class="md:px-[233px] mt-[40px]">
      <p class="text-base md:text-xl text-gray-700">
        As the social enterprise arm of The Salvation Army, Re:Nue aims to
        deliver excellent donation-in-kind service that meets underserved needs
        within our community.
      </p>

      <div class="relative mt-[24px]">
        <div
          class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-28 h-px bg-blue-500"
        ></div>
        <Button
          @click="router.push({ path: '/about' })"
          class="relative px-[24px] py-[12px] bg-black text-white rounded-full transition"
        >
          About Re:Nue
      </Button>
      </div>
    </div>
  </section>
</template>