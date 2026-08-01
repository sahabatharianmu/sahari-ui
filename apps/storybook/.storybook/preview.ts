import "../../../packages/react/src/styles.css";
import "../src/preview.css";

export const parameters = {
  backgrounds: {
    default: "Sahari",
    values: [{ name: "Sahari", value: "#F9FBFD" }],
  },
  viewport: {
    options: {
      mobile: { name: "Mobile", styles: { width: "390px", height: "844px" } },
      tablet: { name: "Tablet", styles: { width: "768px", height: "1024px" } },
      desktop: { name: "Desktop", styles: { width: "1280px", height: "800px" } },
    },
  },
  initialGlobals: {
    viewport: { value: "mobile" },
  },
};
