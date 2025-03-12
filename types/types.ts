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

interface Slide {
    image: string;
    title: string;
    description: string;
    buttonText: string;
    link: string;
}

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

export type {
    Value,
    MenuItem,
    Menu,
    Stat,
    Slide,
    Link,
    ContactInfo,
    SocialLink
}