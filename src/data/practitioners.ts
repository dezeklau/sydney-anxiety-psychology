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
 * LEAD FORWARDING POLICY (updated 2026-06-11):
 * publicEmail values have been removed from all entries. The practitioner_email hidden field
 * has been removed from the enquiry form. All enquiries are logged to the central Sheet only;
 * no per-practitioner forwarding occurs. publicEmail field retained in type for future use.
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
    publicEmail: null,
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
    publicEmail: null,
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
    publicEmail: null,
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
    publicEmail: null,
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
    publicEmail: null,
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
    publicEmail: null,
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
    publicEmail: null,
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
    publicEmail: null,
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
    publicEmail: null,
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
    publicEmail: null,
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
    publicEmail: null,
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
    publicEmail: null,
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
    publicEmail: null,
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
    publicEmail: null,
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
    publicEmail: null,
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
    publicEmail: null,
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
    publicEmail: null,
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
    publicEmail: null,
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
    publicEmail: null,
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
    publicEmail: null,
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
    publicEmail: null,
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
    publicEmail: null,
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
    publicEmail: null,
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
    publicEmail: null,
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
    publicEmail: null,
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
    publicEmail: null,
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
    publicEmail: null,
    website: "https://psychhelp.com.au",
    bookingUrl: "https://psychhelp.com.au/book-an-appointment/"
  },
  // --- Added 2026-06-04 (Halaxy-sourced, Derek-reviewed batch) ---
  {
    slug: "nick-batty-psychologist-north-sydney",
    name: "Nick Batty",
    registrationType: "registered_psychologist",
    suburb: "North Sydney",
    specialties: ["Anxiety", "Panic attacks", "Specific phobias", "OCD", "Depression", "Trauma"],
    unclaimed: true,
    source: "https://www.halaxy.com/profile/nick-batty/psychologist/637711",
    yearsExperience: null,
    bio: "Nick Batty is a registered psychologist at TaylorCare Telehealth in North Sydney. He works with adults experiencing anxiety, panic attacks, specific phobias, OCD, depression, trauma and stress-related concerns, grief and loss, and substance use issues. He uses CBT, ACT, motivational interviewing, and mindfulness-based approaches. Sessions are available via telehealth.",
    photoUrl: null,
    pricing: null,
    publicEmail: null,
    website: "https://www.taylorcare.com.au",
    bookingUrl: null
  },
  {
    slug: "karen-de-mar-psychologist-north-sydney",
    name: "Karen de Mar",
    registrationType: "registered_psychologist",
    suburb: "North Sydney",
    specialties: ["Anxiety", "Stress management", "Women's issues", "Parenting support", "General counselling"],
    unclaimed: true,
    source: "https://www.halaxy.com/profile/ms-karen-de-mar/psychologist/638441",
    yearsExperience: 20,
    bio: "Karen de Mar is a registered psychologist with over 20 years of experience, based at TaylorCare Telehealth in North Sydney. She works with adults and families on anxiety, stress management, women's issues, and parenting support, drawing on her background in general and counselling psychology. Sessions are available via telehealth.",
    photoUrl: null,
    pricing: null,
    publicEmail: null,
    website: "https://www.taylorcare.com.au",
    bookingUrl: null
  },
  {
    slug: "lauren-tober-psychologist-sydney-telehealth",
    name: "Dr Lauren Tober",
    registrationType: "registered_psychologist",
    suburb: "Sydney (telehealth)",
    specialties: ["Anxiety", "Phobias", "Depression", "Trauma and PTSD", "Stress management", "Women's issues", "Burnout"],
    unclaimed: true,
    source: "https://www.halaxy.com/profile/dr-lauren-tober/psychologist/139616",
    // Note: "Dr" reflects the DPsych (clinical psychology doctorate) title shown on profile.
    // DPsych is an academic/professional doctorate in psychology, not a medical degree.
    // registrationType remains "registered_psychologist" — AHPRA clinical endorsement not independently verified this run.
    yearsExperience: null,
    bio: "Dr Lauren Tober is a registered psychologist (DPsych, BSc Hons) and APS member at Awake Psychology, offering telehealth-only sessions across NSW. She holds a doctorate in psychology (not a medical degree) and works with adults experiencing anxiety, phobias, depression, trauma and PTSD, stress, burnout, women's health concerns, and life transitions. Her approach is integrative and evidence-based.",
    photoUrl: null,
    pricing: null,
    publicEmail: null,
    website: "https://www.awakepsychology.com.au",
    bookingUrl: null
  },
  {
    slug: "marianne-restifo-psychologist-concord",
    name: "Marianne Restifo",
    registrationType: "registered_psychologist",
    suburb: "Concord",
    specialties: ["Anxiety disorders", "Depression", "Trauma and PTSD", "ADHD", "Relationships", "Occupational rehabilitation"],
    unclaimed: true,
    source: "https://www.halaxy.com/profile/marianne-restifo/psychologist/256392",
    yearsExperience: null,
    bio: "Marianne Restifo is a registered psychologist and SIRA-accredited provider at PSYCHmatters in Concord, Sydney. She works with adults and families on anxiety disorders, depression, trauma and PTSD, ADHD, relationships, and occupational rehabilitation. She has experience supporting Defence Force personnel and private practice clients, using CBT, ACT, DBT, Gottman Method, and solution-focused approaches. Languages: English, Italian.",
    photoUrl: null,
    pricing: null,
    publicEmail: null,
    website: "https://www.psychmatters.com.au",
    bookingUrl: null
  },
  // --- Added 2026-06-11 (Halaxy-sourced, Derek-approved batch) ---
  // AHPRA verified this run via AHPRA public register (ahpra.gov.au).
  // registrationType set to "clinical_psychologist" only where AHPRA shows "Approved area of practice - clinical psychology".
  // No contact details (phone/email/address) from Halaxy are published. Suburb from AHPRA register (authoritative).
  {
    slug: "carol-manns-psychologist-wollongong",
    name: "Carol Manns",
    // AHPRA PSY0001306484: Registered, Endorsements: clinical psychology + forensic psychology. Verified 2026-06-11.
    registrationType: "clinical_psychologist",
    suburb: "Wollongong",
    specialties: ["Anxiety", "Depression", "Phobias", "Trauma", "Stress management"],
    unclaimed: true,
    source: "https://www.halaxy.com/profile/carol-manns/psychologist/490551",
    yearsExperience: 19,
    bio: "Carol Manns is a clinical psychologist (PSY0001306484) practising in Wollongong, NSW, and offering telehealth sessions. With clinical and forensic psychology endorsements and over 19 years of experience, she works with adults experiencing anxiety, depression, phobias, trauma, and stress-related difficulties. Contact the practice to confirm current availability and Medicare billing arrangements.",
    photoUrl: null,
    pricing: null,
    publicEmail: null,
    website: null,
    bookingUrl: null
  },
  {
    slug: "susannah-kindred-psychologist-st-leonards",
    name: "Susannah Kindred",
    // AHPRA PSY0001816624: Registered, Endorsement: clinical psychology. Verified 2026-06-11.
    registrationType: "clinical_psychologist",
    suburb: "St Leonards",
    specialties: ["Anxiety", "Social anxiety", "Depression", "Stress", "Life transitions"],
    unclaimed: true,
    source: "https://www.halaxy.com/profile/susannah-kindred/psychologist/506011",
    yearsExperience: 13,
    bio: "Susannah Kindred is a clinical psychologist (PSY0001816624) practising at Kind in Mind in St Leonards, Sydney. She works with adults and young people experiencing anxiety, social anxiety, depression, and the challenges of life transitions. Sessions are available via telehealth. Contact the practice to confirm current availability and Medicare billing arrangements.",
    photoUrl: null,
    pricing: null,
    publicEmail: null,
    website: null,
    bookingUrl: null
  },
  {
    slug: "hurryat-faniad-psychologist-auburn",
    name: "Hurryat Faniad",
    // AHPRA PSY0001982961: Registered, Endorsements: None (self-claimed clinical on Halaxy — NOT AHPRA-endorsed; title downgraded). Verified 2026-06-11.
    registrationType: "registered_psychologist",
    suburb: "Auburn",
    specialties: ["Anxiety", "Depression", "Stress management", "Multicultural communities"],
    unclaimed: true,
    source: "https://www.halaxy.com/profile/hurryat-faniad/psychologist/506381",
    yearsExperience: null,
    bio: "Hurryat Faniad is a registered psychologist (PSY0001982961) practising in Auburn (Parramatta area), Sydney. He works with adults experiencing anxiety, depression, and stress, with a background serving multicultural communities. He speaks Hindi in addition to English. Contact the practice to confirm current availability and Medicare billing arrangements.",
    photoUrl: null,
    pricing: null,
    publicEmail: null,
    website: null,
    bookingUrl: null
  },
  {
    slug: "milica-kecmanovic-psychologist-waterloo",
    name: "Dr Milica Kecmanovic",
    // AHPRA PSY0002034402: Registered, Endorsement: clinical psychology. Verified 2026-06-11.
    registrationType: "clinical_psychologist",
    suburb: "Waterloo",
    specialties: ["Anxiety", "Phobias", "Depression", "Trauma", "Stress"],
    unclaimed: true,
    source: "https://www.halaxy.com/profile/dr-milica-kecmanovic/psychologist/514661",
    yearsExperience: 10,
    bio: "Dr Milica Kecmanovic is a clinical psychologist (PSY0002034402) practising in Waterloo, Sydney. She works with adults experiencing anxiety, phobias, depression, trauma, and stress-related difficulties using evidence-based approaches. 'Dr' reflects her doctorate in psychology (not a medical degree). Contact the practice to confirm current availability and Medicare billing arrangements.",
    photoUrl: null,
    pricing: null,
    publicEmail: null,
    website: null,
    bookingUrl: null
  },
  {
    slug: "michelle-harvey-psychologist-killara",
    name: "Michelle Harvey",
    // AHPRA PSY0002035460: Registered, Endorsements: None (self-claimed clinical on Halaxy — NOT AHPRA-endorsed; title downgraded). Verified 2026-06-11.
    registrationType: "registered_psychologist",
    suburb: "Killara",
    specialties: ["Anxiety", "Depression", "Stress management", "Life transitions", "Workers compensation"],
    unclaimed: true,
    source: "https://www.halaxy.com/profile/michelle-harvey/psychologist/515841",
    yearsExperience: null,
    bio: "Michelle Harvey is a registered psychologist (PSY0002035460) practising in Killara on Sydney's upper North Shore. She works with adults experiencing anxiety, depression, and stress, and has experience with workplace-related psychological presentations. Contact the practice to confirm current availability, Medicare billing, and workers compensation arrangements.",
    photoUrl: null,
    pricing: null,
    publicEmail: null,
    website: null,
    bookingUrl: null
  },
  {
    slug: "ewa-nowinska-psychologist-kirribilli",
    name: "Ewa Nowinska",
    // AHPRA PSY0002038211: Registered, Endorsements: None. Verified 2026-06-11.
    registrationType: "registered_psychologist",
    suburb: "Kirribilli",
    specialties: ["Anxiety", "Depression", "Trauma", "Stress", "Life transitions"],
    unclaimed: true,
    source: "https://www.halaxy.com/profile/ewa-nowinska/psychologist/521951",
    yearsExperience: null,
    bio: "Ewa Nowinska is a registered psychologist (PSY0002038211) practising in Kirribilli, Sydney. She works with adults experiencing anxiety, depression, and stress-related concerns, drawing on her European postgraduate training. She speaks Polish in addition to English. Contact the practice to confirm current availability, telehealth options, and Medicare billing arrangements.",
    photoUrl: null,
    pricing: null,
    publicEmail: null,
    website: null,
    bookingUrl: null
  },
  {
    slug: "janene-england-psychologist-terrigal",
    name: "Janene England",
    // AHPRA PSY0001020280: Registered, Endorsement: clinical psychology. Verified 2026-06-11.
    registrationType: "clinical_psychologist",
    suburb: "Terrigal",
    specialties: ["Anxiety", "OCD", "Depression", "Stress", "Life transitions"],
    unclaimed: true,
    source: "https://www.halaxy.com/profile/janene-england/psychologist/543731",
    yearsExperience: 20,
    bio: "Janene England is a clinical psychologist (PSY0001020280) with over 20 years of experience, practising in Terrigal on the NSW Central Coast. She works with adults and adolescents experiencing anxiety, OCD, depression, and stress-related difficulties. Telehealth sessions are available across NSW. Contact the practice to confirm current availability and Medicare billing arrangements.",
    photoUrl: null,
    pricing: null,
    publicEmail: null,
    website: null,
    bookingUrl: null
  },
  {
    slug: "mitchell-jordan-psychologist-warners-bay",
    name: "Mitchell Jordan",
    // AHPRA PSY0001906342: Registered, Endorsements: None. Verified 2026-06-11.
    registrationType: "registered_psychologist",
    suburb: "Warners Bay",
    specialties: ["Anxiety", "Social anxiety", "OCD", "Specific phobias", "Depression"],
    unclaimed: true,
    source: "https://www.halaxy.com/profile/mr-mitchell-jordan/psychologist/544491",
    yearsExperience: null,
    bio: "Mitchell Jordan is a registered psychologist (PSY0001906342) practising in Warners Bay, NSW. He works with adults experiencing anxiety, social anxiety, OCD, specific phobias, and depression. Telehealth sessions are available. Contact the practice to confirm current availability and Medicare billing arrangements.",
    photoUrl: null,
    pricing: null,
    publicEmail: null,
    website: null,
    bookingUrl: null
  },
  {
    slug: "lauren-templeman-psychologist-kellyville-ridge",
    name: "Lauren Templeman",
    // AHPRA PSY0001271594: Registered, Endorsements: None (self-claimed clinical on Halaxy — NOT AHPRA-endorsed; title downgraded). Verified 2026-06-11.
    registrationType: "registered_psychologist",
    suburb: "Kellyville Ridge",
    specialties: ["Anxiety", "Panic disorder", "OCD", "Depression", "Stress"],
    unclaimed: true,
    source: "https://www.halaxy.com/profile/lauren-templeman/psychologist/546431",
    yearsExperience: null,
    bio: "Lauren Templeman is a registered psychologist (PSY0001271594) practising in Kellyville Ridge in Sydney's north-west. She works with adults and young people experiencing anxiety, panic disorder, OCD, and depression. Online sessions are available. Contact the practice to confirm current availability and Medicare billing arrangements.",
    photoUrl: null,
    pricing: null,
    publicEmail: null,
    website: null,
    bookingUrl: null
  },
  {
    slug: "kristiina-jacobs-psychologist-leichhardt",
    name: "Kristiina Jacobs",
    // AHPRA PSY0001311810: Registered, Endorsements: None (self-claimed clinical on Halaxy — NOT AHPRA-endorsed; title downgraded). Verified 2026-06-11.
    registrationType: "registered_psychologist",
    suburb: "Leichhardt",
    specialties: ["Anxiety", "Depression", "Stress management", "Life transitions", "Trauma"],
    unclaimed: true,
    source: "https://www.halaxy.com/profile/mrs-kristiina-jacobs/psychologist/549331",
    yearsExperience: 25,
    bio: "Kristiina Jacobs is a registered psychologist (PSY0001311810) with over 25 years of experience, practising in Leichhardt in Sydney's inner west. She works with adults experiencing anxiety, depression, trauma, and the challenges of life transitions. Her background includes clinical psychology training from South Africa. Contact the practice to confirm current availability and Medicare billing arrangements.",
    photoUrl: null,
    pricing: null,
    publicEmail: null,
    website: null,
    bookingUrl: null
  },
  {
    slug: "madeleine-clark-psychologist-westmead",
    name: "Madeleine Clark",
    // AHPRA PSY0002176494: Registered, Endorsement: clinical psychology. Verified 2026-06-11.
    registrationType: "clinical_psychologist",
    suburb: "Westmead",
    specialties: ["Anxiety", "OCD", "Depression", "Stress", "Life transitions"],
    unclaimed: true,
    source: "https://www.halaxy.com/profile/madeleine-clark/psychologist/549381",
    yearsExperience: 8,
    bio: "Madeleine Clark is a clinical psychologist (PSY0002176494) practising in Westmead, Sydney. She works with adults experiencing anxiety, OCD, depression, and stress-related difficulties using evidence-based approaches. Telehealth sessions are available. Contact the practice to confirm current availability and Medicare billing arrangements.",
    photoUrl: null,
    pricing: null,
    publicEmail: null,
    website: null,
    bookingUrl: null
  },
  {
    slug: "janine-taylor-psychologist-castle-hill",
    name: "Janine Taylor",
    // AHPRA PSY0002320647: Registered, Endorsements: None. Verified 2026-06-11.
    registrationType: "registered_psychologist",
    suburb: "Castle Hill",
    specialties: ["Anxiety", "Depression", "Stress management", "Life transitions"],
    unclaimed: true,
    source: "https://www.halaxy.com/profile/ms-janine-taylor/psychologist/552821",
    yearsExperience: null,
    bio: "Janine Taylor is a registered psychologist (PSY0002320647) practising in Castle Hill in Sydney's north-west. She works with adults experiencing anxiety, depression, and stress, drawing on her South African training background. She speaks Afrikaans in addition to English. Contact the practice to confirm current availability and Medicare billing arrangements.",
    photoUrl: null,
    pricing: null,
    publicEmail: null,
    website: null,
    bookingUrl: null
  },
  {
    slug: "dominic-oen-psychologist-bankstown",
    name: "Dominic Oen",
    // AHPRA PSY0002032081: Registered, Endorsement: clinical psychology. Verified 2026-06-11.
    registrationType: "clinical_psychologist",
    suburb: "Bankstown",
    specialties: ["Anxiety", "Depression", "Stress", "Trauma", "Life transitions"],
    unclaimed: true,
    source: "https://www.halaxy.com/profile/dominic-oen/psychologist/555281",
    yearsExperience: 10,
    bio: "Dominic Oen is a clinical psychologist (PSY0002032081) practising in Bankstown, Sydney. He works with adults experiencing anxiety, depression, trauma, and stress-related difficulties using evidence-based methods. Telehealth sessions are available. Contact the practice to confirm current availability and Medicare billing arrangements.",
    photoUrl: null,
    pricing: null,
    publicEmail: null,
    website: null,
    bookingUrl: null
  },
  {
    slug: "anna-simpson-psychologist-erina",
    name: "Anna Simpson",
    // AHPRA PSY0001409654: Registered, Endorsement: clinical psychology. Verified 2026-06-11.
    registrationType: "clinical_psychologist",
    suburb: "Erina",
    specialties: ["Anxiety", "Depression", "Trauma", "Stress", "Life transitions"],
    unclaimed: true,
    source: "https://www.halaxy.com/profile/mrs-anna-simpson/psychologist/564121",
    yearsExperience: 16,
    bio: "Anna Simpson is a clinical psychologist (PSY0001409654) practising in Erina on the NSW Central Coast, with telehealth sessions available across NSW. She works with adults experiencing anxiety, depression, trauma, and stress-related concerns. Contact the practice to confirm current availability, telehealth options, and Medicare billing arrangements.",
    photoUrl: null,
    pricing: null,
    publicEmail: null,
    website: null,
    bookingUrl: null
  },
  {
    slug: "narissa-fry-psychologist-erina",
    name: "Narissa Fry",
    // AHPRA PSY0002266999: Registered, Endorsements: None (self-claimed clinical on Halaxy — NOT AHPRA-endorsed; title downgraded). Verified 2026-06-11.
    registrationType: "registered_psychologist",
    suburb: "Erina",
    specialties: ["Anxiety", "OCD", "Depression", "Stress management"],
    unclaimed: true,
    source: "https://www.halaxy.com/profile/narissa-fry/psychologist/564771",
    yearsExperience: null,
    bio: "Narissa Fry is a registered psychologist (PSY0002266999) practising in Erina on the NSW Central Coast. She works with adults and young people experiencing anxiety, OCD, and depression. Telehealth sessions are available across NSW. Contact the practice to confirm current availability and Medicare billing arrangements.",
    photoUrl: null,
    pricing: null,
    publicEmail: null,
    website: null,
    bookingUrl: null
  },
  {
    slug: "saima-ali-psychologist-bankstown",
    name: "Saima Ali",
    // AHPRA PSY0001915196: Registered, Endorsements: None. Verified 2026-06-11.
    registrationType: "registered_psychologist",
    suburb: "Bankstown",
    specialties: ["Anxiety", "Specific phobias", "Depression", "Stress management"],
    unclaimed: true,
    source: "https://www.halaxy.com/profile/mrs-saima-ali/psychologist/573511",
    yearsExperience: null,
    bio: "Saima Ali is a registered psychologist (PSY0001915196) practising in Bankstown, Sydney. She works with adults experiencing anxiety, specific phobias, depression, and stress-related difficulties. Contact the practice to confirm current availability, telehealth options, and Medicare billing arrangements.",
    photoUrl: null,
    pricing: null,
    publicEmail: null,
    website: null,
    bookingUrl: null
  },
  {
    slug: "joyce-ong-psychologist-north-ryde",
    name: "Joyce Ong",
    // AHPRA PSY0001815452: Registered, Endorsement: clinical psychology. Verified 2026-06-11.
    registrationType: "clinical_psychologist",
    suburb: "North Ryde",
    specialties: ["Anxiety", "Depression", "Stress management", "Life transitions", "Trauma"],
    unclaimed: true,
    source: "https://www.halaxy.com/profile/ms-joyce-ong/psychologist/582031",
    yearsExperience: 13,
    bio: "Joyce Ong is a clinical psychologist (PSY0001815452) practising in North Ryde, Sydney. She works with adults experiencing anxiety, depression, trauma, and stress-related difficulties using evidence-based approaches. Telehealth sessions are available. Contact the practice to confirm current availability and Medicare billing arrangements.",
    photoUrl: null,
    pricing: null,
    publicEmail: null,
    website: null,
    bookingUrl: null
  }
];

export const allSuburbs: string[] = [...new Set(practitioners.map((p) => p.suburb))].sort();
export const allSpecialties: string[] = [...new Set(practitioners.flatMap((p) => p.specialties))].sort();

// Practitioners with booking URLs (for filtering)
export const practitionersWithBooking = practitioners.filter(p => p.bookingUrl);
