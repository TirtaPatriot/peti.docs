module.exports = {
  title: 'PeTi',
  description: 'Pembayaran Tagihan Air PDAM Tirta Patriot',
  head: [
    ['link', { rel: 'icon', href: '/peti.svg' }]
  ],
  themeConfig: {
    lastUpdated: true,
    repo: 'TirtaPatriot/peti.docs',
    docsDir: 'docs',
    docsBranch: 'patriot',
    editLinks: true,
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      // { text: 'Schema', link: '/schema/' },
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'Guide',
          collapsable: false,
          children: [
            '',
            'authorization',
            'inquiry',
            'payment',
            // 'reversal',
            'status',
            'webhook',
            'reconsiliation',
            'error',
          ]
        }
      ]
    }
  }
}
