import nextra from 'nextra'

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
})

export default withNextra({
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        port: '',
        pathname: '/codeyu/EnglishGrammarBook/master/images/chapter_9/*',
      },
    ],
  },
  redirects() {
    return [
      {
        source: "/",
        destination: "/introduction/",
        permanent: true,
      },
    ];
  },
});
