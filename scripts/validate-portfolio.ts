import { access, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { portfolioProfiles, profileSlugs } from "../src/data/portfolioData";

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

function assert(condition: unknown, message: string): asserts condition {
  if (!condition) {
    throw new Error(message);
  }
}

async function readRepoFile(relativePath: string) {
  return readFile(path.join(rootDir, relativePath), "utf8");
}

async function assertFileExists(relativePath: string) {
  await access(path.join(rootDir, relativePath));
}

function assertPortfolioData() {
  for (const profileSlug of profileSlugs) {
    const profile = portfolioProfiles[profileSlug];
    assert(profile, `Missing portfolio profile for ${profileSlug}.`);

    const projectIds = profile.projects.map((project) => project.id);
    assert(new Set(projectIds).size === projectIds.length, `${profileSlug} has duplicate project ids.`);
    assert(projectIds.includes("shiftelix-workforce-os"), `${profileSlug} must include the Shiftelix case study.`);
    assert(!projectIds.includes("rutgers-scheduling-automation"), `${profileSlug} must not expose Rutgers scheduling as a separate project.`);
    assert(
      !profile.projects.some((project) => project.title === "Rutgers Scheduling Automation"),
      `${profileSlug} must not show a duplicate Rutgers Scheduling Automation card.`
    );

    const shiftelixProjects = profile.projects.filter((project) => project.id === "shiftelix-workforce-os");
    assert(shiftelixProjects.length === 1, `${profileSlug} must include Shiftelix exactly once.`);
  }

  const dataEngineerShiftelix = portfolioProfiles.dataengineer.projects.find((project) => project.id === "shiftelix-workforce-os");
  assert(dataEngineerShiftelix, "Data engineer profile is missing Shiftelix.");
  assert(
    dataEngineerShiftelix.context.includes("current product form of the Rutgers scheduling automation work"),
    "Shiftelix must preserve the Rutgers-origin context without becoming a separate card."
  );
  assert(
    dataEngineerShiftelix.outcomes.some((outcome) => outcome.includes("Evolved the Rutgers scheduling automation work")),
    "Shiftelix outcomes must explain how the Rutgers scheduling work evolved into the current product."
  );

  const educationSchools = portfolioProfiles.dataengineer.education.map((entry) => entry.school);
  assert(educationSchools.includes("Rutgers University - New Brunswick"), "Rutgers education entry is missing.");
  assert(educationSchools.includes("Army Institute of Technology"), "Army Institute of Technology education entry is missing.");
  assert(
    portfolioProfiles.dataengineer.personal.location === "New York City Metropolitan Area",
    "Shared location must stay aligned to New York City Metropolitan Area."
  );
}

async function assertLayoutContracts() {
  const layout = await readRepoFile("src/components/Layout.tsx");
  const footerClassMatch = layout.match(/<footer className="([^"]+)"/);
  assert(footerClassMatch, "Could not find Footer root className.");
  const footerClassName = footerClassMatch[1];

  assert(footerClassName.includes("bg-black"), "Footer root must keep an opaque black background.");
  assert(!/min-h-\[.*vh.*\]/.test(footerClassName), "Footer root must stay compact; do not add viewport-height min-height to it.");
  assert(!footerClassName.includes("backdrop-blur"), "Footer should stay clean and opaque, not glassy over the 3D scene.");
  assert(!layout.includes("Previous Site"), "Visible Previous Site nav/footer label must not return.");
  assert(!layout.includes("Previous site archive"), "Visible Previous site archive footer label must not return.");

  const home = await readRepoFile("src/pages/Home.tsx");
  const contactIndex = home.indexOf('data-home-scroll-section="contact"');
  const footerIndex = home.indexOf('data-home-scroll-section="footer"');
  assert(contactIndex > -1 && footerIndex > -1 && contactIndex < footerIndex, "Home page must keep contact immediately before footer.");

  const contactSectionMatch = home.match(/<section\s+id="contact"[\s\S]*?data-home-scroll-section="contact"[\s\S]*?className="([^"]+)"/);
  const footerSectionMatch = home.match(/<section\s+aria-label="Footer"[\s\S]*?data-home-scroll-section="footer"[\s\S]*?className="([^"]+)"/);
  assert(contactSectionMatch, "Could not find contact section className.");
  assert(footerSectionMatch, "Could not find footer section className.");

  const contactSectionClassName = contactSectionMatch[1];
  const footerSectionClassName = footerSectionMatch[1];
  const forbiddenSpacerPattern = /\bmin-h-screen\b|\bmin-h-\[[^\]]*vh[^\]]*\]|\bpb-(3[2-9]|[4-9][0-9])\b|\bmd:pb-(3[2-9]|[4-9][0-9])\b|\blg:pb-(3[2-9]|[4-9][0-9])\b/;

  assert(footerSectionClassName.includes("bg-black"), "Footer wrapper must keep an opaque black background.");
  assert(
    !forbiddenSpacerPattern.test(contactSectionClassName),
    "Contact wrapper must not add viewport-height sizing or large bottom spacer padding before the footer."
  );
  assert(
    !forbiddenSpacerPattern.test(footerSectionClassName),
    "Footer wrapper must stay compact; do not use viewport-height sizing or fake spacer padding after the footer."
  );
}

async function main() {
  assertPortfolioData();
  await assertLayoutContracts();
  await assertFileExists("public/archive/previous-site/index.html");
  console.log("Portfolio regression checks passed.");
}

await main();
