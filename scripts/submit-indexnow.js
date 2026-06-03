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

const URLS = [
  '/',
  '/directory/',
  '/guides/',
  '/guides/cost-telehealth-psychologist-australia/',
  '/guides/mental-health-care-plan-sydney/',
  '/guides/does-online-therapy-work-for-anxiety/',
  '/guides/how-telehealth-psychology-works/',
  '/guides/how-to-choose-anxiety-psychologist-telehealth/',
  '/guides/bulk-billing-psychologist-sydney/',
  '/guides/psychologist-waitlist-sydney/',
  '/guides/clinical-psychologist-vs-registered-psychologist/',
  '/guides/social-anxiety-telehealth-psychologist-sydney/',
  '/guides/panic-disorder-telehealth-psychologist-sydney/',
  '/guides/health-anxiety-telehealth-psychologist-sydney/',
  '/guides/ocd-telehealth-psychologist-sydney/',
  '/find/anxiety-psychologist-bondi-junction-sydney/',
  '/find/anxiety-psychologist-north-sydney-sydney/',
  '/find/anxiety-psychologist-surry-hills-sydney/',
  '/find/anxiety-psychologist-edgecliff-sydney/',
  '/find/anxiety-psychologist-marrickville-sydney/',
  '/find/anxiety-psychologist-strathfield-sydney/',
  '/find/anxiety-psychologist-chippendale-sydney/',
  '/find/anxiety-psychologist-zetland-sydney/',
  '/find/anxiety-psychologist-beverly-hills-sydney/',
  '/about/',
  '/connect/',
  '/for-psychologists/',
  '/privacy/',
  '/listing-removal/',
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
