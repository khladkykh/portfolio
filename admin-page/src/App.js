import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import {Topbar, SidebarLine, Dashboard} from "./pages"
import Team from "./pages/team"
import Invoices from "./pages/invoices"
import Contacts from "./pages/contacts"
import Form from "./pages/form"
import Calendar from "./pages/calendar"
import Bar from "./pages/bar"
import Line from "./pages/line"
import Pie from "./pages/pie"
import FAQ from "./pages/faq"
import Geography from "./pages/geography"


function App() {

  const[theme, colorMode] = useMode()
  return (

    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <div className="app">
          <SidebarLine/>
          <main className="app__content">
            <Topbar/>
            <Routes>
              <Route exact path="/" element={<Dashboard/>}/>
              <Route exact path="/team" element={<Team/>}/>
              <Route path="/invoices" element={<Invoices/>}/>
              <Route path="/contacts" element={<Contacts/>}/>
              <Route path="/form" element={<Form/>}/>
              <Route path="/calendar" element={<Calendar/>}/>
              <Route path="/bar" element={<Bar/>}/>
              <Route path="/line" element={<Line/>}/>
              <Route path="/pie" element={<Pie/>}/>
              <Route path="/faq" element={<FAQ/>}/>
              <Route path="/geography" element={<Geography/>}/>
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
    
  );
}

export default App;
