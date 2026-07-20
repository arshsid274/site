export const SITE = {
  name: "Lamer Holdings",
  url: "https://www.lamerholdings.com",
  email: "info@lamerholdings.com",
  complianceEmail: "compliance@lamerholdings.com",
  procurementEmail: "procurement@lamerholdings.com",
  careersEmail: "careers@lamerholdings.com",
  mediaEmail: "media@lamerholdings.com",
  registeredOffice: {
    line1: "ABACUS (Seychelles), Suite 3, Global Village",
    line2: "Jivan's Complex, Mont Fleuri",
    locality: "Mahé",
    country: "Seychelles",
    countryCode: "SC",
  },
} as const;

export const NAV = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/companies", label: "Companies" },
  { href: "/sustainability", label: "Sustainability" },
  { href: "/contact", label: "Contact" },
] as const;

export type Company = {
  slug: string;
  name: string;
  shortName: string;
  sector: string;
  sectorShort: string;
  email: string;
  metaTitle: string;
  metaDescription: string;
  /** One-line descriptor used on cards and in the footer. */
  blurb: string;
  /** Longer portfolio summary used on the companies hub. */
  summary: string;
  /** Opening statement on the company page. */
  intro: string[];
  capabilities: { heading: string; body: string; items?: string[] }[];
  /** The end-to-end operational narrative. Carries the page. */
  howWeWork: string[];
  buyers: { heading: string; body: string };
  compliance: string[];
  faqs: { q: string; a: string }[];
  /** Exactly two siblings, phrased purely as common ownership. */
  related: { slug: string; anchor: string }[];
  placeholders: number;
};

const C = {
  uzima: "uzima-medical-services",
  manze: "manze-food-services",
  zil: "zil-engineering-construction",
  lorizon: "lorizon-machinery-spare-parts",
  elite: "elite-airlines-aviation-services",
  edenco: "edenco-oil-and-gas",
} as const;

export const COMPANIES: Company[] = [
  {
    slug: C.uzima,
    name: "Uzima Ltd.",
    shortName: "Uzima",
    sector: "medical services",
    sectorShort: "Medical services",
    email: "uzima@lamerholdings.com",
    metaTitle: "Uzima Ltd | Medical Equipment, Pharma & Lab Supplies",
    metaDescription:
      "Uzima Ltd supplies medical equipment, laboratory products, hospital consumables and healthcare support services. Part of Lamer Holdings.",
    blurb:
      "Medical equipment, laboratory products and hospital consumables, supplied to health institutions and the organisations that fund them.",
    summary:
      "Uzima supplies medical equipment, laboratory products and hospital consumables, and provides healthcare support services. Its buyers are health institutions, public health programmes and the organisations that fund them, which means tender discipline, product registration and documented cold chain handling are the core of the work rather than an addition to it.",
    intro: [
      "Uzima Ltd. supplies the equipment, laboratory products and consumables that health institutions run on, and provides the support services that keep them working.",
      "Buyers in this sector do not select on price alone. They select on whether a supplier can evidence provenance, hold a temperature band through an entire journey, produce documentation at tender, and execute a recall to lot level if one is ever needed. Those disciplines are the product.",
    ],
    capabilities: [
      {
        heading: "Medical equipment",
        body: "Diagnostic imaging, patient monitoring, theatre and ward equipment, and laboratory instrumentation, supplied against written specification with the conformity documentation a procurement panel needs at evaluation.",
        items: [
          "Specification review and technical evaluation support",
          "Conformity documentation and product registration files",
          "Installation, commissioning and acceptance testing coordination",
          "Warranty administration and service escalation",
        ],
      },
      {
        heading: "Laboratory products and diagnostics",
        body: "Reagents, consumables, controls and calibrators, where cold chain integrity and remaining shelf life at delivery decide whether a consignment is usable at all.",
        items: [
          "Reagent and consumable supply against analyser platform",
          "Temperature-controlled handling from receipt to delivery",
          "Lot traceability and certificate of analysis handling",
          "Remaining-shelf-life commitments at point of delivery",
        ],
      },
      {
        heading: "Hospital consumables",
        body: "Single-use and sterile consumables across wards, theatres and outpatient settings, ordered in the volumes and pack configurations institutional buyers actually work in.",
        items: [
          "Sterile and single-use consumable supply",
          "Pack configuration and unit-of-issue alignment",
          "Scheduled replenishment against consumption",
          "Substitution protocols where a line is unavailable",
        ],
      },
      {
        heading: "Healthcare support services",
        body: "The work around the product: tender documentation, product registration support, stock rotation planning, and coordination with biomedical engineering teams.",
        items: [
          "Tender and prequalification documentation",
          "Product registration and regulatory file support",
          "Stock rotation and expiry management planning",
          "Coordination with biomedical and clinical engineering",
        ],
      },
    ],
    howWeWork: [
      "An enquiry begins with specification rather than price. Equipment is matched against the institution's existing platform, power and environmental conditions, service coverage and operator competency; consumables are matched against the analyser or procedure they serve. Where a requirement is written around a single manufacturer, we say so, because a specification that only one supplier can meet is a procurement problem before it is a supply problem.",
      "Sourcing runs only through qualified channels. Falsified and substandard medical products are a recognised problem in import-dependent supply chains, and the control is documentary: named manufacturer or authorised channel, conformity evidence, lot identity, and an unbroken chain of custody. Product that cannot be evidenced to source is not offered.",
      "Temperature-sensitive lines are planned before they move. The band is defined, the packaging configuration is specified against transit duration and ambient conditions, monitoring is applied, and an excursion protocol is agreed in advance so that a deviation produces a documented decision rather than a judgement call at the receiving door.",
      "Delivery is documented. Consignments arrive with the paperwork a receiving store needs to accept them: packing detail, lot identity, expiry, conformity references and temperature record where applicable. Discrepancies are raised inside the notification window rather than absorbed quietly.",
      "After delivery, the obligations continue. Equipment carries installation, commissioning and warranty arrangements. Consumables carry stock rotation and expiry management, because expiry is a waste-prevention control before it is a commercial one. Traceability records are retained so that a recall can be executed to lot level.",
    ],
    buyers: {
      heading: "Who buys medical supplies",
      body: "Public and private hospitals, clinics and health centres; ministries of health and central medical stores; laboratories and diagnostic networks; donor-funded and development health programmes; non-governmental health providers; and biomedical engineering teams procuring against installed platforms. These are institutional buyers, which means tender discipline, documentation and post-award compliance are the terms of engagement.",
    },
    compliance: [
      "Medical supply is a licensed activity in most jurisdictions, and the licence conditions are not administrative. Wholesale distribution, importation and, where relevant, controlled substances are each separately authorised, and the scope of what may be supplied follows the scope of what is licensed.",
      "The frameworks the sector works to are Good Distribution Practice for medicinal products, the conformity assessment regimes governing medical devices, and the traceability and recall obligations that attach to both. We describe these because they define the discipline; nothing here should be read as a statement of certification held.",
    ],
    faqs: [
      {
        q: "Are your products supplied new, and can you evidence provenance to source?",
        a: "Provenance is documented to the manufacturer or authorised channel, with lot identity retained so a consignment can be traced after delivery. Where refurbished equipment is offered at a buyer's request, the refurbisher, the conformity status and the warranty position are stated in writing before order rather than after.",
      },
      {
        q: "What remaining shelf life will you guarantee at delivery?",
        a: "This is agreed at order and written into the supply terms, together with the return and replacement remedy if it is not met. A supplier who will not commit to a shelf-life floor is asking the buyer to carry the write-off risk.",
      },
      {
        q: "How do you handle a temperature excursion in transit?",
        a: "The band, the monitoring method and the excursion protocol are agreed before the consignment moves. If a deviation is recorded, it is reported with the data rather than the consignment being quietly delivered, and the disposition decision is documented.",
      },
      {
        q: "Can you support a public tender, and what documentation can you produce?",
        a: "Yes. Tender submissions typically require corporate and licensing documentation, product conformity files, manufacturer authorisation, and reference evidence. Tell us the submission deadline and the required document set at enquiry, because assembling a compliant file is the part that takes time.",
      },
      {
        q: "Who performs installation, commissioning and warranty work?",
        a: "This is confirmed per equipment line at quotation, because the answer differs between manufacturer-delivered service, an authorised regional network, and a subcontracted engineer. A buyer should never have to discover the answer during a fault.",
      },
    ],
    related: [
      { slug: C.manze, anchor: "Manze Ltd., the food services company of Lamer Holdings" },
      { slug: C.elite, anchor: "Elite Airlines Ltd., the group's aviation and cargo company" },
    ],
    placeholders: 14,
  },

  {
    slug: C.manze,
    name: "Manze Ltd.",
    shortName: "Manze",
    sector: "food services",
    sectorShort: "Food services",
    email: "manze@lamerholdings.com",
    metaTitle: "Manze Ltd | Food Supply, Processing & Distribution",
    metaDescription:
      "Manze Ltd supplies, processes and distributes food products and raw materials, and manufactures finished food products. Part of Lamer Holdings.",
    blurb:
      "Sourcing, processing and distribution of food products and raw materials, and the manufacture of finished food products.",
    summary:
      "Manze sources, processes and distributes food products and raw materials, and manufactures finished food products. The business spans supplier approval and inbound raw material control through to production, shelf-life management and multi-temperature distribution.",
    intro: [
      "Manze Ltd. sources, processes and distributes food products and raw materials, and manufactures finished food products for commercial and institutional buyers.",
      "Food supply is a documentation business wearing a logistics coat. What a buyer is purchasing is not only the product but the ability to say, on demand, where it came from, what temperature it has held since, and which customers received which lot. A supplier who cannot answer the third question cannot execute a recall.",
    ],
    capabilities: [
      {
        heading: "Sourcing and supplier approval",
        body: "Raw materials and finished lines bought against written specification from suppliers who have been approved before the first order, not after the first problem.",
        items: [
          "Written product specifications agreed before first order",
          "Supplier approval with documented re-approval intervals",
          "Country-of-origin and certification documentation at intake",
          "Adulteration and substitution risk assessment on vulnerable lines",
        ],
      },
      {
        heading: "Processing and raw material handling",
        body: "Transformation of raw materials into intermediate and finished product, with the inbound controls that decide whether the output is compliant.",
        items: [
          "Goods-in inspection against specification and temperature",
          "Lot identity assigned at intake and carried through processing",
          "Allergen segregation and changeover controls",
          "Rework and disposition rules for out-of-specification material",
        ],
      },
      {
        heading: "Manufacturing of finished products",
        body: "Production of finished food products in defined pack formats, including work carried out to a customer's own specification.",
        items: [
          "Production against agreed specification and pack format",
          "Shelf-life determination and date-code application",
          "Labelling accuracy including allergen and nutrition declaration",
          "Retained samples held against the production lot",
        ],
      },
      {
        heading: "Distribution and multi-temperature logistics",
        body: "Movement of ambient, chilled and frozen product to commercial and institutional customers, planned around the temperature band rather than around the vehicle.",
        items: [
          "Ambient, chilled and frozen handling to defined bands",
          "Temperature monitoring and delivery-point verification",
          "Order cut-offs and scheduled replenishment",
          "One-step-forward traceability from despatch records",
        ],
      },
    ],
    howWeWork: [
      "Nothing is bought before it is specified. A written product specification defines the material, its origin, its microbiological and physical parameters, its packaging and its shelf life at receipt. A supplier is approved against that specification before the first order, with a documented re-approval interval, because approval that never expires is not approval.",
      "Goods are inspected inward. Temperature is taken at the vehicle, lot identity is recorded, documentation is checked against the consignment, and material that does not meet specification is quarantined rather than absorbed into stock. Lot identity assigned at this point is what makes everything downstream traceable.",
      "Processing and production run on hazard analysis. Critical control points are identified for the specific product and process, monitored during production, and recorded. Allergen segregation and changeover controls govern the sequence in which products are run. Out-of-specification material has a written disposition rule rather than a discretionary one.",
      "Shelf life is determined, not estimated. Date coding follows from that determination, labelling carries accurate allergen and nutrition declaration, and retained samples are held against the production lot so that a later question can be answered against physical evidence.",
      "Distribution holds the temperature band it has committed to, and records that it did. Despatch records link customer to lot, which is what makes recall possible. Traceability is tested rather than assumed: a mock recall establishes the actual time taken to identify and locate an affected lot, and that time is the real measure of whether the system works.",
    ],
    buyers: {
      heading: "Who buys food supply",
      body: "Wholesalers and distributors; supermarket and retail groups; hotels, restaurants and catering operators; institutional caterers serving hospitals, schools and workforce sites; food manufacturers buying raw materials and intermediates; and organisations procuring for programme and relief supply. Institutional and retail buyers both audit, and both expect documentation to be available rather than assembled on request.",
    },
    compliance: [
      "Food business operation is a registered and inspected activity in every jurisdiction we would trade in, and the registration defines what may be handled and where.",
      "The frameworks the sector works to are the Codex Alimentarius principles of hazard analysis and critical control points, the prerequisite programmes that sit beneath them, and the traceability and withdrawal obligations that attach to any food business. Certification schemes such as ISO 22000, FSSC 22000 and BRCGS exist to audit those disciplines against a published standard. We reference them as the framework of the sector and make no statement here about certification held.",
    ],
    faqs: [
      {
        q: "What food safety certification do you hold?",
        a: "Certification is stated by scheme, certification body, certificate number, scope and expiry, or not stated at all. A scope statement matters as much as the certificate, because a certificate covering one site or one activity does not cover others. Where certification is not yet held, we would rather say so and describe the underlying controls.",
      },
      {
        q: "Can you demonstrate traceability, and how quickly?",
        a: "Traceability is one step forward and one step back, from intake lot identity through to despatch records. The meaningful number is the time taken in a mock recall to identify and locate an affected lot, and it should be evidenced by a dated exercise rather than asserted.",
      },
      {
        q: "How do you manage allergens?",
        a: "Allergen risk is managed by segregation at storage, sequencing at production, documented changeover and cleaning between runs, and verification of the finished label against the actual formulation. Labelling accuracy is the last control and the one a consumer relies on.",
      },
      {
        q: "What temperature bands do you operate, and how are they verified?",
        a: "The bands handled, the monitoring method and the verification point at delivery are confirmed at enquiry. A delivery-point temperature reading recorded and signed is the evidence; a claim of cold chain capability without it is not.",
      },
      {
        q: "Do you supply against a customer's own specification?",
        a: "Where production to a buyer's specification is undertaken, the specification, pack format, minimum order quantity and shelf-life commitment are agreed in writing before production is scheduled.",
      },
    ],
    related: [
      { slug: C.uzima, anchor: "Uzima Ltd., the medical services company of Lamer Holdings" },
      { slug: C.lorizon, anchor: "Lorizon Machinery Trading Ltd., the group's machinery company" },
    ],
    placeholders: 23,
  },

  {
    slug: C.zil,
    name: "Zil Engineering & Trading Ltd.",
    shortName: "Zil Engineering",
    sector: "construction services",
    sectorShort: "Construction services",
    email: "zil@lamerholdings.com",
    metaTitle: "Zil Engineering & Trading | Construction & Civil Works",
    metaDescription:
      "Zil Engineering & Trading Ltd delivers construction, civil engineering, infrastructure, project management and materials supply. Part of Lamer Holdings.",
    blurb:
      "Construction, civil engineering and infrastructure work, building renovation, project management, and the supply of construction materials.",
    summary:
      "Zil delivers construction, civil engineering and infrastructure work, building renovation and project management, and supplies construction materials and engineering solutions. The work is organised around project phases, from feasibility and design coordination through construction to handover and the defects liability period.",
    intro: [
      "Zil Engineering & Trading Ltd. delivers construction, civil engineering and infrastructure work, and supplies the materials and engineering solutions that projects consume.",
      "Construction is bought on evidence of delivery capacity, not on capability statements. A client evaluating a contractor is asking four questions: can you be bonded for this value, are you insured to this limit, what is your safety record, and who exactly performs the work. This page is organised around answering them.",
    ],
    capabilities: [
      {
        heading: "Construction and civil engineering",
        body: "Building construction and civil works delivered against a defined contract form, with the scope split between self-performed and specialist-subcontracted trades stated at tender rather than discovered on site.",
        items: [
          "Building construction, structural and finishing works",
          "Civil works including earthworks, drainage and hardstanding",
          "Temporary works design coordination and permit-to-work control",
          "Subcontractor prequalification and competency verification",
        ],
      },
      {
        heading: "Infrastructure development",
        body: "Works whose value sits in coordination across interfaces: services, utilities, access and phasing around an operating site.",
        items: [
          "Utilities and services coordination across interfaces",
          "Phased delivery around live and occupied operations",
          "Access, logistics and site establishment planning",
          "Interface management between separate contract packages",
        ],
      },
      {
        heading: "Renovation and refurbishment",
        body: "Work to existing buildings, where the risk sits in what the survey did not find and the contract has to say who carries that.",
        items: [
          "Condition survey and existing-services investigation",
          "Structural alteration and strengthening",
          "Occupied-building phasing and separation",
          "Provisional sums and variation control for latent conditions",
        ],
      },
      {
        heading: "Project management",
        body: "Programme, cost and quality control across the project lifecycle, with the reporting cadence and change procedure agreed before mobilisation.",
        items: [
          "Programme development and critical path management",
          "Cost control, valuation and variation administration",
          "Quality inspection and test plans with hold points",
          "Handover documentation and defects liability administration",
        ],
      },
      {
        heading: "Construction materials and engineering solutions",
        body: "Supply of materials and engineered items against project specification, where lead time against the construction programme matters more than unit price.",
        items: [
          "Supply against specification with conformity documentation",
          "Lead-time planning against the construction programme",
          "Stocked versus sourced-to-order distinction stated at quotation",
          "Incoterms, delivery and site-handling arrangements defined",
        ],
      },
    ],
    howWeWork: [
      "A project starts with the brief tested against reality. Buildability, ground and existing-condition information, access and phasing constraints, statutory approvals and utility interfaces are examined before a programme is committed. Where the information is not yet available, that gap is named and priced as a risk rather than absorbed into an optimistic figure.",
      "Design coordination establishes who is responsible for what. Whether design is client-provided, contractor-developed or split, the interfaces and the professional responsibility for each element are recorded, because a design gap discovered during construction is the most expensive kind.",
      "Procurement follows the programme, not the other way round. Materials and engineered items are ordered against lead time relative to the critical path, subcontractors are prequalified on competency and safety record before award, and long-lead items are identified at tender rather than at mobilisation.",
      "Construction runs on permit-to-work, method statements and risk assessments, with site induction, competency verification and inspection and test plans carrying defined hold points. Occupational health and safety is the most material issue in this sector globally, and the controls are the work rather than a layer on top of it. Progress, cost and change are reported on an agreed cadence, and variations are administered in writing as they arise.",
      "Handover is a document set as much as a completed building. Commissioning records, test certificates, as-built information, operation and maintenance manuals, warranties and asset data are compiled through the project rather than assembled afterwards. The defects liability period is then administered against a defined response obligation, and closed formally.",
    ],
    buyers: {
      heading: "Who buys construction",
      body: "Private developers and property owners; government departments and public infrastructure agencies; institutional clients including health, education and industrial operators; principal contractors letting subcontract packages; facilities and asset managers procuring refurbishment; and development-funded programmes. Public and institutional buyers procure through tender, which means prequalification, bonding, insurance and safety evidence decide who is allowed to bid before price is ever considered.",
    },
    compliance: [
      "Contracting is a licensed and, in many jurisdictions, graded activity. The registration class determines the value and category of work that may be undertaken, and it is a matter of public record rather than self-description.",
      "The frameworks the sector works to are the recognised standard contract forms and their allocation of risk, the occupational safety regimes governing construction sites, and the quality, environmental and safety management system standards published as ISO 9001, ISO 14001 and ISO 45001. We reference these as the structure of the sector. Certification against any of them is a separate, auditable fact and is not claimed here.",
      "Bribery risk in permitting and tendering is a recognised feature of this sector rather than an abstract concern. It is addressed in the group code of conduct, which prohibits facilitation payments without exception and extends to agents and intermediaries acting on our behalf.",
    ],
    faqs: [
      {
        q: "What is your contractor registration and grade?",
        a: "Registration authority, number, class and validity are stated in full or not stated at all. Grade determines eligible contract value and category, so a buyer needs the actual registration rather than a description of capability.",
      },
      {
        q: "What works do you self-perform, and what is subcontracted?",
        a: "The split is stated per package at tender. This is the question that separates contractors from brokers, and a buyer is entitled to a direct answer before award rather than an org chart afterwards.",
      },
      {
        q: "What is your safety performance?",
        a: "Meaningful answers are numbers: lost-time injury frequency rate, total recordable incident rate, man-hours worked, lost-time injuries, fatalities and any enforcement notices, over a stated period. A safety policy document is not a safety record.",
      },
      {
        q: "What bonding and insurance can you provide?",
        a: "Performance and advance payment bonding capacity, uncommitted capacity, the issuing bank or surety, and whether wording is on-demand or conditional. Insurance is stated by policy type, indemnity limit and deductible. Both are verifiable, and both should be confirmed before award.",
      },
      {
        q: "Can you provide reference projects?",
        a: "Reference projects are given with client, scope, value, contract form, duration, completion date and a contactable referee, subject to the client's written consent to be named. A project list without referees is not a reference.",
      },
    ],
    related: [
      { slug: C.lorizon, anchor: "Lorizon Machinery Trading Ltd., the group's machinery and spare parts company" },
      { slug: C.edenco, anchor: "Edenco Oil & Gas Ltd., the group's fuel and lubricants company" },
    ],
    placeholders: 17,
  },

  {
    slug: C.lorizon,
    name: "Lorizon Machinery Trading Ltd.",
    shortName: "Lorizon Machinery",
    sector: "machinery and spare parts",
    sectorShort: "Machinery and spare parts",
    email: "lorizon@lamerholdings.com",
    metaTitle: "Lorizon Machinery Trading | Industrial Spare Parts",
    metaDescription:
      "Lorizon Machinery Trading Ltd supplies industrial, agricultural and construction machinery, spare parts, maintenance and technical support.",
    blurb:
      "Industrial, agricultural and construction machinery, spare parts, and the maintenance and technical support that keep them running.",
    summary:
      "Lorizon supplies industrial, agricultural and construction machinery together with spare parts, and provides installation, commissioning, maintenance and technical support. The commercial substance of this business is uptime: what a buyer is actually purchasing is the availability of the machine, not the machine.",
    intro: [
      "Lorizon Machinery Trading Ltd. supplies industrial, agricultural and construction machinery, along with the spare parts, installation, maintenance and technical support that keep it working.",
      "The machine is not the product. Availability is. A buyer choosing between suppliers of identical equipment is choosing between parts lead times, technician competency and whether the part that arrives is what the invoice says it is. Everything below is organised around that.",
    ],
    capabilities: [
      {
        heading: "Machinery supply",
        body: "Industrial, agricultural and construction equipment specified against the duty it will actually perform, in the conditions it will actually work in.",
        items: [
          "Specification against duty cycle and operating environment",
          "Emission tier and power rating matched to site requirements",
          "Attachment and configuration selection",
          "Delivery, offloading and site positioning arrangements",
        ],
      },
      {
        heading: "Spare parts supply",
        body: "Parts supplied with the grade stated on the quotation. Genuine, equivalent and aftermarket are different commercial propositions with different consequences, and a buyer is entitled to know which they are being sold.",
        items: [
          "Part grade stated explicitly at quotation, never implied",
          "Identification by part number, serial and machine configuration",
          "Provenance documentation on safety-critical items",
          "Lead-time distinction between stocked and indent lines",
        ],
      },
      {
        heading: "Installation and commissioning",
        body: "Equipment placed into service against a defined acceptance test, with the operator handover treated as part of the commissioning rather than an afterthought.",
        items: [
          "Mechanical and electrical installation coordination",
          "Commissioning against a written acceptance test",
          "Operator handover and safe-operation briefing",
          "Documentation, manuals and asset data transfer",
        ],
      },
      {
        heading: "Maintenance and technical support",
        body: "Planned maintenance that prevents failures and corrective response for the ones that happen anyway, with the response obligation written down rather than assumed.",
        items: [
          "Planned preventive maintenance to interval or condition",
          "Corrective response with a defined response obligation",
          "Fault diagnosis and technical advisory",
          "Wear-item monitoring and component life planning",
        ],
      },
    ],
    howWeWork: [
      "Selection begins with duty rather than catalogue. Load, cycle, hours, terrain, ambient conditions, fuel and lubricant availability, operator skill and the maintenance regime the site can realistically sustain all determine what should be specified. Equipment chosen against a brochure and commissioned into conditions it was not specified for fails early, and the failure is recorded as a product problem when it was a specification problem.",
      "Parts identification runs from the machine, not from the description. Serial number, build configuration and superseded part references determine what actually fits, because a part number that was correct for an earlier build is a returned part and a stopped machine. Grade is stated at quotation: genuine, equivalent or aftermarket, named rather than implied.",
      "Provenance matters most where failure is dangerous. Counterfeit parts in braking, lifting, pressure and rotating systems are a safety issue before they are a commercial one, and the defence is documentary: named source, traceable channel and supporting documentation on safety-critical items. Where provenance cannot be evidenced, that is disclosed rather than glossed.",
      "Installation ends at a written acceptance test rather than at a delivery note, and the operator briefing is part of it. Equipment handed over without competent operation is equipment that will be damaged, and operator error is the most common root cause behind claims that are recorded as mechanical failure.",
      "Support is planned around service life. Preventive maintenance is scheduled to interval or condition, wear items are monitored, and component life is planned so that replacement is a decision rather than an emergency. Keeping machinery in service is also the honest environmental argument for this business: service-life extension, not sustainability language.",
    ],
    buyers: {
      heading: "Who buys machinery and parts",
      body: "Contractors and plant hire operators; agricultural producers and estates; quarrying, mining and materials processing operations; manufacturers and industrial plant operators; utilities and municipal fleets; and equipment owners buying parts and service independently of where the machine was originally purchased. Buying is driven by downtime cost, which is why parts availability and response obligation are usually decisive over headline price.",
    },
    compliance: [
      "Machinery supply carries obligations that follow the equipment: conformity and safety documentation, operator and maintenance manuals in a usable language, and accurate declaration of specification including emission tier and power rating.",
      "Where maintenance is performed, waste oil, filters, batteries, tyres and hydraulic fluid arise and require licensed disposal routes. This is a real obligation attached to the work rather than a general environmental statement.",
      "The word genuine is a specific claim. It means parts sourced through the manufacturer's own channel with traceable provenance, and it is defensible only where a dealership or authorised distribution arrangement supports it. Where parts are equivalent or aftermarket, they are described as such.",
    ],
    faqs: [
      {
        q: "Are your parts genuine, and how is that evidenced?",
        a: "Grade is stated on every quotation: genuine, original-equipment equivalent, or aftermarket. Genuine means sourced through the manufacturer's channel with traceable provenance, supported by the dealership or distribution arrangement that permits the claim. On safety-critical items we provide the supporting documentation rather than the assertion.",
      },
      {
        q: "What manufacturer authorisations do you hold?",
        a: "Authorisations are stated by brand, product line and territory. This matters commercially and legally: it determines warranty standing, parts channel access and whether a technician is factory-trained on the equipment in question.",
      },
      {
        q: "What are your parts lead times?",
        a: "Quotations distinguish stocked lines from indent lines, because they are different products from a buyer's perspective. An indent line quoted as though it were stocked is how a planned shutdown becomes an extended one.",
      },
      {
        q: "Who performs maintenance work, and what are their qualifications?",
        a: "Whether work is performed by our own technicians, a manufacturer network or a subcontractor is stated per equipment line, along with the relevant training or certification. Buyers rely on this when a machine is under warranty.",
      },
      {
        q: "What response commitment can you give on a breakdown?",
        a: "Response obligations are written into the service agreement rather than implied by the relationship, and they should specify response time, coverage hours and escalation. A commitment that exists only in conversation is not a commitment.",
      },
    ],
    related: [
      { slug: C.zil, anchor: "Zil Engineering & Trading Ltd., the construction company of Lamer Holdings" },
      { slug: C.edenco, anchor: "Edenco Oil & Gas Ltd., the group's lubricants and petroleum products company" },
    ],
    placeholders: 19,
  },

  {
    slug: C.elite,
    name: "Elite Airlines Ltd.",
    shortName: "Elite Airlines",
    sector: "aviation services",
    sectorShort: "Aviation services",
    email: "elite@lamerholdings.com",
    metaTitle: "Elite Airlines Ltd | Aviation & Cargo Services",
    metaDescription:
      "Elite Airlines Ltd arranges air charter through licensed operators and provides aviation logistics, flight support and load control services.",
    blurb:
      "Air charter arrangement through licensed operators, aviation logistics, flight support and load control.",
    summary:
      "Elite Airlines provides aviation services: arranging passenger and cargo air charter through licensed operators, aviation logistics and freight forwarding, flight support and trip coordination, and load control.",
    intro: [
      "Elite Airlines Ltd. arranges and supports air transport. It does not operate aircraft, it does not hold an air operator certificate, and it holds no traffic rights of its own.",
      "The trading name says Airlines, so that is answered in the first paragraph rather than left for a buyer to discover in a contract. Flights arranged through this company are performed by licensed third-party air operator certificate holders. The aircraft, the crews, the operating approvals and the route authorities are theirs.",
      "The work this company does is the work either side of the flight: load control, flight support, aviation logistics, and the sourcing and vetting of the operators who fly. That is a narrower claim than the name suggests, and it is the part a buyer can verify.",
    ],
    capabilities: [
      {
        heading: "Load control, weight and balance",
        body: "Load planning and departure control delivered from an operations desk. This is the most verifiable capability on the page: it requires competency and a licence to the carrier's system, not a station or ground equipment.",
        items: [
          "Load planning and loading instruction reports",
          "Weight and balance, centre of gravity and trim sheets",
          "Centralised load control from an operations centre",
          "Last-minute change handling within tolerance",
          "Special load documentation and notification to captain",
          "Post-flight load messaging and reconciliation",
        ],
      },
      {
        heading: "Flight support and trip coordination",
        body: "The permissions, planning and ground arrangements a flight needs before it is legal to depart, coordinated across every state on the route.",
        items: [
          "Overflight, landing and ad hoc permit arrangement",
          "Diplomatic clearances and slot or prior-permission coordination",
          "Route and airport feasibility, runway and performance review",
          "Flight planning, weather and notice-to-airmen briefing",
          "Fuel arrangement, uplift reconciliation and charge settlement",
          "Outstation handling appointment and supervision",
        ],
      },
      {
        heading: "Aviation logistics and freight forwarding",
        body: "Movement of cargo by air and the documentation chain around it, including the time-critical work where the cost of delay exceeds the cost of freight.",
        items: [
          "Consolidated and direct air freight forwarding",
          "Time-critical and next-flight-out movement",
          "Aircraft-on-ground spare parts coordination",
          "Export and import documentation preparation",
          "Customs clearance coordination through licensed brokers",
          "Multimodal sea-air and road-feeder movements",
        ],
      },
      {
        heading: "Charter arrangement and operator vetting",
        body: "Sourcing capacity from licensed operators, and verifying them. For a company that arranges rather than operates, the vetting is the product.",
        items: [
          "Air operator certificate and operations specification verification",
          "Insurance certificate and limit verification",
          "Airworthiness and maintenance status checks",
          "Crew licensing and currency confirmation",
          "Occurrence history and safety-list screening",
          "Sanctions and beneficial ownership screening on the operator",
        ],
      },
    ],
    howWeWork: [
      "Aviation delivery is a documentation chain, and nothing moves until the previous step is signed off. An enquiry is first tested for feasibility: route, payload or passenger numbers, dates, dimensions, commodity and hazard class, checked against runway length and pavement strength, aircraft performance at expected temperature and elevation, airport and customs hours, slot availability, and permit lead times in every state on the route including overflight states.",
      "In parallel, the counterparty and the destination are screened for sanctions and denied-party exposure. This runs early rather than at contract stage, because discovering an exposure after commitment is considerably worse than declining at enquiry.",
      "Capacity is then sourced from operators who have been screened rather than merely quoted. Verification covers the air operator certificate and its operations specifications, insurance and limits, airworthiness and maintenance status, crew licensing and currency, occurrence history, safety-list screening and beneficial ownership. Re-verification happens on a defined interval, and the specific aircraft and crew assigned are checked against the release before the flight rather than only at contracting.",
      "Contracting states who is responsible for what. Charter terms carry named exclusions; ground services are contracted on the standard industry ground handling agreement with a location-specific annex and service level agreement. Whether we act as principal or as disclosed agent is stated, because it determines who a customer's claim runs against.",
      "Pre-flight is the heaviest phase: permits, slots or prior permission, handling appointed at every station, fuel released, catering and crew accommodation arranged, flight plan filed. Cargo is accepted, screened and built to unit load devices, reconciled against the air waybill, with dangerous goods clearing an acceptance checklist and declared on the notification to captain. Load control issues the loading instruction, then the loadsheet and trim sheet to the flight deck. After the flight, load messages, proof of delivery, damage reported inside the claim window, invoice reconciliation and performance review close the file.",
    ],
    buyers: {
      heading: "Who buys aviation services",
      body: "Scheduled and charter airlines needing outstation support or seasonal capacity; freight forwarders and logistics providers; government departments, defence and civil protection agencies; humanitarian and development organisations procuring through common vendor registration; energy, mining and offshore operators moving crews on fixed rotations; engineering contractors moving outsize project cargo; and aircraft operators, maintenance organisations and parts distributors moving aircraft-on-ground shipments where the decision is made in minutes and measured in time-to-wing.",
    },
    compliance: [
      "This company arranges air transport. It does not hold an air operator certificate, and it does not represent itself as a carrier. Operating approvals, traffic rights and airworthiness responsibility rest with the licensed operators who perform the flights.",
      "The frameworks the sector works to are the ICAO annexes governing aircraft operation, aviation security and dangerous goods, the Chicago Convention and the bilateral air services agreements that determine traffic rights, the IATA dangerous goods regulations and their competency-based training regime, the standard ground handling agreement, and the Montreal Convention 1999 governing carrier liability. We describe these because they define how the work is done. Audit registrations such as IOSA and ISAGO, and accreditations such as IATA cargo agency, are separate verifiable facts and are not claimed here.",
      "Operator vetting is the substantive control in an arranger model, and it is the part a buyer should interrogate hardest.",
    ],
    faqs: [
      {
        q: "Do you hold your own air operator certificate?",
        a: "No. Flights are performed by licensed third-party air operator certificate holders whom we source and vet. We do not operate aircraft, hold traffic rights, or represent ourselves as a carrier. If that position ever changes, the certificate number, issuing authority, approved operation types and area of operation would be published here.",
      },
      {
        q: "How do you vet the operators you use on my behalf?",
        a: "Verification covers the air operator certificate and operations specifications, insurance certificates and limits, certificate of airworthiness and maintenance status, crew licensing and currency, occurrence and enforcement history, safety-list screening, and sanctions and beneficial ownership. Re-verification runs on a defined interval, and the specific aircraft and crew assigned are checked before the flight.",
      },
      {
        q: "Do you contract as principal or as agent?",
        a: "This is stated per service line before contracting, because it determines who carries liability and who a claim runs against. A buyer should never have to establish this from the invoice.",
      },
      {
        q: "If I prepay a charter, how are my funds held?",
        a: "Charter is customarily prepaid, which makes this a fair and important question. The arrangements for holding client funds, the option to pay the operating carrier directly, and the position on cancellation and operator insolvency are set out in the contract before payment is requested.",
      },
      {
        q: "How is liability allocated?",
        a: "Under the applicable framework for the service: charter agreements with named exclusions, the standard ground handling agreement and its liability article where ground services are contracted, the Montreal Convention 1999 for carriage, and forwarding conditions where we act as forwarder. The determining factor is our principal or agent status, which is stated at contracting.",
      },
      {
        q: "Which airports and territories do you cover?",
        a: "Coverage is stated as what is arranged through partners rather than as a map of pins. Arranging capacity through a vetted partner network is a respected model in this sector; implying owned stations that do not exist is not.",
      },
    ],
    related: [
      { slug: C.edenco, anchor: "Edenco Oil & Gas Ltd., the group's petroleum products company" },
      { slug: C.manze, anchor: "Manze Ltd., the food services company of Lamer Holdings" },
    ],
    placeholders: 19,
  },

  {
    slug: C.edenco,
    name: "Edenco Oil & Gas Ltd.",
    shortName: "Edenco",
    sector: "oil and gas services",
    sectorShort: "Oil and gas services",
    email: "edenco@lamerholdings.com",
    metaTitle: "Edenco Oil & Gas Ltd | Fuel, Lubricants & Logistics",
    metaDescription:
      "Edenco Oil & Gas Ltd supplies petroleum products, lubricants and gas, with fuel logistics, storage and energy support services. Part of Lamer Holdings.",
    blurb:
      "Supply, distribution and trading of petroleum products, lubricants and gas, with fuel logistics and storage.",
    summary:
      "Edenco supplies, distributes and trades refined petroleum products, lubricants and gas, with associated fuel logistics and storage. Product integrity is the discipline the business turns on: specification, certificates of quality, and custody of the product from loading to delivery.",
    intro: [
      "Edenco Oil & Gas Ltd. supplies, distributes and trades refined petroleum products, lubricants and gas, with the fuel logistics and storage arrangements that move them.",
      "Fuel supply attracts more misrepresentation than any other sector this group works in. Vague capability language, unverifiable allocations and product offered without specification are the recognised markers of it. Precision is therefore not a limitation on this page; it is the differentiator.",
    ],
    capabilities: [
      {
        heading: "Petroleum products supply and distribution",
        body: "Refined products supplied against a named specification with the quality documentation that proves what is in the tank.",
        items: [
          "Supply against named product grade and specification",
          "Certificates of quality and analysis with each movement",
          "Independent inspection at loading and discharge",
          "Custody transfer measurement and quantity reconciliation",
          "Bulk and packaged delivery arrangements",
        ],
      },
      {
        heading: "Lubricants",
        body: "Lubricants matched to the equipment and duty they serve, where the specification approval matters more than the brand on the drum.",
        items: [
          "Selection against manufacturer specification and approval",
          "Grade, viscosity and performance-level confirmation",
          "Packaged and bulk supply formats",
          "Product data and safety data sheet provision",
        ],
      },
      {
        heading: "Gas",
        body: "Liquefied petroleum gas supply and trading, where handling, vessel integrity and delivery safety carry the operational risk.",
        items: [
          "Liquefied petroleum gas supply and trading",
          "Cylinder and bulk delivery arrangements",
          "Vessel integrity and inspection requirements",
          "Delivery-point safety and handover controls",
        ],
      },
      {
        heading: "Fuel logistics and storage",
        body: "Movement and holding of product, planned around containment and custody rather than around the cheapest available vehicle.",
        items: [
          "Road, coastal and multimodal movement planning",
          "Loading and discharge procedure control",
          "Road tanker safety and driver competency requirements",
          "Storage arrangements with secondary containment",
          "Spill prevention, preparedness and response planning",
          "Stock reconciliation and loss control",
        ],
      },
    ],
    howWeWork: [
      "Supply begins with specification, because in this sector the product name is not the product. A grade is named, the specification is stated, and the intended application is confirmed against it. Product offered without a specification, or described only by a trade name, is the first marker of a supply chain that will not survive inspection.",
      "Quality is evidenced at each transfer of custody. Certificates of quality and analysis accompany movements, independent inspection is arranged at loading and discharge where the value or the risk justifies it, and sampling and retention allow a later dispute to be settled against physical evidence rather than correspondence.",
      "Quantity is measured, not estimated. Custody transfer measurement establishes what was loaded and what was discharged, temperature correction is applied where the standard requires it, and reconciliation identifies loss rather than absorbing it. Unexplained loss between loading and discharge is investigated, because the alternative is paying for it repeatedly.",
      "Movement is planned around containment. Vehicle and vessel suitability, loading and discharge procedure, driver competency, route and delivery-point assessment, and static and hot-work controls govern how product travels. Spill prevention, preparedness and response are arranged before a movement rather than improvised during one.",
      "Storage arrangements are held to tank integrity, secondary containment, water and sludge management, and stock reconciliation. Contaminated water and sludge require licensed disposal routes. Product stewardship continues past delivery through safety data sheet provision and handling guidance, because a supplier's obligation does not end at the discharge point.",
    ],
    buyers: {
      heading: "Who buys fuel and lubricants",
      body: "Power generation operators and independent producers; mining, quarrying and industrial operators; construction contractors fuelling plant on site; transport, haulage and fleet operators; marine and fishing operators; agricultural producers and estates; commercial and institutional facilities running standby generation; and resellers and distributors buying for onward supply. Buying decisions turn on security of supply, product integrity and delivery reliability, because a fuel failure stops everything downstream of it.",
    },
    compliance: [
      "The supply, handling, storage and distribution of petroleum products and liquefied petroleum gas are licensed activities in effectively every jurisdiction. Licences are specific to activity and to site, and the scope of operation follows the scope of the licence.",
      "The frameworks the sector works to are the published product specifications that define each grade, the process safety and containment standards governing storage and handling, the regulations governing carriage of dangerous goods by road and sea, and the sector reporting framework published as GRI 11 for oil and gas. These describe the discipline. Any certification against a management system standard is a separate auditable fact and is not claimed here.",
      "On emissions, the position is stated plainly. The majority of greenhouse gas emissions associated with petroleum products arise when those products are used by customers rather than within the operations that distribute them. Under the GHG Protocol this falls within Scope 3, Category 11. We do not present fuel distribution as a climate solution.",
    ],
    faqs: [
      {
        q: "Are you a principal, an agent or a broker on a given supply?",
        a: "This is stated per product line before contracting. It determines who holds title, who carries performance risk and who a claim runs against. In a sector where intermediation is common and often undisclosed, a supplier who will not answer this directly is telling you something.",
      },
      {
        q: "What quality documentation accompanies a delivery?",
        a: "Certificates of quality and analysis against the named specification, with independent inspection at loading and discharge where value or risk justifies it. Samples are retained so a subsequent dispute can be resolved against physical evidence.",
      },
      {
        q: "Do you own storage, or is it third-party?",
        a: "Storage arrangements are stated explicitly as owned, leased or third-party terminal, with the location named. Storage implies assets, and a supplier should not let a buyer assume ownership that does not exist.",
      },
      {
        q: "How is quantity measured and reconciled?",
        a: "By custody transfer measurement at loading and discharge, with temperature correction applied where the standard requires it, and reconciliation of any difference. Loss that is never reconciled is loss the buyer eventually pays for.",
      },
      {
        q: "What licences do you hold for fuel handling and storage?",
        a: "Licences are stated by activity, authority, number, site and validity, or not stated at all. Fuel is a licensed trade and the licence is the entry condition, not a credential to be described in general terms.",
      },
    ],
    related: [
      { slug: C.elite, anchor: "Elite Airlines Ltd., the aviation services company of Lamer Holdings" },
      { slug: C.lorizon, anchor: "Lorizon Machinery Trading Ltd., the group's machinery company" },
    ],
    placeholders: 23,
  },
];

export function getCompany(slug: string): Company | undefined {
  return COMPANIES.find((c) => c.slug === slug);
}

export function companyPath(slug: string): string {
  return `/companies/${slug}`;
}
