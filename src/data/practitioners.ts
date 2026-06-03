/**
 * Anxiety-Sydney directory: practitioner data.
 *
 * DATA POLICY (read before adding any record):
 * - Source: each entry is sourced from the practitioner's own public practice website
 *   (or a public professional directory). The `source` field holds the actual URL checked.
 * - Only public-record-style fields are stored: full name, registration type, suburb,
 *   publicly self-listed specialty areas, and data scraped from their own public website.
 * - registrationType is set to "registered_psychologist" by default. It is only set to
 *   "clinical_psychologist" once AHPRA endorsement is confirmed on the AHPRA register.
 *   NOTE: Several below self-describe as "Clinical Psychologist" on their own sites —
 *   their registrationType is kept as "registered_psychologist" until confirmed on AHPRA.
 * - bio/pricing/photoUrl sourced from practitioner's own public website (with attribution).
 * - publicEmail: only populated where displayed on the practitioner's own public website.
 * - photoUrl: hotlinked from source domain only — we do NOT rehost images (copyright risk).
 *   If the source is unreliable or image is not available, leave null and use fallback avatar.
 * - unclaimed: true until the practitioner submits and we review a claim.
 * - Removal within 24 hours of any valid request via /listing-removal/.
 *
 * LEAD FORWARDING POLICY:
 * When a patient submits the per-profile contact form, the enquiry is forwarded once to
 * publicEmail with a claim-your-profile CTA and a clear opt-out footer.
 * If publicEmail is null, the enquiry is logged to the Sheet only (not forwarded).
 */

export type RegistrationType = "registered_psychologist" | "clinical_psychologist";

export interface Practitioner {
  slug: string;
  name: string;
  registrationType: RegistrationType;
  suburb: string;
  specialties: string[];
  unclaimed: boolean;
  /** The actual source URL verified for this entry */
  source: string;
  // Extended fields (all optional — degrade gracefully when null)
  /** Approximate years of clinical experience (derived from bio or "registered since" if available) */
  yearsExperience?: number | null;
  /** Short bio scraped from practitioner's own public website. Attribution shown on profile. */
  bio?: string | null;
  /**
   * Photo: source-hosted URL only. We hotlink — do NOT copy into this repo.
   * If unavailable or unreliable, set null and the fallback avatar renders.
   */
  photoUrl?: string | null;
  /** e.g. "$260 / 50-min session" — only if publicly listed on their site */
  pricing?: string | null;
  /** Public business email shown on their own website — used for lead forwarding */
  publicEmail?: string | null;
  /** Public practice website */
  website?: string | null;
  /** Direct booking page URL */
  bookingUrl?: string | null;
}

export const practitioners: Practitioner[] = [
  {
    slug: "douha-el-assaad-psychologist-strathfield",
    name: "Douha El-Assaad",
    registrationType: "registered_psychologist",
    suburb: "Strathfield",
    specialties: ["Anxiety", "Depression", "Grief and loss", "Workplace issues"],
    unclaimed: true,
    source: "https://www.levelheadedpsychology.com.au/services/online-psychologist",
    yearsExperience: null,
    bio: "Douha El-Assaad is a registered psychologist with a wealth of experience helping people through anxiety, depression, grief and loss, relationship and workplace issues. She holds a Master of Psychology Practice (Clinical) from ACAP and is registered with the Psychology Board of Australia. She offers sessions via telehealth and accepts Medicare, NDIS, SIRA, and private health.",
    photoUrl: null,
    pricing: null,
    publicEmail: "info@levelheadedpsychology.com.au",
    website: "https://www.levelheadedpsychology.com.au",
    bookingUrl: "https://www.levelheadedpsychology.com.au/schedule-a-consultation"
  },
  {
    slug: "eileen-seah-psychologist-zetland",
    name: "Eileen Seah",
    registrationType: "registered_psychologist", // reverted 2026-06-03: clinical endorsement NOT verified on AHPRA register (secondary sources only). Re-upgrade only after confirming "Psychology - Clinical psychology" endorsement on ahpra.gov.au.
    suburb: "Zetland",
    specialties: ["Anxiety", "Perfectionism", "Stress", "Grief"],
    unclaimed: true,
    source: "https://www.eileenseah.com.au/",
    yearsExperience: null, // AHPRA registration year not publicly available
    bio: "Eileen Seah is a psychologist whose practice focuses on anxiety, stress, perfectionism, fear of failure, imposter syndrome, and grief. Her PhD research background is in perfectionism. She offers LGBTQIA+ affirming and poly-friendly therapy, and draws on CBT, compassion-focused therapy, schema therapy, ACT, and EMDR. She works with clients in a warm, confidential environment and offers concessional rates for eligible clients.",
    photoUrl: null,
    pricing: "$270 / 50-min session (concessional rates available)",
    publicEmail: "admin@eileenseah.com.au",
    website: "https://www.eileenseah.com.au",
    bookingUrl: "https://www.eileenseah.com.au/book-appointment"
  },
  {
    slug: "clinton-moore-psychologist-north-sydney",
    name: "Dr Clinton Moore",
    registrationType: "registered_psychologist",
    suburb: "North Sydney",
    specialties: ["Generalised anxiety", "Social anxiety", "Panic attacks", "OCD", "Health anxiety"],
    unclaimed: true,
    source: "https://www.cadencepsychology.com.au/anxiety-psychologist-sydney/",
    yearsExperience: 15,
    bio: "Dr Clinton Moore is a psychologist and founder of Cadence Psychology with over 15 years of experience helping adults, children, and families navigate anxiety and find lasting change. He works with generalised anxiety, social anxiety, panic disorder, OCD, health anxiety, and performance anxiety, using CBT, ACT, and Schema Therapy. Sessions: $260 for 50 minutes (in-person and telehealth).",
    photoUrl: null,
    pricing: "$260 / 50-min session",
    publicEmail: "change@cadencepsychology.com.au",
    website: "https://www.cadencepsychology.com.au",
    bookingUrl: "https://www.cadencepsychology.com.au/make-a-booking/"
  },
  {
    slug: "jodie-lowinger-psychologist-bondi-junction",
    name: "Dr Jodie Lowinger",
    registrationType: "registered_psychologist",
    suburb: "Bondi Junction",
    specialties: ["Anxiety", "OCD", "Stress management", "PTSD", "Depression"],
    unclaimed: true,
    source: "https://theanxietyclinic.com.au/",
    yearsExperience: null,
    bio: "Dr Jodie Lowinger is principal psychologist at The Anxiety Clinic and author of The Mind Strength Method: Four Steps to Curb Anxiety, Conquer Worry and Build Resilience. She has helped thousands of people manage anxiety disorders, stress, OCD, depression, relationship difficulties, and trauma through evidence-based approaches including CBT, DBT, Schema Therapy, and EMDR.",
    photoUrl: null,
    pricing: null,
    publicEmail: "hello@theanxietyclinic.com.au",
    website: "https://theanxietyclinic.com.au",
    bookingUrl: "https://theanxietyclinic.com.au/make-an-appointment"
  },
  {
    slug: "kerry-critchlow-psychologist-surry-hills",
    name: "Kerry Critchlow",
    registrationType: "registered_psychologist",
    suburb: "Surry Hills",
    specialties: ["Generalised anxiety", "Social anxiety", "Phobias", "Depression", "Self-esteem"],
    unclaimed: true,
    source: "https://www.headinthecloudsco.com.au/psychology-services/anxiety-treatment-sydney",
    yearsExperience: null,
    bio: "Kerry Critchlow is a psychologist (clinical psychology registrar) at Head in the Clouds Co. She works with individuals to overcome depression, anxiety (generalised, social, and phobias), low self-esteem, relationship issues, work stress, and adolescent difficulties.",
    photoUrl: null,
    pricing: null,
    publicEmail: "info@headinthecloudsco.com.au",
    website: "https://www.headinthecloudsco.com.au",
    bookingUrl: "https://head-in-the-clouds-co-pty-ltd.au3.cliniko.com/bookings?practitioner_id=1238947948197322326#service"
  },
  {
    slug: "emma-welch-psychologist-surry-hills",
    name: "Dr Emma Welch",
    registrationType: "registered_psychologist",
    suburb: "Surry Hills",
    specialties: ["Anxiety", "Depression"],
    unclaimed: true,
    source: "https://www.headinthecloudsco.com.au/psychology-services/anxiety-treatment-sydney",
    yearsExperience: 25,
    bio: "Dr Emma Welch is a psychologist at Head in the Clouds Co with over 25 years of experience working with adults experiencing depression and anxiety.",
    photoUrl: null,
    pricing: null,
    publicEmail: "info@headinthecloudsco.com.au",
    website: "https://www.headinthecloudsco.com.au",
    bookingUrl: "https://head-in-the-clouds-co-pty-ltd.au3.cliniko.com/bookings?business_id=790167389185515516&practitioner_id=1436087180412854113#service"
  },
  {
    slug: "gay-cusack-psychologist-surry-hills",
    name: "Gay Cusack",
    registrationType: "registered_psychologist",
    suburb: "Surry Hills",
    specialties: ["Generalised anxiety", "Social anxiety", "Phobias", "Depression", "Self-esteem"],
    unclaimed: true,
    source: "https://www.headinthecloudsco.com.au/psychology-services/anxiety-treatment-sydney",
    yearsExperience: null,
    bio: "Gay Cusack is a psychologist (clinical psychology registrar) at Head in the Clouds Co. She works with individuals to overcome depression, anxiety (generalised, social, and phobias), low self-esteem, relationship issues, work stress, and adolescent difficulties.",
    photoUrl: null,
    pricing: null,
    publicEmail: "info@headinthecloudsco.com.au",
    website: "https://www.headinthecloudsco.com.au",
    bookingUrl: "https://head-in-the-clouds-co-pty-ltd.au3.cliniko.com/bookings?business_id=790167389185515516&practitioner_id=953058153749028771#service"
  },
  {
    slug: "claire-loughran-psychologist-sydney-telehealth",
    name: "Claire Loughran",
    registrationType: "registered_psychologist",
    suburb: "Sydney (telehealth)",
    specialties: ["Anxiety disorders", "Mood disorders", "Adjustment", "Grief and loss", "Eating disorders"],
    unclaimed: true,
    source: "https://psychhelp.com.au/claire-loughran/",
    yearsExperience: null,
    bio: "Claire Loughran is a registered psychologist (Masters in Professional Psychology) at PsychHelp. She works with adolescents and adults using CBT, ACT, EMDR, and family-based therapy, with a focus on building strong therapeutic relationships. She has a particular interest in young people and adults experiencing anxiety, eating disorders, and body image concerns.",
    photoUrl: null,
    pricing: null,
    publicEmail: "admin@psychhelp.com.au",
    website: "https://psychhelp.com.au",
    bookingUrl: "https://psychhelp.com.au/book-an-appointment/"
  },
  {
    slug: "nicholas-caras-psychologist-sydney-telehealth",
    name: "Dr Nicholas Caras",
    registrationType: "registered_psychologist",
    suburb: "Sydney (telehealth)",
    specialties: ["Anxiety", "Depression", "Stress management", "Relationship difficulties"],
    unclaimed: true,
    source: "https://psychhelp.com.au/nicholas-caras/",
    yearsExperience: 15,
    bio: "Dr Nicholas Caras is a psychologist with over 15 years of experience working with adult clients in private practice. He has a warm and empathic style and aims to provide a safe and supportive space during psychotherapy. His approach integrates CBT, mindfulness, Schema Therapy, and the Gottman Method for both individual and couples work.",
    photoUrl: null,
    pricing: null,
    publicEmail: "admin@psychhelp.com.au",
    website: "https://psychhelp.com.au",
    bookingUrl: "https://psychhelp.com.au/book-an-appointment/"
  },
  {
    slug: "susan-aston-psychologist-sydney-telehealth",
    name: "Susan Aston",
    registrationType: "registered_psychologist",
    suburb: "Sydney (telehealth)",
    specialties: ["Anxiety and PTSD", "Trauma", "Mood disorders", "Substance use", "Stress management"],
    unclaimed: true,
    source: "https://psychhelp.com.au/susan-aston/",
    yearsExperience: null,
    bio: "Susan Aston is a psychologist (MA ClinPsych) at PsychHelp. She provides evidence-based therapy to adults with a calm, thoughtful approach, creating a safe therapeutic space. She specialises in anxiety, depression, trauma, stress, relationship difficulties, substance use, and life transitions, drawing on CBT, Schema Therapy, ACT, and trauma-informed practices.",
    photoUrl: null,
    pricing: null,
    publicEmail: "admin@psychhelp.com.au",
    website: "https://psychhelp.com.au",
    bookingUrl: "https://psychhelp.com.au/book-an-appointment/"
  },
  {
    slug: "anna-mckinnon-psychologist-edgecliff",
    name: "Dr Anna McKinnon",
    registrationType: "registered_psychologist",
    suburb: "Edgecliff",
    specialties: ["Anxiety", "Trauma", "PTSD", "OCD", "Complex trauma"],
    unclaimed: true,
    source: "https://mckinnonpsychology.com.au/anna-mckinnon-psychologist/",
    yearsExperience: 15,
    bio: "Dr Anna McKinnon is a senior psychologist with PhD-level qualifications and 15 years of clinical experience in trauma treatment. She completed postdoctoral training at the University of Cambridge and specialises in EMDR Therapy, Schema Therapy, trauma and PTSD, OCD, anxiety disorders, and attachment-related difficulties.",
    photoUrl: null,
    pricing: null,
    publicEmail: "admin@mckinnonpsychology.com.au",
    website: "https://mckinnonpsychology.com.au",
    bookingUrl: "https://mckinnonpsychology.com.au/contact/"
  },
  {
    slug: "jordan-papandrea-psychologist-edgecliff",
    name: "Jordan Papandrea",
    registrationType: "registered_psychologist",
    suburb: "Edgecliff",
    specialties: ["Anxiety", "OCD", "Depression", "Men's mental health", "Performance psychology"],
    unclaimed: true,
    source: "https://mckinnonpsychology.com.au/jordan-papandrea/",
    yearsExperience: null,
    bio: "Jordan Papandrea is a registered psychologist at McKinnon Psychology with a Master of Clinical Psychology from the University of Sydney. A former elite athlete, his background shapes his understanding of resilience, performance, and mental wellbeing. He works with anxiety disorders, OCD, depression, identity development, and men's mental health, using CBT, ACT, DBT, and attachment-based approaches.",
    photoUrl: null,
    pricing: null,
    publicEmail: "admin@mckinnonpsychology.com.au",
    website: "https://mckinnonpsychology.com.au",
    bookingUrl: "https://mckinnonpsychology.com.au/contact/"
  },
  {
    slug: "gabrielle-fynn-psychologist-edgecliff",
    name: "Gabrielle Fynn",
    registrationType: "registered_psychologist",
    suburb: "Edgecliff",
    specialties: ["Anxiety", "OCD", "Trauma", "Depression", "Phobias"],
    unclaimed: true,
    source: "https://mckinnonpsychology.com.au/gabrielle-fynn/",
    yearsExperience: null,
    bio: "Gabrielle Fynn is a registered psychologist at McKinnon Psychology with a Master of Clinical Psychology from Macquarie University and membership of the Australian Clinical Psychological Association. She specialises in anxiety disorders, specific phobias, OCD, depression, trauma, and adjustment difficulties, using CBT, EMDR, ACT, DBT, and Exposure Response Prevention.",
    photoUrl: null,
    pricing: null,
    publicEmail: "admin@mckinnonpsychology.com.au",
    website: "https://mckinnonpsychology.com.au",
    bookingUrl: "https://mckinnonpsychology.com.au/contact/"
  },
  {
    slug: "tia-ven-psychologist-beverly-hills",
    name: "Tia Ven",
    registrationType: "registered_psychologist", // reverted 2026-06-03: clinical endorsement NOT verified on AHPRA register (secondary sources only). Re-upgrade only after confirming "Psychology - Clinical psychology" endorsement on ahpra.gov.au.
    suburb: "Beverly Hills",
    specialties: ["Women's mental health", "Anxiety disorders", "Depression", "Chronic pain", "Grief", "Stress"],
    unclaimed: true,
    source: "https://connect2healthpsychology.com.au/",
    yearsExperience: 11, // "11 years experience across public health and private settings" — source: talked.com.au/therapist/tia-ven
    bio: "Tia Ven is a psychologist at Connect 2 Health Psychology providing online therapy in Sydney. She specialises in women's mental health, anxiety disorders, depression, chronic pain, grief, stress, and adjustment to chronic health conditions.",
    photoUrl: null,
    pricing: "$224 / 50-min session",
    publicEmail: "info@connect2healthpsychology.com.au",
    website: "https://connect2healthpsychology.com.au",
    bookingUrl: "https://www.halaxy.com/book/appointment/connect-2-health-psychology/location/816551"
  },
  {
    slug: "lyndsey-grounds-psychologist-sydney-telehealth",
    name: "Lyndsey Grounds",
    registrationType: "registered_psychologist",
    suburb: "Sydney (telehealth)",
    specialties: ["Anxiety", "Depression", "Confidence and self-esteem", "Stress", "Life transitions"],
    unclaimed: true,
    source: "https://www.halaxy.com/profile/onlinepsych-online-psychologist-australia/location/848131",
    yearsExperience: 10,
    bio: "Lyndsey Grounds is a fully AHPRA-registered psychologist and APS member with over a decade of experience supporting clients in Australia and the United Kingdom. She offers short solution-focused therapy and longer-term work for adults, focusing on anxiety, depression, confidence, stress, loneliness, and life transitions. Telehealth only.",
    photoUrl: null,
    pricing: null,
    publicEmail: null,
    website: null,
    bookingUrl: "https://halaxy.com/book/lyndsey-grounds/psychologist/1049471/848131"
  },
  {
    slug: "michael-fitzpatrick-psychologist-marrickville",
    name: "Dr Michael Fitzpatrick",
    registrationType: "registered_psychologist",
    suburb: "Marrickville",
    specialties: ["Anxiety disorders", "Depression", "OCD", "Trauma", "Self-esteem"],
    unclaimed: true,
    source: "https://www.mfitzpatrickpsychology.com",
    yearsExperience: null,
    bio: "Dr Michael Fitzpatrick is a psychologist based in Marrickville and Newtown (MClinPsych, PhD) with experience in private practice, Royal Prince Alfred Hospital, Prince of Wales Hospital, and the Brain and Mind Centre at the University of Sydney. He practices evidence-based psychology, primarily Schema Therapy and CBT, with a collaborative, non-judgemental, and neuroaffirming approach.",
    photoUrl: null,
    pricing: null,
    publicEmail: "info@mfitzpatrickpsychology.com",
    website: "https://www.mfitzpatrickpsychology.com",
    bookingUrl: null
  },
  {
    slug: "sherisse-cohen-psychologist-bondi-junction",
    name: "Sherisse Cohen",
    registrationType: "registered_psychologist",
    suburb: "Bondi Junction",
    specialties: ["Anxiety", "Depression", "Stress", "Emotion regulation", "Body image"],
    unclaimed: true,
    source: "https://www.theselfspace.com.au/",
    yearsExperience: 15,
    bio: "Sherisse Cohen is a psychologist with over 15 years of experience in private practice, based in Bondi Junction. She offers evidence-based therapy in a safe and non-judgemental environment, drawing on CBT, ACT, EFT, DBT, MBCT, trauma-informed practice, and Internal Family Systems. She describes her rates as below APS-recommended levels. Medicare rebates available with a valid Mental Health Care Plan.",
    photoUrl: null,
    pricing: null,
    publicEmail: "sherisse@theselfspace.com.au",
    website: "https://www.theselfspace.com.au",
    bookingUrl: "https://www.theselfspace.com.au/book-psychologist-appointment-in-bondi-junction"
  },
  {
    slug: "natasha-kiemel-incorvaia-psychologist-sydney-telehealth",
    name: "Natasha Kiemel-Incorvaia",
    registrationType: "registered_psychologist",
    suburb: "Sydney (telehealth)",
    specialties: ["Anxiety", "Stress", "Trauma", "Depression", "Self-esteem", "Women's health"],
    unclaimed: true,
    source: "https://www.graciouslyyoupsychologicalservices.com.au/",
    yearsExperience: 10,
    bio: "Natasha Kiemel-Incorvaia is a registered psychologist who founded Graciously You Psychological Services in 2020, with over 10 years of experience. She is passionate about increasing access to psychology via telehealth and specialises in anxiety, stress, depression, trauma/PTSD, EMDR, ADHD assessments, perinatal and postnatal support, and life transitions.",
    photoUrl: null,
    pricing: "$215–$230 / session (initial $230, follow-up $215)",
    publicEmail: "admin@graciouslyyoupsychology.com.au",
    website: "https://www.graciouslyyoupsychologicalservices.com.au",
    bookingUrl: "https://www.halaxy.com/book/psychologist/ms-natasha-kiemel-incorvaia/602611/541391"
  },
  {
    slug: "kate-munro-psychologist-north-sydney",
    name: "Kate Munro",
    registrationType: "registered_psychologist",
    suburb: "North Sydney",
    specialties: ["Anxiety", "Stress", "Burnout", "Resilience", "Workplace wellbeing"],
    unclaimed: true,
    source: "https://www.halaxy.com/profile/ms-kate-munro/psychologist/639441",
    yearsExperience: null,
    bio: "Kate Munro is a fully AHPRA-registered psychologist with extensive experience delivering clinical and organisational support across Defence, mining, corporate, and EAP settings. She focuses on anxiety, stress, burnout, managing change, communication, and resilience, using CBT, mindfulness, positive psychology, and strengths-based approaches.",
    photoUrl: null,
    pricing: null,
    publicEmail: null,
    website: "https://www.taylorcare.com.au",
    bookingUrl: "https://www.halaxy.com/book/ms-kate-munro/psychologist/639441/564361"
  },
  {
    slug: "brett-ruehland-psychologist-chippendale",
    name: "Brett Ruehland",
    registrationType: "registered_psychologist",
    suburb: "Chippendale",
    specialties: ["Anxiety", "ADHD", "Autism", "Depression", "OCD", "Panic", "LGBTIQ+ affirming"],
    unclaimed: true,
    source: "https://www.halaxy.com/profile/mr-brett-ruehland/psychologist/1010181",
    yearsExperience: null,
    bio: "Brett Ruehland is a registered psychologist (Master of Professional Psychology) and APS member specialising in supporting neurodivergent, LGBTIQ+, and culturally diverse individuals across all ages. He works with ADHD, autism spectrum disorders, anxiety, depression, OCD, trauma, and child and adolescent psychology, using Schema Therapy, CBT, and ACT.",
    photoUrl: null,
    pricing: "$260 initial, $250 follow-up / 50-min session",
    publicEmail: "info@brettruehland.com",
    website: null,
    bookingUrl: "https://www.halaxy.com/book/mr-brett-ruehland/psychologist/1010181/1227631"
  },
  {
    slug: "doone-richmond-psychologist-north-sydney",
    name: "Doone Richmond",
    registrationType: "registered_psychologist",
    suburb: "North Sydney",
    specialties: ["Anxiety", "Depression", "Career planning", "Workplace issues", "Life transitions"],
    unclaimed: true,
    source: "https://www.halaxy.com/profile/ms-doone-richmond/psychologist/538261",
    yearsExperience: null,
    bio: "Doone Richmond is a registered psychologist at TaylorCare Telehealth, North Sydney, offering online consultations for adults. She works with anxiety, career and vocational planning, depression, health psychology, and life transitions using ACT and CBT.",
    photoUrl: null,
    pricing: null,
    publicEmail: null,
    website: "https://www.taylorcare.com.au",
    bookingUrl: null
  },
  {
    slug: "toni-kernick-psychologist-sydney-telehealth",
    name: "Toni Kernick",
    registrationType: "registered_psychologist",
    suburb: "Sydney (telehealth)",
    specialties: ["Anxiety", "Stress", "Burnout", "Life transitions", "Relationships"],
    unclaimed: true,
    source: "https://www.halaxy.com/profile/ms-toni-kernick/psychologist/716971",
    yearsExperience: null,
    bio: "Toni Kernick is a psychologist specialising in supporting adults navigating life transitions. She works with anxiety, pressure, self-doubt, burnout, career uncertainty, and relationship support with a calm, collaborative, and practical evidence-based approach. Sessions are $210 / 50 minutes via telehealth.",
    photoUrl: null,
    pricing: "$210 / 50-min session (telehealth)",
    publicEmail: "info@pauserestoreclinicalpsychology.com.au",
    website: null,
    bookingUrl: "https://www.halaxy.com/book/toni-kernick/psychologist/716971/845431"
  },
  // --- Added Session 13 (2026-06-03) ---
  {
    slug: "jayden-baker-psychologist-bondi-junction",
    name: "Jayden Baker",
    registrationType: "registered_psychologist",
    suburb: "Bondi Junction",
    specialties: ["Anxiety", "Depression", "Adolescents", "LGBTQIA+ affirming", "Life transitions"],
    unclaimed: true,
    source: "https://theanxietyclinic.com.au/jayden-baker",
    yearsExperience: null,
    bio: "Jayden Baker is a psychologist at The Anxiety Clinic in Bondi Junction (MPsych Prof, BPsyc Hons, Dip Psych Prac). He is warm and friendly with a passion for creating a safe space for people to be their authentic selves. He works with anxiety, depression, life transitions, and adolescents, including culturally and linguistically diverse and LGBTQIA+ clients. He uses CBT, DBT, ACT, and Motivational Interviewing.",
    photoUrl: null,
    pricing: null,
    publicEmail: "hello@theanxietyclinic.com.au",
    website: "https://theanxietyclinic.com.au",
    bookingUrl: "https://theanxietyclinic.com.au/make-an-appointment"
  },
  {
    slug: "jessica-budge-psychologist-bondi-junction",
    name: "Jessica Budge",
    registrationType: "registered_psychologist",
    suburb: "Bondi Junction",
    specialties: ["Anxiety", "Phobias", "OCD", "Performance anxiety", "Mood disorders", "Autism and ADHD"],
    unclaimed: true,
    source: "https://theanxietyclinic.com.au/jessica-budge",
    yearsExperience: null,
    bio: "Jessica Budge is a psychologist at The Anxiety Clinic in Bondi Junction (GDPsych, BArts Psych Hons, MProf Psych) and APS member. She has years of experience in hospital and private practice settings working with children, adolescents, and adults. She specialises in anxiety and mood-related disorders, phobias, OCD, performance anxiety, autism and ADHD (neurodiversity-affirming approach), and eating disorders. She uses CBT, ACT, DBT, and mindfulness-based therapies.",
    photoUrl: null,
    pricing: null,
    publicEmail: "hello@theanxietyclinic.com.au",
    website: "https://theanxietyclinic.com.au",
    bookingUrl: "https://theanxietyclinic.com.au/make-an-appointment"
  },
  {
    slug: "amanda-rembach-psychologist-bondi-junction",
    name: "Amanda Rembach",
    registrationType: "registered_psychologist",
    suburb: "Bondi Junction",
    specialties: ["Anxiety", "Depression", "Stress management", "Career transitions", "Life transitions"],
    unclaimed: true,
    source: "https://theanxietyclinic.com.au/amanda-rembach",
    yearsExperience: 20,
    bio: "Amanda Rembach is a psychologist at The Anxiety Clinic in Bondi Junction (BPsych UNSW, MA Psych USyd, Dip Psych Practice) with over 20 years of experience as a psychologist, counsellor, and coach across corporate and university settings. She specialises in anxiety, depression, health concerns, relationship issues, career transitions, and stress, with particular experience supporting young adults and university students. She uses ACT, CBT, and strength-based, trauma-informed approaches.",
    photoUrl: null,
    pricing: null,
    publicEmail: "hello@theanxietyclinic.com.au",
    website: "https://theanxietyclinic.com.au",
    bookingUrl: "https://theanxietyclinic.com.au/make-an-appointment"
  },
  {
    slug: "belinda-middleton-psychologist-edgecliff",
    name: "Belinda Middleton",
    registrationType: "registered_psychologist",
    suburb: "Edgecliff",
    specialties: ["Anxiety", "OCD", "Depression", "Trauma and PTSD", "Parenting"],
    unclaimed: true,
    source: "https://mckinnonpsychology.com.au/belinda-middleton-psychologist/",
    yearsExperience: 20,
    bio: "Belinda Middleton is a senior psychologist at McKinnon Psychology in Edgecliff (BPsych Hons USyd, MClinPsych UNSW) with 20 years of experience working with children, teens, parents, and adults in private and community settings. She specialises in anxiety disorders, OCD, depression, trauma and PTSD, and attachment-based challenges. She uses CBT, EMDR, ACT, DBT, and Exposure Response Prevention. Telehealth available across Australia.",
    photoUrl: null,
    pricing: null,
    publicEmail: "admin@mckinnonpsychology.com.au",
    website: "https://mckinnonpsychology.com.au",
    bookingUrl: "https://mckinnonpsychology.com.au/contact/"
  },
  {
    slug: "caitlin-pedel-psychologist-edgecliff",
    name: "Caitlin Pedel",
    registrationType: "registered_psychologist",
    suburb: "Edgecliff",
    specialties: ["Anxiety disorders", "OCD", "Depression", "Trauma", "Chronic medical conditions"],
    unclaimed: true,
    source: "https://mckinnonpsychology.com.au/caitlin-pedel/",
    yearsExperience: 12, // "over 12 years working in roles across government, non-government and private sectors" — source: mckinnonpsychology.com.au/caitlin-pedel/ (via search 2026-06-03)
    bio: "Caitlin Pedel is a psychologist at McKinnon Psychology in Edgecliff (MClinPsych, University of Technology Sydney). She developed her interest in psychology through health roles in the Australian Army. She creates a safe, supportive space focused on values-based work and meaningful change, and works with anxiety disorders, OCD, depression, trauma, substance use, and support for emergency service personnel. She uses CBT, Schema Therapy, ACT, DBT, and Exposure Therapy. Telehealth available across Australia.",
    photoUrl: null,
    pricing: null,
    publicEmail: "admin@mckinnonpsychology.com.au",
    website: "https://mckinnonpsychology.com.au",
    bookingUrl: "https://mckinnonpsychology.com.au/contact/"
  },
  {
    slug: "shanae-oleary-psychologist-edgecliff",
    name: "Shanae O'Leary",
    registrationType: "registered_psychologist",
    suburb: "Edgecliff",
    specialties: ["Anxiety and panic", "Trauma", "OCD", "Depression", "ADHD"],
    unclaimed: true,
    source: "https://mckinnonpsychology.com.au/shanae-oleary/",
    yearsExperience: null,
    bio: "Shanae O'Leary is a psychologist at McKinnon Psychology in Edgecliff (MClinPsych). She uses a trauma-informed and attachment-informed framework with a strong focus on nervous system regulation, integrating somatic and breathwork techniques within psychological treatment. She works with anxiety and panic, trauma, OCD, depression, and ADHD assessments. Telehealth available across Australia.",
    photoUrl: null,
    pricing: null,
    publicEmail: "admin@mckinnonpsychology.com.au",
    website: "https://mckinnonpsychology.com.au",
    bookingUrl: "https://mckinnonpsychology.com.au/contact/"
  },
  {
    slug: "catherine-gittins-psychologist-edgecliff",
    name: "Dr Catherine Gittins",
    registrationType: "registered_psychologist",
    suburb: "Edgecliff",
    specialties: ["Anxiety", "PTSD", "Complex trauma", "Depression", "Substance use"],
    unclaimed: true,
    source: "https://mckinnonpsychology.com.au/catherine-gittins/",
    yearsExperience: 10,
    bio: "Dr Catherine Gittins is a senior psychologist at McKinnon Psychology in Edgecliff (DClinPsych, PhD, USyd) with over 10 years of experience. She trained at the Calgary Family Therapy Centre in Canada, previously worked with Open Arms (DVA) supporting military veterans, and has experience in drug health services, psycho-oncology, and inpatient mental health. She works with PTSD, complex trauma, anxiety, depression, and substance use, using CBT, Schema Therapy, DBT, Prolonged Exposure, Cognitive Processing Therapy, and EMDR. Board-approved supervisor.",
    photoUrl: null,
    pricing: null,
    publicEmail: "admin@mckinnonpsychology.com.au",
    website: "https://mckinnonpsychology.com.au",
    bookingUrl: "https://mckinnonpsychology.com.au/contact/"
  },
  {
    slug: "lisa-tanconi-psychologist-sydney-telehealth",
    name: "Lisa Tanconi",
    registrationType: "registered_psychologist",
    suburb: "Sydney (telehealth)",
    specialties: ["Anxiety", "Depression", "Trauma", "Self-esteem", "Grief and loss", "Eating disorders"],
    unclaimed: true,
    source: "https://psychhelp.com.au/lisa-tanconi/",
    yearsExperience: 10,
    bio: "Lisa Tanconi is a psychologist at PsychHelp (BA Psych, PGDip Psych) and APS Associate Member with over 10 years of clinical experience across schools, mental health services, and non-government organisations. She works with anxiety, depression, trauma, relationship issues, grief and loss, eating disorders, and body image, using CBT, ACT, Motivational Interviewing, and mindfulness. She takes a non-dieting, Health at Every Size framework and practices trauma-informed, strengths-based, person-centred methods.",
    photoUrl: null,
    pricing: null,
    publicEmail: "admin@psychhelp.com.au",
    website: "https://psychhelp.com.au",
    bookingUrl: "https://psychhelp.com.au/book-an-appointment/"
  }
];

export const allSuburbs: string[] = [...new Set(practitioners.map((p) => p.suburb))].sort();
export const allSpecialties: string[] = [...new Set(practitioners.flatMap((p) => p.specialties))].sort();

// Practitioners with booking URLs (for filtering)
export const practitionersWithBooking = practitioners.filter(p => p.bookingUrl);
