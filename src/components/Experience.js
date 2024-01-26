import * as React from 'react';
import { ThemeProvider, createTheme, styled } from '@mui/material/styles';
import '../styles/Experience.css';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function AccordionExpandDefault() {
  return (
    <div className="accordion-container">
      <ThemeProvider theme={darkTheme}>
        <Accordion defaultExpanded>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <h3>Software Engineer at Microsoft (7/2023 - Present)</h3>
          </AccordionSummary>
          <AccordionDetails className="accordion-details">
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <h3>Software Engineering Intern @ Microsoft (6/2022 - 9/2022) </h3>
          </AccordionSummary>
          <AccordionDetails className="accordion-details">
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <h3>Software Development Engineering Intern @ Amazon (4/2022 - 6/2022) </h3>
          </AccordionSummary>
          <AccordionDetails className="accordion-details">
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <h3>Software Engineering Intern @ F5 Networks (6/2021 - 9/2021) </h3>
          </AccordionSummary>
          <AccordionDetails className="accordion-details">
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <h3>Software Development Engineering Intern @ Amazon (1/2021 - 4/2021) </h3>
          </AccordionSummary>
          <AccordionDetails className="accordion-details">
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </ThemeProvider>
    </div>
  );
}
