type Link = {
    label: string;
    href: string;
  };
  
  type Links = Link[];
  
  export const links: Links = [
    {
      label: 'Home',
      href: '/',
    },
    {
      label: 'List Pelanggaran',
      href: '/listpelanggaran',
    },
    {
      label: 'Kontak',
      href: '/contact',
    },
    {
      label: 'Bantuan',
      href: '/help',
    },
    {
      label: 'Login',
      href: '/login',
    },
  ];
  