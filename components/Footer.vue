<script setup lang="ts">
import { defineProps } from 'vue';
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-vue-next';

interface Link {
    title: string;
    url: string;
}

interface ContactInfo {
    icon: any;
    text: string;
    link?: string;
}

interface SocialLink {
    icon: any;
    link: string;
}

const props = defineProps<{
    companyLinks: Link[];
    joinUsLinks: Link[];
    contactInfo: ContactInfo[];
    socialLinks: SocialLink[];
}>();
</script>

<template>
    <footer>
        <div class="bg-yellow-400">
            <img src="/images/shape.png" class="w-full h-fit" />
        </div>

        <div class="bg-black text-white px-[40px] py-[56px] md:px-[40px]">
            <!-- Mobile Layout -->
            <div class="flex flex-col gap-[24px] md:hidden">
                <div class="text-center">
                    <img src="/images/logo-invert.png" alt="Re:Nue Logo" class="mx-auto mb-6" />
                    <p class="text-gray-400">
                        Re:Nue, a social enterprise under The Salvation Army, is passionate about sustainability and community impact since 1996. By re-purposing and reselling your generous donations, we generate funds to support vital programs for the community.
                    </p>
                </div>

                <!-- Navigation Links -->
                <nav class="text-center space-y-[16px]">
                    <div v-for="(link, index) in companyLinks" :key="index">
                        <NuxtLink :to="link.url" class="block hover:text-white">
                            {{ link.title }}
                        </NuxtLink>
                    </div>
                </nav>

                <!-- Social Links -->
                <div class="flex justify-center gap-6">
                    <div v-for="(social, index) in socialLinks" :key="index">
                        <NuxtLink :to="social.link" class="text-gray-400 hover:text-white">
                            <component :is="social.icon" />
                        </NuxtLink>
                    </div>
                </div>
            </div>

            <!-- Desktop Layout -->
            <div class="hidden md:flex justify-between gap-6 py-[40px]">
                <div class="md:max-w-[320px] flex flex-col gap-[24px]">
                    <img src="/images/logo-invert.png" alt="Re:Nue Logo" class="navbar_img" />
                    <p class="text-gray-400">
                        Re:Nue, a social enterprise under The Salvation Army, is passionate about sustainability and community impact since 1996. By re-purposing and reselling your generous donations, we generate funds to support vital programs for the community.
                    </p>
                    <div class="flex space-x-4">
                        <div v-for="(social, index) in socialLinks" :key="index">
                            <NuxtLink :to="social.link" class="text-gray-400 hover:text-white">
                                <component :is="social.icon" />
                            </NuxtLink>
                        </div>
                    </div>
                </div>

                <div class="flex justify-end gap-[40px]">
                    <div>
                        <h4 class="font-semibold mb-[24px]">Company</h4>
                        <ul class="space-y-2 flex flex-col gap-[12px]">
                            <div v-for="(link, index) in companyLinks" :key="index">
                                <li>
                                    <NuxtLink :to="link.url" class="text-gray-400 hover:text-white">
                                        {{ link.title }}
                                    </NuxtLink>
                                </li>
                            </div>
                        </ul>
                    </div>

                    <div>
                        <h4 class="font-semibold mb-[24px]">Join Us</h4>
                        <ul class="space-y-2 flex flex-col gap-[12px]">
                            <div v-for="(link, index) in joinUsLinks" :key="index">
                                <li>
                                <NuxtLink :to="link.url" class="text-gray-400 hover:text-white">
                                    {{ link.title }}
                                </NuxtLink>
                                </li>
                            </div>
                        </ul>
                    </div>

                    <div>
                        <h4 class="font-semibold mb-[24px]">Contact</h4>
                        <div class="flex flex-col gap-[12px]">
                            <div v-for="(contact, index) in contactInfo" :key="index" class="text-gray-400 text-sm flex items-center gap-[10px]">
                                <component :is="contact.icon" />
                                <span v-if="contact.link">
                                    <NuxtLink :href="contact.link" class="hover:text-white">
                                        {{ contact.text }}
                                    </NuxtLink>
                                </span>
                                <span v-else>{{ contact.text }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Footer Bottom -->
            <div class="flex items-center justify-between flex-col md:flex-row mt-10 text-center text-gray-500 text-sm border-t border-gray-700 pt-4">
                <p>© 2025 Re:Nue. All rights reserved.</p>
                <div class="flex space-x-4 mt-4 md:mt-0">
                    <NuxtLink to="/" class="hover:text-white">Privacy policy</NuxtLink>
                    <NuxtLink to="/" class="hover:text-white">Terms & conditions</NuxtLink>
                </div>
            </div>
        </div>
    </footer>
</template>
