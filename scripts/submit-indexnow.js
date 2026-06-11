#!/usr/bin/env node
/**
 * IndexNow submission script — anxiety-sydney (sydneyanxietypsychology.com.au)
 *
 * HOW IT RUNS:
 *   node scripts/submit-indexnow.js
 *
 * WHEN TO RUN:
 *   Run after any deploy that adds or materially changes pages.
 *   IndexNow notifies Bing, DuckDuckGo, and Yandex (Google does NOT use IndexNow).
 *   Safe to run multiple times — IndexNow is idempotent.
 *
 * KEY FILE:
 *   Served at https://sydneyanxietypsychology.com.au/75300e81a9ac479eac2cd8d9941b7e13.txt
 *   This file must match the key below exactly.
 *
 * DOCS: https://www.indexnow.org/documentation
 */

const KEY = '75300e81a9ac479eac2cd8d9941b7e13';
const HOST = 'sydneyanxietypsychology.com.au';
const BASE_URL = `https://${HOST}`;

// Updated 2026-06-11 (iteration 6): full URL list from dist build (104 pages)
// Added: 17 new Halaxy practitioners, inner-west guide, eastern-suburbs guide
const URLS = [
  '/',
  '/about/',
  '/connect/',
  '/directory/',
  '/directory/amanda-rembach-psychologist-bondi-junction/',
  '/directory/anna-mckinnon-psychologist-edgecliff/',
  '/directory/anna-simpson-psychologist-erina/',
  '/directory/belinda-middleton-psychologist-edgecliff/',
  '/directory/brett-ruehland-psychologist-chippendale/',
  '/directory/caitlin-pedel-psychologist-edgecliff/',
  '/directory/carol-manns-psychologist-wollongong/',
  '/directory/catherine-gittins-psychologist-edgecliff/',
  '/directory/claire-loughran-psychologist-sydney-telehealth/',
  '/directory/clinton-moore-psychologist-north-sydney/',
  '/directory/dominic-oen-psychologist-bankstown/',
  '/directory/doone-richmond-psychologist-north-sydney/',
  '/directory/douha-el-assaad-psychologist-strathfield/',
  '/directory/eileen-seah-psychologist-zetland/',
  '/directory/emma-welch-psychologist-surry-hills/',
  '/directory/ewa-nowinska-psychologist-kirribilli/',
  '/directory/gabrielle-fynn-psychologist-edgecliff/',
  '/directory/gay-cusack-psychologist-surry-hills/',
  '/directory/hurryat-faniad-psychologist-auburn/',
  '/directory/janene-england-psychologist-terrigal/',
  '/directory/janine-taylor-psychologist-castle-hill/',
  '/directory/jayden-baker-psychologist-bondi-junction/',
  '/directory/jessica-budge-psychologist-bondi-junction/',
  '/directory/jodie-lowinger-psychologist-bondi-junction/',
  '/directory/jordan-papandrea-psychologist-edgecliff/',
  '/directory/joyce-ong-psychologist-north-ryde/',
  '/directory/karen-de-mar-psychologist-north-sydney/',
  '/directory/kate-munro-psychologist-north-sydney/',
  '/directory/kerry-critchlow-psychologist-surry-hills/',
  '/directory/kristiina-jacobs-psychologist-leichhardt/',
  '/directory/lauren-templeman-psychologist-kellyville-ridge/',
  '/directory/lauren-tober-psychologist-sydney-telehealth/',
  '/directory/lisa-tanconi-psychologist-sydney-telehealth/',
  '/directory/lyndsey-grounds-psychologist-sydney-telehealth/',
  '/directory/madeleine-clark-psychologist-westmead/',
  '/directory/marianne-restifo-psychologist-concord/',
  '/directory/michael-fitzpatrick-psychologist-marrickville/',
  '/directory/michelle-harvey-psychologist-killara/',
  '/directory/milica-kecmanovic-psychologist-waterloo/',
  '/directory/mitchell-jordan-psychologist-warners-bay/',
  '/directory/narissa-fry-psychologist-erina/',
  '/directory/natasha-kiemel-incorvaia-psychologist-sydney-telehealth/',
  '/directory/nicholas-caras-psychologist-sydney-telehealth/',
  '/directory/nick-batty-psychologist-north-sydney/',
  '/directory/saima-ali-psychologist-bankstown/',
  '/directory/shanae-oleary-psychologist-edgecliff/',
  '/directory/sherisse-cohen-psychologist-bondi-junction/',
  '/directory/susan-aston-psychologist-sydney-telehealth/',
  '/directory/susannah-kindred-psychologist-st-leonards/',
  '/directory/tia-ven-psychologist-beverly-hills/',
  '/directory/toni-kernick-psychologist-sydney-telehealth/',
  '/find/anxiety-psychologist-beverly-hills-sydney/',
  '/find/anxiety-psychologist-bondi-junction-sydney/',
  '/find/anxiety-psychologist-chippendale-sydney/',
  '/find/anxiety-psychologist-edgecliff-sydney/',
  '/find/anxiety-psychologist-marrickville-sydney/',
  '/find/anxiety-psychologist-north-sydney-sydney/',
  '/find/anxiety-psychologist-strathfield-sydney/',
  '/find/anxiety-psychologist-surry-hills-sydney/',
  '/find/anxiety-psychologist-zetland-sydney/',
  '/for-psychologists/',
  '/guides/',
  '/guides/bulk-billing-psychologist-sydney/',
  '/guides/clinical-psychologist-vs-registered-psychologist/',
  '/guides/cost-telehealth-psychologist-australia/',
  '/guides/does-online-therapy-work-for-anxiety/',
  '/guides/generalised-anxiety-disorder-telehealth-psychologist-sydney/',
  '/guides/health-anxiety-telehealth-psychologist-sydney/',
  '/guides/how-telehealth-psychology-works/',
  '/guides/how-to-choose-anxiety-psychologist-telehealth/',
  '/guides/medicare-psychology-data-australia/',
  '/guides/mental-health-care-plan-sydney/',
  '/guides/ocd-telehealth-psychologist-sydney/',
  '/guides/panic-disorder-telehealth-psychologist-sydney/',
  '/guides/psychologist-waitlist-sydney/',
  '/guides/social-anxiety-telehealth-psychologist-sydney/',
  '/guides/ptsd-telehealth-psychologist-sydney/',
  '/guides/anxiety-depression-telehealth-psychologist-sydney/',
  '/guides/evening-weekend-psychologist-sydney/',
  '/guides/agoraphobia-telehealth-psychologist-sydney/',
  '/guides/work-related-anxiety-psychologist-sydney/',
  '/guides/first-psychology-session-what-to-expect/',
  '/guides/psychologist-vs-psychiatrist-anxiety-sydney/',
  '/guides/anxiety-sleep-psychologist-sydney/',
  '/guides/telehealth-anxiety-psychology-sydney/',
  '/guides/anxiety-psychologist-inner-west-sydney/',
  '/guides/anxiety-psychologist-eastern-suburbs-sydney/',
  '/guides/anxiety-therapy-types-sydney/',
  '/faq/',
  '/faq/how-many-sessions-do-i-need-for-anxiety/',
  '/faq/does-medicare-cover-telehealth-psychology/',
  '/faq/psychologist-wait-times-sydney/',
  '/faq/psychologist-vs-psychiatrist-sydney/',
  '/listing-removal/',
  '/privacy/',
  '/site-index/',
  '/tools/',
  '/tools/medicare-rebate-calculator/',
  '/tools/mental-health-care-plan-checker/',
].map(path => `${BASE_URL}${path}`);

async function submitIndexNow() {
  const body = {
    host: HOST,
    key: KEY,
    keyLocation: `${BASE_URL}/${KEY}.txt`,
    urlList: URLS,
  };

  console.log(`Submitting ${URLS.length} URLs to IndexNow...`);

  const response = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
    body: JSON.stringify(body),
  });

  if (response.ok) {
    console.log(`✓ IndexNow accepted: HTTP ${response.status}`);
    console.log('  Bing/DuckDuckGo/Yandex will crawl these URLs shortly.');
    console.log('  Note: Google does not use IndexNow — use GSC URL Inspection for Google.');
  } else {
    const text = await response.text().catch(() => '');
    console.error(`✗ IndexNow error: HTTP ${response.status} — ${text}`);
    process.exit(1);
  }
}

submitIndexNow().catch(err => {
  console.error('Failed:', err.message);
  process.exit(1);
});
