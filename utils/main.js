import menuApp from '@/assets/img/menu-app.png';
import invoiceApp from '@/assets/img/invoice-app.png';
import mealpreps from '@/assets/img/mealpreps.png';

export const avatar = 'https://res.cloudinary.com/rafamed-dev/image/upload/v1717713407/avatar_nbru5d.png';

export const navLinks = [
  {
    label: 'Home',
    icon: 'i-heroicons-home-solid',
    to: '/',
  },
  {
    label: 'Blog',
    icon: 'i-heroicons-book-open',
    to: '/blog',
  },
  {
    label: 'Contact',
    icon: 'i-heroicons-envelope',
    to: '/contact',
  },
];

export const socialLinks = [
  {
    label: 'GitHub',
    icon: 'hugeicons:github-01',
    url: 'https://github.com/rafamedtech',
  },
  {
    label: 'Twitter',
    icon: 'hugeicons:new-twitter',
    url: 'https://x.com/rafamed_dev',
  },
];

export const mainTitle = 'Rafamed';

export const badge = 'Dev';

export const techStack = [
  {
    id: 1,
    title: 'Vue 3',
    icon: 'logos:vue',
  },
  {
    id: 2,
    title: 'Nuxt 3',
    icon: 'logos:nuxt-icon',
  },
  {
    id: 3,
    title: 'Vite',
    icon: 'logos:vitejs',
  },
  {
    id: 4,
    title: 'Tailwind',
    icon: 'logos:tailwindcss-icon',
  },
  {
    id: 5,
    title: 'TypeScript',
    icon: 'logos:typescript-icon',
  },
  {
    id: 6,
    title: 'UnJS',
    icon: 'simple-icons:unjs',
  },
  {
    id: 7,
    title: 'Prisma',
    icon: 'logos:prisma',
  },
  {
    id: 8,
    title: 'PostgreSQL',
    icon: 'logos:postgresql',
  },
];

export const templatesData = [
  {
    id: 1,
    title: 'Restaurant menu app',
    description: 'A simple restaurant menu app built with Vue 3 and Vite',
    stack: ['Vue 3', 'Vite'],
    images: [menuApp],
    source: '/templates/vue3-vite',
    demo: '/templates/vue3-vite',
  },
  {
    id: 2,
    title: 'Invoice app',
    description: 'A simple invoice app built with Vue 3 and Vite',
    stack: ['Vue 3', 'Vite', 'TailwindCSS'],
    images: [invoiceApp],
    source: '/templates/vue3-vite-tailwindcss',
    demo: '/templates/vue3-vite-tailwindcss',
  },
  {
    id: 3,
    title: 'Vue 3 + Vite + TailwindCSS + TypeScript',
    description: 'A simple Vue 3 + Vite + TailwindCSS + TypeScript template',
    stack: ['Vue 3', 'Vite', 'TailwindCSS', 'TypeScript'],
    images: [mealpreps],
    source: '/templates/vue3-vite-tailwindcss-typescript',
    demo: '/templates/vue3-vite-tailwindcss-typescript',
  },
];
