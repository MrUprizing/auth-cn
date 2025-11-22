import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  pixelBasedPreset,
  Section,
  Tailwind,
  Text,
  Font,
} from "@react-email/components";

interface WelcomeEmailProps {
  name: string;
  email?: string;
}

export const WelcomeEmail = ({ name, email }: WelcomeEmailProps) => {
  const previewText = `Welcome to our community, ${name}!`;

  return (
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
      <Tailwind
        config={{
          presets: [pixelBasedPreset],
        }}
      >
        <Body className="mx-auto my-auto bg-white px-2 font-sans">
          <Preview>{previewText}</Preview>
          <Container className="mx-auto my-10 max-w-[465px] rounded border border-[#eaeaea] border-solid p-5">
            <Section className="mt-8">
              <Img
                src={`https://react-email-demo-m5r635azu-resend.vercel.app/static/vercel-logo.png`}
                width="40"
                height="37"
                alt="Brand Logo"
                className="mx-auto my-0"
              />
            </Section>
            <Heading className="mx-0 my-[30px] p-0 text-center font-normal text-[24px] text-black">
              Welcome to <strong>Vercel</strong>
            </Heading>
            <Text className="text-[14px] text-black leading-6">
              Hello {name},
            </Text>
            <Text className="text-[14px] text-black leading-6">
              We're excited to have you join us! Your account is all set up and
              ready to explore everything we have to offer.
            </Text>
            <Text className="text-[14px] text-black leading-6">
              Here's what you can do next:
            </Text>
            <Text className="text-[14px] text-black leading-6 ml-4">
              • Complete your profile
              <br />• Explore our features
              <br />• Connect with our community
            </Text>
            <Section className="mt-8 mb-8 text-center">
              <Button
                className="rounded bg-[#000000] px-5 py-3 text-center font-semibold text-[12px] text-white no-underline"
                href={`https://auth.uprizing.me`}
              >
                Get started
              </Button>
            </Section>
            <Text className="text-[14px] text-black leading-6">
              or visit us at:{" "}
              <Link
                href={`https://auth.uprizing.me`}
                className="text-blue-600 no-underline"
              >
                https://auth.uprizing.me
              </Link>
            </Text>
            <Hr className="mx-0 my-[26px] w-full border border-[#eaeaea] border-solid" />
            <Text className="text-[#666666] text-[12px] leading-6">
              Welcome email for <span className="text-black">{name}</span>
              {email && <> ({email})</>}. If you have any questions or need
              assistance, please don't hesitate to reach out to our support
              team. We're here to help!
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

WelcomeEmail.PreviewProps = {
  name: "Mr Uprizing",
  email: "uprizing@example.com",
} as WelcomeEmailProps;

export default WelcomeEmail;
