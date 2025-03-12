<script setup lang="ts">
import { ref } from "vue";
import { 
    MenuIcon, 
    ChevronDownIcon, 
    XIcon 
} from "lucide-vue-next";

interface MenuItem {
    label: string;
    link: string;
}

interface Menu {
    label: string;
    link?: string;
    items?: MenuItem[];
}

const props = defineProps<{
    menus: Menu[];
}>();

const isOpen = ref(false);
const activeMenu = ref<string | null>(null);

const toggleMenu = (label: string) => {
    activeMenu.value = activeMenu.value === label ? null : label;
};
</script>

<template>
    <!-- 
        Can't implement your logic for navbar active path
        why ? there's no other page besides home
    -->
    <header>
        <div class="container mx-auto flex justify-between items-center px-[21px] py-[16px] pt-[57px] md:py-[16px] md:px-[36px]">
            <NuxtLink to="/">
                <img src="/images/logo.png" alt="" class="navbar_img" />
            </NuxtLink>

            <!-- Desktop Menu -->
            <nav class="h-full hidden md:flex space-x-[40px] font-medium">
                <div v-for="menu in props.menus" :key="menu.label" class="relative group">
                    <NuxtLink 
                        :to="menu.link || menu.items && menu.items[0].link" 
                        class="hover:text-slate-400 py-[12px]"
                    >
                        {{ menu.label }}
                    </NuxtLink>

                    <!-- Dropdown -->
                    <div
                        v-if="menu.items"
                        class="absolute left-0 z-[30] bg-white shadow-md p-[24px] pt-0 mt-4 w-[220px] rounded-b-[8px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300"
                    >
                        <NuxtLink
                            v-for="item in menu.items"
                            :key="item.label"
                            :to="item.link"
                            class="font-semibold block py-[12px] text-gray-700 hover:text-slate-400"  
                        >
                            {{ item.label }}
                        </NuxtLink>
                    </div>
                </div>
            </nav>

            <!-- Mobile Hamburger Menu Button -->
            <button @click="isOpen = !isOpen" class="md:hidden">
                <MenuIcon class="w-[40px] h-[40px]" />
            </button>
        </div>

        <Transition name="fade">
            <div
                v-if="isOpen"
                class="fixed inset-0 bg-black bg-opacity-50 z-20"
                @click="isOpen = false"
            />
        </Transition>

        <!-- Sidebar Menu -->
        <Transition name="slide">
            <div v-if="isOpen" class="fixed top-0 left-0 w-full h-full bg-white z-20 shadow-lg py-4">
                <div class="mt-[30px] flex justify-between items-center px-[21px] py-[16px]">
                    <NuxtLink to="/">
                        <img src="/images/logo.png" alt="" class="navbar_img" />
                    </NuxtLink>

                    <!-- Mobile Hamburger X Button -->
                    <button @click="isOpen = false">
                        <XIcon class="w-6 h-6" />
                    </button>
                </div>

                <!-- Navigation -->
                <nav class="mt-6 space-y-2 px-[21px]">
                    <div v-for="menu in props.menus" :key="menu.label">
                        <div
                            @click="toggleMenu(menu.label)"
                            class="text-base font-medium flex justify-between items-center cursor-pointer py-[12px]"
                        >
                        <span :class="{ 'text-red-500': activeMenu === menu.label }">
                            {{ menu.label }}
                        </span>
                        <ChevronDownIcon
                            v-if="menu.items"
                            class="w-5 h-5 transition-transform"
                            :class="{ 'rotate-180': activeMenu === menu.label }"
                        />
                        </div>

                        <Transition name="expand">
                            <div v-if="activeMenu === menu.label" class="mt-[8px] space-y-1">
                                <p
                                    v-for="item in menu.items"
                                    :key="item.label"
                                    class="text-base font-medium text-gray-600 py-[8px] pl-[12px]"
                                >
                                    {{ item.label }}
                                </p>
                            </div>
                        </Transition>
                    </div>
                </nav>
            </div>
        </Transition>
    </header>
</template>

<style scoped lang="postcss">
.navbar_img {
    @apply w-[160px] h-[30px];
}

@screen md {
    .navbar_img {
        @apply w-[250px] h-[44.47px];
    }
}

/* Dropdown Animations */
.slide-enter-active,
.slide-leave-active {
    transition: transform 0.3s ease;
}

.slide-enter,
.slide-leave-to {
    transform: translateY(-10px);
    opacity: 0;
}

/* Expandable Mobile Menu */
.expand-enter-active,
.expand-leave-active {
    transition: max-height 0.3s ease-out;
}

.expand-enter,
.expand-leave-to {
    max-height: 0;
    overflow: hidden;
}
</style>
