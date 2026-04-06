// All entities in the preceptorship accountability & placement ecosystem
// Sectors: governance | higher-education | social-care | primary-care |
//          allied-health | wellbeing | financial | training | raising-concerns

// ── SECTOR COLOURS (used by Graph.jsx) ───────────────────────────────────
export const SECTOR_COLORS = {
  'governance':        '#005EB8',  // Blue
  'higher-education':  '#6B3FA0',  // Purple
  'social-care':       '#00796B',  // Teal-green
  'primary-care':      '#0288C7',  // Sky blue
  'allied-health':     '#7B1FA2',  // Deep purple
  'wellbeing':         '#D63384',  // Pink
  'financial':         '#E65100',  // Burnt orange
  'training':          '#2E7D32',  // Forest green
  'raising-concerns':  '#C62828',  // Deep red
}

export const SECTOR_LABELS = {
  'governance':        'Governance',
  'higher-education':  'Higher Education',
  'social-care':       'Social Care',
  'primary-care':      'Primary Care',
  'allied-health':     'Allied Health',
  'wellbeing':         'Wellbeing',
  'financial':         'Financial & Unions',
  'training':          'Training & Resources',
  'raising-concerns':  'Raising Concerns',
}

export const NODES = [

  // ══════════════════════════════════════════════════════════════════════════
  // SECTOR: GOVERNANCE
  // ══════════════════════════════════════════════════════════════════════════

  {
    id: 'nhse',
    label: 'NHS England',
    type: 'national', subtype: 'policy-owner', sector: 'governance', tier: 0,
    description: 'Policy owner of the National Preceptorship Framework. Absorbed Health Education England (HEE) in April 2023, taking on workforce planning and preceptorship oversight. Published the National Preceptorship Framework for Nursing (Oct 2022) and Midwifery (Mar 2023).',
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
    id: 'dhsc',
    label: 'Dept of Health & Social Care',
    type: 'national', subtype: 'government', sector: 'governance', tier: 0,
    description: 'UK government department responsible for policy and legislation governing both the NHS and adult social care. Oversees social care workforce strategy and sets the NHS mandate for NHS England.',
    url: 'https://www.gov.uk/government/organisations/department-of-health-and-social-care',
  },
  {
    id: 'nmc',
    label: 'NMC',
    type: 'national', subtype: 'regulator', sector: 'governance', tier: 0,
    description: 'The Nursing and Midwifery Council. Published the Principles of Preceptorship (2020). Cannot legally mandate preceptorship but expects all employers to provide it as essential for safe practice.',
    powers: [
      { text: 'Issues Principles of Preceptorship (regulatory guidance)', source: 'NMC 2020' },
      { text: 'Sets the Code of Conduct that preceptorship supports', source: 'The Code 2018' },
      { text: 'Approves all pre-registration nursing and midwifery programmes at universities', source: 'NMC Education Standards 2018' },
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
    type: 'national', subtype: 'regulator', sector: 'governance', tier: 0,
    description: 'Care Quality Commission. Inspects NHS trusts against five key questions (Safe, Effective, Caring, Responsive, Well-Led). Preceptorship is assessed within Well-Led and Safe domains.',
    powers: [
      { text: 'Inspects all NHS trusts; preceptorship quality informs Well-Led rating', source: 'CQC KLOEs' },
      { text: 'Can issue requirement notices and enforcement actions', source: 'Health and Social Care Act 2008' },
    ],
    accountability_gaps: [
      'No preceptorship-specific inspection module — assessed informally within Well-Led',
      'Inspections are infrequent (typically every 3–5 years for high-rated trusts)',
    ],
    url: 'https://www.cqc.org.uk',
  },
  {
    id: 'hcpc',
    label: 'HCPC',
    type: 'national', subtype: 'regulator', sector: 'governance', tier: 0,
    description: 'Health and Care Professions Council. The statutory regulator for 15 health and care professions including all allied health professions. Maintains the register of approved practitioners and sets standards for education and conduct.',
    url: 'https://www.hcpc-uk.org',
  },
  {
    id: 'rcn',
    label: 'RCN',
    type: 'national', subtype: 'professional-body', sector: 'governance', tier: 1,
    description: 'Royal College of Nursing. Nursing Workforce Standard 10 mandates that newly registered nurses must have structured preceptorship.',
    powers: [
      { text: 'Nursing Workforce Standard 10: newly registered nurses must have preceptorship', source: 'RCN Nursing Workforce Standards 2021' },
    ],
    accountability_gaps: ['Standards are voluntary — no enforcement mechanism beyond advocacy'],
    url: 'https://www.rcn.org.uk',
  },
  {
    id: 'rcm',
    label: 'RCM',
    type: 'national', subtype: 'professional-body', sector: 'governance', tier: 1,
    description: 'Royal College of Midwives. Issued Position Statement (2022). Co-designed the NHS England National Preceptorship Framework for Midwifery (Mar 2023), requiring minimum 12-month programme and named Professional Midwifery Advocate (PMA).',
    url: 'https://www.rcm.org.uk',
  },
  {
    id: 'fnf',
    label: 'Florence Nightingale Foundation',
    type: 'national', subtype: 'research-advocacy', sector: 'governance', tier: 1,
    description: 'Independent foundation. Conducts the Pulse Check Survey — the only national survey specifically measuring preceptorship access and quality across the NHS.',
    accountability_gaps: [
      'Pulse Check is voluntary — trusts are not required to participate',
      'Results are aggregate, not trust-level',
    ],
    url: 'https://florence-nightingale-foundation.org.uk',
  },
  {
    id: 'icb',
    label: 'Integrated Care Boards (42)',
    type: 'regional', subtype: 'icb', sector: 'governance', tier: 1,
    description: '42 Integrated Care Boards in England. Regional oversight of NHS trust workforce development. Increasingly accountable for system-level preceptorship consistency.',
    accountability_gaps: [
      'No ICB publishes a preceptorship quality report for its member trusts',
      'No requirement to monitor or report preceptorship compliance to NHS England centrally',
    ],
    url: 'https://www.england.nhs.uk/integratedcare/',
    count: 42,
  },
  {
    id: 'nhsemployers',
    label: 'NHS Employers',
    type: 'national', subtype: 'employer-body', sector: 'governance', tier: 1,
    description: 'The employers\' organisation for the NHS in England. Works with NHS trusts on Agenda for Change, preceptorship, recruitment and workforce strategy on behalf of NHS employers.',
    url: 'https://www.nhsemployers.org',
  },

  // NHS Trust Types
  {
    id: 'acute',
    label: 'Acute NHS Trusts (~85)',
    type: 'trust', subtype: 'acute', sector: 'governance', tier: 2,
    description: 'Acute trusts deliver hospital-based care — the largest employers of newly registered nurses. All are expected to implement the National Preceptorship Framework.',
    mustDo: [
      'Written preceptorship policy across the whole organisation',
      'Named Preceptorship Lead with board-level visibility',
      'Minimum 6-month programme for all newly registered nurses (Core)',
      'Three structured meetings per preceptee (Core)',
      'Minimum 2 weeks supernumerary time (Core)',
    ],
    goldStandard: [
      'Minimum 12-month programme (Gold)',
      'Bi-monthly structured meetings (Gold)',
      'Maximum 2 preceptees per preceptor (Gold)',
      'Board-level senior responsible officer (Gold)',
    ],
    url: 'https://www.england.nhs.uk/long-read/national-preceptorship-framework-for-nursing/',
    count: 85,
  },
  {
    id: 'mental-health',
    label: 'Mental Health Trusts (~54)',
    type: 'trust', subtype: 'mental-health', sector: 'governance', tier: 2,
    description: 'Mental health trusts face "systemic recruitment and retention challenges" (CQC State of Care 2024/25). Preceptorship must address the specific emotional demands of mental health nursing.',
    url: 'https://www.england.nhs.uk/long-read/national-preceptorship-framework-for-nursing/',
    count: 54,
  },
  {
    id: 'community',
    label: 'Community Trusts (~38)',
    type: 'trust', subtype: 'community', sector: 'governance', tier: 2,
    description: 'Community and district nursing. District nurse numbers have halved per 10,000 elderly population over 14 years (CQC 2024/25). Preceptorship is particularly complex as newly registered nurses often work autonomously.',
    url: 'https://www.england.nhs.uk/long-read/national-preceptorship-framework-for-nursing/',
    count: 38,
  },
  {
    id: 'ambulance',
    label: 'Ambulance Trusts (10)',
    type: 'trust', subtype: 'ambulance', sector: 'governance', tier: 2,
    description: '10 NHS ambulance trusts employing paramedics and a growing number of registered nurses. Preceptorship in pre-hospital emergency settings requires specific contextualisation.',
    url: 'https://www.england.nhs.uk/long-read/national-preceptorship-framework-for-nursing/',
    count: 10,
  },
  {
    id: 'prison',
    label: 'Prison Healthcare (NHS)',
    type: 'trust', subtype: 'prison', sector: 'governance', tier: 2,
    description: 'NHS England published dedicated Nursing Preceptorship in Adult Prison Healthcare Best Practice Guidance (Feb 2024). Custody settings add complexity: security constraints can limit protected learning time.',
    url: 'https://www.england.nhs.uk/publication/nursing-preceptorship-in-adult-prison-healthcare-best-practice-guidance/',
  },
  {
    id: 'gp',
    label: 'General Practice / PCNs',
    type: 'trust', subtype: 'primary-care', sector: 'governance', tier: 2,
    description: 'General Practice Nurses (GPNs) are included in the Core Standard for the first time. PCNs are responsible for implementation but lack the infrastructure of acute trusts.',
    url: 'https://www.england.nhs.uk/long-read/national-preceptorship-framework-for-nursing/',
  },

  // Individual roles
  {
    id: 'preceptee',
    label: 'Newly Registered Nurse / Midwife',
    type: 'individual', subtype: 'preceptee', sector: 'governance', tier: 3,
    description: 'Upon NMC registration, newly qualified nurses become immediately accountable as autonomous professionals. Preceptorship is the primary mechanism to support this transition.',
    rights: [
      'Named preceptor assigned within first week',
      'Individual learning plan agreed within first two weeks',
      'Minimum 2 weeks supernumerary time (Core)',
      'Three formal structured meetings (Core)',
      'Minimum 6-month programme (Core)',
    ],
    url: 'https://www.england.nhs.uk/long-read/national-preceptorship-framework-for-nursing/',
  },
  {
    id: 'preceptor',
    label: 'Preceptor',
    type: 'individual', subtype: 'preceptor', sector: 'governance', tier: 3,
    description: 'A registered healthcare professional who supports a preceptee. Must have minimum 12 months post-registration experience. Gold Standard: maximum 2 preceptees, minimum 12 hours annual development.',
    requirements: [
      'Minimum 12 months post-registration experience',
      'Experience in the specific care setting',
      'Initial preceptor training before taking on preceptee',
      '8 hours annually for development/meetings (Core)',
    ],
    url: 'https://www.england.nhs.uk/long-read/national-preceptorship-framework-for-nursing/',
  },
  {
    id: 'preceptorship-lead',
    label: 'Preceptorship Lead',
    type: 'individual', subtype: 'trust-lead', sector: 'governance', tier: 2,
    description: 'Named lead within each trust. Acts as contact for preceptors and preceptees, oversees programme quality, and reports to the Nursing Director.',
    url: 'https://www.england.nhs.uk/long-read/national-preceptorship-framework-for-nursing/',
  },
  {
    id: 'nursing-director',
    label: 'Director of Nursing',
    type: 'individual', subtype: 'exec', sector: 'governance', tier: 2,
    description: 'Executive nurse director at trust level. Accountable for nursing workforce standards including preceptorship. Gold Standard: designated as Senior Responsible Officer at board level.',
    url: 'https://www.england.nhs.uk/long-read/national-preceptorship-framework-for-nursing/',
  },

  // ══════════════════════════════════════════════════════════════════════════
  // SECTOR: HIGHER EDUCATION
  // ══════════════════════════════════════════════════════════════════════════

  // England — Russell Group / major providers
  {
    id: 'kcl',
    label: "King's College London",
    type: 'national', subtype: 'university', sector: 'higher-education', tier: 3,
    description: "Russell Group. Florence Nightingale Faculty of Nursing, Midwifery and Palliative Care — one of the UK's largest and most prestigious nursing faculties. NMC-approved across all fields.",
    url: 'https://www.kcl.ac.uk',
  },
  {
    id: 'ucl',
    label: 'University College London',
    type: 'national', subtype: 'university', sector: 'higher-education', tier: 3,
    description: 'Russell Group. Division of Nursing, Midwifery and Health offers NMC-approved pre-registration programmes.',
    url: 'https://www.ucl.ac.uk',
  },
  {
    id: 'city-london',
    label: "City St George's, University of London",
    type: 'national', subtype: 'university', sector: 'higher-education', tier: 3,
    description: 'Formed by the merger of City University and St George\'s. NMC-approved nursing and midwifery programmes in London.',
    url: 'https://www.city.ac.uk',
  },
  {
    id: 'manchester',
    label: 'University of Manchester',
    type: 'national', subtype: 'university', sector: 'higher-education', tier: 3,
    description: 'Russell Group. Major NMC-approved nursing and midwifery provider in the North West.',
    url: 'https://www.manchester.ac.uk',
  },
  {
    id: 'leeds',
    label: 'University of Leeds',
    type: 'national', subtype: 'university', sector: 'higher-education', tier: 3,
    description: 'Russell Group. NMC-approved nursing programmes with strong links to Leeds Teaching Hospitals NHS Trust.',
    url: 'https://www.leeds.ac.uk',
  },
  {
    id: 'sheffield',
    label: 'University of Sheffield',
    type: 'national', subtype: 'university', sector: 'higher-education', tier: 3,
    description: 'Russell Group. NMC-approved nursing programmes with integrated clinical placements across South Yorkshire.',
    url: 'https://www.sheffield.ac.uk',
  },
  {
    id: 'birmingham',
    label: 'University of Birmingham',
    type: 'national', subtype: 'university', sector: 'higher-education', tier: 3,
    description: 'Russell Group. NMC-approved nursing and midwifery programmes through its College of Medical and Dental Sciences.',
    url: 'https://www.birmingham.ac.uk',
  },
  {
    id: 'nottingham',
    label: 'University of Nottingham',
    type: 'national', subtype: 'university', sector: 'higher-education', tier: 3,
    description: 'Russell Group. NMC-approved nursing and midwifery programmes including mental health and children\'s nursing.',
    url: 'https://www.nottingham.ac.uk',
  },
  {
    id: 'southampton',
    label: 'University of Southampton',
    type: 'national', subtype: 'university', sector: 'higher-education', tier: 3,
    description: 'Consistently top-ranked for midwifery (Guardian 2025). NMC-approved nursing and midwifery programmes.',
    url: 'https://www.southampton.ac.uk',
  },
  {
    id: 'plymouth',
    label: 'University of Plymouth',
    type: 'national', subtype: 'university', sector: 'higher-education', tier: 3,
    description: 'NMC-approved nursing and midwifery programmes across fields of practice in the South West.',
    url: 'https://www.plymouth.ac.uk',
  },
  {
    id: 'uea',
    label: 'University of East Anglia',
    type: 'national', subtype: 'university', sector: 'higher-education', tier: 3,
    description: 'NMC-approved nursing and midwifery programmes with strong ties to Norfolk and Norwich University Hospitals.',
    url: 'https://www.uea.ac.uk',
  },
  {
    id: 'northumbria',
    label: 'Northumbria University',
    type: 'national', subtype: 'university', sector: 'higher-education', tier: 3,
    description: 'Large provider of NMC-approved nursing and midwifery programmes in the North East.',
    url: 'https://www.northumbria.ac.uk',
  },
  {
    id: 'shu',
    label: 'Sheffield Hallam University',
    type: 'national', subtype: 'university', sector: 'higher-education', tier: 3,
    description: 'Major provider of NMC-approved nursing and midwifery programmes in South Yorkshire.',
    url: 'https://www.shu.ac.uk',
  },
  {
    id: 'oxford-brookes',
    label: 'Oxford Brookes University',
    type: 'national', subtype: 'university', sector: 'higher-education', tier: 3,
    description: 'NMC-approved BSc Midwifery and nursing programmes; strong Oxford NHS Trust placement links.',
    url: 'https://www.brookes.ac.uk',
  },
  {
    id: 'bcu',
    label: 'Birmingham City University',
    type: 'national', subtype: 'university', sector: 'higher-education', tier: 3,
    description: 'Large NMC-approved nursing and midwifery provider in the West Midlands.',
    url: 'https://www.bcu.ac.uk',
  },
  {
    id: 'cccu',
    label: 'Canterbury Christ Church University',
    type: 'national', subtype: 'university', sector: 'higher-education', tier: 3,
    description: 'NMC-approved nursing and midwifery in the South East; key provider for Kent and Medway NHS placements.',
    url: 'https://www.canterbury.ac.uk',
  },
  {
    id: 'edgehill',
    label: 'Edge Hill University',
    type: 'national', subtype: 'university', sector: 'higher-education', tier: 3,
    description: 'NMC-approved nursing and midwifery in Lancashire; consistently high student satisfaction.',
    url: 'https://www.edgehill.ac.uk',
  },
  {
    id: 'aru',
    label: 'Anglia Ruskin University',
    type: 'national', subtype: 'university', sector: 'higher-education', tier: 3,
    description: 'NMC-approved nursing and midwifery across Cambridge, Chelmsford and Peterborough campuses.',
    url: 'https://www.aru.ac.uk',
  },
  {
    id: 'lsbu',
    label: 'London South Bank University',
    type: 'national', subtype: 'university', sector: 'higher-education', tier: 3,
    description: 'NMC-approved nursing and midwifery in South London; strong widening participation ethos.',
    url: 'https://www.lsbu.ac.uk',
  },
  {
    id: 'mmu',
    label: 'Manchester Metropolitan University',
    type: 'national', subtype: 'university', sector: 'higher-education', tier: 3,
    description: 'NMC-approved nursing programmes in Greater Manchester with extensive NHS placement network.',
    url: 'https://www.mmu.ac.uk',
  },
  {
    id: 'middlesex',
    label: 'Middlesex University',
    type: 'national', subtype: 'university', sector: 'higher-education', tier: 3,
    description: 'NMC-approved nursing and midwifery; conducted the 2022 evidence review underpinning the National Preceptorship Framework.',
    url: 'https://www.mdx.ac.uk',
  },
  // Scotland
  {
    id: 'edinburgh',
    label: 'University of Edinburgh',
    type: 'national', subtype: 'university', sector: 'higher-education', tier: 3,
    description: 'Russell Group. Top-ranked in Scotland for nursing; NMC-approved nursing and midwifery programmes.',
    url: 'https://www.ed.ac.uk',
  },
  {
    id: 'gcu',
    label: 'Glasgow Caledonian University',
    type: 'national', subtype: 'university', sector: 'higher-education', tier: 3,
    description: 'Major provider of NMC-approved nursing and midwifery in Scotland with wide field coverage.',
    url: 'https://www.gcu.ac.uk',
  },
  {
    id: 'qmu',
    label: 'Queen Margaret University',
    type: 'national', subtype: 'university', sector: 'higher-education', tier: 3,
    description: 'Specialist health and social sciences university in Edinburgh. NMC-approved nursing and midwifery.',
    url: 'https://www.qmu.ac.uk',
  },
  {
    id: 'rgu',
    label: 'Robert Gordon University',
    type: 'national', subtype: 'university', sector: 'higher-education', tier: 3,
    description: 'NMC-approved nursing and midwifery in Aberdeen, with strong links to NHS Grampian.',
    url: 'https://www.rgu.ac.uk',
  },
  // Wales
  {
    id: 'cardiff',
    label: 'Cardiff University',
    type: 'national', subtype: 'university', sector: 'higher-education', tier: 3,
    description: 'Russell Group. Consistently top 5 UK for midwifery. NMC-approved nursing and midwifery.',
    url: 'https://www.cardiff.ac.uk',
  },
  {
    id: 'swansea',
    label: 'Swansea University',
    type: 'national', subtype: 'university', sector: 'higher-education', tier: 3,
    description: 'NMC-approved nursing and midwifery in South Wales, links to Swansea Bay University Health Board.',
    url: 'https://www.swansea.ac.uk',
  },
  {
    id: 'usw',
    label: 'University of South Wales',
    type: 'national', subtype: 'university', sector: 'higher-education', tier: 3,
    description: 'Major provider of NMC-approved nursing programmes across South Wales campuses.',
    url: 'https://southwales.ac.uk',
  },
  // Northern Ireland
  {
    id: 'qub',
    label: "Queen's University Belfast",
    type: 'national', subtype: 'university', sector: 'higher-education', tier: 3,
    description: 'Russell Group. Main provider of NMC-approved nursing and midwifery in Northern Ireland.',
    url: 'https://www.qub.ac.uk',
  },
  {
    id: 'ulster',
    label: 'Ulster University',
    type: 'national', subtype: 'university', sector: 'higher-education', tier: 3,
    description: 'NMC-approved nursing and midwifery across multiple Northern Ireland campuses.',
    url: 'https://www.ulster.ac.uk',
  },

  // ══════════════════════════════════════════════════════════════════════════
  // SECTOR: SOCIAL CARE
  // ══════════════════════════════════════════════════════════════════════════

  {
    id: 'skills-for-care',
    label: 'Skills for Care',
    type: 'national', subtype: 'workforce-body', sector: 'social-care', tier: 1,
    description: 'The strategic workforce development body for adult social care in England. Published a dedicated preceptorship package for social care nurses alongside the 2024 Adult Social Care Workforce Strategy.',
    url: 'https://www.skillsforcare.org.uk',
  },
  {
    id: 'scie',
    label: 'SCIE',
    type: 'national', subtype: 'improvement', sector: 'social-care', tier: 2,
    description: 'Social Care Institute for Excellence. Independent charity providing evidence-based resources, workforce development guidance and quality improvement support across social care.',
    url: 'https://www.scie.org.uk',
  },
  {
    id: 'adass',
    label: 'ADASS',
    type: 'national', subtype: 'membership', sector: 'social-care', tier: 2,
    description: 'Association of Directors of Adult Social Services. Membership body for DASS in England; advocates for workforce development and preceptorship across local authority social care.',
    url: 'https://www.adass.org.uk',
  },
  {
    id: 'rnha',
    label: 'Registered Nursing Home Association',
    type: 'national', subtype: 'provider-body', sector: 'social-care', tier: 2,
    description: 'Represents independent care home providers employing registered nurses; supports workforce development including preceptorship in the independent sector.',
    url: 'https://www.rnha.co.uk',
  },
  {
    id: 'care-workforce-pathway',
    label: 'Care Workforce Pathway',
    type: 'national', subtype: 'framework', sector: 'social-care', tier: 2,
    description: 'NHS England / DHSC framework (Jan 2024) setting out career development routes for adult social care workers in England, including registered nurses working in the sector.',
    url: 'https://www.gov.uk/government/publications/care-workforce-pathway-for-adult-social-care',
  },

  // ══════════════════════════════════════════════════════════════════════════
  // SECTOR: PRIMARY CARE
  // ══════════════════════════════════════════════════════════════════════════

  {
    id: 'qicn',
    label: "Queen's Institute of Community Nursing",
    type: 'national', subtype: 'professional-body', sector: 'primary-care', tier: 1,
    description: 'Formerly QNI, renamed March 2025. Charity supporting nurses in community and primary care across England, Wales and Northern Ireland. Provides preceptorship resources and the TalkToUs listening service.',
    url: 'https://qicn.org.uk',
  },
  {
    id: 'qnis',
    label: 'QNIS',
    type: 'national', subtype: 'professional-body', sector: 'primary-care', tier: 2,
    description: "Queen's Nursing Institute Scotland. Independent Scottish charity providing professional development, preceptorship support, and the Queen's Nurse title for community nurses in Scotland.",
    url: 'https://www.qnis.org.uk',
  },
  {
    id: 'rcgp',
    label: 'RCGP',
    type: 'national', subtype: 'professional-body', sector: 'primary-care', tier: 2,
    description: 'Royal College of General Practitioners. Supports general practice nurses and primary care teams through education, standards and policy.',
    url: 'https://www.rcgp.org.uk',
  },
  {
    id: 'training-hubs',
    label: 'Primary Care Training Hubs',
    type: 'regional', subtype: 'training', sector: 'primary-care', tier: 2,
    description: 'A network of regional training hubs across England supporting education and preceptorship for nurses and AHPs working in primary care settings. Direct delivery mechanism for GPN preceptorship.',
    url: 'https://www.england.nhs.uk/mat-transformation/gpn-preceptorship-prog/',
  },
  {
    id: 'gpn-cop',
    label: 'GPN Community of Practice',
    type: 'national', subtype: 'network', sector: 'primary-care', tier: 3,
    description: 'NHS England-supported national community for general practice nurses sharing preceptorship resources, programmes and peer support.',
    url: 'https://www.england.nhs.uk/mat-transformation/gpn-preceptorship-prog/',
  },

  // ══════════════════════════════════════════════════════════════════════════
  // SECTOR: ALLIED HEALTH PROFESSIONALS
  // ══════════════════════════════════════════════════════════════════════════

  {
    id: 'nhse-ahp',
    label: 'NHS England — AHPs',
    type: 'national', subtype: 'policy', sector: 'allied-health', tier: 1,
    description: 'NHS England\'s Allied Health Professions team. Responsible for national workforce strategy, preceptorship frameworks (including the National AHP Preceptorship Foundation Programme) and career development for all 15 AHP professions.',
    url: 'https://www.england.nhs.uk/ahp/',
  },
  {
    id: 'csp',
    label: 'Chartered Society of Physiotherapy',
    type: 'national', subtype: 'professional-body', sector: 'allied-health', tier: 2,
    description: 'Professional, educational and trade union body for physiotherapy in the UK. Sets standards, accredits programmes and supports preceptorship for newly registered physiotherapists.',
    url: 'https://www.csp.org.uk',
  },
  {
    id: 'rcot',
    label: 'Royal College of Occupational Therapists',
    type: 'national', subtype: 'professional-body', sector: 'allied-health', tier: 2,
    description: 'Professional body for occupational therapy in the UK. Provides preceptorship guidance, standards and CPD support for newly registered OTs.',
    url: 'https://www.rcot.co.uk',
  },
  {
    id: 'bda',
    label: 'British Dietetic Association',
    type: 'national', subtype: 'professional-body', sector: 'allied-health', tier: 2,
    description: 'Professional association and trade union for registered dietitians. Supports preceptorship through the Dietetic Support Worker framework and CPD resources.',
    url: 'https://www.bda.uk.com',
  },
  {
    id: 'rcslt',
    label: 'Royal College of Speech & Language Therapists',
    type: 'national', subtype: 'professional-body', sector: 'allied-health', tier: 2,
    description: 'Professional body for speech and language therapists. Provides preceptorship support, clinical guidelines and CPD resources for newly registered SLTs.',
    url: 'https://www.rcslt.org',
  },
  {
    id: 'scor',
    label: 'Society of Radiographers',
    type: 'national', subtype: 'professional-body', sector: 'allied-health', tier: 2,
    description: 'Professional and trade union body for diagnostic and therapeutic radiographers. Supports preceptorship and workforce development.',
    url: 'https://www.sor.org',
  },
  {
    id: 'college-paramedics',
    label: 'College of Paramedics',
    type: 'national', subtype: 'professional-body', sector: 'allied-health', tier: 2,
    description: 'Professional body for paramedics and ambulance clinicians. Provides preceptorship guidance, career frameworks and CPD resources.',
    url: 'https://www.collegeofparamedics.co.uk',
  },
  {
    id: 'college-podiatry',
    label: 'College of Podiatry',
    type: 'national', subtype: 'professional-body', sector: 'allied-health', tier: 2,
    description: 'Professional body and trade union for podiatrists. Supports preceptorship, CPD and advanced practice for podiatric practitioners.',
    url: 'https://cop.org.uk',
  },
  {
    id: 'rcslt-ahpf',
    label: 'Allied Health Professions Federation',
    type: 'national', subtype: 'federation', sector: 'allied-health', tier: 1,
    description: 'The umbrella body representing all 12 AHP professional bodies in the UK. Advocates for AHP workforce development and consistent preceptorship across all professions.',
    url: 'https://www.ahpf.org.uk',
  },

  // ══════════════════════════════════════════════════════════════════════════
  // SECTOR: WELLBEING
  // ══════════════════════════════════════════════════════════════════════════

  {
    id: 'nhs-practitioner-health',
    label: 'NHS Practitioner Health',
    type: 'national', subtype: 'support-service', sector: 'wellbeing', tier: 1,
    description: 'Free, confidential NHS-funded mental health treatment service for healthcare professionals across England including nurses, doctors and AHPs. Self-referral available.',
    url: 'https://www.practitionerhealth.nhs.uk',
  },
  {
    id: 'cavell',
    label: "Cavell Nurses' Trust",
    type: 'national', subtype: 'charity', sector: 'wellbeing', tier: 2,
    description: 'UK charity supporting nurses, midwives and healthcare assistants (working and retired) through personal and financial crisis, including illness, disability and domestic abuse.',
    url: 'https://www.cavellnursestrust.org',
  },
  {
    id: 'wellbeing-hubs',
    label: 'NHS Staff Wellbeing Hubs',
    type: 'regional', subtype: 'support-service', sector: 'wellbeing', tier: 2,
    description: 'NHS-funded regional hubs providing mental health assessment and treatment to NHS and social care staff across all regions in England.',
    url: 'https://www.england.nhs.uk/supporting-our-nhs-people/support-now/staff-mental-health-and-wellbeing-hubs/',
  },
  {
    id: 'hwf',
    label: "Healthcare Workers' Foundation",
    type: 'national', subtype: 'charity', sector: 'wellbeing', tier: 2,
    description: 'Independent charity providing grants and mental health support to healthcare workers in crisis; delivered over £255,000 in hardship grants.',
    url: 'https://healthcareworkersfoundation.org',
  },
  {
    id: 'nhs-charities',
    label: 'NHS Charities Together',
    type: 'national', subtype: 'charity', sector: 'wellbeing', tier: 2,
    description: 'National membership body for 230+ NHS charitable funds. Funds wellbeing programmes and staff support initiatives across the NHS.',
    url: 'https://nhscharitiestogether.co.uk',
  },
  {
    id: 'nhs-resolution',
    label: 'NHS Resolution',
    type: 'national', subtype: 'support-service', sector: 'wellbeing', tier: 2,
    description: 'Provides indemnity and legal support for NHS staff. Being Fair framework supports a just culture, encouraging staff to report incidents without fear of punitive blame.',
    url: 'https://resolution.nhs.uk',
  },

  // ══════════════════════════════════════════════════════════════════════════
  // SECTOR: FINANCIAL & UNIONS
  // ══════════════════════════════════════════════════════════════════════════

  {
    id: 'unison',
    label: 'UNISON',
    type: 'national', subtype: 'union', sector: 'financial', tier: 1,
    description: "UK's largest public sector union. Represents NHS nursing, midwifery and healthcare support staff in pay negotiations. Provides UNISON Welfare hardship grants and member support.",
    url: 'https://www.unison.org.uk',
  },
  {
    id: 'unite',
    label: 'Unite the Union',
    type: 'national', subtype: 'union', sector: 'financial', tier: 2,
    description: 'Major UK trade union representing NHS workers including nurses and AHPs. Provides Unite Benevolent Fund, debt advice, legal support and member financial services.',
    url: 'https://www.unitetheunion.org',
  },
  {
    id: 'gmb',
    label: 'GMB Union',
    type: 'national', subtype: 'union', sector: 'financial', tier: 2,
    description: 'General trade union with significant NHS membership. Represents nursing and healthcare support workers in pay bargaining and provides member benefits.',
    url: 'https://www.gmb.org.uk',
  },
  {
    id: 'nhsprb',
    label: 'NHS Pay Review Body',
    type: 'national', subtype: 'advisory', sector: 'financial', tier: 2,
    description: 'Independent advisory body that makes recommendations on pay for NHS staff on Agenda for Change contracts. Published the 37th Report in 2024 recommending a 5.5% uplift.',
    url: 'https://www.gov.uk/government/organisations/nhs-pay-review-body',
  },
  {
    id: 'nhsbsa',
    label: 'NHS Business Services Authority',
    type: 'national', subtype: 'support-service', sector: 'financial', tier: 2,
    description: 'Provides NHS pensions administration, student bursary processing, prescription prepayment certificates and other financial services for NHS staff.',
    url: 'https://www.nhsbsa.nhs.uk',
  },
  {
    id: 'rcn-foundation',
    label: 'RCN Foundation',
    type: 'national', subtype: 'charity', sector: 'financial', tier: 2,
    description: 'Charitable arm of the RCN. Provides the Lamplight Support Service offering hardship grants to nurses, midwives and healthcare assistants regardless of RCN membership.',
    url: 'https://www.rcnfoundation.org.uk',
  },

  // ══════════════════════════════════════════════════════════════════════════
  // SECTOR: TRAINING & RESOURCES
  // ══════════════════════════════════════════════════════════════════════════

  {
    id: 'elfh',
    label: 'e-Learning for Healthcare',
    type: 'national', subtype: 'platform', sector: 'training', tier: 1,
    description: 'Free 24/7 elearning platform with 400+ programmes and 31,000+ sessions for health and care professionals. Covers clinical, leadership, safeguarding, medicines and patient safety topics.',
    url: 'https://www.e-lfh.org.uk',
  },
  {
    id: 'nhs-learning-hub',
    label: 'NHS Learning Hub',
    type: 'national', subtype: 'platform', sector: 'training', tier: 2,
    description: "NHS England's next-generation digital learning platform consolidating elfh content. Enables sharing and discovery of all NHS learning resources including simulation and video.",
    url: 'https://learninghub.nhs.uk',
  },
  {
    id: 'nhs-leadership',
    label: 'NHS Leadership Academy',
    type: 'national', subtype: 'training', sector: 'training', tier: 1,
    description: 'NHS England body providing national leadership development programmes (Edward Jenner, Mary Seacole, Elizabeth Garrett Anderson, Nye Bevan) for staff at all levels.',
    url: 'https://www.leadershipacademy.nhs.uk',
  },
  {
    id: 'futurenhs',
    label: 'FutureNHS',
    type: 'national', subtype: 'platform', sector: 'training', tier: 2,
    description: 'NHS England\'s online collaboration platform providing workspaces, shared resources and communities of practice including the national preceptorship community.',
    url: 'https://future.nhs.uk',
  },
  {
    id: 'skills-for-health',
    label: 'Skills for Health',
    type: 'national', subtype: 'standards-body', sector: 'training', tier: 2,
    description: 'National skills body for the health sector. Develops standards, qualifications and workforce competency frameworks including for healthcare support workers and clinical roles.',
    url: 'https://www.skillsforhealth.org.uk',
  },
  {
    id: 'kings-fund',
    label: "The King's Fund",
    type: 'national', subtype: 'think-tank', sector: 'training', tier: 2,
    description: 'Independent health policy think tank. Provides leadership development programmes, research and resources relevant to newly registered nurses navigating the NHS system.',
    url: 'https://www.kingsfund.org.uk',
  },
  {
    id: 'nhse-simulation',
    label: 'NHS Simulation & Technology Enhanced Learning',
    type: 'national', subtype: 'training', sector: 'training', tier: 2,
    description: 'NHS England programme supporting clinical simulation, immersive learning and human factors training across the NHS, including preceptorship simulation resources.',
    url: 'https://www.england.nhs.uk/get-involved/areas-of-work/technology-enhanced-learning/',
  },

  // ══════════════════════════════════════════════════════════════════════════
  // SECTOR: RAISING CONCERNS
  // ══════════════════════════════════════════════════════════════════════════

  {
    id: 'national-guardian',
    label: "National Guardian's Office",
    type: 'national', subtype: 'regulator', sector: 'raising-concerns', tier: 1,
    description: 'Independent office leading Freedom to Speak Up culture change across the NHS. Supports 700+ Freedom to Speak Up Guardians in NHS organisations and receives over 38,000 cases annually.',
    url: 'https://nationalguardian.org.uk',
  },
  {
    id: 'hssib',
    label: 'HSSIB',
    type: 'national', subtype: 'investigator', sector: 'raising-concerns', tier: 1,
    description: 'Health Service Safety Investigations Body. Replaced HSIB in 2023. Investigates patient safety incidents in NHS-funded care with protected disclosure powers to improve learning without blame.',
    url: 'https://www.hssib.org.uk',
  },
  {
    id: 'phso',
    label: 'Parliamentary & Health Service Ombudsman',
    type: 'national', subtype: 'ombudsman', sector: 'raising-concerns', tier: 2,
    description: 'Independent ombudsman for England investigating unresolved complaints about the NHS and government departments. Final escalation route for patients and staff.',
    url: 'https://www.ombudsman.org.uk',
  },
  {
    id: 'protect',
    label: 'Protect (formerly Public Concern at Work)',
    type: 'national', subtype: 'charity', sector: 'raising-concerns', tier: 2,
    description: "UK's whistleblowing charity. Provides free legal advice to NHS staff raising concerns, campaigns for stronger whistleblowing protections and supports the Speak Up Safely network.",
    url: 'https://protect-advice.org.uk',
  },
  {
    id: 'psl-hub',
    label: 'Patient Safety Learning',
    type: 'national', subtype: 'charity', sector: 'raising-concerns', tier: 2,
    description: 'Independent charity and platform (the hub) providing a national hub for patient safety resources, incident learning and policy guidance for healthcare professionals.',
    url: 'https://www.pslhub.org',
  },
  {
    id: 'healthwatch',
    label: 'Healthwatch England',
    type: 'national', subtype: 'consumer-champion', sector: 'raising-concerns', tier: 2,
    description: 'The statutory national consumer champion for health and social care. Escalates public and patient concerns about NHS services to regulators and NHS England.',
    url: 'https://www.healthwatch.co.uk',
  },
  {
    id: 'patient-safety-commissioner',
    label: 'Patient Safety Commissioner',
    type: 'national', subtype: 'regulator', sector: 'raising-concerns', tier: 2,
    description: 'Independent commissioner for England promoting the safety of patients and use of medicines and medical devices. Created following the Cumberlege Review (2020).',
    url: 'https://www.patentsafetycommissioner.org.uk',
  },
  {
    id: 'ftsu-guardian',
    label: 'Freedom to Speak Up Guardian',
    type: 'individual', subtype: 'guardian', sector: 'raising-concerns', tier: 2,
    description: 'Every NHS organisation must have a named Freedom to Speak Up Guardian supporting staff who want to raise concerns. Appointed by, and independent within, their organisation.',
    url: 'https://nationalguardian.org.uk/for-workers/speaking-up/',
  },
]

// ── EDGES (relationships) ──────────────────────────────────────────────────
export const EDGES = [
  // ── Governance internal ───────────────────────────────────────────────────
  { source: 'nhse',    target: 'nmc',      label: 'aligns with',               type: 'policy' },
  { source: 'nhse',    target: 'cqc',      label: 'regulated by',              type: 'regulation' },
  { source: 'nhse',    target: 'rcn',      label: 'consults',                  type: 'stakeholder' },
  { source: 'nhse',    target: 'rcm',      label: 'co-designed midwifery framework', type: 'policy' },
  { source: 'nhse',    target: 'fnf',      label: 'evidence base',             type: 'evidence' },
  { source: 'nhse',    target: 'nhsemployers', label: 'works with',            type: 'policy' },
  { source: 'dhsc',    target: 'nhse',     label: 'mandates',                  type: 'oversight' },
  { source: 'dhsc',    target: 'cqc',      label: 'sponsors',                  type: 'oversight' },
  { source: 'nmc',     target: 'cqc',      label: 'refers concerns to',        type: 'regulation' },
  { source: 'nhse',    target: 'icb',      label: 'sets framework expectations', type: 'oversight' },
  { source: 'cqc',     target: 'icb',      label: 'inspects trusts within',    type: 'regulation' },
  { source: 'icb',     target: 'acute',    label: 'commissions / oversees',    type: 'oversight' },
  { source: 'icb',     target: 'mental-health', label: 'commissions / oversees', type: 'oversight' },
  { source: 'icb',     target: 'community', label: 'commissions / oversees',   type: 'oversight' },
  { source: 'icb',     target: 'ambulance', label: 'commissions / oversees',   type: 'oversight' },
  { source: 'icb',     target: 'prison',   label: 'commissions / oversees',    type: 'oversight' },
  { source: 'icb',     target: 'gp',       label: 'commissions / oversees',    type: 'oversight' },
  { source: 'cqc',     target: 'acute',    label: 'inspects (Well-Led / Safe)', type: 'regulation' },
  { source: 'cqc',     target: 'mental-health', label: 'inspects',             type: 'regulation' },
  { source: 'cqc',     target: 'community', label: 'inspects',                 type: 'regulation' },
  { source: 'acute',   target: 'nursing-director', label: 'employs',           type: 'employment' },
  { source: 'acute',   target: 'preceptorship-lead', label: 'appoints',        type: 'employment' },
  { source: 'nursing-director', target: 'preceptorship-lead', label: 'accountable to', type: 'governance' },
  { source: 'preceptorship-lead', target: 'preceptor', label: 'trains & supports', type: 'support' },
  { source: 'preceptor', target: 'preceptee', label: 'supports transition',    type: 'support' },
  { source: 'nmc',     target: 'preceptee', label: 'holds on register',        type: 'regulation' },
  { source: 'nmc',     target: 'preceptor', label: 'holds on register',        type: 'regulation' },
  { source: 'rcn',     target: 'preceptee', label: 'advocates for',            type: 'advocacy' },
  { source: 'nhsemployers', target: 'acute', label: 'represents in pay/policy', type: 'stakeholder' },
  { source: 'nhsemployers', target: 'mental-health', label: 'represents',      type: 'stakeholder' },

  // ── Higher Education ──────────────────────────────────────────────────────
  { source: 'nmc',     target: 'kcl',      label: 'approves programmes',       type: 'regulation' },
  { source: 'nmc',     target: 'manchester', label: 'approves programmes',     type: 'regulation' },
  { source: 'nmc',     target: 'edinburgh', label: 'approves programmes',      type: 'regulation' },
  { source: 'nmc',     target: 'cardiff',  label: 'approves programmes',       type: 'regulation' },
  { source: 'nmc',     target: 'qub',      label: 'approves programmes',       type: 'regulation' },
  { source: 'nhse',    target: 'kcl',      label: 'commissions education',     type: 'policy' },
  { source: 'nhse',    target: 'manchester', label: 'commissions education',   type: 'policy' },
  { source: 'icb',     target: 'kcl',      label: 'placement partnerships',    type: 'support' },
  { source: 'kcl',     target: 'acute',    label: 'students on placement',     type: 'support' },
  { source: 'manchester', target: 'acute', label: 'students on placement',     type: 'support' },
  { source: 'middlesex', target: 'nhse',   label: 'evidence review 2022',      type: 'evidence' },

  // ── Social Care ───────────────────────────────────────────────────────────
  { source: 'nhse',    target: 'skills-for-care', label: 'aligns workforce strategy', type: 'policy' },
  { source: 'dhsc',    target: 'skills-for-care', label: 'funds & commissions', type: 'oversight' },
  { source: 'skills-for-care', target: 'scie',  label: 'evidence partner',     type: 'stakeholder' },
  { source: 'skills-for-care', target: 'adass', label: 'works with',           type: 'stakeholder' },
  { source: 'cqc',     target: 'rnha',     label: 'inspects care home providers', type: 'regulation' },
  { source: 'dhsc',    target: 'care-workforce-pathway', label: 'published',   type: 'policy' },

  // ── Primary Care ─────────────────────────────────────────────────────────
  { source: 'nhse',    target: 'training-hubs', label: 'funds preceptorship delivery', type: 'oversight' },
  { source: 'nhse',    target: 'qicn',     label: 'aligns community nursing',  type: 'policy' },
  { source: 'icb',     target: 'training-hubs', label: 'regional oversight',   type: 'oversight' },
  { source: 'training-hubs', target: 'gp', label: 'delivers preceptorship',    type: 'support' },
  { source: 'qicn',    target: 'preceptee', label: 'supports community nurses', type: 'advocacy' },

  // ── Allied Health ─────────────────────────────────────────────────────────
  { source: 'hcpc',    target: 'csp',      label: 'regulates profession',      type: 'regulation' },
  { source: 'hcpc',    target: 'rcot',     label: 'regulates profession',      type: 'regulation' },
  { source: 'hcpc',    target: 'bda',      label: 'regulates profession',      type: 'regulation' },
  { source: 'hcpc',    target: 'rcslt',    label: 'regulates profession',      type: 'regulation' },
  { source: 'hcpc',    target: 'scor',     label: 'regulates profession',      type: 'regulation' },
  { source: 'hcpc',    target: 'college-paramedics', label: 'regulates profession', type: 'regulation' },
  { source: 'hcpc',    target: 'college-podiatry', label: 'regulates profession', type: 'regulation' },
  { source: 'nhse-ahp', target: 'nhse',   label: 'part of NHS England',       type: 'governance' },
  { source: 'nhse-ahp', target: 'csp',    label: 'workforce strategy partner', type: 'policy' },
  { source: 'nhse-ahp', target: 'rcot',   label: 'workforce strategy partner', type: 'policy' },
  { source: 'rcslt-ahpf', target: 'csp',  label: 'member body',               type: 'stakeholder' },
  { source: 'rcslt-ahpf', target: 'rcot', label: 'member body',               type: 'stakeholder' },
  { source: 'rcslt-ahpf', target: 'nhse', label: 'advocates to',              type: 'advocacy' },
  { source: 'college-paramedics', target: 'ambulance', label: 'workforce standards', type: 'policy' },

  // ── Wellbeing ─────────────────────────────────────────────────────────────
  { source: 'nhse',    target: 'nhs-practitioner-health', label: 'funds',      type: 'oversight' },
  { source: 'nhse',    target: 'wellbeing-hubs', label: 'funds',               type: 'oversight' },
  { source: 'nhse',    target: 'nhs-charities', label: 'partner body',         type: 'stakeholder' },
  { source: 'nhs-practitioner-health', target: 'preceptee', label: 'supports', type: 'support' },
  { source: 'cavell',  target: 'preceptee', label: 'hardship support',         type: 'support' },
  { source: 'nhs-resolution', target: 'acute', label: 'indemnity & Being Fair', type: 'support' },

  // ── Financial & Unions ────────────────────────────────────────────────────
  { source: 'rcn',     target: 'unison',   label: 'joint pay negotiation',     type: 'stakeholder' },
  { source: 'unison',  target: 'preceptee', label: 'represents in pay/disputes', type: 'advocacy' },
  { source: 'unison',  target: 'preceptor', label: 'represents',               type: 'advocacy' },
  { source: 'nhsprb',  target: 'nhse',     label: 'pay recommendations to',    type: 'oversight' },
  { source: 'nhsprb',  target: 'dhsc',     label: 'pay recommendations to',    type: 'oversight' },
  { source: 'nhsbsa',  target: 'preceptee', label: 'pensions & bursaries',     type: 'support' },
  { source: 'rcn-foundation', target: 'preceptee', label: 'Lamplight hardship grants', type: 'support' },

  // ── Training & Resources ──────────────────────────────────────────────────
  { source: 'nhse',    target: 'elfh',     label: 'operates',                  type: 'oversight' },
  { source: 'nhse',    target: 'nhs-learning-hub', label: 'operates',          type: 'oversight' },
  { source: 'nhse',    target: 'nhs-leadership', label: 'operates',            type: 'oversight' },
  { source: 'nhse',    target: 'futurenhs', label: 'operates',                 type: 'oversight' },
  { source: 'nhse',    target: 'nhse-simulation', label: 'operates',           type: 'oversight' },
  { source: 'elfh',    target: 'preceptee', label: 'elearning resources',      type: 'support' },
  { source: 'elfh',    target: 'preceptor', label: 'preceptor training modules', type: 'support' },
  { source: 'nhs-leadership', target: 'preceptorship-lead', label: 'leadership development', type: 'support' },
  { source: 'kings-fund', target: 'nhse',  label: 'independent research to',  type: 'evidence' },
  { source: 'fnf',     target: 'nhs-leadership', label: 'partner body',        type: 'stakeholder' },

  // ── Raising Concerns ──────────────────────────────────────────────────────
  { source: 'nhse',    target: 'national-guardian', label: 'FTSU programme',   type: 'oversight' },
  { source: 'national-guardian', target: 'ftsu-guardian', label: 'supports & trains', type: 'support' },
  { source: 'ftsu-guardian', target: 'preceptee', label: 'confidential support', type: 'support' },
  { source: 'ftsu-guardian', target: 'acute',    label: 'embedded within',    type: 'governance' },
  { source: 'hssib',   target: 'nhse',     label: 'independent investigations', type: 'oversight' },
  { source: 'phso',    target: 'dhsc',     label: 'ombudsman escalation',     type: 'oversight' },
  { source: 'cqc',     target: 'national-guardian', label: 'well-led assessment', type: 'regulation' },
  { source: 'nmc',     target: 'preceptee', label: 'raising concerns guidance', type: 'regulation' },
  { source: 'protect', target: 'preceptee', label: 'free legal advice',        type: 'support' },
  { source: 'healthwatch', target: 'cqc',  label: 'escalates concerns to',    type: 'oversight' },
  { source: 'psl-hub', target: 'nhse',     label: 'safety learning to',       type: 'evidence' },
]
