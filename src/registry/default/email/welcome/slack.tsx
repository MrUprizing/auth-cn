import {
  Body,
  Column,
  Container,
  Font,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Row,
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
      <Body className="bg-white font-slack mx-auto my-0">
        <Preview>Welcome to our community, {name}!</Preview>
        <Container className="mx-auto my-0 py-0 px-5">
          <Section className="mt-8">
            <Img
              src={`https://react-email-demo-m5r635azu-resend.vercel.app/static/slack-logo.png`}
              width="120"
              height="36"
              alt="Brand Logo"
            />
          </Section>
          <Heading className="text-[#1d1c1d] text-4xl font-bold my-[30px] mx-0 p-0 leading-[42px]">
            Welcome, {name}!
          </Heading>
          <Text className="text-xl mb-7.5">
            We're excited to have you on board. Thank you for joining our
            community. We're here to help you get started and make the most of
            your experience with us.
          </Text>

          <Text className="text-black text-sm leading-6">
            If you have any questions or need assistance, don't hesitate to
            reach out to our support team.
          </Text>

          <Section>
            <Row className="mb-8 pl-2 pr-2">
              <Column className="w-2/3">
                <Img
                  src={`https://react-email-demo-m5r635azu-resend.vercel.app/static/slack-logo.png`}
                  width="120"
                  height="36"
                  alt="Brand Logo"
                />
              </Column>
              <Column align="right">
                <Link href="https://auth.uprizing.me/">
                  <Img
                    src={`https://react-email-demo-m5r635azu-resend.vercel.app/static/slack-twitter.png`}
                    width="32"
                    height="32"
                    alt="Twitter"
                    className="inline ml-2"
                  />
                </Link>
                <Link href="https://auth.uprizing.me/">
                  <Img
                    src={`https://react-email-demo-m5r635azu-resend.vercel.app/static/slack-facebook.png`}
                    width="32"
                    height="32"
                    alt="Facebook"
                    className="inline ml-2"
                  />
                </Link>
                <Link href="https://auth.uprizing.me/">
                  <Img
                    src={`https://react-email-demo-m5r635azu-resend.vercel.app/static/slack-linkedin.png`}
                    width="32"
                    height="32"
                    alt="LinkedIn"
                    className="inline ml-2"
                  />
                </Link>
              </Column>
            </Row>
          </Section>

          <Section>
            <Link
              className="text-[#b7b7b7] underline"
              href="https://auth.uprizing.me/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Our blog
            </Link>
            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
            <Link
              className="text-[#b7b7b7] underline"
              href="https://auth.uprizing.me/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Policies
            </Link>
            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
            <Link
              className="text-[#b7b7b7] underline"
              href="https://auth.uprizing.me/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Help center
            </Link>
            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
            <Link
              className="text-[#b7b7b7] underline"
              href="https://auth.uprizing.me/"
              target="_blank"
              rel="noopener noreferrer"
              data-auth="NotApplicable"
              data-linkindex="6"
            >
              Community
            </Link>
            <Text className="text-xs leading-[15px] text-left mb-[50px] text-[#b7b7b7]">
              ©2024 Uprizing. All rights reserved. <br />
              {email && (
                <>
                  Account: {email} <br />
                </>
              )}
              <br />
              If you need help, visit our support page.
            </Text>
          </Section>
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
