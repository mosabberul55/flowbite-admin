import type {NavMenu} from "~/interfaces/navMenu";

export const navMenuItems = ref<NavMenu[]>([
    {
        icon: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><path d="M3 3h8v8H3zm10 0h8v8h-8zM3 13h8v8H3zm15 0h-2v3h-3v2h3v3h2v-3h3v-2h-3z" fill="currentColor"></path></svg>',
        title: 'Dashboard',
        to: '/'
    },
    {
        icon: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 28 28"><g fill="none"><path d="M17.22 25.145c-1.492.547-3.267.855-5.22.855c-5.79 0-10-2.567-10-6.285V19a3 3 0 0 1 3-3h7.999v1.5H5a1.5 1.5 0 0 0-1.492 1.355L3.5 19v.715c0 2.674 3.388 4.785 8.5 4.785c1.501 0 2.864-.196 4.036-.54l1.185 1.185zm-2.13-12.001c-.301.095-.581.237-.832.416a6 6 0 1 1 .831-.416zM7.5 8a4.5 4.5 0 1 0 9 0a4.5 4.5 0 0 0-9 0zm6.499 8.003L14 19.68c0 .53.211 1.038.586 1.413l5.324 5.322a2 2 0 0 0 2.828 0l3.676-3.676c.781-.78.781-2.046 0-2.827l-5.323-5.322a2 2 0 0 0-1.414-.585L16 14.004a2 2 0 0 0-2 2zm3 1.995a1 1 0 1 1 0-2a1 1 0 0 1 0 2z" fill="currentColor"></path></g></svg>',
        title: 'Batch',
        to: '/batch'
    },
    {
        icon: '<svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M18 14a1 1 0 1 0-2 0v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0-2h-2v-2Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M15.026 21.534A9.994 9.994 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2c2.51 0 4.802.924 6.558 2.45l-7.635 7.636L7.707 8.87a1 1 0 0 0-1.414 1.414l3.923 3.923a1 1 0 0 0 1.414 0l8.3-8.3A9.956 9.956 0 0 1 22 12a9.994 9.994 0 0 1-.466 3.026A2.49 2.49 0 0 0 20 14.5h-.5V14a2.5 2.5 0 0 0-5 0v.5H14a2.5 2.5 0 0 0 0 5h.5v.5c0 .578.196 1.11.526 1.534Z" clip-rule="evenodd"/></svg>',
        title: 'Subscription',
        to: '/subscription'
    },
    {
        icon: '<svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7.556 8.5h8m-8 3.5H12m7.111-7H4.89a.896.896 0 0 0-.629.256.868.868 0 0 0-.26.619v9.25c0 .232.094.455.26.619A.896.896 0 0 0 4.89 16H9l3 4 3-4h4.111a.896.896 0 0 0 .629-.256.868.868 0 0 0 .26-.619v-9.25a.868.868 0 0 0-.26-.619.896.896 0 0 0-.63-.256Z"/></svg>',
        title: 'Notice Category',
        to: '/notice/category'
    },
    {
        icon: '<svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7.556 8.5h8m-8 3.5H12m7.111-7H4.89a.896.896 0 0 0-.629.256.868.868 0 0 0-.26.619v9.25c0 .232.094.455.26.619A.896.896 0 0 0 4.89 16H9l3 4 3-4h4.111a.896.896 0 0 0 .629-.256.868.868 0 0 0 .26-.619v-9.25a.868.868 0 0 0-.26-.619.896.896 0 0 0-.63-.256Z"/></svg>',
        title: 'Notice',
        to: '/notice'
    },

    // subject review mcqs

    {
        icon:'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 448 512"><path d="M436 160c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-20V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48v-48h20c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-20v-64h20c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-20v-64h20zm-68 304H48V48h320v416zM208 256c35.3 0 64-28.7 64-64s-28.7-64-64-64s-64 28.7-64 64s28.7 64 64 64zm-89.6 128h179.2c12.4 0 22.4-8.6 22.4-19.2v-19.2c0-31.8-30.1-57.6-67.2-57.6c-10.8 0-18.7 8-44.8 8c-26.9 0-33.4-8-44.8-8c-37.1 0-67.2 25.8-67.2 57.6v19.2c0 10.6 10 19.2 22.4 19.2z" fill="currentColor"></path></svg>',
        title: 'Subject Review Category',
        to: '/subject-review/category'
    },
    {
        icon:'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20"><g fill="none"><path d="M4 16V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v11a1 1 0 0 1-1 1H5a1 1 0 0 0 1 1h9.5a.5.5 0 0 1 0 1H6a2 2 0 0 1-2-2zM15 4a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v11h10V4zm-8 7.25c0-.076.012-.149.031-.218c.145.11.297.21.453.3A5.109 5.109 0 0 0 10 12c.982 0 1.863-.293 2.516-.669c.156-.09.308-.19.453-.299c.02.07.031.142.031.218c0 .3-.182.55-.33.71a2.798 2.798 0 0 1-.653.505c-.52.299-1.23.535-2.017.535a4.109 4.109 0 0 1-2.017-.535a2.8 2.8 0 0 1-.654-.504C7.182 11.8 7 11.55 7 11.25zm.031-2.218A.788.788 0 0 0 7 9.25c0 .3.182.551.33.71a2.8 2.8 0 0 0 .653.505c.52.299 1.23.535 2.017.535c.788 0 1.498-.236 2.017-.535c.26-.15.485-.322.654-.504c.147-.16.329-.41.329-.71a.788.788 0 0 0-.031-.219c-.145.11-.297.21-.453.3A5.108 5.108 0 0 1 10 10a5.108 5.108 0 0 1-2.516-.669a4.273 4.273 0 0 1-.453-.299zM8 7c0-.213.126-.448.483-.655C8.841 6.137 9.374 6 10 6c.626 0 1.159.137 1.517.345c.357.207.483.442.483.655c0 .213-.126.448-.483.655C11.159 7.863 10.626 8 10 8c-.626 0-1.159-.137-1.517-.345C8.126 7.448 8 7.213 8 7zm2-2c-.755 0-1.472.163-2.019.48C7.434 5.798 7 6.313 7 7s.434 1.202.981 1.52C8.528 8.837 9.245 9 10 9c.755 0 1.472-.163 2.019-.48c.547-.318.981-.833.981-1.52s-.434-1.202-.981-1.52C11.472 5.163 10.755 5 10 5z" fill="currentColor"></path></g></svg>',
        title: 'Subject Review',
        to: '/subject-review'
    },

    // mcqs-store store / mcqs-store

    {
        icon:'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 48 48"><g fill="none"><path d="M11.25 6A5.25 5.25 0 0 0 6 11.25v25.5C6 39.65 8.35 42 11.25 42h13.269c-.5-.78-.918-1.618-1.244-2.5H11.25a2.75 2.75 0 0 1-2.75-2.75v-25.5a2.75 2.75 0 0 1 2.75-2.75h25.5a2.75 2.75 0 0 1 2.75 2.75v11.385c.878.286 1.715.662 2.5 1.119V11.25C42 8.35 39.65 6 36.75 6h-25.5zm13.271 21.996c-.5.78-.918 1.617-1.244 2.5H11.25a1.25 1.25 0 1 1 0-2.5h13.271zm8.477-16.748a1.25 1.25 0 0 0-2.5 0V14H27.75a1.25 1.25 0 1 0 0 2.5h2.748v2.748a1.25 1.25 0 0 0 2.5 0V16.5h2.752a1.25 1.25 0 1 0 0-2.5h-2.752v-2.752zm-12.345-.477a1.25 1.25 0 0 0-2.31 0l-4.748 11.507a1.25 1.25 0 1 0 2.31.953l.707-1.713h5.775l.708 1.714a1.25 1.25 0 1 0 2.31-.955l-4.752-11.506zm.701 8.247h-3.71l1.854-4.494l1.856 4.494zM10 35.25c0-.69.56-1.25 1.25-1.25h8.008a1.25 1.25 0 0 1 0 2.5H11.25c-.69 0-1.25-.56-1.25-1.25zM46.475 35c0 6.075-4.925 11-11 11s-11-4.925-11-11s4.925-11 11-11s11 4.925 11 11zm-10-7a1 1 0 1 0-2 0v6h-6a1 1 0 1 0 0 2h6v6a1 1 0 1 0 2 0v-6h6a1 1 0 1 0 0-2h-6v-6z" fill="currentColor"></path></g></svg>',
        title: 'MCQ Store',
        to: '/mcq-store'
    },

    // setting
    {
        icon:'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066-2.573c-.94-1.543.826-3.31 2.37-2.37c1 .608 2.296.07 2.572-1.065z"></path><circle cx="12" cy="12" r="3"></circle></g></svg>',
        title: 'Setting',
        to: '/setting'
    }

    // {
    //     icon: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20"><g fill="none"><path d="M1.91 7.383a8.491 8.491 0 0 1 1.78-3.08a.5.5 0 0 1 .54-.135l1.918.686a1 1 0 0 0 1.32-.762l.366-2.006a.5.5 0 0 1 .388-.4a8.532 8.532 0 0 1 3.555 0a.5.5 0 0 1 .387.4l.367 2.006a1 1 0 0 0 1.32.762l1.918-.686a.5.5 0 0 1 .54.136a8.491 8.491 0 0 1 1.78 3.079a.5.5 0 0 1-.152.535l-1.555 1.32a1 1 0 0 0 0 1.524l1.555 1.32a.5.5 0 0 1 .152.535a8.491 8.491 0 0 1-1.78 3.08a.5.5 0 0 1-.54.135l-1.918-.686a1 1 0 0 0-1.32.762l-.367 2.007a.5.5 0 0 1-.387.399a8.53 8.53 0 0 1-3.555 0a.5.5 0 0 1-.388-.4l-.365-2.006a1 1 0 0 0-1.32-.762l-1.919.686a.5.5 0 0 1-.54-.136a8.49 8.49 0 0 1-1.78-3.079a.5.5 0 0 1 .153-.535l1.554-1.32a1 1 0 0 0 0-1.524l-1.554-1.32a.5.5 0 0 1-.153-.535zm1.061-.006l1.294 1.098a2 2 0 0 1 0 3.05L2.97 12.623c.292.782.714 1.51 1.245 2.152l1.596-.57a2 2 0 0 1 2.64 1.525l.305 1.668a7.556 7.556 0 0 0 2.485 0l.305-1.67a1.998 1.998 0 0 1 2.64-1.524l1.597.571a7.492 7.492 0 0 0 1.245-2.152l-1.294-1.098a1.998 1.998 0 0 1 0-3.05l1.294-1.098a7.491 7.491 0 0 0-1.245-2.152l-1.596.57a2 2 0 0 1-2.64-1.524l-.306-1.669a7.555 7.555 0 0 0-2.485 0l-.304 1.669a2 2 0 0 1-2.641 1.525l-1.596-.571a7.491 7.491 0 0 0-1.245 2.152zM7.5 10a2.5 2.5 0 1 1 5 0a2.5 2.5 0 0 1-5 0zm1 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0z" fill="currentColor"></path></g></svg>',
    //     title: 'Settings',
    //     to: '/settings'
    // }
]);