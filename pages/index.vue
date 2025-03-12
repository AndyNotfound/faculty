<script setup lang="ts">
import { reactive } from 'vue';
import { 
    Store, 
    ShoppingBasket, 
    Handshake, 
    Users 
} from "lucide-vue-next";

type Value = {
    title: string;
    description: string;
    icon: string;
    color: string;
};

interface MenuItem {
    label: string;
    link: string;
}

interface Menu {
    label: string;
    link?: string;
    items?: MenuItem[];
}

interface Stat {
    label: string;
    value: number;
    icon: any;
    color: string;
}

const announcements = reactive<string[]>([
    "We are excited to announce our annual Office Holiday Party! Join us on December 15th at 6:00 PM in the main conference room for an evening of celebration, food, and fun. Don't forget to wear your festive attire!",
    "Please be informed that the team meeting scheduled for this Friday at 10:00 AM has been rescheduled to Monday at 2:00 PM due to unforeseen circumstances. Make sure to adjust your calendars accordingly!",
    "Starting next month, we will be implementing a new flexible working hours policy. Employees will have the option to start their workday anytime between 7:00 AM and 10:00 AM. More details will be shared in the upcoming HR meeting."
]);

const values = reactive<Value[]>([
    {
        title: "Purposeful",
        description:
        "We are committed to making a positive difference to the environment, supporting and changing lives, and inspiring change for a brighter future.",
        icon: '/images/val1.png',
        color: "text-blue-500",
    },
    {
        title: "Passionate",
        description:
        "We bring energy, enthusiasm, and dedication to everything we do.",
        icon: '/images/val2.png',
        color: "text-red-500",
    },
    {
        title: "Caring",
        description:
        "We support each other and our community with kindness and empathy.",
        icon: '/images/val3.png',
        color: "text-yellow-500",
    },
    {
        title: "Authentic",
        description:
        "We stay true to our mission and values, always acting with integrity.",
        icon: '/images/val4.png',
        color: "text-indigo-500",
    },
    {
        title: "Inclusive",
        description:
        "We embrace diversity and create an environment where everyone belongs.",
        icon: '/images/val4.png',
        color: "text-red-600",
    },
]);

const menus = reactive<Menu[]>([
    { 
        label: "Thrift with us", 
        items: [
            { label: "Our Stores", link: "/hug" },
            { label: "Re:Nue Online", link: "/hug" },
            { label: "Re:Nue Community", link: "/hug" },
        ] 
    },
    { 
        label: "Donate", 
        items: [
            { label: "Give small items", link: "/booths" },
            { label: "Give bulky items", link: "/booths" },
            { label: "Accepted items", link: "/booths" },
        ] 
    },
    { 
        label: "Impact", 
        link: "/impact" 
    },
    { 
        label: "Get involved", 
        items: [
            { label: "Volunteer", link: "/volunteer" },
            { label: "Re:Nue partners", link: "/volunteer" },
            { label: "Join as a staff", link: "/volunteer" },
        ] 
    },
    { 
        label: "About us", 
        link: "/about" 
    },
    { 
        label: "Contact", 
        link: "/contact" 
    },
]);

const stats = reactive<Stat[]>([
    { 
        label: "Stores", 
        value: 4, 
        icon: Store, 
        color: "text-blue-600" 
    },
    { 
        label: "Donation booths", 
        value: 15, 
        icon: ShoppingBasket, 
        color: "text-red-500" 
    },
    { 
        label: "Partners", 
        value: 9, 
        icon: Handshake, 
        color: "text-yellow-500" 
    },
    { 
        label: "Community", 
        value: 10000, 
        icon: Users, 
        color: "text-blue-500"
    }
])
</script>

<template>
    <div class="w-full">
        <AnnouncementBar :list="announcements" />   
        <Navbar :menus="menus" />
        <main>
            <HomeSectionHero /> 
            <HomeSectionStats :stats="stats" />
            <!-- 
                <HomeSectionPillars /> 
            -->
            <HomeSectionValues :values="values" />
            <HomeSectionFaq />
            <HomeSectionCommunity />
        </main>
        <Footer />
    </div>
</template>