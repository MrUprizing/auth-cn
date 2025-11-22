import {
  Body,
  Container,
  Font,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
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
      <Body className="bg-white font-notion">
        <Preview>Welcome to our community, {name}!</Preview>
        <Container className="px-3 mx-auto">
          <Heading className="text-[#333] text-[24px] my-10 mx-0 p-0">
            Welcome, {name}
          </Heading>
          <Text className="text-[#333] text-[14px] my-6 mb-3.5">
            We're thrilled to have you join us! Your account is ready to use and
            we can't wait to see what you'll create.
          </Text>
          <Link
            href="https://auth.uprizing.me/"
            target="_blank"
            className="text-[#2754C5] text-[14px] underline mb-4 block"
          >
            Get started now
          </Link>

          <Text className="text-[#333] text-[14px] my-6 mb-3.5">
            Here's what you can do next:
          </Text>
          <Text className="text-[#333] text-[14px] my-2 ml-4">
            • Explore our features and documentation
            <br />• Customize your account settings
            <br />• Connect with our community
          </Text>

          <Text className="text-[#ababab] text-[14px] mt-3.5 mb-4">
            If you have any questions, feel free to reach out to our support
            team anytime.
          </Text>
          <Text className="text-[#ababab] text-[14px] mt-3.5 mb-9.5">
            Happy exploring!
          </Text>
          <Img
            src={`https://react-email-demo-m5r635azu-resend.vercel.app/static/notion-logo.png`}
            width="32"
            height="32"
            alt="Brand Logo"
          />
          <Text className="text-[#898989] text-[12px] leading-[22px] mt-3 mb-6">
            <Link
              href="https://auth.uprizing.me/"
              target="_blank"
              className="text-[#898989] text-[14px] underline"
            >
              Uprizing
            </Link>
            <br />
            {email && (
              <>
                Account: {email}
                <br />
              </>
            )}
            <br />
            Questions? Visit our{" "}
            <Link
              href="https://auth.uprizing.me/"
              target="_blank"
              className="text-[#898989] text-[14px] underline"
            >
              help center
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
