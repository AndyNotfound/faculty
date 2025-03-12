<script setup lang="ts">
import { Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-vue-next';
</script>

<template>
    <footer>
        <!-- Yellow Shape Section -->
        <div class="bg-yellow-400">
            <img src="/images/shape.png" class="w-full h-fit" />
        </div>

        <!-- Footer Content -->
        <div class="bg-black text-white px-[40px] py-[56px] md:px-[40px]">

            <!-- Mobile Layout -->
            <div class="flex flex-col gap-[24px] md:hidden">
                <!-- Logo & Description -->
                <div class="text-center">
                    <img src="/images/logo-invert.png" alt="Re:Nue Logo" class="mx-auto mb-6" />
                    <p class="text-gray-400">
                        Re:Nue, a social enterprise under The Salvation Army, is passionate
                        about sustainability and community impact since 1996. By re-purposing
                        and reselling your generous donations, we generate funds to support
                        vital programs for the community, including children, youth, the elderly,
                        migrant workers, and ex-offenders.
                    </p>
                </div>

                <!-- Navigation Links -->
                <nav class="text-center space-y-[16px]">
                    <NuxtLink to="/" class="block hover:text-white">FAQs</NuxtLink>
                    <NuxtLink to="/" class="block hover:text-white">About us</NuxtLink>
                    <NuxtLink to="/" class="block hover:text-white">The Salvation Army</NuxtLink>
                    <NuxtLink to="/" class="block hover:text-white">Volunteer</NuxtLink>
                    <NuxtLink to="/" class="block hover:text-white">Corporate partnerships</NuxtLink>
                    <NuxtLink to="/" class="block hover:text-white">Join as staff</NuxtLink>
                    <NuxtLink to="/" class="block hover:text-white">Contact</NuxtLink>
                </nav>

                <!-- Social Links -->
                <div class="flex justify-center gap-6">
                    <NuxtLink to="/" class="text-gray-400 hover:text-white"><Facebook /></NuxtLink>
                    <NuxtLink to="/" class="text-gray-400 hover:text-white"><Instagram /></NuxtLink>
                </div>
            </div>

            <!-- Desktop Layout -->
            <div class="hidden md:flex justify-between gap-6 py-[40px]">
                <!-- Left Section -->
                <div class="md:max-w-[320px] flex flex-col gap-[24px]">
                    <img src="/images/logo-invert.png" alt="Re:Nue Logo" class="navbar_img" />
                    <p class="text-gray-400">
                        Re:Nue, a social enterprise under The Salvation Army, is passionate
                        about sustainability and community impact since 1996. By re-purposing
                        and reselling your generous donations, we generate funds to support
                        vital programs for the community.
                    </p>
                    <div class="flex space-x-4">
                        <NuxtLink to="/" class="text-gray-400 hover:text-white"><Facebook /></NuxtLink>
                        <NuxtLink to="/" class="text-gray-400 hover:text-white"><Instagram /></NuxtLink>
                    </div>
                </div>

                <!-- Right Section -->
                <div class="flex justify-end gap-[40px]">
                    <!-- Company Links -->
                    <div>
                        <h4 class="font-semibold mb-[24px]">Company</h4>
                        <ul class="space-y-2 flex flex-col gap-[12px]">
                            <li><NuxtLink to="/" class="text-gray-400 hover:text-white">FAQs</NuxtLink></li>
                            <li><NuxtLink to="/" class="text-gray-400 hover:text-white">About us</NuxtLink></li>
                            <li><NuxtLink to="/" class="text-gray-400 hover:text-white">The Salvation Army</NuxtLink></li>
                        </ul>
                    </div>

                    <!-- Join Us Links -->
                    <div>
                        <h4 class="font-semibold mb-[24px]">Join Us</h4>
                        <ul class="space-y-2 flex flex-col gap-[12px]">
                            <li><NuxtLink to="/" class="text-gray-400 hover:text-white">Volunteer</NuxtLink></li>
                            <li><NuxtLink to="/" class="text-gray-400 hover:text-white">Corporate Partnerships</NuxtLink></li>
                            <li><NuxtLink to="/" class="text-gray-400 hover:text-white">Join as staff</NuxtLink></li>
                        </ul>
                    </div>

                    <!-- Contact Info -->
                    <div>
                        <h4 class="font-semibold mb-[24px]">Contact</h4>
                        <div class="flex flex-col gap-[12px]">
                            <p class="text-gray-400 text-sm flex items-center gap-[10px]">
                                <Mail />
                                <NuxtLink href="mailto:customercare@smm.salvationarmy.org" class="hover:text-white">customercare@smm.salvationarmy.org</NuxtLink>
                            </p>
                            <p class="text-gray-400 text-sm flex items-center gap-[10px]">
                                <Phone /> +65 6288 5438
                            </p>
                            <p class="text-gray-400 text-sm flex items-start gap-[10px] leading-snug">
                                <MapPin />
                                356 Tanglin Road, Singapore 247674<br />
                                Operation Hours: 8:30 am - 5:30 pm (Mon-Sat)
                            </p>
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
