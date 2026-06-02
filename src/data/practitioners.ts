/**
 * Anxiety-Sydney directory: practitioner data.
 *
 * DATA POLICY (read before adding any record):
 * - Source: each entry is sourced from the practitioner's own public practice website
 *   (or a public professional directory). The `source` field holds the actual URL checked.
 * - Only public-record-style fields are stored: full name, registration type, suburb,
 *   publicly self-listed specialty areas. NO contact details are published.
 * - registrationType is set to "registered_psychologist" by default. It is only set to
 *   "clinical_psychologist" once AHPRA endorsement is confirmed on the AHPRA register.
 *   (Several below self-describe as "Clinical Psychologist" on their own sites - verify on
 *   ahpra.gov.au before upgrading: Eileen Seah, Clinton Moore, Jodie Lowinger, Emma Welch,
 *   Nicholas Caras, Susan Aston, Anna McKinnon, Gabrielle Fynn.)
 * - unclaimed: true until the practitioner submits and we review a claim.
 * - Removal within 24 hours of any valid request via /listing-removal/.
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
}

export const practitioners: Practitioner[] = [
  {
    slug: "douha-el-assaad-psychologist-strathfield",
    name: "Douha El-Assaad",
    registrationType: "registered_psychologist",
    suburb: "Strathfield",
    specialties: ["Anxiety", "Depression", "Grief and loss", "Workplace issues"],
    unclaimed: true,
    source: "https://www.levelheadedpsychology.com.au/services/online-psychologist"
  },
  {
    slug: "eileen-seah-psychologist-zetland",
    name: "Eileen Seah",
    registrationType: "registered_psychologist",
    suburb: "Zetland",
    specialties: ["Anxiety", "Perfectionism", "Stress", "Grief"],
    unclaimed: true,
    source: "https://www.eileenseah.com.au/"
  },
  {
    slug: "clinton-moore-psychologist-north-sydney",
    name: "Dr Clinton Moore",
    registrationType: "registered_psychologist",
    suburb: "North Sydney",
    specialties: ["Generalised anxiety", "Social anxiety", "Panic attacks", "OCD", "Health anxiety"],
    unclaimed: true,
    source: "https://www.cadencepsychology.com.au/anxiety-psychologist-sydney/"
  },
  {
    slug: "jodie-lowinger-psychologist-bondi-junction",
    name: "Dr Jodie Lowinger",
    registrationType: "registered_psychologist",
    suburb: "Bondi Junction",
    specialties: ["Anxiety"],
    unclaimed: true,
    source: "https://theanxietyclinic.com.au/"
  },
  {
    slug: "kerry-critchlow-psychologist-surry-hills",
    name: "Kerry Critchlow",
    registrationType: "registered_psychologist",
    suburb: "Surry Hills",
    specialties: ["Generalised anxiety", "Social anxiety", "Phobias"],
    unclaimed: true,
    source: "https://www.headinthecloudsco.com.au/psychology-services/anxiety-treatment-sydney"
  },
  {
    slug: "emma-welch-psychologist-surry-hills",
    name: "Dr Emma Welch",
    registrationType: "registered_psychologist",
    suburb: "Surry Hills",
    specialties: ["Anxiety", "Depression"],
    unclaimed: true,
    source: "https://www.headinthecloudsco.com.au/psychology-services/anxiety-treatment-sydney"
  },
  {
    slug: "gay-cusack-psychologist-surry-hills",
    name: "Gay Cusack",
    registrationType: "registered_psychologist",
    suburb: "Surry Hills",
    specialties: ["Generalised anxiety", "Social anxiety", "Phobias"],
    unclaimed: true,
    source: "https://www.headinthecloudsco.com.au/psychology-services/anxiety-treatment-sydney"
  },
  {
    slug: "claire-loughran-psychologist-sydney-telehealth",
    name: "Claire Loughran",
    registrationType: "registered_psychologist",
    suburb: "Sydney (telehealth)",
    specialties: ["Anxiety disorders", "Mood disorders", "Adjustment"],
    unclaimed: true,
    source: "https://psychhelp.com.au/"
  },
  {
    slug: "nicholas-caras-psychologist-sydney-telehealth",
    name: "Dr Nicholas Caras",
    registrationType: "registered_psychologist",
    suburb: "Sydney (telehealth)",
    specialties: ["Anxiety", "Depression", "Stress management"],
    unclaimed: true,
    source: "https://psychhelp.com.au/"
  },
  {
    slug: "susan-aston-psychologist-sydney-telehealth",
    name: "Susan Aston",
    registrationType: "registered_psychologist",
    suburb: "Sydney (telehealth)",
    specialties: ["Anxiety and PTSD", "Trauma", "Mood disorders"],
    unclaimed: true,
    source: "https://psychhelp.com.au/"
  },
  {
    slug: "anna-mckinnon-psychologist-edgecliff",
    name: "Dr Anna McKinnon",
    registrationType: "registered_psychologist",
    suburb: "Edgecliff",
    specialties: ["Anxiety", "Trauma", "PTSD"],
    unclaimed: true,
    source: "https://mckinnonpsychology.com.au/about-us/our-team/"
  },
  {
    slug: "jordan-papandrea-psychologist-edgecliff",
    name: "Jordan Papandrea",
    registrationType: "registered_psychologist",
    suburb: "Edgecliff",
    specialties: ["Anxiety", "Stress"],
    unclaimed: true,
    source: "https://mckinnonpsychology.com.au/about-us/our-team/"
  },
  {
    slug: "gabrielle-fynn-psychologist-edgecliff",
    name: "Gabrielle Fynn",
    registrationType: "registered_psychologist",
    suburb: "Edgecliff",
    specialties: ["Anxiety", "Trauma"],
    unclaimed: true,
    source: "https://mckinnonpsychology.com.au/about-us/our-team/"
  },
  {
    slug: "tia-ven-psychologist-beverly-hills",
    name: "Tia Ven",
    registrationType: "registered_psychologist",
    suburb: "Beverly Hills",
    specialties: ["Women's mental health", "Anxiety disorders", "Depression", "Chronic pain", "Grief", "Stress"],
    unclaimed: true,
    source: "https://connect2healthpsychology.com.au/"
  },
  {
    slug: "lyndsey-grounds-psychologist-sydney-telehealth",
    name: "Lyndsey Grounds",
    registrationType: "registered_psychologist",
    suburb: "Sydney (telehealth)",
    specialties: ["Anxiety", "Depression", "Confidence and self-esteem", "Stress"],
    unclaimed: true,
    source: "https://www.halaxy.com/profile/onlinepsych-online-psychologist-australia/location/848131"
  },
  {
    slug: "michael-fitzpatrick-psychologist-marrickville",
    name: "Dr Michael Fitzpatrick",
    registrationType: "registered_psychologist",
    suburb: "Marrickville",
    specialties: ["Anxiety disorders", "Depression", "OCD", "Trauma", "Self-esteem"],
    unclaimed: true,
    source: "https://www.mfitzpatrickpsychology.com"
  },
  {
    slug: "sherisse-cohen-psychologist-bondi-junction",
    name: "Sherisse Cohen",
    registrationType: "registered_psychologist",
    suburb: "Bondi Junction",
    specialties: ["Anxiety", "Depression", "Stress", "Emotion regulation", "Body image"],
    unclaimed: true,
    source: "https://www.theselfspace.com.au/"
  },
  {
    slug: "natasha-kiemel-incorvaia-psychologist-sydney-telehealth",
    name: "Natasha Kiemel-Incorvaia",
    registrationType: "registered_psychologist",
    suburb: "Sydney (telehealth)",
    specialties: ["Anxiety", "Stress", "Trauma", "Depression", "Self-esteem"],
    unclaimed: true,
    source: "https://www.graciouslyyoupsychologicalservices.com.au/"
  },
  {
    slug: "kate-munro-psychologist-north-sydney",
    name: "Kate Munro",
    registrationType: "registered_psychologist",
    suburb: "North Sydney",
    specialties: ["Anxiety", "Stress", "Burnout", "Resilience"],
    unclaimed: true,
    source: "https://www.halaxy.com/profile/ms-kate-munro/psychologist/639441"
  },
  {
    slug: "brett-ruehland-psychologist-chippendale",
    name: "Brett Ruehland",
    registrationType: "registered_psychologist",
    suburb: "Chippendale",
    specialties: ["Anxiety", "ADHD", "Autism", "Depression", "OCD", "Panic"],
    unclaimed: true,
    source: "https://www.halaxy.com/profile/mr-brett-ruehland/psychologist/1010181"
  },
  {
    slug: "doone-richmond-psychologist-north-sydney",
    name: "Doone Richmond",
    registrationType: "registered_psychologist",
    suburb: "North Sydney",
    specialties: ["Anxiety", "Depression", "Career planning", "Workplace issues", "Life transitions"],
    unclaimed: true,
    source: "https://www.halaxy.com/profile/ms-doone-richmond/psychologist/538261"
  },
  {
    slug: "toni-kernick-psychologist-sydney-telehealth",
    name: "Toni Kernick",
    registrationType: "registered_psychologist",
    suburb: "Sydney (telehealth)",
    specialties: ["Anxiety", "Stress", "Burnout", "Life transitions", "Relationships"],
    unclaimed: true,
    source: "https://www.halaxy.com/profile/ms-toni-kernick/psychologist/716971"
  }
];

export const allSuburbs: string[] = [...new Set(practitioners.map((p) => p.suburb))].sort();
export const allSpecialties: string[] = [...new Set(practitioners.flatMap((p) => p.specialties))].sort();
