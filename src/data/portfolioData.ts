/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type ProfileSlug = "dataengineer" | "softwareengineer" | "datascientist" | "datanalyst";
export type ProjectType = "AI" | "DE" | "DS";
export type ProjectIcon = "trend" | "pipeline" | "monitoring" | "application" | "translation" | "risk";

export interface ProjectDecision {
  title: string;
  detail: string;
}

export interface ProjectImpactMetric {
  label: string;
  value: string;
  detail: string;
}

export interface Project {
  id: string;
  title: string;
  type: ProjectType;
  typeLabel: string;
  icon: ProjectIcon;
  summary: string;
  role: string;
  domain: string;
  techStack: string[];
  problem: string;
  context: string;
  stakes: string;
  ownership: string[];
  goals: string[];
  architecture: string;
  implementation: string[];
  decisions: ProjectDecision[];
  flow: string;
  challenges: string[];
  impactMetrics: ProjectImpactMetric[];
  outcomes: string[];
  lessons: string[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
  skills: string[];
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface Education {
  school: string;
  degree: string;
  period: string;
  location: string;
  details: string[];
}

export interface SectionIntro {
  eyebrow: string;
  title: string;
  description: string;
}

export interface ContactSectionCopy extends SectionIntro {
  chips: string[];
  reachLabel: string;
}

export interface PortfolioData {
  personal: {
    name: string;
    headline: string;
    about: string[];
    focusAreas: string[];
    email: string;
    linkedin: string;
    github: string;
    resume: string;
    location: string;
  };
  metrics: {
    label: string;
    value: string;
  }[];
  skills: SkillGroup[];
  projects: Project[];
  experience: Experience[];
  education: Education[];
  certifications: {
    name: string;
    issuer: string;
    date: string;
  }[];
  sectionCopy: {
    about: {
      eyebrow: string;
      title: string;
      impactLabel: string;
      focusLabel: string;
    };
    skills: SectionIntro;
    projects: SectionIntro;
    experience: SectionIntro;
    education: SectionIntro;
    contact: ContactSectionCopy;
  };
  footer: {
    tagline: string;
  };
}

export const profileSlugs: ProfileSlug[] = ["dataengineer", "softwareengineer", "datascientist", "datanalyst"];
export const defaultProfileSlug: ProfileSlug = "dataengineer";

const basePublicPath =
  typeof import.meta !== "undefined" && import.meta.env?.BASE_URL
    ? import.meta.env.BASE_URL
    : "/";

function withPublicAsset(path: string) {
  const normalizedBase = basePublicPath.endsWith("/") ? basePublicPath : `${basePublicPath}/`;
  return `${normalizedBase}${path.replace(/ /g, "%20")}`;
}

export function isProfileSlug(value: string | undefined): value is ProfileSlug {
  return Boolean(value && profileSlugs.includes(value as ProfileSlug));
}

const sharedIdentity = {
  name: "Ganesh Makkina",
  email: "gm832@scarletmail.rutgers.edu",
  linkedin: "https://www.linkedin.com/in/ganesh-makkina/",
  github: "https://github.com/makkinaganesh25",
  location: "New Brunswick, NJ",
};

const sharedEducation: Education[] = [
  {
    school: "Rutgers University - New Brunswick",
    degree: "Master of Statistics - Data Science",
    period: "Sep 2023 - May 2025",
    location: "New Brunswick, NJ",
    details: [
      "Coursework: Regression & Time Series, Probability & Statistics, Advanced Database Management, Financial Data Mining, Data Wrangling",
      "Graduate training focused on statistical modeling, database design, cloud data workflows, and analytical systems.",
    ],
  },
];

const sharedCertifications = [
  {
    name: "AWS Certified Associate Data Engineer",
    issuer: "Amazon Web Services",
    date: "Resume-listed",
  },
  {
    name: "GCP Certified Associate Cloud Engineer",
    issuer: "Google Cloud",
    date: "Resume-listed",
  },
  {
    name: "SQL (Intermediate)",
    issuer: "HackerRank",
    date: "Jun 2021",
  },
];

const sharedExperience: Experience[] = [
  {
    company: "S&P Global Ratings",
    role: "Senior Data Engineer",
    period: "Oct 2025 - Present",
    description: [
      "Public LinkedIn article lists the current chapter as Senior Data Engineer at S&P Global Ratings; portfolio copy keeps client and internal implementation details high-level.",
      "Focuses on governed data delivery, reliability, lineage, and data products where trusted ratings workflows depend on clear data contracts.",
      "Brings AWS, Spark, SQL, orchestration, warehousing, and quality-control experience into enterprise data engineering work.",
    ],
    skills: ["Data Engineering", "Governance", "SQL", "Cloud Platforms", "Reliability"],
  },
  {
    company: "Quantiphi (AWS Partner)",
    role: "Data Engineer",
    period: "Aug 2021 - Aug 2023",
    description: [
      "Migrated legacy analytical infrastructure into AWS data lake and warehouse patterns using S3, Databricks, Redshift, Glue, Lambda, Kinesis, and MWAA.",
      "Validated and transformed historical datasets with millions of records using Scala Spark, Spark SQL, Redshift CTEs, and stored procedures.",
      "Designed cost-optimized AWS architecture that reduced infrastructure cost by 30% and improved query speed by 20% for critical applications.",
      "Built healthcare data ingestion pipelines processing 10M+ records daily from public APIs and datasets for analytics and dashboard consumption.",
    ],
    skills: ["AWS", "Databricks", "Spark", "Redshift", "Kinesis", "MWAA"],
  },
  {
    company: "Shiftelix",
    role: "Founder and Builder",
    period: "2025 - Present",
    description: [
      "Built a workforce scheduling operating system for shift-based teams, moving schedule ownership, requests, messaging, compliance, and auditability out of spreadsheets.",
      "Released Shiftelix on the App Store as an iPhone workforce scheduling hub with schedule visibility, request workflows, team messaging, security settings, and account lifecycle controls.",
      "Designed the platform around compliance-aware scheduling, role-scoped access, audit trails, and accountable workforce operations for university and shift-based teams.",
    ],
    skills: ["Product Engineering", "Scheduling Systems", "AWS RDS", "Render", "Compliance Workflows"],
  },
];

const enterpriseLakehouseProject: Project = {
  id: "enterprise-data-lake-modernization",
  title: "Enterprise Data Lake Migration",
  type: "DE",
  typeLabel: "AWS Data Platform",
  icon: "pipeline",
  summary:
    "Modernized a global technology client's legacy analytical stack into an AWS data lake and warehouse architecture with Databricks processing, Redshift analytics, and automated orchestration.",
  role: "Data Engineer",
  domain: "Enterprise Data Lake / Cloud Modernization",
  techStack: ["AWS S3", "Databricks", "Scala Spark", "Redshift", "Glue", "Kinesis", "Lambda", "MWAA"],
  problem:
    "Legacy infrastructure could not keep up with analytical volume, query latency, and the cost profile expected by business-critical applications.",
  context:
    "Resume-backed Quantiphi engagement for a global technology client, focused on migrating historical and streaming data workflows into AWS lakehouse patterns.",
  stakes:
    "The business needed a platform that could reduce cost while improving access speed and preserving data integrity across historical and real-time workloads.",
  ownership: [
    "Validated and transformed historical datasets with millions of records using Scala Spark on Databricks.",
    "Engineered Redshift and Spark SQL queries with CTEs and stored procedures for faster analytical access.",
    "Designed cost-aware AWS data pipelines across S3, Glue, Lambda, Databricks, Redshift, Kinesis, and MWAA.",
  ],
  goals: [
    "Move legacy analytical workloads into a scalable AWS data lake and warehouse architecture.",
    "Improve query performance without compromising historical data quality.",
    "Automate pipeline execution for reliable dashboard and application updates.",
  ],
  architecture:
    "A decoupled AWS platform using S3 as the landing and lake layer, Databricks and Glue for transformation, Kinesis and Lambda for dynamic updates, MWAA for orchestration, and Redshift for warehouse consumption.",
  implementation: [
    "Built migration and transformation workflows that converted legacy datasets into governed, analytics-ready lakehouse layers.",
    "Optimized Redshift and Spark SQL patterns with CTEs, stored procedures, and partition-conscious transformations.",
    "Orchestrated pipeline execution through MWAA so ingestion, transformation, and warehouse publishing stayed repeatable.",
  ],
  decisions: [
    {
      title: "Separate storage and compute",
      detail:
        "Used S3, Databricks, and Redshift boundaries so storage scale, processing cost, and analytical performance could be tuned independently.",
    },
    {
      title: "Treat integrity as migration work",
      detail:
        "Validated historical datasets before downstream publishing so the modernization did not simply move old inconsistencies into a new platform.",
    },
    {
      title: "Automate the operational path",
      detail:
        "Used MWAA and managed AWS services to reduce manual handoffs between ingestion, transformation, and reporting delivery.",
    },
  ],
  flow:
    "Legacy Stores -> S3 Landing Zones -> Databricks + Glue Transformations -> Redshift Warehouse -> Kinesis/Lambda Updates -> Dashboards and Applications",
  challenges: [
    "Preserving data integrity across historical migrations while adding real-time update paths.",
    "Balancing cost reduction with the performance expectations of critical business applications.",
  ],
  impactMetrics: [
    {
      label: "Cost Reduction",
      value: "30%",
      detail: "Cost-optimized AWS architecture reduced infrastructure expense while improving delivery performance.",
    },
    {
      label: "Query Speed",
      value: "+20%",
      detail: "Redshift and Spark SQL optimizations improved access speed for critical analytical workflows.",
    },
    {
      label: "Data Scale",
      value: "Millions",
      detail: "Historical records were validated and transformed into analytics-ready warehouse layers.",
    },
  ],
  outcomes: [
    "Reduced infrastructure cost by 30% through a more efficient AWS data architecture.",
    "Improved query performance by 20% for critical business applications.",
    "Delivered a more reliable ingestion and transformation path for real-time dashboard updates.",
  ],
  lessons: [
    "A successful migration is measured by trust and operating cost, not just by moving data into new storage.",
    "Warehouse performance improves fastest when pipeline design and SQL design are tuned together.",
  ],
};

const covidAnalyticsProject: Project = {
  id: "covid19-ingestion-analytics-platform",
  title: "COVID-19 Ingestion Platform",
  type: "DE",
  typeLabel: "Healthcare Data Pipeline",
  icon: "monitoring",
  summary:
    "Built AWS pipelines for a healthcare client to process 10M+ daily records from public health APIs and datasets into cleansed, dashboard-ready analytics layers.",
  role: "Data Engineer",
  domain: "Healthcare Analytics / High-Volume Ingestion",
  techStack: ["AWS Lambda", "S3", "AWS Glue", "Python Spark", "Databricks", "MWAA", "Kinesis", "QuickSight"],
  problem:
    "Public health data arrived from many external APIs with changing schemas, high daily volume, and urgent stakeholder demand for reliable insights.",
  context:
    "Resume-backed Quantiphi healthcare engagement that required scalable ingestion, transformation, orchestration, and dashboard delivery during a high-change data environment.",
  stakes:
    "Delayed or unreliable data preparation would slow public-health analysis and make operational decisions depend on stale or inconsistent reporting inputs.",
  ownership: [
    "Built API extraction workflows with Lambda and S3 ingestion patterns.",
    "Transformed large public-health datasets using AWS Glue and Python Spark on Databricks.",
    "Orchestrated delivery with MWAA, Kinesis, CodePipeline, CodeBuild, and QuickSight dashboards.",
  ],
  goals: [
    "Process 10M+ records per day without manual data preparation becoming a bottleneck.",
    "Normalize public health feeds into quality-controlled analytics datasets.",
    "Expose COVID-19 trends and actionable insights through dashboard-ready outputs.",
  ],
  architecture:
    "Serverless extraction collected public API data into S3, Spark and Glue transformed it through large-scale processing layers, MWAA orchestrated workflows, Kinesis supported update paths, and QuickSight delivered stakeholder dashboards.",
  implementation: [
    "Created Lambda-based extraction jobs for public APIs and agency datasets with S3 as the ingestion layer.",
    "Built large-scale transformation jobs in AWS Glue and Python Spark on Databricks to clean and standardize records.",
    "Connected CI/CD and monitoring through AWS CodePipeline and CodeBuild to keep delivery observable and repeatable.",
  ],
  decisions: [
    {
      title: "Serverless-first extraction",
      detail:
        "Used Lambda and managed AWS services so unpredictable source changes and volume spikes could be handled without a heavy always-on extraction tier.",
    },
    {
      title: "Analytics before visualization",
      detail:
        "Prioritized quality transformations before QuickSight delivery so dashboards reflected cleansed, consistent datasets instead of raw API variability.",
    },
    {
      title: "Operational orchestration",
      detail:
        "Used MWAA to make dependency order, reruns, and monitoring visible across the full ingestion-to-dashboard workflow.",
    },
  ],
  flow:
    "Public Health APIs -> Lambda Extraction -> S3 Ingestion -> Glue + Databricks Spark -> Hive Metastore + Databricks SQL -> QuickSight Dashboards",
  challenges: [
    "Handling schema drift and inconsistent public datasets without slowing daily delivery.",
    "Keeping transformations efficient while processing millions of records each day.",
  ],
  impactMetrics: [
    {
      label: "Daily Volume",
      value: "10M+",
      detail: "Processed millions of public-health records each day through scalable AWS pipelines.",
    },
    {
      label: "Prep Time",
      value: "-30%",
      detail: "Reduced preparation time by standardizing ingestion and transformation workflows.",
    },
    {
      label: "Delivery Mode",
      value: "Near real-time",
      detail: "Kinesis and automated orchestration improved data freshness for trend dashboards.",
    },
  ],
  outcomes: [
    "Processed 10M+ healthcare records daily from external APIs and public datasets.",
    "Reduced data preparation time by 30% through automated AWS and Databricks transformations.",
    "Delivered QuickSight dashboards that helped stakeholders review COVID-19 trends and actionable signals.",
  ],
  lessons: [
    "High-velocity public data pipelines need schema resilience and delivery observability from the start.",
    "Dashboard speed is only useful when the upstream transformations are reliable and explainable.",
  ],
};

const shiftelixProject: Project = {
  id: "shiftelix-workforce-os",
  title: "Shiftelix Workforce OS",
  type: "AI",
  typeLabel: "Product Engineering",
  icon: "risk",
  summary:
    "A production workforce scheduling hub for shift-based teams, designed around schedule visibility, request workflows, messaging, compliance-aware decisions, and audit-ready operations.",
  role: "Founder and Builder",
  domain: "Workforce Operations / Scheduling Platform",
  techStack: ["React", "Python", "AWS RDS", "Render", "iOS", "Messaging", "Compliance Rules", "Audit Logs"],
  problem:
    "Teams were using spreadsheets and message threads to manage schedules, swaps, coverage, eligibility, approvals, and accountability that needed structured operational truth.",
  context:
    "Public Shiftelix blog and App Store listing describe a real workforce scheduling system built by Ganesh Makkina for university and shift-based operations.",
  stakes:
    "When schedule changes, eligibility rules, manager approvals, and team communication live in scattered tools, organizations lose accountability and create operational risk.",
  ownership: [
    "Designed the product direction around workforce scheduling as an operating system, not only a calendar.",
    "Built workflows for schedules, requests, team messaging, account security, and account lifecycle controls.",
    "Modeled compliance-aware scheduling, role-scoped access, and audit trails as core platform concerns.",
  ],
  goals: [
    "Replace spreadsheet-driven coordination with structured workflows for schedules, requests, and ownership.",
    "Give managers visibility into staffing risk, approvals, and operational context without manual reconstruction.",
    "Ship a real mobile-facing product with account, support, privacy, and workflow controls.",
  ],
  architecture:
    "A product platform with mobile app surfaces, backend services, AWS RDS persistence, Render deployment, request workflows, messaging infrastructure, access controls, and audit-oriented data design.",
  implementation: [
    "Built the first production release around employee home, schedule visibility, shift/request workflows, team messaging, security settings, and account deletion request flow.",
    "Designed compliance-oriented workflow concepts for rest rules, hour limits, shift overlap checks, credential requirements, and student-worker constraints.",
    "Created product education and founder notes that translate technical scheduling architecture into practical operations language for university teams.",
  ],
  decisions: [
    {
      title: "Workflow over spreadsheet parity",
      detail:
        "Modeled swaps, requests, approvals, and status changes as accountable workflows rather than recreating a flexible grid with prettier UI.",
    },
    {
      title: "Compliance as a hard gate",
      detail:
        "Designed rules to block risky assignments at creation time instead of leaving policy violations to be found after schedules were published.",
    },
    {
      title: "Auditability as product value",
      detail:
        "Treated event history, permission scope, and operational evidence as core system requirements because disputes depend on what the data can prove.",
    },
  ],
  flow:
    "Employee + Manager Actions -> Request Workflows -> Compliance Checks -> Scoped Data Access -> Audit Trail -> Mobile Operations Hub",
  challenges: [
    "Turning messy human scheduling behavior into structured workflows without making the product rigid.",
    "Balancing employee self-service with manager visibility, rules, and operational accountability.",
  ],
  impactMetrics: [
    {
      label: "Public Release",
      value: "iOS",
      detail: "Shiftelix is listed on the App Store as a workforce scheduling hub for iPhone.",
    },
    {
      label: "Core Workflows",
      value: "5+",
      detail: "Schedule visibility, shift requests, messaging, security, and account lifecycle controls are part of the first release.",
    },
    {
      label: "Product Lens",
      value: "Compliance-first",
      detail: "The platform is framed around ownership, rules, visibility, and audit-ready operations.",
    },
  ],
  outcomes: [
    "Released a real workforce scheduling product with mobile workflows for employees, managers, and admins.",
    "Converted a spreadsheet pain point into a broader operating-system model for university and shift-based teams.",
    "Built public product narrative, support paths, and privacy/account controls around production use.",
  ],
  lessons: [
    "The hard part of scheduling is not drawing time blocks; it is preserving accountability when real operations change.",
    "A strong data model can be a product differentiator when compliance, permissions, and auditability matter.",
  ],
};

const rutgersSchedulerProject: Project = {
  id: "rutgers-scheduling-automation",
  title: "Rutgers Scheduling Automation",
  type: "AI",
  typeLabel: "Full-Stack Data Product",
  icon: "application",
  summary:
    "A React and Node.js operations platform for Rutgers scheduling and compliance workflows, backed by MySQL on AWS RDS and designed to reduce manual coordination by roughly 30 hours per week.",
  role: "Full-Stack Builder",
  domain: "University Operations / Scheduling Automation",
  techStack: ["React", "Node.js", "MySQL", "AWS RDS", "Google Calendar API", "REST APIs", "AWS"],
  problem:
    "Manual scheduling workflows created repetitive coordination, scattered operational state, and avoidable compliance checks for campus workforce operations.",
  context:
    "Resume-backed project and prior portfolio case study focused on Rutgers CSO operations, scheduling automation, database design, and operational workflow APIs.",
  stakes:
    "Campus operations needed a system that reduced manual scheduling workload while preserving data integrity, compliance logic, and integration paths.",
  ownership: [
    "Built the full-stack platform with React interfaces and Node.js REST APIs.",
    "Designed MySQL data models for schedules, roles, requests, compliance checks, and operational state.",
    "Planned cloud deployment paths around AWS RDS, S3 concepts, and EC2/ECS architecture.",
  ],
  goals: [
    "Reduce recurring manual scheduling workload for operational teams.",
    "Build a data model strong enough for scheduling, compliance, and audit-oriented workflows.",
    "Integrate calendar and cloud storage patterns without making the platform brittle.",
  ],
  architecture:
    "React frontend workflows connected to Node.js REST APIs, MySQL on AWS RDS for structured scheduling data, Google Calendar integration for visibility, and AWS deployment concepts for scalable operations.",
  implementation: [
    "Developed CRUD and transformation APIs that handled complex scheduling logic, compliance state, and operational updates.",
    "Designed relational tables and constraints for workforce schedules, assignments, requests, and calendar-linked data.",
    "Integrated Google Calendar API concepts and cloud storage paths to support scalable operational data management.",
  ],
  decisions: [
    {
      title: "Relational core for operational truth",
      detail:
        "Used MySQL and explicit workflow entities because scheduling decisions need traceable state, not only flexible documents.",
    },
    {
      title: "API boundary around scheduling logic",
      detail:
        "Kept compliance and transformation logic behind Node.js services so UI workflows stayed simpler and easier to evolve.",
    },
    {
      title: "Cloud-ready from the model up",
      detail:
        "Designed around AWS RDS and deployable services so the platform could move from project build to real operations more cleanly.",
    },
  ],
  flow:
    "React Operations UI -> Node.js REST APIs -> Scheduling Logic -> MySQL/AWS RDS -> Calendar + Cloud Integrations -> Operational Dashboards",
  challenges: [
    "Modeling scheduling exceptions and compliance rules without creating fragile one-off logic.",
    "Keeping the application understandable while supporting many operational workflows at once.",
  ],
  impactMetrics: [
    {
      label: "Manual Workload",
      value: "-30 hrs/wk",
      detail: "Automation reduced recurring scheduling and coordination workload by roughly 30 hours per week.",
    },
    {
      label: "System Shape",
      value: "Full-stack",
      detail: "React, Node.js, MySQL, AWS RDS, and integration workflows were designed together.",
    },
    {
      label: "Data Contract",
      value: "Operational",
      detail: "The platform modeled schedules, requests, compliance, and integrity as first-class data concerns.",
    },
  ],
  outcomes: [
    "Reduced manual workload by roughly 30 hours per week through scheduling and compliance automation.",
    "Delivered a full-stack operations platform with scalable relational data modeling.",
    "Created a foundation for cloud deployment and calendar-integrated scheduling workflows.",
  ],
  lessons: [
    "Scheduling products succeed when the workflow model is designed as carefully as the interface.",
    "Operational automation needs database integrity and user flow design to evolve together.",
  ],
};

const twitterSearchProject: Project = {
  id: "twitter-search-analytics-engine",
  title: "Twitter Search Analytics Engine",
  type: "DS",
  typeLabel: "Analytics Engineering",
  icon: "trend",
  summary:
    "A high-performance Twitter search and analytics system using MySQL, MongoDB, indexing, caching, and Streamlit dashboards to query millions of records with sub-200ms response times.",
  role: "Analytics Engineer",
  domain: "Search Analytics / Query Optimization",
  techStack: ["Python", "MySQL", "MongoDB", "Streamlit", "Indexing", "Caching", "SQL", "NoSQL"],
  problem:
    "Large social datasets needed fast search, filtering, and analytics across user and tweet records stored in different database systems.",
  context:
    "Resume-backed project focused on high-performance querying, multi-database design, caching, and real-time analytics dashboard behavior.",
  stakes:
    "Without careful indexing, caching, and data-model separation, search latency would make analytics workflows too slow for interactive use.",
  ownership: [
    "Designed a hybrid storage model with MySQL for users and MongoDB for tweet and retweet data.",
    "Implemented indexing and caching strategies to accelerate predefined search filters.",
    "Built Streamlit dashboards for analytics, query tracking, and interactive exploration.",
  ],
  goals: [
    "Support efficient search across millions of user, tweet, and retweet records.",
    "Reduce query latency enough for interactive analytics use.",
    "Make query behavior visible through dashboard and tracking views.",
  ],
  architecture:
    "A hybrid relational and document-store system with MySQL user records, MongoDB tweet collections, indexed query paths, caching layers, and Streamlit dashboards for analytics and query tracking.",
  implementation: [
    "Stored normalized user entities in MySQL and high-volume tweet/retweet records in MongoDB to match access patterns.",
    "Applied optimized indexing and caching to reduce repeated search latency across predefined filters.",
    "Built a Streamlit dashboard that exposed search filters, result views, and real-time query tracking.",
  ],
  decisions: [
    {
      title: "Use each database for its access pattern",
      detail:
        "Separated user records and tweet documents because relational and document workloads had different query shapes.",
    },
    {
      title: "Optimize before visualizing",
      detail:
        "Focused on indexes and cache behavior before dashboard polish so the interface felt fast under real query volume.",
    },
    {
      title: "Expose query feedback",
      detail:
        "Added dashboard-level query tracking so performance became visible rather than hidden behind search results.",
    },
  ],
  flow:
    "Tweet/User Data -> MySQL + MongoDB Storage -> Indexing + Caching -> Search Filters -> Streamlit Analytics Dashboard -> Query Tracking",
  challenges: [
    "Keeping searches fast while data lived across relational and document stores.",
    "Designing filters that stayed useful without creating unbounded query combinations.",
  ],
  impactMetrics: [
    {
      label: "Latency Cut",
      value: "-80%",
      detail: "Indexing and caching reduced response time by 80%.",
    },
    {
      label: "Response Time",
      value: "<200ms",
      detail: "Search responses were reduced to under 200ms for optimized query paths.",
    },
    {
      label: "Storage Model",
      value: "SQL + NoSQL",
      detail: "MySQL and MongoDB were combined to match distinct record and document access patterns.",
    },
  ],
  outcomes: [
    "Improved query efficiency across millions of records through indexing and caching.",
    "Reduced response times by 80% to under 200ms for interactive search workflows.",
    "Delivered a Streamlit analytics dashboard with predefined filters and real-time query tracking.",
  ],
  lessons: [
    "Search performance depends as much on data modeling as on query syntax.",
    "Interactive analytics needs latency work before visual dashboards can feel credible.",
  ],
};

const dataEngineeringSkills: SkillGroup[] = [
  {
    category: "Programming",
    skills: ["Python", "Scala", "Java", "SQL", "NoSQL", "C++"],
  },
  {
    category: "AWS and GCP",
    skills: ["S3", "Glue", "Redshift", "Lambda", "Kinesis", "EMR", "BigQuery", "Dataflow"],
  },
  {
    category: "Big Data",
    skills: ["Databricks", "Apache Spark", "Kafka", "Hadoop", "Informatica", "Airflow"],
  },
  {
    category: "Warehousing",
    skills: ["Snowflake", "SQL Server", "MySQL", "MongoDB", "Neo4j", "ArangoDB"],
  },
];

const softwareSkills: SkillGroup[] = [
  {
    category: "Product Stack",
    skills: ["React", "Node.js", "Python", "REST APIs", "Spring Boot", "Microservices"],
  },
  {
    category: "Data Backends",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "AWS RDS", "Redshift", "Snowflake"],
  },
  {
    category: "Cloud Delivery",
    skills: ["AWS", "GCP", "Docker", "Kubernetes", "Jenkins", "Azure DevOps"],
  },
  {
    category: "System Design",
    skills: ["Domain-Driven Design", "RBAC", "Audit Logs", "Scheduling Rules", "CI/CD", "Data Integrity"],
  },
];

const dataScienceSkills: SkillGroup[] = [
  {
    category: "Modeling",
    skills: ["Statistics", "Time Series", "Regression", "Financial Data Mining", "Feature Engineering", "Validation"],
  },
  {
    category: "Data Processing",
    skills: ["Python", "PySpark", "SQL", "Databricks", "Data Wrangling", "Spark SQL"],
  },
  {
    category: "Analytics Apps",
    skills: ["Streamlit", "Plotly", "QuickSight", "Tableau", "Power BI", "Looker"],
  },
  {
    category: "Data Stores",
    skills: ["MySQL", "MongoDB", "Redshift", "Snowflake", "BigQuery", "NoSQL"],
  },
];

const analystSkills: SkillGroup[] = [
  {
    category: "BI and Reporting",
    skills: ["QuickSight", "Tableau", "Power BI", "Looker", "Dashboard Design", "KPI Modeling"],
  },
  {
    category: "Analytics SQL",
    skills: ["SQL", "CTEs", "Stored Procedures", "Spark SQL", "Redshift", "MySQL"],
  },
  {
    category: "Data Prep",
    skills: ["Python", "Data Wrangling", "Data Quality", "ETL", "ELT", "Validation"],
  },
  {
    category: "Business Context",
    skills: ["Healthcare Analytics", "Workforce Ops", "Public Data", "Trend Analysis", "Stakeholder Reporting", "Cost Analysis"],
  },
];

function createBaseProfile({
  headline,
  about,
  focusAreas,
  metrics,
  skills,
  projects,
  sectionCopy,
  footerTagline,
}: {
  headline: string;
  about: string[];
  focusAreas: string[];
  metrics: PortfolioData["metrics"];
  skills: SkillGroup[];
  projects: Project[];
  sectionCopy: PortfolioData["sectionCopy"];
  footerTagline: string;
}): PortfolioData {
  return {
    personal: {
      ...sharedIdentity,
      headline,
      about,
      focusAreas,
      resume: withPublicAsset("resume.pdf"),
    },
    metrics,
    skills,
    projects,
    experience: sharedExperience,
    education: sharedEducation,
    certifications: sharedCertifications,
    sectionCopy,
    footer: {
      tagline: footerTagline,
    },
  };
}

const dataEngineerProfile = createBaseProfile({
  headline: "Senior Data Engineer @ S&P Global | AWS Lakehouse Platforms | Shiftelix",
  about: [
    "I build cloud data platforms that move messy operational data into governed, queryable, production-ready systems.",
    "My strongest work sits at the intersection of AWS data engineering, Spark transformations, Redshift/Snowflake warehousing, workflow orchestration, and the product judgment needed to make data reliable for real users.",
    "Alongside enterprise data work, I am building Shiftelix, a workforce scheduling operating system that turns scheduling, requests, messaging, compliance, and auditability into structured product workflows.",
  ],
  focusAreas: ["AWS data lakes", "Spark and Databricks", "Streaming pipelines", "Warehouse reliability"],
  metrics: [
    { label: "Current Role", value: "S&P Global" },
    { label: "Daily Records", value: "10M+" },
    { label: "Cost Reduction", value: "30%" },
    { label: "Query Speed", value: "+20%" },
  ],
  skills: dataEngineeringSkills,
  projects: [
    enterpriseLakehouseProject,
    covidAnalyticsProject,
    shiftelixProject,
    rutgersSchedulerProject,
    twitterSearchProject,
  ],
  sectionCopy: {
    about: {
      eyebrow: "About Ganesh",
      title: "A data engineer who treats reliability, cost, lineage, and product impact as the same problem.",
      impactLabel: "Signal Snapshot",
      focusLabel: "Current Focus",
    },
    skills: {
      eyebrow: "Capabilities",
      title: "Cloud data engineering across ingestion, transformation, warehousing, and orchestration.",
      description:
        "Hands-on experience with AWS, GCP, Spark, Databricks, streaming systems, warehouse tuning, and operational delivery for high-volume data products.",
    },
    projects: {
      eyebrow: "Case Studies",
      title: "Selected systems built around real data movement and operational trust.",
      description:
        "A portfolio of enterprise migrations, healthcare ingestion, workforce operations, university scheduling, and search analytics work grounded in resume, LinkedIn, and shipped product evidence.",
    },
    experience: {
      eyebrow: "Experience",
      title: "Enterprise data work plus founder-level product execution.",
      description:
        "From S&P Global Ratings and Quantiphi AWS engagements to Shiftelix, the common thread is building systems where data quality and operational accountability matter.",
    },
    education: {
      eyebrow: "Education",
      title: "Graduate statistics and data science training behind the engineering work.",
      description:
        "Rutgers coursework in statistics, databases, time series, financial data mining, and data wrangling strengthens the platform decisions behind the work.",
    },
    contact: {
      eyebrow: "Contact",
      title: "Let us talk about data platforms, analytics systems, or workforce operations software.",
      description:
        "Open to senior data engineering, cloud data platform, analytics engineering, and product-minded engineering conversations.",
      chips: ["Senior Data Engineering", "AWS Platforms", "Shiftelix"],
      reachLabel: "Best Way To Reach Me",
    },
  },
  footerTagline: "Senior Data Engineer building reliable cloud data platforms and product-grade operational systems.",
});

const softwareEngineerProfile = createBaseProfile({
  headline: "Product-Minded Software Engineer | Backend Systems | Founder, Shiftelix",
  about: [
    "I build software around operational workflows where the database, API contract, and user experience have to agree.",
    "Shiftelix is the clearest expression of that approach: scheduling, request workflows, team messaging, compliance rules, access scope, and audit trails packaged into a real workforce operations product.",
    "My data engineering background makes me especially strong at backend systems where data integrity, scale, and business rules are the product.",
  ],
  focusAreas: ["Backend APIs", "Workflow systems", "Data-backed products", "Cloud deployment"],
  metrics: [
    { label: "Public Product", value: "Shiftelix" },
    { label: "Manual Work Saved", value: "30 hrs/wk" },
    { label: "Release Surface", value: "iOS" },
    { label: "Query Latency", value: "<200ms" },
  ],
  skills: softwareSkills,
  projects: [
    shiftelixProject,
    rutgersSchedulerProject,
    twitterSearchProject,
    enterpriseLakehouseProject,
  ],
  sectionCopy: {
    about: {
      eyebrow: "Software Lens",
      title: "Backend and product engineering for systems where workflow truth matters.",
      impactLabel: "Build Snapshot",
      focusLabel: "System Focus",
    },
    skills: {
      eyebrow: "Engineering Stack",
      title: "APIs, data stores, cloud delivery, and product workflows built as one system.",
      description:
        "Experience across React, Node.js, Python, REST APIs, databases, CI/CD, access controls, and cloud deployment patterns.",
    },
    projects: {
      eyebrow: "Product Work",
      title: "Software projects where operations, data, and product UX meet.",
      description:
        "Featured work includes a shipped workforce scheduling product, Rutgers scheduling automation, search analytics, and enterprise data platform services.",
    },
    experience: {
      eyebrow: "Experience",
      title: "Engineering experience from enterprise data platforms to shipped product systems.",
      description:
        "The software story is grounded in backend services, data models, release workflows, and product-grade operational systems.",
    },
    education: {
      eyebrow: "Education",
      title: "Data science training that strengthens system design.",
      description:
        "Graduate coursework in statistics, databases, and data wrangling supports practical decisions around schemas, workflows, and reliable data products.",
    },
    contact: {
      eyebrow: "Contact",
      title: "Let us talk about backend systems, product engineering, or operations software.",
      description:
        "Open to engineering conversations around workflow-heavy products, data-backed applications, platform services, and cloud delivery.",
      chips: ["Backend Systems", "Product Engineering", "Workflow Automation"],
      reachLabel: "Best Way To Reach Me",
    },
  },
  footerTagline: "Building backend systems and product workflows with data integrity at the center.",
});

const dataScientistProfile = createBaseProfile({
  headline: "Data Science and Analytics Engineer | Statistics, Search, Forecasting, and Cloud Data",
  about: [
    "My data science work is practical: clean the data path, make the feature or query layer trustworthy, then expose the result in a way people can use.",
    "Rutgers graduate training in statistics and data science sits behind projects in high-volume public-health analytics, search performance, and financial/data mining coursework.",
    "I bring engineering discipline to analytical work so models, dashboards, and exploratory systems are built on data that is reproducible and fast enough to use.",
  ],
  focusAreas: ["Statistical modeling", "Search analytics", "Feature pipelines", "Dashboard-ready data"],
  metrics: [
    { label: "Query Speedup", value: "80%" },
    { label: "Response Time", value: "<200ms" },
    { label: "Daily Records", value: "10M+" },
    { label: "Prep Time Cut", value: "30%" },
  ],
  skills: dataScienceSkills,
  projects: [
    twitterSearchProject,
    covidAnalyticsProject,
    enterpriseLakehouseProject,
    rutgersSchedulerProject,
  ],
  sectionCopy: {
    about: {
      eyebrow: "Analytics Lens",
      title: "Analytical systems built with the engineering rigor needed before insights can be trusted.",
      impactLabel: "Analytics Snapshot",
      focusLabel: "Analytical Focus",
    },
    skills: {
      eyebrow: "Data Science Stack",
      title: "Statistics, processing, search, and dashboard delivery.",
      description:
        "A practical blend of statistical coursework, Python, SQL, Spark, data wrangling, high-performance querying, and dashboard tools.",
    },
    projects: {
      eyebrow: "Analytical Work",
      title: "Projects where query speed, data quality, and decision visibility matter.",
      description:
        "Featured work spans search analytics, healthcare trend pipelines, enterprise data migration, and scheduling operations data models.",
    },
    experience: {
      eyebrow: "Experience",
      title: "Data engineering experience translated into stronger analytical systems.",
      description:
        "The analytical thread runs through large-scale ingestion, transformation, dashboard delivery, and query optimization.",
    },
    education: {
      eyebrow: "Education",
      title: "Rutgers statistics and data science foundation.",
      description:
        "Coursework in probability, statistics, regression, time series, databases, financial data mining, and data wrangling supports the analytical portfolio.",
    },
    contact: {
      eyebrow: "Contact",
      title: "Let us talk about data science systems that need reliable data underneath.",
      description:
        "Open to analytics engineering, data science, BI platform, and search/query performance conversations.",
      chips: ["Analytics Engineering", "Search Systems", "Data Science"],
      reachLabel: "Best Way To Reach Me",
    },
  },
  footerTagline: "Turning statistical and analytical work into reliable, fast, usable data systems.",
});

const dataAnalystProfile = createBaseProfile({
  headline: "Data Analyst and BI Engineer | SQL, Dashboards, KPI Systems, and Cloud Analytics",
  about: [
    "I build analytical views that make operations easier to understand: the ingestion has to be clean, the SQL has to be fast, and the dashboard has to answer a real decision.",
    "At Quantiphi, that meant turning high-volume AWS pipelines into Redshift and QuickSight outputs for technology and healthcare stakeholders.",
    "In project work, it meant building Twitter search analytics and Rutgers scheduling data models where performance, filters, and operational visibility mattered.",
  ],
  focusAreas: ["SQL analytics", "BI dashboards", "KPI systems", "Data quality"],
  metrics: [
    { label: "Dashboards", value: "QuickSight" },
    { label: "Query Speed", value: "+20%" },
    { label: "Prep Time Cut", value: "30%" },
    { label: "Search Latency", value: "<200ms" },
  ],
  skills: analystSkills,
  projects: [
    covidAnalyticsProject,
    twitterSearchProject,
    enterpriseLakehouseProject,
    rutgersSchedulerProject,
  ],
  sectionCopy: {
    about: {
      eyebrow: "BI Lens",
      title: "Analytics work that connects clean pipelines to decisions people can actually make.",
      impactLabel: "BI Snapshot",
      focusLabel: "Reporting Focus",
    },
    skills: {
      eyebrow: "Analytics Stack",
      title: "SQL, BI, data prep, and stakeholder-ready reporting.",
      description:
        "Experience with QuickSight, Tableau, Power BI, Looker, Redshift, MySQL, Spark SQL, CTEs, stored procedures, and quality-controlled data prep.",
    },
    projects: {
      eyebrow: "Reporting Work",
      title: "Dashboards, query systems, and operational analytics with real performance constraints.",
      description:
        "Selected work covers healthcare dashboards, Twitter search analytics, warehouse tuning, and workforce operations data products.",
    },
    experience: {
      eyebrow: "Experience",
      title: "Analytics delivery rooted in production data engineering.",
      description:
        "The analyst profile focuses on the dashboard, SQL, stakeholder, and KPI layer of the same cloud data engineering work.",
    },
    education: {
      eyebrow: "Education",
      title: "Graduate coursework that sharpens analytical judgment.",
      description:
        "Statistics, time series, advanced database management, financial data mining, and data wrangling shape the analytical approach.",
    },
    contact: {
      eyebrow: "Contact",
      title: "Let us talk about dashboards, SQL systems, or analytics-ready data pipelines.",
      description:
        "Open to BI, analytics engineering, data analyst, and data platform conversations where speed and trust both matter.",
      chips: ["BI Engineering", "SQL Analytics", "Dashboard Delivery"],
      reachLabel: "Best Way To Reach Me",
    },
  },
  footerTagline: "Building trustworthy analytical views from fast SQL, clean data, and clear business context.",
});

export const portfolioProfiles: Record<ProfileSlug, PortfolioData> = {
  dataengineer: dataEngineerProfile,
  softwareengineer: softwareEngineerProfile,
  datascientist: dataScientistProfile,
  datanalyst: dataAnalystProfile,
};
