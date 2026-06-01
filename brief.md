# Site Brief: anxiety-sydney
# Last updated: 2026-06-01 (Session 3 — real domains registered, placeholder replaced)
# Status: BUILD complete — domain registered, deploy-ready pending DNS + Vercel connect

---

## What this site is
A directory and comparison resource helping people in Sydney find AHPRA-registered telehealth psychologists who specialise in anxiety. Framed as a finder/comparison tool — never as a clinical service.

## Positioning
"The easiest way to find a telehealth psychologist for anxiety in Sydney — with clear fees, Medicare information, and no jargon."

Differentiation vs. competitors:
- Fee transparency (most competitors are vague)
- Telehealth-first (not an afterthought)
- Anxiety-specific (not a generic directory)
- Calm, empathetic tone (not a marketing machine)
- Named professional reviewer (E-E-A-T signal competitors lack)

---

## TERMINOLOGY RULE (firm, see DECISIONS.md 2026-06-01)
Use "registered psychologist" or "psychologist" as the default term.
Do NOT use "clinical psychologist" as a general descriptor or keyword target.
The practitioner/reviewer (Monica Ma) is a Registered Psychologist and Clinical Psych Registrar — not yet endorsed as Clinical Psychologist.
Medicare rebate to cite: $98.95/session (registered psychologist, telehealth, from 1 Jul 2025).
If a listed practitioner is a confirmed AHPRA-endorsed clinical psychologist, note their rebate separately ($145.25/session) — but do not use it as the default.

---

## Primary target keywords (updated Session 1 — clinical psych terms removed)
1. telehealth psychologist anxiety Sydney
2. online psychologist anxiety Sydney
3. anxiety psychologist Sydney Medicare
4. telehealth registered psychologist anxiety Sydney
5. online therapy anxiety Sydney

Previously included "telehealth clinical psychologist anxiety Sydney" — REMOVED per DECISIONS.md terminology decision. Replaced with registered psych framing.

## Long-tail targets (suburb level)
- telehealth psychologist anxiety eastern suburbs Sydney
- telehealth psychologist anxiety north shore Sydney
- telehealth psychologist anxiety inner west Sydney
- telehealth psychologist anxiety Hills District
- online psychologist anxiety Parramatta
- online therapy anxiety Sydney bulk billing

## High-intent informational targets (from 5-pillar research)
- does online therapy work for anxiety (efficacy intent — pillar 1)
- how much does an online psychologist cost Australia (cost intent — pillar 2)
- telehealth psychology cost Medicare rebate (cost intent — pillar 2)
- psychologist no waitlist Sydney (access intent — pillar 3)
- see a psychologist this week online (access intent — pillar 3)
- is online therapy legit (trust intent — pillar 4)
- does telehealth psychology actually work (trust/efficacy intent — pillars 1+4)
- mental health care plan telehealth (Medicare pathway — pillar 2)
- do I need a referral to see a psychologist online (pathway intent — pillar 2)
- telehealth therapy for anxiety (niche depth — pillar 5)
- online psychologist for panic attacks (niche depth — pillar 5)
- health anxiety treatment online (niche depth — pillar 5)

---

## Domains (finalised — registered 2026-06-01)

**Primary (SEO): sydneyanxietypsychology.com.au** — registered. This is the canonical domain. All content, canonicals, sitemaps, GSC verification, and Plausible tracking point here.

**Secondary (redirect only): sydneyanxietypsychology.online** — registered. This domain will 301-redirect to the .com.au equivalent path at deploy time. It is NOT a second site. See DECISIONS.md for full redirect implementation plan.

**Brand name (derived from domain): Sydney Anxiety Psychology** — all visible site copy, schema `name` fields, page titles, and meta descriptions now use this name.

**Previous placeholder:** anxietyfinder.com.au — fully replaced across all source files as of Session 3. Do not use this placeholder again.

---

## Site architecture — 5-pillar structure (updated Session 1)

Based on research: the 5 content pillars that map directly to search intent AND pain points are:
1. Efficacy ("does it work?") — evidence that online therapy works for anxiety
2. Cost & Medicare — fees, rebates, out-of-pocket, pathway to claim
3. Access/speed — waitlists, how quickly can I be seen
4. Trust / how it works — what happens in a session, AHPRA, privacy
5. Niche depth (anxiety-specific) — panic attacks, health anxiety, social anxiety, OCD

Priority build order: Start with pillar 2 (cost/Medicare) — highest search volume, highest conversion intent per research. Then pillar 1 (efficacy). Then homepage. Then pillars 3, 4, 5.

```
/ (homepage — pillar 2 + 4 synthesis, CTA)
  /guides/
    /cost-telehealth-psychologist-australia/   ← Pillar 2 — HIGHEST PRIORITY
    /does-online-therapy-work-for-anxiety/     ← Pillar 1
    /how-to-get-a-mental-health-treatment-plan/ ← Pillar 2 supporting
    /how-telehealth-psychology-works/          ← Pillar 4
    /psychologist-waitlist-sydney/             ← Pillar 3
  /anxiety/
    /telehealth-psychologist-anxiety-sydney/   ← Pillar 5 main
    /online-therapy-panic-attacks/             ← Pillar 5
    /health-anxiety-psychologist-online/       ← Pillar 5
    /social-anxiety-psychologist-sydney/       ← Pillar 5
  /suburb/  (Phase 2)
    /eastern-suburbs/
    /north-shore/
    /inner-west/
    /hills-district/
    /parramatta/
  /connect/  (book CTA)
  /about/
  /privacy/
```

**Session 1 build targets:**
- / (homepage)
- /guides/cost-telehealth-psychologist-australia/
- /guides/does-online-therapy-work-for-anxiety/
- /connect/
- /connect/thank-you/
- /about/
- /privacy/

---

## Practitioner listings (pre-launch plan)
- Phase 1: No individual practitioner listings (avoids AHPRA/accuracy risk)
- Phase 1: Named reviewer credit for Monica Ma (Registered Psychologist, AHPRA PSY0002701499) — strengthens E-E-A-T without advertising her practice
- Phase 2: Outreach to telehealth psychologists once traffic is established
- Phase 2 listings: must have AHPRA number verified, practitioner consent, accurate credentials only
- NEVER list someone as "clinical psychologist" unless AHPRA endorsement is confirmed

---

## Conversion goal
Book CTA → email capture form → "We'll connect you with a telehealth psychologist for anxiety in Sydney. They'll contact you within 1 business day."

Pre-launch honesty guardrail: CTA says "Join the waitlist" — until real practitioners are onboarded, be honest that we'll match and connect, not book instantly.

Form fields (minimum): Name, email, suburb, "What are you hoping to get help with?" (optional free text).

---

## E-E-A-T implementation plan (from research + DECISIONS.md)
- Named reviewer: Monica Ma, Registered Psychologist, AHPRA PSY0002701499
- Every efficacy claim cites source: JMIR 2023, Fernandez 2021 — NEED VERIFICATION before publishing (see claims-to-verify section below)
- Every Medicare fee figure cited with source + date (MBS, 1 Jul 2025)
- External links: AHPRA practitioner register, health.gov.au Better Access, Beyond Blue

---

## Claims requiring verification before publishing (flags from research evaluation)

### VERIFY BEFORE PUBLISHING:
1. **Nov 2025 Medicare telehealth rule** — research says: "clients generally need a GP visit in the last 12 months OR MyMedicare registration." This is plausibly true but details matter for AHPRA accuracy. Do not publish specific rule without confirming exact wording from health.gov.au or MBS. Already partially verified in Session 0 SERP research: "referral must come from MyMedicare-enrolled GP." Keep hedged.

2. **JMIR 2023 efficacy citation** — research cites "JMIR 2023" for online therapy efficacy equivalence. This is plausible (there is a body of telehealth efficacy research in JMIR journals) but the specific citation year needs to be confirmed. Until verified: use hedged language ("research suggests online therapy is as effective as in-person for anxiety") without citing a specific study we haven't confirmed. DO NOT invent or mis-cite.

3. **Fernandez 2021 citation** — similar issue. Plausible (there is a Fernandez et al 2021 paper on telehealth mental health efficacy) but exact claim needs confirmation. Same treatment: hedge without citing until confirmed.

4. **Supply crisis statistics** — research cites: demand to outstrip supply ~96% by 2038; teens waiting ~100 days; specialist waits 51–77+ days. These may be from AIHW or similar. They're plausible and well-known in the sector. Until verified with source and year: use as framing context without a specific stat, or hedge ("reports suggest" / "according to the AIHW").

### SAFE TO PUBLISH:
- Medicare rebate amounts ($145.25 clinical, $98.95 registered) — verified Session 0
- Up to 10 sessions/year under Better Access — verified
- Telehealth = same rebate as in-person — verified
- Nov 2025 GP/MyMedicare relationship requirement — verified in Session 0 SERP research (caveat: state accurately, not as a hard bar)
- AHPRA registration as a requirement — established fact

---

## Current status
- [x] Domain: sydneyanxietypsychology.com.au — REGISTERED (2026-06-01). Pending eligibility activation (.com.au requires AU presence/ABN — confirm with Derek).
- [x] Domain: sydneyanxietypsychology.online — REGISTERED (2026-06-01). Redirect-only; no separate site.
- [x] Site build: COMPLETE — 10 pages, clean build, correct domain baked in as of Session 3
- [ ] Vercel: not connected — ACTION NEEDED: Derek (GitHub repo + Vercel project)
- [ ] Plausible: not set up — ACTION NEEDED: Derek (plausible.io account, add sydneyanxietypsychology.com.au)
- [ ] GSC: not set up — ACTION NEEDED: Derek (once Vercel deploy is live, verify domain in GSC)
- [ ] DNS: not pointed — ACTION NEEDED: Derek (point nameservers to Vercel once Vercel project is connected)
- [ ] Traffic: 0

---

## Metrics targets (rolling)
Validation criteria: ≥10 unique organic visitors/day clicking Book CTA, sustained 14 days, >3% CTR, organic traffic only.

Week 4 leading indicators to watch:
- GSC impressions > 50/day
- Index coverage: ≥5 pages indexed
- Average position for primary cluster: <50 (entering SERPs)

---
