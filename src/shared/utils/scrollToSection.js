export const ABOUT_SECTION_ID = "about-us";

export function scrollToSection(id) {
  requestAnimationFrame(() => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

export function navigateToSection(navigate, pathname, sectionId) {
  const hash = `#${sectionId}`;

  if (pathname === "/") {
    window.history.replaceState(null, "", hash);
    scrollToSection(sectionId);
    return;
  }

  navigate({ pathname: "/", hash });
}
