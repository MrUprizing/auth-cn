import { checkout, polar, portal, usage } from "@polar-sh/better-auth";
import { Polar } from "@polar-sh/sdk";

const polarClient = new Polar({
  accessToken: process.env.POLAR_ACCESS_TOKEN,
  // Use 'sandbox' if you're using the Polar Sandbox environment
  // Remember that access tokens, products, etc. are completely separated between environments.

  // Access tokens obtained in Production are for instance not usable in the Sandbox environment.
  server: "sandbox",
});

export const polarPlugin = polar({
  client: polarClient,
  createCustomerOnSignUp: true,
  use: [
    checkout({
      products: [
        {
          productId: "123-456-789", // ID of Product from Polar Dashboard
          slug: "pro", // Custom slug for easy reference in Checkout URL, e.g. /checkout/pro
        },
      ],
      successUrl: "/success?checkout_id={CHECKOUT_ID}",
      authenticatedUsersOnly: true,
    }),
    portal(),
    usage(),
  ],
});
