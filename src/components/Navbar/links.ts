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
        label: 'About',
        href: '/about',
      },
    {
      label: 'Violation Record',
      href: '/vilationrecord',
    },
    {
      label: 'Contact',
      href: '/contact',
    },
  ];
  