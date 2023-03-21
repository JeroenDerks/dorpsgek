import React from 'react';
import { Grid, Typography, Divider } from '@mui/material';
import { Section } from '../Section';
import { TownData } from '../../types';
import { Accordion, AccordionDetails, AccordionSummary } from '../Accordion';

export const FAQ = ({ town }: { town: TownData }) => {
  const usps = [
    {
      title: 'Wat zijn de verzendkosten?',
      mobileTitle: 'Verzendkosten',
      description:
        'Er zijn geen verzendkosten en je krijgt de hoodie gratis thuisbezorgd.'
    },
    {
      title: 'Kan ik retourneren?',
      mobileTitle: 'Retourneren',
      description:
        'Mocht je niet tevreden zijn, dan kun je altijd binnen 14 dagen je kledingstuk terugsturen.'
    },
    {
      title: 'Wanneer ontvang ik het?',
      mobileTitle: 'Verzendtijd',
      description:
        'Omdat het een custom print is, duurt het 3-5 dagen voordat hij bij jou op de deurmat ligt.'
    },
    {
      title: 'Wat is de pasvorm van de hoodie?',
      mobileTitle: 'Pasvorm',
      description: 'De hoodie heeft een normale pasvorm.'
    },
    {
      title: 'Welke maat moet ik bestellen?',
      mobileTitle: 'Maat',
      description:
        'De hoodie valt normaal uit. Draag je normaal een Medium, bestel dan nu ook een Medium.'
    },
    {
      title: 'Hoe kan ik in contact komen?',
      mobileTitle: 'Contact',
      description: `Mocht je vragen hebben dan kun je altijd mailen op ${town.name.toLowerCase()}@mndorp.nl`
    }
  ];

  return (
    <Section>
      <Divider />
      <Grid container mt={['0px', '0px', 10]}>
        <Grid item xs={12} sm={12} md={3}>
          <Typography
            variant="h3"
            textAlign={['center', 'center', 'left']}
            my={[4, 4, '0px']}
          >
            VEEL GESTELDE VRAGEN
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={9}>
          {usps.map(({ description, mobileTitle }) => (
            <Accordion>
              <AccordionSummary aria-controls={`faq-${mobileTitle}`}>
                <Typography variant="h5" fontWeight={700}>
                  {mobileTitle}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1">{description}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Grid>
      </Grid>
    </Section>
  );
};
