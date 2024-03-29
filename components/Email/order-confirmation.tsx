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
import { formatOrderId } from '../../utils/formatOrderId';

const baseUrl = 'https://www.mndorp.nl';

export const OrderConfirmationEmail = ({
  addressLine1,
  addressLine2,
  city,
  country,
  customerName,
  postalCode,
  orderDate = '2 July 2023 11:12',
  orderId = 'pi_3NPOCjHOXxf98pPw0gBFDrSa',
  size,
  state,
  townColor,
  townName,
  zipCode = '1611'
}: EmailOrderProps) => (
  <Html style={html}>
    <Head />
    <Preview>
      Bestelling voor {townName} hoodie in maat {size}
    </Preview>
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
            {postalCode}, {city} {state && state + ' '}
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
                {townName} hoodie
              </Text>
              <Text style={global.text}>Size {size.toUpperCase()}</Text>
            </Column>
          </Row>
        </Section>
        <Hr style={global.hr} />
        <Section style={global.defaultPadding}>
          <Row style={{ display: 'inline-flex', marginBottom: 40 }}>
            <Text style={{ ...global.paragraphWithBold, fontWeight: '500' }}>
              Order nummer:{' '}
              <span style={{ fontWeight: '300' }}>
                {formatOrderId(orderId)}
              </span>
            </Text>
            <Text style={{ ...global.paragraphWithBold, fontWeight: '500' }}>
              Order datum:{' '}
              <span style={{ fontWeight: '300' }}>{orderDate}</span>
            </Text>
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

export default OrderConfirmationEmail;

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
