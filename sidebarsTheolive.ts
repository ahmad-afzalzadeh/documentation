import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  theolive: [
    'index',
    'getting-started',
    {
      type: 'link',
      label: 'Player',
      description: 'THEOlive player documentation',
      customProps: {
        icon: '▶️',
      },
      href: '/theoplayer/how-to-guides/web/theolive/getting-started',
    },
    {
      type: 'category',
      label: 'Guides',
      customProps: {
        icon: '🚀',
      },
      description: 'THEOLive guides',
      link: { type: 'doc', id: 'guides/manage-team' },
      items: [{ type: 'autogenerated', dirName: 'guides' }],
    },
    'troubleshooting',
    {
      type: 'link',
      label: 'API reference',
      description: 'THEOlive backend API reference',
      customProps: {
        icon: '*️⃣',
      },
      href: 'https://developers.theo.live/reference/create-channel',
    },
  ],
};

export default sidebars;
