import packageJson from "../../package.json";

const currentYear = new Date().getFullYear();

export const APP_CONFIG = {
  name: "MIMAR Dashboard",
  version: packageJson.version,
  copyright: `© ${currentYear}, MIMAR Management Dashboard.`,
  meta: {
    title: "MIMAR Dashboard",
    description: "MIMAR Management Dashboard is a reporting tool for the MIMAR.",
  },
};
