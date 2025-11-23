import {
  Body,
  Button,
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

interface LinearWelcomeEmailProps {
  name: string;
  email?: string;
}

export const LinearWelcomeEmail = ({
  name,
  email,
}: LinearWelcomeEmailProps) => (
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
      <Body className="bg-white font-linear">
        <Preview>Welcome to Linear, {name}</Preview>
        <Container className="mx-auto my-0 max-w-[560px] px-0 pt-5 pb-12">
          <Img
            src={`https://react-email-demo-m5r635azu-resend.vercel.app/static/linear-logo.png`}
            width="42"
            height="42"
            alt="Linear"
            className="rounded-3xl w-[42px] h-[42px]"
          />
          <Heading className="text-[24px] tracking-[-0.5px] leading-[1.3] font-normal text-[#484848] pt-[17px] px-0 pb-0">
            Welcome, {name}!
          </Heading>
          <Text className="mb-[15px] mx-0 mt-2.5 leading-[1.4] text-[15px] text-[#3c4149]">
            Your account has been successfully created. We're excited to have
            you on Linear.
          </Text>
          <Section className="py-[27px] px-0">
            <Button
              className="bg-[#5e6ad2] rounded font-semibold text-white text-[15px] no-underline text-center block py-[11px] px-[23px]"
              href="https://linear.app"
            >
              Get Started on Linear
            </Button>
          </Section>
          <Text className="mb-[15px] mx-0 mt-[15px] leading-[1.4] text-[15px] text-[#3c4149]">
            Once inside, you can:
          </Text>
          <ul className="list-disc pl-5 text-[15px] text-[#3c4149] leading-[1.6]">
            <li>Create and manage projects</li>
            <li>Collaborate with your team</li>
            <li>Organize tasks and workflows</li>
          </ul>
          <Hr className="border-[#dfe1e4] mt-[42px] mb-[26px]" />
          <Text className="text-[12px] text-[#b4becc] mx-0 my-0">
            {email && (
              <>
                Email: {email}
                <br />
              </>
            )}
            © 2024 Linear. All rights reserved.
          </Text>
          <Link
            href="https://linear.app"
            className="text-[#b4becc] text-[14px]"
          >
            Linear
          </Link>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

LinearWelcomeEmail.PreviewProps = {
  name: "Mr Uprizing",
  email: "uprizing@example.com",
} as LinearWelcomeEmailProps;

export default LinearWelcomeEmail;
