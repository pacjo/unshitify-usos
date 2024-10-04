console.log("Unshitify loaded!");

// Find the <usos-layout> element
const usosLayout = document.querySelector("usos-layout");

if (usosLayout && usosLayout.shadowRoot) {
  // Get the shadow root
  const shadowRoot = usosLayout.shadowRoot;

  // Find the style element in the shadow DOM
  const styleElement = shadowRoot.querySelector("style");

  if (styleElement) {
    // Remove max-width and min-width from the CSS text
    styleElement.textContent = styleElement.textContent.replace(/max-width:\s*1200px;/, "90%");
  }

  // As an additional measure, directly set the style on the host element
  usosLayout.style.maxWidth = "90%";
}
