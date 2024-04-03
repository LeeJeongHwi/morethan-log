const CONFIG = {
  // profile setting (required)
  profile: {
    name: "LeeJeongHwi",
    image: "/main_char.png", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "ML Modeler",
    bio: "ML ",
    email: "wjdgnl97@gmail.com",
    linkedin: "https://www.linkedin.com/in/jeonghwi-lee-189614145/",
    github: "https://github.com/LeeJeongHwi",
    instagram: "https://www.instagram.com/jeonghwi._?igsh=ZDUzd2N0ZHNvYjg5",
  },
  projects: [
    {
      name: ``,
      href: "",
    },
  ],
  // blog setting (required)
  blog: {
    title: "과일망의 이모저모",
    description: "안녕하세요, ML Engineer, Modeler를 꿈꾸고 있는 과일망입니다. \n테크니컬 노트를 적거나, 저의 일상, 후기 등 작성해보고자 합니다."
  },

  // CONFIG configration (required)
  link: "https://fruitnet-blog.vercel.app",
  since: 2024, // If leave this empty, current year will be used.
  lang: "ko-KR", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: true,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: true,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  naverSearchAdvisor: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 21600 * 7, // revalidate time for [slug], index
}

module.exports = { CONFIG }
