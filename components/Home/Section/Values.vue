<script setup lang="ts">
import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from "@/components/ui/accordion";
import { ref } from 'vue';
import type { Value } from '@/types/types.ts'

const props = defineProps<{
    values: Value[];
}>();

const activeItems = ref<string[]>([]);

const isActive = (title: string) => activeItems.value.includes(title);
</script>

<template>
    <section class="container m-auto w-full px-[16px] md:px-[36px] text-center py-[80px]">
        <h2 class="text-[32px] md:text-[48px] font-bold">
            Our values
        </h2>
        <p class="text-base md:text-xl text-gray-600">
            Guiding principles behind everything we do
        </p>

        <Accordion 
            type="multiple" 
            collapsible 
            class="mt-6 space-y-[24px] md:px-[256px]"
            v-model="activeItems"
        >
            <AccordionItem
                v-for="(value, index) in props.values"
                :key="index"
                :value="value.title"
                class="border-b-0"
            >
                <AccordionTrigger
                    :class="[
                        'flex items-center gap-[12px] px-4 rounded-t-[24px] transition justify-start bg-[#F8F8F8] hover:no-underline accordion-trigger',
                        !isActive(value.title) && 'rounded-b-[24px]',
                    ]"
                >
                    <span>
                        <img 
                            :src="value.icon" 
                            class="w-[24px] h-[24px] md:w-[40px] md:h-[40px]" 
                        />
                    </span>
                    <span class="text-left text-2xl md:text-[30px] font-semibold">
                        {{ value.title }}
                    </span>
                </AccordionTrigger>
                <AccordionContent
                    class="pt-[16px] text-sm md:text-base text-left px-4 pb-[24px] text-gray-700 bg-[#F8F8F8] rounded-b-[24px]"
                >
                    {{ value.description }}
                </AccordionContent>
            </AccordionItem>
        </Accordion>

    </section>
</template>

<style lang="postcss">
    .accordion-trigger {
        position: relative;
        .lucide-chevron-down-icon {
            position: absolute;
            right: 16px;
            width: 24px;
            height: 24px;
        }
    }
</style>
