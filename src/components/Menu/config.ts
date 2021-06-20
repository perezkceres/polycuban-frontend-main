import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://quickswap.exchange/#/swap?outputCurrency=0x5d5aA3e0636C413473218DDF1E5a1ceCe8679B16',
      },
      {
        label: 'Liquidity',
        href: 'https://quickswap.exchange/#/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/pools',
  },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  {
    label: 'Voting (Coming Soon)',
    icon: 'IfoIcon',
    href: '/lottery',
  },
  {
    label: 'Vaults (Coming Soon)',
    icon: 'NftIcon',
    href: '/nft',
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Dex Guru Chart',
        href: 'https://dex.guru/token/0x5d5aa3e0636c413473218ddf1e5a1cece8679b16-polygon',
      },
      {
        label: 'Polygon Scan',
        href: 'https://polygonscan.com/address/0x5d5aA3e0636C413473218DDF1E5a1ceCe8679B16',
      },
    ]
  },
  {
    label: "More",
    icon: "MoreIcon",
    items: [
      // {
      //   label: "Voting",
      //   href: "https://voting.pancakeswap.finance",
      // },
      {
        label: "Github",
        href: "https://github.com/swimming777/polycuban-frontend-main",
      },
      {
        label: "Docs",
        href: "https://polycuban.gitbook.io/polycuban/contracts/socials",
      },
      // {
      //   label: "Blog",
      //   href: "https://goosefinance.medium.com/",
      // },
    ],
  },
]

export default config
