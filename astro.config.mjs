import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Pages that should not appear in sitemap (utility/thank-you/no-index candidates)
const SITEMAP_EXCLUDE = [
  'https://sydneyanxietypsychology.com.au/connect/thank-you/',
  'https://sydneyanxietypsychology.com.au/for-psychologists/thank-you/',
  'https://sydneyanxietypsychology.com.au/listing-removal/',
];

// Pages with known modification dates (ISO format)
const PAGE_LASTMOD = {
  '/': '2026-06-08',
  '/directory/': '2026-06-05',
  '/guides/': '2026-06-08',
  '/site-index/': '2026-06-08',
  '/guides/telehealth-anxiety-psychology-sydney/': '2026-06-05',
  '/guides/cost-telehealth-psychologist-australia/': '2026-06-04',
  '/guides/mental-health-care-plan-sydney/': '2026-06-04',
  '/guides/social-anxiety-telehealth-psychologist-sydney/': '2026-06-04',
  '/guides/how-to-choose-anxiety-psychologist-telehealth/': '2026-06-04',
  '/guides/bulk-billing-psychologist-sydney/': '2026-06-04',
  '/guides/does-online-therapy-work-for-anxiety/': '2026-06-05',
  '/guides/how-telehealth-psychology-works/': '2026-06-05',
  '/guides/first-psychology-session-what-to-expect/': '2026-06-07',
  '/guides/psychologist-waitlist-sydney/': '2026-06-05',
  '/guides/clinical-psychologist-vs-registered-psychologist/': '2026-06-05',
  '/guides/panic-disorder-telehealth-psychologist-sydney/': '2026-06-04',
  '/guides/health-anxiety-telehealth-psychologist-sydney/': '2026-06-04',
  '/guides/ocd-telehealth-psychologist-sydney/': '2026-06-04',
  '/guides/generalised-anxiety-disorder-telehealth-psychologist-sydney/': '2026-06-04',
  '/guides/medicare-psychology-data-australia/': '2026-06-05',
  '/guides/ptsd-telehealth-psychologist-sydney/': '2026-06-05',
  '/guides/anxiety-depression-telehealth-psychologist-sydney/': '2026-06-05',
  '/guides/evening-weekend-psychologist-sydney/': '2026-06-06',
  '/guides/agoraphobia-telehealth-psychologist-sydney/': '2026-06-06',
  '/guides/work-related-anxiety-psychologist-sydney/': '2026-06-06',
  '/guides/psychologist-vs-psychiatrist-anxiety-sydney/': '2026-06-08',
  '/guides/anxiety-sleep-psychologist-sydney/': '2026-06-08',
  '/tools/': '2026-06-05',
  '/tools/medicare-rebate-calculator/': '2026-06-05',
  '/tools/mental-health-care-plan-checker/': '2026-06-05',
  '/about/': '2026-06-05',
  '/faq/': '2026-06-06',
  '/faq/psychologist-vs-psychiatrist-sydney/': '2026-06-06',
  '/faq/how-long-does-anxiety-treatment-take/': '2026-06-06',
  '/faq/do-i-need-a-gp-referral-for-psychology/': '2026-06-06',
  '/faq/what-is-telehealth-psychology/': '2026-06-06',
};

export default defineConfig({
  site: 'https://sydneyanxietypsychology.com.au',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      filter: (page) => !SITEMAP_EXCLUDE.includes(page),
      serialize: (item) => {
        const url = new URL(item.url);
        const path = url.pathname;
        const lastmod = PAGE_LASTMOD[path];
        return {
          ...item,
          lastmod: lastmod || '2026-06-03',
          changefreq: path === '/' ? 'weekly' : 'monthly',
          priority: path === '/' ? 1.0
            : (path === '/directory/' || path === '/guides/' || path === '/tools/') ? 0.9
            : path.startsWith('/guides/') ? 0.8
            : path.startsWith('/tools/') ? 0.8
            : path.startsWith('/directory/') ? 0.7
            : path.startsWith('/find/') ? 0.6
            : path.startsWith('/faq/') ? 0.7
            : 0.5,
        };
      },
    }),
  ],
  build: {
    format: 'directory',
  },
});
