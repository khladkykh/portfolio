import { Box, useTheme, Typography } from "@mui/material";
import Header from "../../components/Header";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import { tokens } from "../../theme";

const FAQ = () => {

    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

    return(
        <Box m="20px">
            <Header title="FAQ" subtitle="Frequently Asked Questions Page"/>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMore/>}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        An important question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo atque voluptatum magnam ullam veritatis. Deleniti quasi, eius unde blanditiis aperiam qui assumenda libero cumque perspiciatis provident explicabo eaque repellendus praesentium.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMore/>}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        An important question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo atque voluptatum magnam ullam veritatis. Deleniti quasi, eius unde blanditiis aperiam qui assumenda libero cumque perspiciatis provident explicabo eaque repellendus praesentium.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMore/>}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        An important question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo atque voluptatum magnam ullam veritatis. Deleniti quasi, eius unde blanditiis aperiam qui assumenda libero cumque perspiciatis provident explicabo eaque repellendus praesentium.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMore/>}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        An important question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo atque voluptatum magnam ullam veritatis. Deleniti quasi, eius unde blanditiis aperiam qui assumenda libero cumque perspiciatis provident explicabo eaque repellendus praesentium.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMore/>}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        An important question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo atque voluptatum magnam ullam veritatis. Deleniti quasi, eius unde blanditiis aperiam qui assumenda libero cumque perspiciatis provident explicabo eaque repellendus praesentium.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Box>
    )
       
    
}

export default FAQ;