import * as React from "react";
import { ThemeProvider, createTheme, styled } from "@mui/material/styles";
import "../styles/Experience.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
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
              Microsoft Cloud for Independent Software Vendors & AI.
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
              Azure Global Development Cloud & AI, Energy.
              <ul>
                <li>
                  Supported the testing and release of a new energy-sector Azure
                  product.
                </li>
                <li>
                  Created thorough Build-Verification/Smoke test pipelines for
                  APIs and polished existing features by clearing tech debt.
                </li>
                <li>
                  Built customer-facing Azure DevOps pipelines with Postman,
                  YAML, and Python.
                </li>
              </ul>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <h3>
              Software Development Engineering Intern @ Amazon (4/2022 - 6/2022){" "}
            </h3>
          </AccordionSummary>
          <AccordionDetails className="accordion-details">
            <Typography>
              Alexa Latency.
              <ul>
                <li>
                  - Automated the device onboarding process for Devices to emit
                  User-Perceived Latency metrics.
                </li>
                <li>
                  - Resulting automation saved customers and my team 15 days of
                  man-hours per onboard.
                </li>
                <li>
                  - Built a custom API & pipeline, Typescript frontend, and
                  incorporated numerous AWS services.
                </li>
              </ul>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <h3>
              Software Engineering Intern @ F5 Networks (6/2021 - 9/2021){" "}
            </h3>
          </AccordionSummary>
          <AccordionDetails className="accordion-details">
            <Typography>
              Office of the CTO Common Product & Component Libraries,
              Supportability division.
              <ul>
                <li>
                  - Improved upon a common manifest schema that fulfilled the
                  metadata requirements of partner teams.
                </li>{" "}
                <li>
                  - Automated manifest generation & management for a F5-internal
                  health service that standardized cross-team requirements with
                  Go, sqlite, and Docker.
                </li>
              </ul>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <h3>
              Software Development Engineering Intern @ Amazon (1/2021 - 4/2021){" "}
            </h3>
          </AccordionSummary>
          <AccordionDetails className="accordion-details">
            <Typography>
              Alexa API Tools.
              <ul>
                <li>
                  - Strengthened API Central, a tool that allows Alexa Skill
                  engineers to smoothly get designs through review into
                  development.
                </li>
                <li>
                  - Improved traffic projections with a multilayer system that
                  compares estimates to real-time data and delivers metrics if
                  services are over/underutilizing.
                </li>
                <li>
                  - Designed new data access objects, a DynamoDB-backed API, and
                  a customer-facing Vue.js frontend.
                </li>
              </ul>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </ThemeProvider>
    </div>
  );
}
