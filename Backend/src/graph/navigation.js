export function detectNavigation(text) {
  const message = text.toLowerCase();

  if (
    message.includes("project") ||
    message.includes("projects")
  ) {
    return {
      label: "View Projects",
      target: "#projects"
    };
  }

  if (
    message.includes("certification") ||
    message.includes("certificate")
  ) {
    return {
      label: "View Certifications",
      target: "#certifications"
    };
  }

  if (
    message.includes("achievement") ||
    message.includes("achievements")
  ) {
    return {
      label: "View Achievements",
      target: "#achievements"
    };
  }

  if (
    message.includes("skill") ||
    message.includes("technology") ||
    message.includes("technologies")
  ) {
    return {
      label: "View Skills",
      target: "#skills"
    };
  }

  if (
    message.includes("contact") ||
    message.includes("hire")
  ) {
    return {
      label: "Contact Shubham",
      target: "#contact"
    };
  }

  return null;
}