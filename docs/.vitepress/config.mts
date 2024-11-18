import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "OSAP For Muslims",
  lastUpdated: true,
  description: "Testing the features and capabilities of Vitepress",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/OSAP secondary logo.png",
    search: {
      provider: "local",
      options: {
        detailedView: true,
        miniSearch: {
          searchOptions: {
            fuzzy: 0.2,
            prefix: true,
            boost: { title: 4, text: 2, titles: 1 },
          },
        },
      },
    },

    sidebar: [
      {
        text: "Updates",
        link: "/updates",
        items: [],
      },
      {
        text: "About Us",
        link: "/about",
        items: [],
      },
      {
        text: "Islamic Rulings",
        items: [
          { text: "Is it permissible to take OSAP", link: "/rulings/fatwa" },
        ],
      },
      {
        text: "Terminology",
        items: [
          {
            text: "Grace Period",
            collapsed: true,
            link: "/terminology/grace",
            items: [
              {
                text: "Forgiven Interest",
                link: "/terminology/grace#forgiven-interest",
              },
              {
                text: "Interest Rates During Grace Period",
                link: "/terminology/grace.html#interest-rates-during-grace-period",
              },
              {
                text: "Interest Rates After Grace Period (In Repayment)",
                link: "/terminology/grace.html#interest-rates-after-grace-period-in-repayment",
              },
              {
                text: "Extensions",
                link: "/terminology/grace.html#extensions",
              },
            ],
          },
          { text: "Student Status", link: "/terminology/studentstatus" },
          { text: "Probation", link: "/terminology/probation" },
        ],
      },
      {
        text: "Avoiding Interest",
        items: [
          { text: "Typical Student", link: "/avoidingInterest/typicalStudent" },
          { text: "Taking a Break", link: "/avoidingInterest/break" },
          {
            text: "Academic Restriction",
            link: "/avoidingInterest/restriction",
          },
          {
            text: "Switching to Part-Time",
            link: "/avoidingInterest/parttime",
          },
          { text: "Internships", link: "/avoidingInterest/internships" },
        ],
      },
      {
        text: "Repayment",
        items: [
          {
            text: 'Achieving a "True" Grace Period',
            link: "/repayment/payOff",
          },
          { text: "Repayment Assistance Plan", link: "/repayment/rap" },
        ],
      },
      {
        text: "Advice",
        link: "/advice",
        collapsed: true,
        items: [
          {
            text: "Precautionary Advice",
            link: "/advice#precautionary-advice",
          },
          {
            text: "Before post secondary",
            link: "/advice#before-post-secondary",
          },
          {
            text: "During post secondary",
            link: "/advice#during-post-secondary",
          },
          {
            text: "End of post secondary and beyond",
            link: "/advice#end-of-post-secondary-and-beyond",
          },
        ],
      },
      {
        text: "Miscellaneous",
        link: "/miscellaneous",
        collapsed: true,
        items: [
          {
            text: "Other policies",
            link: "/miscellaneous#other-policies",
          },
        ],
      },
      {
        text: "Disclaimer",
        link: "/disclaimer",
        items: [],
      },
      {
        text: "FAQ",
        link: "/faq",
        items: [],
      },
      {
        text: "Donate",
        link: "/about",
        items: [],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/SamahaCore/osapformuslims" },
    ],
  },
});
