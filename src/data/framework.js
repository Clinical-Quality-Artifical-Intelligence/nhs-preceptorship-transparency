// NHS England National Preceptorship Framework for Nursing (Oct 2022)
// Two-tier model: Core Standard (minimum) and Gold Standard (aspirational)
// Source: https://www.england.nhs.uk/long-read/national-preceptorship-framework-for-nursing/

export const FRAMEWORK_PILLARS = [
  {
    id: 'duration',
    title: 'Programme Duration',
    icon: '⏱',
    core: {
      requirement: 'Minimum 6 months',
      detail: 'All trusts were expected to achieve Core Standard by September 2023.',
    },
    gold: {
      requirement: 'Minimum 12 months',
      detail: 'Research indicates programmes typically run 4–18 months; the majority run approximately 12 months. 12 months is the minimum for midwifery at Core Standard.',
    },
  },
  {
    id: 'supernumerary',
    title: 'Supernumerary Period',
    icon: '🛡',
    core: {
      requirement: 'Minimum 2 weeks (75 hours)',
      detail: 'Protected time beyond formal induction. Preceptee is not counted in staffing numbers during this period.',
    },
    gold: {
      requirement: 'Extended protected time',
      detail: 'Additional dedicated development time embedded in organisational policy.',
    },
  },
  {
    id: 'meetings',
    title: 'Structured Meetings',
    icon: '📋',
    core: {
      requirement: '3 formal meetings minimum',
      detail: 'Initial meeting within first two weeks; interim meeting at midpoint; final sign-off meeting.',
    },
    gold: {
      requirement: 'Bi-monthly meetings throughout',
      detail: 'Approximately every two months for the full programme duration.',
    },
  },
  {
    id: 'preceptor-ratio',
    title: 'Preceptor Capacity',
    icon: '👥',
    core: {
      requirement: 'Named preceptor assigned',
      detail: 'Every preceptee must have a named preceptor. No explicit cap on preceptee numbers at Core.',
    },
    gold: {
      requirement: 'Maximum 2 preceptees per preceptor',
      detail: 'Preceptors must have minimum 12 months in-setting experience at Gold Standard.',
    },
  },
  {
    id: 'preceptor-time',
    title: 'Preceptor Protected Time',
    icon: '🕐',
    core: {
      requirement: '8 hours annually',
      detail: 'Protected time for preceptor meetings, development, and peer support.',
    },
    gold: {
      requirement: '12 hours annually',
      detail: 'Extended protected time for preceptor development and supervision.',
    },
  },
  {
    id: 'learning-plan',
    title: 'Individual Learning Plan',
    icon: '📖',
    core: {
      requirement: 'Initial discussion + objectives',
      detail: 'Individual learning plan with realistic objectives agreed within first two weeks. Study days tailored to individual requirements.',
    },
    gold: {
      requirement: 'Full structured learning programme',
      detail: 'Action learning programmes, peer support groups, career conversations or coaching, restorative supervision.',
    },
  },
  {
    id: 'wellbeing',
    title: 'Wellbeing & Supervision',
    icon: '💚',
    core: {
      requirement: 'Wellbeing initiatives included',
      detail: 'Wellbeing support and reflection opportunities (NMC reflection template). Clinical supervision mandated by NMC.',
    },
    gold: {
      requirement: 'Restorative supervision',
      detail: 'A-EQUIP model restorative supervision (mandatory for midwifery). Professional Midwifery Advocate (PMA) for midwives.',
    },
  },
  {
    id: 'policy',
    title: 'Organisational Policy',
    icon: '📄',
    core: {
      requirement: 'Written preceptorship policy',
      detail: 'Standardised policy defining roles of all parties, supernumerary parameters, and protected time allocation.',
    },
    gold: {
      requirement: 'Board-level ownership',
      detail: 'Senior Responsible Officer at board level mandates preceptorship organisation-wide. Annual evaluation and adjustment.',
    },
  },
  {
    id: 'evaluation',
    title: 'Programme Evaluation',
    icon: '📊',
    core: {
      requirement: 'Annual internal evaluation',
      detail: 'Analysis of course feedback, retention statistics at 12 and 24 months post-registration, preceptee experience questionnaires.',
    },
    gold: {
      requirement: 'Continuous improvement cycle',
      detail: 'Preceptees involved in programme design. Annual evaluation used to adjust programme. Results shared with ICB and NHS England.',
    },
  },
];

export const FRAMEWORK_META = {
  nursingFramework: {
    title: 'National Preceptorship Framework for Nursing',
    published: 'October 2022',
    url: 'https://www.england.nhs.uk/long-read/national-preceptorship-framework-for-nursing/',
    coreDeadline: 'September 2023',
  },
  midwiferyFramework: {
    title: 'National Preceptorship Framework for Midwifery',
    published: 'March 2023',
    url: 'https://www.england.nhs.uk/long-read/national-preceptorship-framework-for-midwifery/',
    note: 'Midwifery: minimum 12 months at Core Standard (not 6). Named Professional Midwifery Advocate (PMA) required.',
  },
  nmcPrinciples: {
    title: 'NMC Principles of Preceptorship',
    published: '2020',
    url: 'https://www.nmc.org.uk/standards/guidance/preceptorship/',
    five_principles: [
      'Organisational Culture and Preceptorship',
      'Quality and Oversight of Preceptorship',
      'Preceptee Empowerment',
      'Preparing Preceptors',
      'The Preceptorship Programme',
    ],
  },
};
