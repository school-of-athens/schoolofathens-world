"use client";

import SetUpStepper from "../setup/components/SetUpStepper";
import BasicInfo from "../setup/components/BasicInfo";
import Statistics from "../setup/components/Statistics";
import Bio from "../setup/components/Bio";
import { Box, Grid, GridItem, useSteps } from "@chakra-ui/react";

export default function SetUp() {
  const { activeStep, setActiveStep } = useSteps({
    index: 0,
    count: 3,
  });

  return (
    <Box className="container">
      <Grid minHeight="calc(100vh - 8rem)" templateColumns="repeat(12, 1fr)">
        <GridItem colSpan={{ base: 12, md: 4, lg: 3 }}>
          <SetUpStepper activeStep={activeStep} setActiveStep={setActiveStep} />
        </GridItem>
        <GridItem
          colSpan={{ base: 12, md: 8, lg: 9 }}
          px={{ base: 6, sm: 12, md: 14, lg: 16 }}
          py={{ base: 6, sm: 12 }}
        >
          {activeStep === 0 && <BasicInfo setActiveStep={setActiveStep} />}
          {activeStep === 1 && <Statistics setActiveStep={setActiveStep} />}
          {activeStep === 2 && <Bio setActiveStep={setActiveStep} />}
        </GridItem>
      </Grid>
    </Box>
  );
}
