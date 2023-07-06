import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { mockTransactions } from "../../data/mockData";
import { DownloadOutlined, Email, PointOfSale, PersonAdd, Traffic } from "@mui/icons-material";
import LineChart from "../../components/LineChart";
import PieChart from "../../components/PieChart";
import GeographyChart from "../../components/GeographyChart";
import BarChart from "../../components/BarCharts";
import StatBox from "../../components/StatBox"
import ProgressCircle from "../../components/ProgressCircle";


const Dashboard = () => {

    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    
    return(
        <Box m="20px">
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Header title="DASHBOARD" subtitle="Welcome to your dashboard"/>
            

                <Box>
                    <Button sx={{
                    backgroundColor: colors.blueAccent[700],
                    color: colors.grey[100],
                    fontSize: "14px",
                    fontWeight: "bold",
                    padding: "10px 20px"
                    }} 
                    >
                        <DownloadOutlined sx={{mr: "10px"}}/>
                        Download Reports
                    </Button>
                </Box>
            </Box>

            <Box 
            display="grid" 
            gridTemplateColumns="repeat(12, 1fr)"
            gridAutoRows="140px"
            gap="20px"
            >

                {/* First Row */}


                <Box
                gridColumn="span 3"
                backgroundColor={colors.primary[400]}
                display="flex"
                justifyContent="center"
                alignItems="center"
                >
                    <StatBox
                    title="12,361"
                    subtitle="Emails Sent"
                    progress="0.75"
                    increase="+14%"
                    icon={<Email sx={{color: colors.greenAccent[600], fontSize: "26px"}}/>}
                    />
                </Box>
                <Box
                gridColumn="span 3"
                backgroundColor={colors.primary[400]}
                display="flex"
                justifyContent="center"
                alignItems="center"
                >
                    <StatBox
                    title="431,225"
                    subtitle="Sales Obtained"
                    progress="0.5"
                    increase="+21%"
                    icon={<PointOfSale sx={{color: colors.greenAccent[600], fontSize: "26px"}}/>}
                    />
                </Box>
                <Box
                gridColumn="span 3"
                backgroundColor={colors.primary[400]}
                display="flex"
                justifyContent="center"
                alignItems="center"
                >
                    <StatBox
                    title="33,441"
                    subtitle="New Clients"
                    progress="0.30"
                    increase="+5%"
                    icon={<PersonAdd sx={{color: colors.greenAccent[600], fontSize: "26px"}}/>}
                    />
                </Box>
                <Box
                gridColumn="span 3"
                backgroundColor={colors.primary[400]}
                display="flex"
                justifyContent="center"
                alignItems="center"
                >
                    <StatBox
                    title="1,325,134"
                    subtitle="Traffic Inbound"
                    progress="0.80"
                    increase="+43%"
                    icon={<Traffic sx={{color: colors.greenAccent[600], fontSize: "26px"}}/>}
                    />
                </Box>

                    {/* Second Row */}
                    
                <Box
                gridColumn="span 8"
                gridRow="span 2"
                backgroundColor={colors.primary[400]}
                >
                    <Box
                    mt="25px"
                    p="0 30px"
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    >
                        <Box>
                            <Typography 
                            variant="h5" 
                            fontWeight="600"
                            color={colors.grey[100]}
                            >
                                Revenue Generated
                            </Typography>
                            <Typography 
                            variant="h3" 
                            fontWeight="500"
                            color={colors.greenAccent[500]}
                            >
                                $59,342,32
                            </Typography>
                        </Box>
                        <Box>
                            <IconButton>
                                <DownloadOutlined sx={{ fontSize: "26px", color: colors.greenAccent[500]}}/>
                            </IconButton>
                        </Box>
                    </Box>
                    <Box height="250px" ml="-20px">
                        <LineChart isDashboard={true}/>
                    </Box>
                </Box>

                    <Box
                    gridColumn="span 4"
                    gridRow="span 2"
                    backgroundColor={colors.primary[400]}
                    overflow="auto"
                    >
                        <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        borderBottom={`4px solid ${colors.primary[500]}`}
                        color={colors.grey[100]}
                        padding="15px"
                        >
                            <Typography 
                            color={colors.grey[100]} 
                            variant="h5" 
                            fontWeight="600"
                            >
                                Recent Transactions
                            </Typography>
                        </Box>
                        {mockTransactions.map((transaction, i) => (
                            <Box
                            key={`${transaction.txId}-${i}`}
                            display="flex"
                            justifyContent="space-between"
                            alignItems="center"
                            borderBottom={`4px solid ${colors.primary[500]}`}
                            padding="15px"
                            >
                                <Box>
                                    <Typography 
                                    color={colors.greenAccent[500]} 
                                    variant="h5" 
                                    fontWeight="600"
                                    >
                                        {transaction.txId}
                                    </Typography>
                                    <Typography 
                                    color={colors.grey[100]} 
                                    >
                                        {transaction.user}
                                    </Typography>
                                </Box>
                                <Box color={colors.grey[100]}>
                                    {transaction.date}
                                </Box>
                                <Box 
                                backgroundColor={colors.greenAccent[500]}
                                p="5px 10px"
                                borderRadius="4px"
                                >
                                    ${transaction.cost}
                                </Box>
                            </Box>
                        ))}
                    </Box>

                {/* Third Row */}

                <Box
                gridColumn="span 4"
                gridRow="span 2"
                backgroundColor={colors.primary[400]}
                p="30px"
                >
                    <Typography
                    variant="h5" 
                    fontWeight="600"
                    >
                        Campaign
                    </Typography>
                    <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    mt="25px"
                    >
                        <ProgressCircle size="125"/>
                        <Typography
                        variant="h5"
                        color={colors.greenAccent[500]}
                        sx={{mt: "15px"}}
                        >
                            $48,352 revenue generated
                        </Typography>
                        <Typography>
                            Includes extra misc expenditures and costs
                        </Typography>
                    </Box>
                </Box>

                <Box
                gridColumn="span 4"
                gridRow="span 2"
                backgroundColor={colors.primary[400]}
                >
                    <Typography
                    variant="h5" 
                    fontWeight="600"
                    sx={{
                        p: "30px 30px 0 30px"
                    }}
                    >
                        Sales Quantity
                    </Typography>
                    <Box
                    height="250px"
                    >
                        <BarChart isDashboard={true}/>
                    </Box>
                </Box>

                <Box
                gridColumn="span 4"
                gridRow="span 2"
                backgroundColor={colors.primary[400]}
                padding="30px"
                >
                    <Typography
                    variant="h5" 
                    fontWeight="600"
                    sx={{
                        mb: "15px"
                    }}
                    >
                        Geography Based Traffic
                    </Typography>
                    <Box
                    height="200px"
                    >
                        <GeographyChart isDashboard={true}/>
                    </Box>
                </Box>

            </Box>    
        </Box>

    )
}

export default Dashboard;