import {
  Body,
  Container,
  Font,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

interface WelcomeEmailProps {
  name: string;
  email?: string;
}

export const WelcomeEmail = ({ name, email }: WelcomeEmailProps) => (
  <Html>
    <Head>
      <Font
        fontFamily="Geist"
        fallbackFontFamily="Verdana"
        webFont={{
          url: "https://fonts.googleapis.com/css2?family=Geist",
          format: "embedded-opentype",
        }}
        fontWeight={300}
        fontStyle="normal"
      />
    </Head>
    <Tailwind>
      <Body className="bg-white font-raycast">
        <Preview>Welcome to our community, {name}!</Preview>
        <Container className="mx-auto my-0 pt-5 px-[25px] pb-12 bg-[url('/static/raycast-bg.png')] bg-bottom bg-no-repeat">
          <Img
            src={`https://react-email-demo-m5r635azu-resend.vercel.app/static/raycast-logo.png`}
            width={48}
            height={48}
            alt="Brand Logo"
          />
          <Heading className="text-[28px] font-bold mt-12">
            🎉 Welcome, {name}!
          </Heading>
          <Section className="my-6 mx-0">
            <Text className="text-base leading-6.5">
              We're absolutely thrilled to have you join our community. Your
              account is all set up and ready to go!
            </Text>
            <Text className="text-base leading-6.5 mt-4">
              <Link
                className="text-[#FF6363] font-semibold"
                href={`https://auth.uprizing.me/`}
              >
                👉 Get started now 👈
              </Link>
            </Text>
            <Text className="text-base leading-6.5 mt-6">
              Here's what you can explore:
            </Text>
            <Text className="text-base leading-6.5 ml-4">
              • Discover amazing features
              <br />• Customize your preferences
              <br />• Connect with our community
            </Text>
          </Section>
          <Text className="text-base leading-6.5 mt-8">
            Best,
            <br />- Our Team
          </Text>
          <Hr className="border-[#dddddd] mt-12" />
          <Img
            src={`https://react-email-demo-m5r635azu-resend.vercel.app/static/raycast-logo.png`}
            width={32}
            height={32}
            style={{
              WebkitFilter: "grayscale(100%)",
            }}
            className="filter-[grayscale(100%)] my-5 mx-0"
          />
          <Text className="text-[#8898aa] text-xs leading-6 ml-1">
            Uprizing
          </Text>
          {email && (
            <Text className="text-[#8898aa] text-xs leading-6 ml-1">
              Account: {email}
            </Text>
          )}
          <Text className="text-[#8898aa] text-xs leading-6 ml-1">
            <Link
              href={`https://auth.uprizing.me/`}
              className="text-[#8898aa] underline"
            >
              Need help? Visit our support center
            </Link>
          </Text>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

WelcomeEmail.PreviewProps = {
  name: "Mr Uprizing",
  email: "uprizing@example.com",
} as WelcomeEmailProps;

export default WelcomeEmail;
