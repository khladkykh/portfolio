import { useState } from "react";
import "./sidebar.css"
import {Sidebar, Menu, MenuItem, useProSidebar} from "react-pro-sidebar"
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import user from "../../assets/user.png"
import { HomeOutlined, PeopleOutlined, ContactsOutlined, ReceiptOutlined, PersonOutlined, CalendarTodayOutlined, HelpOutlined, BarChartOutlined, PieChartOutlineOutlined, MenuOutlined, TimelineOutlined, MapOutlined } from "@mui/icons-material";

const Item = ({title, to, icon}) => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

    return(
        <MenuItem 
        style={{color: colors.grey[100], backgroundColor: "transparent"}} 
      
        icon={icon}
        className="menuItem"
        > 
            <Link to={to}><Typography className="menuItem_header" color={colors.grey[100]} sx={{textDecoration: "none"}}>{title}</Typography></Link>
        </MenuItem>
    )
}

const SidebarLine = () => {

    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const { collapseSidebar, collapsed } = useProSidebar();
    
    return(
        <Box
        sx={{
           display: "flex",
           height: '100%'
          }}
        >
            <Sidebar  
            backgroundColor={`${colors.primary[400]}`} 
            style={{border: "none"}} >

               <Menu iconShape="square">

                {/* LOGO */}

                    <MenuItem
                    onClick={() => collapseSidebar()}
                    icon={ collapsed ? <MenuOutlined/> : undefined}
                    style={{
                        margin: "10px 0 20px 0",
                        color: colors.grey[100],
                        backgroundColor: "transparent"
                    }}
                    >
                    {!collapsed &&
                    (<Box 
                    display="flex" 
                    justifyContent="space-between" 
                    alignItems="center" 
                    ml="15px"
                    onClick={() => collapseSidebar()}
                    >
                        <Typography variant="h3" color={colors.grey[100]}>
                            NiceBar
                        </Typography>
                        <IconButton 
                        onClick={() => collapseSidebar()}
                        style={{
                            color: colors.grey[100]
                        }}
                        >
                            <MenuOutlined/>
                        </IconButton>
                    </Box>)
                    }    
                    </MenuItem>

                    {/* USER */}

                    {!collapsed &&
                    (<Box mb="25px">
                        <Box 
                        display="flex"
                        justifyContent="center" 
                        alignItems="center" 
                        >
                            <img
                            alt="profile-user"
                            width="100px"
                            height="100px"
                            src={user}
                            style={{cursor: "pointer", borderRadius: "50%"}}
                            />
                        </Box>

                        <Box textAlign="center">
                            <Typography 
                            variant="h2" 
                            color={colors.grey[100]} 
                            fontWeight="bold"
                            sx={{
                                m: "10px 0 0 0"
                            }}
                            >
                                Mark
                            </Typography>
                            <Typography
                            variant="h5" 
                            color={colors.greenAccent[500]} 
                            >
                                VP Fancy Admin
                            </Typography>
                        </Box>
                    </Box>
                    )}

                    {/* Menu Items */}

                    <Box paddingLeft={collapsed ? undefined : "10%"}>
                        <Item
                            title="Dashboard"
                            to="/"
                            icon={<HomeOutlined/>}
                        />
                        <Typography
                        variant="h6"
                        color={colors.grey[300]}
                        sx={{m: "15px 0 5px 20px"}}
                        >
                            Data
                        </Typography>
                        <Item
                            title="Manage Team"
                            to="/team"
                            icon={<PeopleOutlined/>}
                        />
                        <Item
                            title="Contacts Information"
                            to="/contacts"
                            icon={<ContactsOutlined/>}
                        />
                        <Item
                            title="Invoices Balances"
                            to="/invoices"
                            icon={<ReceiptOutlined/>}
                        />
                        <Typography
                        variant="h6"
                        color={colors.grey[300]}
                        sx={{m: "15px 0 5px 20px"}}
                        >
                            Pages
                        </Typography>
                        <Item
                            title="Profile Form"
                            to="/form"
                            icon={<PersonOutlined/>}
                        />
                        <Item
                            title="Calendar"
                            to="/calendar"
                            icon={<CalendarTodayOutlined/>}
                        />
                        <Item
                            title="FAQ Page"
                            to="/faq"
                            icon={<HelpOutlined/>}
                        />
                        <Typography
                        variant="h6"
                        color={colors.grey[300]}
                        sx={{m: "15px 0 5px 20px"}}
                        >
                            Charts
                        </Typography>
                        <Item
                            title="Bar Chart"
                            to="/bar"
                            icon={<BarChartOutlined/>}
                        />
                        <Item
                            title="Pie Chart"
                            to="/pie"
                            icon={<PieChartOutlineOutlined/>}
                        />
                        <Item
                            title="Line Chart"
                            to="/line"
                            icon={<TimelineOutlined/>}
                        />
                        <Item
                            title="Geography Chart"
                            to="/geography"
                            icon={<MapOutlined/>}
                        />
                    </Box>
                </Menu> 
            </Sidebar>
        </Box>
    )
}

export default SidebarLine;