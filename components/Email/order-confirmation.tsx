import {
  Body,
  Column,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Text
} from '@react-email/components';
import * as React from 'react';
import {
  adressTitle,
  container,
  footer,
  html,
  main,
  message,
  paddingY,
  paragraph,
  top
} from './styled';

const baseUrl = 'https://www.mndorp.nl';

export const NikeReceiptEmail = ({
  addressLine1,
  addressLine2,
  city,
  country,
  customerName,
  postalCode,
  orderDate,
  orderId,
  size,
  state,
  townColor,
  townName,
  zipCode = '1611'
}: EmailOrderProps) => (
  <Html style={html}>
    <Head />
    <Preview>Get your order summary, estimated delivery date and more</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={top.container}>
          <Section style={{ ...top.coloredLine, backgroundColor: townColor }} />
        </Section>
        <Section style={message}>
          <Heading style={global.heading}>Aan de slag.</Heading>
          <Text style={global.text}>Je bestelling is ontvangen</Text>
          <Text style={{ ...global.text, marginTop: 24 }}>
            Houd er rekening mee dat elk item apart bedrukt moet worden. Daarom
            is de bezorgtijd zo'n 3 tot 5 dagen. Alvast bedankt voor je geduld,
            en veel plezier met je aankoop.
          </Text>
        </Section>
        <Hr style={global.hr} />
        <Section style={global.defaultPadding}>
          <Text style={adressTitle}>Bestelling voor: {customerName}</Text>
          <Text style={{ ...global.text, fontSize: 14 }}>
            {addressLine1} {addressLine2 && addressLine2 + ' '}
            {postalCode} {city} {state && state + ' '}
            {country}
          </Text>
        </Section>
        <Hr style={global.hr} />
        <Section style={{ padding: '32px 16px' }}>
          <Row>
            <Column>
              <Img
                src={`${baseUrl}/product/${zipCode}_model.jpg`}
                alt={`${townName} hoodie (${zipCode}) in maat ${size}`}
                style={{ float: 'left' }}
                width="260px"
              />
            </Column>
            <Column style={{ verticalAlign: 'top', paddingLeft: '12px' }}>
              <Text style={{ ...paragraph, fontWeight: '500' }}>
                {townName} hoodie - {zipCode}
              </Text>
              <Text style={global.text}>Size {size}</Text>
            </Column>
          </Row>
        </Section>
        <Hr style={global.hr} />
        <Section style={global.defaultPadding}>
          <Row style={{ display: 'inline-flex', marginBottom: 40 }}>
            <Column style={{ width: '170px' }}>
              <Text style={global.paragraphWithBold}>Order nummer</Text>
              <Text>{orderId}</Text>
            </Column>
            <Column>
              <Text style={global.paragraphWithBold}>Order datum</Text>
              <Text>{orderDate}</Text>
            </Column>
          </Row>
        </Section>
        <Hr style={{ ...global.hr, marginTop: '12px' }} />
        <Section style={paddingY}>
          <Text style={{ ...footer.text, paddingTop: 30, paddingBottom: 30 }}>
            Mocht je vragen hebben, stuur dan een email.
          </Text>
          <Text style={footer.text}>© 2023 mndorp</Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default NikeReceiptEmail;

type EmailOrderProps = {
  addressLine1: string;
  addressLine2: string;
  city: string;
  customerName: string;
  country: string;
  orderId: string;
  postalCode: string;
  price: string;
  size: string;
  state: string;
  townColor: string;
  townName: string;
  zipCode: string;
  orderDate: string;
};
