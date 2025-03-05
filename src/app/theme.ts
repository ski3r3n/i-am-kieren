/* theme.ts */
import { createSystem, defaultConfig } from "@chakra-ui/react";

export const theme = createSystem(defaultConfig, {
  theme: {
    tokens: {
      fonts: {
        body: { value: "DM Sans, sans-serif" },
        heading: { value: "Montserrat, sans-serif" },
      },
    },
  },
});
