/* eslint-disable max-lines */

import { ChartConfig } from "@/components/ui/chart";

export const projectsChartData = [
  { date: "1-5", newLeads: 120, disqualified: 40 },
  { date: "6-10", newLeads: 95, disqualified: 30 },
  { date: "11-15", newLeads: 60, disqualified: 22 },
  { date: "16-20", newLeads: 100, disqualified: 35 },
  { date: "21-25", newLeads: 150, disqualified: 70 },
  { date: "26-30", newLeads: 110, disqualified: 60 },
];

export const leadsChartConfig = {
  newLeads: {
    label: "New Leads",
    color: "var(--chart-1)",
  },
  disqualified: {
    label: "Disqualified",
    color: "var(--chart-3)",
  },
  background: {
    color: "var(--primary)",
  },
} as ChartConfig;

export const proposalsChartData = [
  { date: "1-5", proposalsSent: 9 },
  { date: "6-10", proposalsSent: 16 },
  { date: "11-15", proposalsSent: 6 },
  { date: "16-20", proposalsSent: 18 },
  { date: "21-25", proposalsSent: 11 },
  { date: "26-30", proposalsSent: 14 },
];

export const proposalsChartConfig = {
  proposalsSent: {
    label: "Proposals Sent",
    color: "var(--chart-1)",
  },
} as ChartConfig;

export const revenueChartData = [
  { month: "Jul 2024", revenue: 6700 },
  { month: "Aug 2024", revenue: 7100 },
  { month: "Sep 2024", revenue: 6850 },
  { month: "Oct 2024", revenue: 7500 },
  { month: "Nov 2024", revenue: 8000 },
  { month: "Dec 2024", revenue: 8300 },
  { month: "Jan 2025", revenue: 7900 },
  { month: "Feb 2025", revenue: 8400 },
  { month: "Mar 2025", revenue: 8950 },
  { month: "Apr 2025", revenue: 9700 },
  { month: "May 2025", revenue: 11200 },
  { month: "Jun 2025", revenue: 9500 },
];

export const revenueChartConfig = {
  revenue: {
    label: "Revenue",
    color: "var(--chart-1)",
  },
} as ChartConfig;

export const leadsBySourceChartData = [
  { source: "website", leads: 170, fill: "var(--color-website)" },
  { source: "referral", leads: 105, fill: "var(--color-referral)" },
  { source: "social", leads: 90, fill: "var(--color-social)" },
  { source: "cold", leads: 62, fill: "var(--color-cold)" },
  { source: "other", leads: 48, fill: "var(--color-other)" },
];

export const leadsBySourceChartConfig = {
  leads: {
    label: "Leads",
  },
  website: {
    label: "Website",
    color: "var(--chart-1)",
  },
  referral: {
    label: "Referral",
    color: "var(--chart-2)",
  },
  social: {
    label: "Social Media",
    color: "var(--chart-3)",
  },
  cold: {
    label: "Cold Outreach",
    color: "var(--chart-4)",
  },
  other: {
    label: "Other",
    color: "var(--chart-5)",
  },
} as ChartConfig;

export const projectRevenueChartData = [
  { name: "MVP Development", actual: 82000, target: 90000 },
  { name: "Consultation", actual: 48000, target: 65000 },
  { name: "Framer Sites", actual: 34000, target: 45000 },
  { name: "DevOps Support", actual: 77000, target: 90000 },
  { name: "LLM Training", actual: 68000, target: 80000 },
  { name: "Product Launch", actual: 52000, target: 70000 },
].map((row) => ({
  ...row,
  remaining: Math.max(0, row.target - row.actual),
}));

export const projectRevenueChartConfig = {
  actual: {
    label: "Actual",
    color: "var(--chart-1)",
  },
  remaining: {
    label: "Remaining",
    color: "var(--chart-2)",
  },
  label: {
    color: "var(--primary-foreground)",
  },
} as ChartConfig;

export const salesPipelineChartData = [
  { stage: "Leads", value: 680, fill: "var(--chart-1)" },
  { stage: "Qualified", value: 480, fill: "var(--chart-2)" },
  { stage: "Proposal Sent", value: 210, fill: "var(--chart-3)" },
  { stage: "Negotiation", value: 120, fill: "var(--chart-4)" },
  { stage: "Won", value: 45, fill: "var(--chart-5)" },
];

export const salesPipelineChartConfig = {
  value: {
    label: "Leads",
    color: "var(--chart-1)",
  },
  stage: {
    label: "Stage",
  },
} as ChartConfig;

export const regionSalesData = [
  {
    region: "North America",
    sales: 37800,
    percentage: 31,
    growth: "-3.2%",
    isPositive: false,
  },
  {
    region: "Europe",
    sales: 40100,
    percentage: 34,
    growth: "+9.4%",
    isPositive: true,
  },
  {
    region: "Asia Pacific",
    sales: 30950,
    percentage: 26,
    growth: "+12.8%",
    isPositive: true,
  },
  {
    region: "Latin America",
    sales: 12200,
    percentage: 7,
    growth: "-1.7%",
    isPositive: false,
  },
  {
    region: "Middle East & Africa",
    sales: 2450,
    percentage: 2,
    growth: "+6.0%",
    isPositive: true,
  },
];

export const actionItems = [
  {
    id: 1,
    title: "Send kickoff docs",
    desc: "Send onboarding documents and timeline",
    due: "Due today",
    priority: "High",
    priorityColor: "bg-red-100 text-red-700",
    checked: false,
  },
  {
    id: 2,
    title: "Demo call for SaaS MVP",
    desc: "Book Zoom call with client",
    due: "Due tomorrow",
    priority: "Medium",
    priorityColor: "bg-yellow-100 text-yellow-700",
    checked: true,
  },
  {
    id: 3,
    title: "Update case study",
    desc: "Add latest LLM project",
    due: "Due this week",
    priority: "Low",
    priorityColor: "bg-green-100 text-green-700",
    checked: false,
  },
];

export const projectsData = [
  {
    id: "proj-001",
    name: "Sparkle Towers - Dubai, UAE",
    description:
      "Luxury residential towers featuring Swarovski-inspired design elements, premium amenities, and sustainable building practices",
    startDate: "2024-01-15",
    endDate: "2026-06-30",
    status: "In Progress",
    priority: "High",
    projectManager: "Sarah Chen",
    budget: "$82,000,000",
    progress: "75%",
    tasks: "Architectural Design, Structural Engineering, MEP Systems, Interior Design, Site Supervision",
    percentageCompleted: "75",
  },
  {
    id: "proj-002",
    name: "Dhahran Expo Center - Dammam, KSA",
    description:
      "Award-winning exhibition center with innovative architectural design, sustainable features, and state-of-the-art facilities",
    startDate: "2024-02-01",
    endDate: "2024-12-31",
    status: "Completed",
    priority: "Medium",
    projectManager: "Michael Rodriguez",
    budget: "$48,000,000",
    progress: "100%",
    tasks: "Master Planning, Architecture, Structural Design, MEP Engineering, Landscape Design",
    percentageCompleted: "100",
  },
  {
    id: "proj-003",
    name: "Madar II - Al Jada, Sharjah",
    description:
      "Modern residential complex with contemporary design, green building standards, and community-focused amenities",
    startDate: "2024-03-10",
    endDate: "2025-05-15",
    status: "Completed",
    priority: "Medium",
    projectManager: "Emily Watson",
    budget: "$34,000,000",
    progress: "100%",
    tasks: "Architectural Design, Interior Design, Landscape Architecture, Site Supervision",
    percentageCompleted: "100",
  },
  {
    id: "proj-004",
    name: "Arc Office Building - Cairo, Egypt",
    description:
      "Corporate headquarters featuring innovative curved architecture, sustainable materials, and smart building technology",
    startDate: "2024-01-01",
    endDate: "2025-08-31",
    status: "In Progress",
    priority: "High",
    projectManager: "David Kim",
    budget: "$77,000,000",
    progress: "60%",
    tasks: "Architectural Design, Structural Engineering, MEP Systems, BIM Implementation, Site Supervision",
    percentageCompleted: "60",
  },
  {
    id: "proj-005",
    name: "Northside Office Complex - Sharjah, UAE",
    description:
      "Mixed-use development combining office spaces, retail areas, and public spaces with modern architectural aesthetics",
    startDate: "2024-02-15",
    endDate: "2025-07-31",
    status: "In Progress",
    priority: "High",
    projectManager: "Alex Thompson",
    budget: "$68,000,000",
    progress: "45%",
    tasks: "Master Planning, Architecture, Structural Design, MEP Engineering, Interior Design",
    percentageCompleted: "45",
  },
  {
    id: "proj-006",
    name: "Nest Student Accommodation - Sharjah, UAE",
    description:
      "Innovative student housing project with community spaces, sustainable design, and modern living solutions",
    startDate: "2024-04-01",
    endDate: "2025-09-30",
    status: "Planning",
    priority: "Medium",
    projectManager: "Lisa Park",
    budget: "$52,000,000",
    progress: "15%",
    tasks: "Concept Design, Master Planning, Architecture, Landscape Design, Sustainability Planning",
    percentageCompleted: "15",
  },
  {
    id: "proj-007",
    name: "CBD Aljada - Sharjah, UAE",
    description:
      "Central Business District development featuring modern office towers, retail spaces, and public infrastructure",
    startDate: "2024-05-01",
    endDate: "2026-10-31",
    status: "Planning",
    priority: "Low",
    projectManager: "James Wilson",
    budget: "$145,000,000",
    progress: "10%",
    tasks: "Urban Planning, Master Planning, Architecture, Infrastructure Design, Sustainability Assessment",
    percentageCompleted: "10",
  },
  {
    id: "proj-008",
    name: "Raffles School - Aljada, Sharjah",
    description: "Educational facility with innovative learning spaces, sustainable design, and community integration",
    startDate: "2024-03-01",
    endDate: "2025-06-30",
    status: "In Progress",
    priority: "High",
    projectManager: "Rachel Green",
    budget: "$38,000,000",
    progress: "70%",
    tasks: "Educational Architecture, Interior Design, Landscape Design, Site Supervision, Quality Control",
    percentageCompleted: "70",
  },
  {
    id: "proj-009",
    name: "Alton Town Square Park - Dubai, UAE",
    description:
      "Public park and community space with landscape architecture, sustainable features, and recreational facilities",
    startDate: "2024-04-15",
    endDate: "2025-08-31",
    status: "In Progress",
    priority: "Medium",
    projectManager: "Carlos Mendez",
    budget: "$42,000,000",
    progress: "35%",
    tasks: "Landscape Architecture, Urban Design, Sustainability Planning, Site Supervision",
    percentageCompleted: "35",
  },
  {
    id: "proj-010",
    name: "Zaha Hadid Signature Project - Dubai, UAE",
    description:
      "Iconic architectural project designed by Zaha Hadid Architects, delivered and supervised by MIMAR on site",
    startDate: "2024-06-01",
    endDate: "2026-09-30",
    status: "Planning",
    priority: "Low",
    projectManager: "Nina Patel",
    budget: "$228,000,000",
    progress: "5%",
    tasks: "Design Coordination, Site Supervision, Quality Assurance, Project Management, BIM Implementation",
    percentageCompleted: "5",
  },
];
