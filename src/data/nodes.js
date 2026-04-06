// All entities in the NHS preceptorship accountability structure
// Organised by tier: national → regional → local → profession

export const NODES = [
  // ── NATIONAL BODIES ──────────────────────────────────────────────────────
  {
    id: 'nhse',
    label: 'NHS England',
    type: 'national',
    subtype: 'policy-owner',
    tier: 0,
    description: 'Policy owner and framework developer. Absorbed Health Education England (HEE) in April 2023, taking on workforce planning and preceptorship programme oversight. Published the National Preceptorship Framework for Nursing (Oct 2022) and Midwifery (Mar 2023).',
    powers: [
      { text: 'Develops and owns the National Preceptorship Framework', source: 'NHS Long Term Workforce Plan 2023' },
      { text: 'Funds training and development for newly registered staff', source: 'NHS England budget' },
      { text: 'Sets policy expectations for all NHS trusts in England', source: 'NHS England mandate' },
    ],
    accountability_gaps: [
      'Does not collect or publish trust-level preceptorship completion data',
      'No central register of Core vs Gold Standard achievement',
      'LTWP commits to "support" adoption but sets no measurable uptake targets',
    ],
    url: 'https://www.england.nhs.uk/long-read/national-preceptorship-framework-for-nursing/',
  },
  {
    id: 'nmc',
    label: 'NMC',
    type: 'national',
    subtype: 'regulator',
    tier: 0,
    description: 'The Nursing and Midwifery Council. Published the Principles of Preceptorship (2020) — five principles providing regulatory guidance. Cannot legally mandate preceptorship but expects all employers to provide it as essential for safe practice.',
    powers: [
      { text: 'Issues Principles of Preceptorship (regulatory guidance, not binding)', source: 'NMC 2020' },
      { text: 'Sets the Code of Conduct that preceptorship supports', source: 'The Code 2018' },
      { text: 'Can refer concerns about systematic unsafe environments to CQC', source: 'NMC/CQC MOU' },
    ],
    accountability_gaps: [
      'No enforcement mechanism — cannot compel trusts to provide preceptorship',
      'Preceptorship is voluntary for employers under current NMC guidance',
    ],
    url: 'https://www.nmc.org.uk/standards/guidance/preceptorship/',
  },
  {
    id: 'cqc',
    label: 'CQC',
    type: 'national',
    subtype: 'regulator',
    tier: 0,
    description: 'Care Quality Commission. Inspects NHS trusts against five key questions (Safe, Effective, Caring, Responsive, Well-Led). Preceptorship is assessed within Well-Led and Safe domains. CQC uses NHS Staff Survey data in its Intelligent Monitoring tool.',
    powers: [
      { text: 'Inspects all NHS trusts; preceptorship quality informs Well-Led rating', source: 'CQC Key Lines of Enquiry' },
      { text: 'Can issue requirement notices and enforcement actions', source: 'Health and Social Care Act 2008' },
      { text: 'Publishes inspection reports publicly for all NHS trusts', source: 'cqc.org.uk' },
    ],
    accountability_gaps: [
      'No preceptorship-specific inspection module — assessed informally within Well-Led',
      'Inspections are infrequent (typically every 3–5 years for high-rated trusts)',
      'Trusts with poor preceptorship can only be identified via full inspection reports',
    ],
    url: 'https://www.cqc.org.uk/guidance-providers/nhs-trusts',
  },
  {
    id: 'rcn',
    label: 'RCN',
    type: 'national',
    subtype: 'professional-body',
    tier: 0,
    description: 'Royal College of Nursing. Nursing Workforce Standard 10 mandates that newly registered nurses must have structured preceptorship. Advocates for consistent quality and access across all settings.',
    powers: [
      { text: 'Nursing Workforce Standard 10: newly registered nurses must have preceptorship', source: 'RCN Nursing Workforce Standards 2021' },
      { text: 'Lobbying and advocacy to NHS England and Government', source: 'RCN policy work' },
    ],
    accountability_gaps: [
      'Standards are voluntary — no enforcement mechanism beyond advocacy',
    ],
    url: 'https://www.rcn.org.uk/professional-development/nursing-workforce-standards',
  },
  {
    id: 'fnf',
    label: 'Florence Nightingale Foundation',
    type: 'national',
    subtype: 'research-advocacy',
    tier: 0,
    description: 'Independent foundation. Conducts the Pulse Check Survey — the only national survey specifically measuring preceptorship access and quality. Key findings: majority of newly registered nurses now offered preceptorship, but international nurses have disproportionately poor access and many preceptors feel unprepared.',
    powers: [
      { text: 'Conducts Pulse Check Survey on preceptorship uptake and quality', source: 'FNF Pulse Check' },
      { text: 'Publishes independent reports on preceptorship access', source: 'FNF research programme' },
    ],
    accountability_gaps: [
      'Pulse Check is a voluntary survey — trusts are not required to participate',
      'Results are aggregate, not trust-level — cannot identify underperforming organisations',
    ],
    url: 'https://florence-nightingale-foundation.org.uk/',
  },
  {
    id: 'rcm',
    label: 'RCM',
    type: 'national',
    subtype: 'professional-body',
    tier: 0,
    description: 'Royal College of Midwives. Issued Position Statement (2022) on preceptorship. Co-designed the NHS England National Preceptorship Framework for Midwifery (Mar 2023), which requires a minimum 12-month programme and a named Professional Midwifery Advocate (PMA) using the A-EQUIP restorative supervision model.',
    powers: [
      { text: 'Co-designed National Preceptorship Framework for Midwifery 2023', source: 'NHS England / RCM' },
      { text: 'Position Statement 2022: all newly registered midwives must have preceptorship', source: 'RCM 2022' },
    ],
    accountability_gaps: [],
    url: 'https://www.rcm.org.uk/',
  },

  // ── REGIONAL BODIES ───────────────────────────────────────────────────────
  {
    id: 'icb',
    label: 'Integrated Care Boards (42)',
    type: 'regional',
    subtype: 'icb',
    tier: 1,
    description: 'The 42 Integrated Care Boards in England have regional oversight of NHS trust workforce development. Increasingly accountable for system-level preceptorship consistency across their geography. ICBs commission education and training and can set local expectations beyond the national framework.',
    powers: [
      { text: 'Commission education and training spend across their ICS footprint', source: 'Health and Care Act 2022' },
      { text: 'Can set local preceptorship expectations and quality standards', source: 'ICB workforce planning responsibilities' },
    ],
    accountability_gaps: [
      'No ICB publishes a preceptorship quality report for its member trusts',
      'No requirement to monitor or report preceptorship compliance to NHS England centrally',
      'Significant variation in the degree to which ICBs actively oversee preceptorship',
    ],
    url: 'https://www.england.nhs.uk/integratedcare/what-is-integrated-care/',
    count: 42,
  },

  // ── TRUST TYPES ───────────────────────────────────────────────────────────
  {
    id: 'acute',
    label: 'Acute NHS Trusts (~85)',
    type: 'trust',
    subtype: 'acute',
    tier: 2,
    description: 'Acute trusts deliver hospital-based care. The largest employers of newly registered nurses. All are expected to implement the National Preceptorship Framework. Must appoint a named Preceptorship Lead. Preceptorship is assessed by CQC under Well-Led and Safe inspection domains.',
    mustDo: [
      'Written preceptorship policy across the whole organisation',
      'Named Preceptorship Lead with board-level visibility',
      'Minimum 6-month programme for all newly registered nurses (Core)',
      'Three structured meetings per preceptee (Core)',
      'Minimum 2 weeks supernumerary time (Core)',
      'Annual programme evaluation including retention data',
    ],
    goldStandard: [
      'Minimum 12-month programme (Gold)',
      'Bi-monthly structured meetings (Gold)',
      'Maximum 2 preceptees per preceptor (Gold)',
      'Board-level senior responsible officer (Gold)',
      'Restorative supervision (Gold)',
      'Career coaching and peer support networks (Gold)',
    ],
    url: 'https://www.england.nhs.uk/long-read/national-preceptorship-framework-for-nursing/',
    count: 85,
  },
  {
    id: 'mental-health',
    label: 'Mental Health Trusts (~54)',
    type: 'trust',
    subtype: 'mental-health',
    tier: 2,
    description: 'Mental health trusts face "systemic recruitment and retention challenges" (CQC State of Care 2024/25). Newly registered mental health nurses are a particularly vulnerable group for attrition. Preceptorship in mental health settings must address the specific emotional demands of the role.',
    mustDo: [
      'All National Preceptorship Framework Core requirements',
      'Preceptorship adapted to mental health ward settings',
      'Particular attention to staff wellbeing and restorative supervision',
    ],
    goldStandard: [
      'All Gold Standard requirements',
      'Restorative supervision using A-EQUIP model',
      'Peer support specifically for newly registered MH nurses',
    ],
    url: 'https://www.england.nhs.uk/long-read/national-preceptorship-framework-for-nursing/',
    count: 54,
  },
  {
    id: 'community',
    label: 'Community Trusts (~38)',
    type: 'trust',
    subtype: 'community',
    tier: 2,
    description: 'Community and district nursing is in crisis — district nurse numbers have halved per 10,000 elderly population over 14 years (CQC State of Care 2024/25). Preceptorship in community settings is particularly complex: newly registered nurses often work autonomously from day one. The framework applies but contextualisation is essential.',
    mustDo: [
      'All National Preceptorship Framework Core requirements',
      'Preceptorship adapted to lone-working and community settings',
      'Robust governance where clinical oversight is geographically dispersed',
    ],
    goldStandard: [
      'All Gold Standard requirements',
      'Named preceptor who has community experience',
    ],
    url: 'https://www.england.nhs.uk/long-read/national-preceptorship-framework-for-nursing/',
    count: 38,
  },
  {
    id: 'ambulance',
    label: 'Ambulance Trusts (10)',
    type: 'trust',
    subtype: 'ambulance',
    tier: 2,
    description: 'The 10 NHS ambulance trusts employ paramedics and a growing number of registered nurses. Preceptorship in pre-hospital emergency settings requires specific contextualisation. Framework compliance expected but less CQC-scrutinised than acute settings.',
    mustDo: [
      'All National Preceptorship Framework Core requirements',
    ],
    goldStandard: [
      'All Gold Standard requirements',
    ],
    url: 'https://www.england.nhs.uk/long-read/national-preceptorship-framework-for-nursing/',
    count: 10,
  },
  {
    id: 'prison',
    label: 'Prison Healthcare (NHS)',
    type: 'trust',
    subtype: 'prison',
    tier: 2,
    description: 'Nursing Preceptorship in Adult Prison Healthcare Best Practice Guidance published Feb 2024 by NHS England. Six components: effective clinical practice, supportive learning environments, collaborative working with prison staff, patient safety and safeguarding, self-care and wellbeing, professional feedback mechanisms. Custody settings add complexity: security constraints can limit protected learning time.',
    mustDo: [
      'All National Preceptorship Framework Core requirements',
      'Collaboration with prison staff and Governor on protected time',
      'Specific safeguarding and patient safety training in custody context',
    ],
    goldStandard: [
      'All Gold Standard requirements',
      'Peer support networks across custody sites',
    ],
    url: 'https://www.england.nhs.uk/publication/nursing-preceptorship-in-adult-prison-healthcare-best-practice-guidance/',
    count: null,
  },
  {
    id: 'gp',
    label: 'General Practice (PCNs)',
    type: 'trust',
    subtype: 'primary-care',
    tier: 2,
    description: 'General Practice Nurses (GPNs) are included in the Core Standard of the National Preceptorship Framework — the first time GPNs have been explicitly included in a national preceptorship framework. Primary Care Networks (PCNs) are responsible for implementation but lack the infrastructure of acute trusts. Significant access gap for GPNs in practice.',
    mustDo: [
      'National Preceptorship Framework Core requirements apply to GPNs',
      'PCN-level lead to coordinate preceptorship across member practices',
    ],
    goldStandard: [
      'Individual GP practices aim for Gold Standard requirements',
    ],
    url: 'https://www.england.nhs.uk/long-read/national-preceptorship-framework-for-nursing/',
    count: null,
  },

  // ── INDIVIDUAL ROLES ──────────────────────────────────────────────────────
  {
    id: 'preceptee',
    label: 'Newly Registered Nurse / Midwife',
    type: 'individual',
    subtype: 'preceptee',
    tier: 3,
    description: 'Upon NMC registration, newly qualified nurses become immediately accountable as autonomous professionals. This transition from student to accountable practitioner is the most challenging period in a nursing career. Preceptorship is the primary mechanism to manage this transition and prevent attrition.',
    rights: [
      'Named preceptor assigned within first week',
      'Individual learning plan agreed within first two weeks',
      'Minimum 2 weeks supernumerary time (Core)',
      'Three formal structured meetings (Core)',
      'Minimum 6-month programme (Core)',
      'Protected time that is not cancelled for staffing pressures',
      'Involvement in programme design and evaluation',
    ],
    url: 'https://www.england.nhs.uk/long-read/national-preceptorship-framework-for-nursing/',
  },
  {
    id: 'preceptor',
    label: 'Preceptor',
    type: 'individual',
    subtype: 'preceptor',
    tier: 3,
    description: 'A registered healthcare professional who supports a preceptee. Must have minimum 12 months post-registration experience and experience in the specific setting. Must receive initial training and ongoing development. Gold Standard: maximum 2 preceptees per preceptor, minimum 12 hours annual development time.',
    requirements: [
      'Registered healthcare professional at equivalent or senior level',
      'Minimum 12 months post-registration experience',
      'Experience in the specific care setting',
      'Must receive initial preceptor training before taking on preceptee',
      '8 hours annually for development/meetings (Core)',
      '12 hours annually for development/meetings (Gold)',
    ],
    url: 'https://www.england.nhs.uk/long-read/national-preceptorship-framework-for-nursing/',
  },
  {
    id: 'preceptorship-lead',
    label: 'Preceptorship Lead',
    type: 'individual',
    subtype: 'trust-lead',
    tier: 2,
    description: 'Named lead within each trust responsible for the preceptorship programme. Acts as contact for preceptors and preceptees, oversees programme quality, and reports to the board or Nursing Director. Essential for programme consistency across the organisation.',
    requirements: [
      'Named individual in each trust (required by framework)',
      'Coordinates preceptor training and programme delivery',
      'Collects evaluation data and retention statistics',
      'Reports to Director of Nursing or equivalent',
    ],
    url: 'https://www.england.nhs.uk/long-read/national-preceptorship-framework-for-nursing/',
  },
  {
    id: 'nursing-director',
    label: 'Director of Nursing',
    type: 'individual',
    subtype: 'exec',
    tier: 2,
    description: 'Executive nurse director at trust level. Accountable for nursing workforce standards including preceptorship. The Gold Standard requires a Senior Responsible Officer at board level to mandate preceptorship organisation-wide.',
    requirements: [
      'Accountable for nursing workforce standards including preceptorship',
      'Gold Standard: designated as Senior Responsible Officer for preceptorship',
      'Board-level visibility of preceptorship programme data',
    ],
    url: 'https://www.england.nhs.uk/long-read/national-preceptorship-framework-for-nursing/',
  },
];

// ── EDGES (relationships) ──────────────────────────────────────────────────
export const EDGES = [
  // National → National
  { source: 'nhse', target: 'nmc', label: 'aligns with', type: 'policy' },
  { source: 'nhse', target: 'cqc', label: 'regulated by', type: 'regulation' },
  { source: 'nhse', target: 'rcn', label: 'consults', type: 'stakeholder' },
  { source: 'nhse', target: 'rcm', label: 'co-designed midwifery framework', type: 'policy' },
  { source: 'nhse', target: 'fnf', label: 'evidence base', type: 'evidence' },
  { source: 'nmc', target: 'cqc', label: 'refers concerns to', type: 'regulation' },

  // National → Regional
  { source: 'nhse', target: 'icb', label: 'sets framework expectations', type: 'oversight' },
  { source: 'cqc', target: 'icb', label: 'inspects trusts within', type: 'regulation' },

  // Regional → Trust
  { source: 'icb', target: 'acute', label: 'commissions / oversees', type: 'oversight' },
  { source: 'icb', target: 'mental-health', label: 'commissions / oversees', type: 'oversight' },
  { source: 'icb', target: 'community', label: 'commissions / oversees', type: 'oversight' },
  { source: 'icb', target: 'ambulance', label: 'commissions / oversees', type: 'oversight' },
  { source: 'icb', target: 'prison', label: 'commissions / oversees', type: 'oversight' },
  { source: 'icb', target: 'gp', label: 'commissions / oversees', type: 'oversight' },

  // National → Trust (direct regulation)
  { source: 'cqc', target: 'acute', label: 'inspects (Well-Led / Safe)', type: 'regulation' },
  { source: 'cqc', target: 'mental-health', label: 'inspects (Well-Led / Safe)', type: 'regulation' },
  { source: 'cqc', target: 'community', label: 'inspects (Well-Led / Safe)', type: 'regulation' },

  // Trust → Individuals
  { source: 'acute', target: 'nursing-director', label: 'employs', type: 'employment' },
  { source: 'acute', target: 'preceptorship-lead', label: 'appoints', type: 'employment' },
  { source: 'mental-health', target: 'nursing-director', label: 'employs', type: 'employment' },
  { source: 'community', target: 'nursing-director', label: 'employs', type: 'employment' },
  { source: 'nursing-director', target: 'preceptorship-lead', label: 'accountable to', type: 'governance' },
  { source: 'preceptorship-lead', target: 'preceptor', label: 'trains and supports', type: 'support' },
  { source: 'preceptor', target: 'preceptee', label: 'supports transition', type: 'support' },

  // NMC → Individuals
  { source: 'nmc', target: 'preceptee', label: 'regulates (holds on register)', type: 'regulation' },
  { source: 'nmc', target: 'preceptor', label: 'regulates (holds on register)', type: 'regulation' },

  // RCN → Individuals
  { source: 'rcn', target: 'preceptee', label: 'advocates for', type: 'advocacy' },
  { source: 'rcn', target: 'preceptor', label: 'advocates for', type: 'advocacy' },
];
