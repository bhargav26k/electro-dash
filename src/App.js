import React,{useState,useEffect} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import Login from "./Login"; 
import MiniDrawer from "./shared/component/navigation";
import HomePage from "./homepage/pages/HomePage";
import Interface_01 from "./example_01/pages/Interface_01";
import Interface_02 from "./example_01/pages/Interface_02";
import InterfaceStats from "./stats/pages/Interface_stats";
import { Helmet } from "react-helmet";
import { ThemeContext } from "./shared/context/ThemeContext";
import DarkTheme from "./shared/themes/DarkTheme";
import LightTheme from "./shared/themes/LightTheme";
import { ThemeProvider } from "@material-ui/core";
import regeneratorRuntime from "regenerator-runtime";

// Import new pages for Master, Transaction, Report, MIS Report
import NewConsumerEntry from "./pages/Master/NewConsumerEntry";
import ConsumerDetail from "./pages/Master/ConsumerDetail";
import Designation from "./pages/Master/Designation";
import Zone from "./pages/Master/Zone";
import TariffSize from "./pages/Master/TariffSize";
import ConstructionType from "./pages/Master/ConstructionType";
import TariffRate from "./pages/Master/TariffRate";
import Bit from "./pages/Master/Bit";
import PolicyMaster from "./pages/Master/System/PolicyMaster";
import ReceiptDeletion from "./pages/Master/ReceiptDeletion";
import RecieptDataEntry from "./pages/Transaction/Receipts/RecieptDataEntry";
import ViewRecieptDataEntry from "./pages/Transaction/Receipts/ViewRecieptDataEntry";
import CommingSoon from "./pages/ExtraPages/CommingSoon";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedInStatus = localStorage.getItem("isLoggedIn");
    if (loggedInStatus === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    localStorage.setItem("isLoggedIn", "true"); // Persist login state
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  const [darkState, setDarkState] = useState(false);
  const selectedTheme = darkState ? DarkTheme : LightTheme;

  const toggleTheme = () => {
    localStorage.setItem(
      "userTheme",
      JSON.stringify({
        themeState: !darkState,
      })
    );
    setDarkState(!darkState);
  };

  useEffect(() => {
    const storedTheme = JSON.parse(localStorage.getItem("userTheme"));
    if (storedTheme) {
      if (storedTheme.themeState) {
        setDarkState(true);
      }
    } else {
      setDarkState(false);
    }
  }, []);
  const authenticatedRoutes  = (
    <div>
      <MiniDrawer onSignOut={handleLogout}>
        <Switch>
          <Route path="/" exact>
            <HomePage></HomePage>
          </Route>
          <Route path="/interface-01" exact>
            <Interface_01></Interface_01>
          </Route>
          <Route path="/interface-02" exact>
            <Interface_02></Interface_02>
          </Route>
          <Route path="/interface-stats" exact>
            <InterfaceStats></InterfaceStats>
          </Route>
          

          {/* New Routes */}
          <Route path="/new-consumer-entry" exact>
            <NewConsumerEntry />
          </Route>
          <Route path="/consumer-detail" exact>
            <ConsumerDetail />
          </Route>
          <Route path="/designation" exact>
            <Designation />
          </Route>
          <Route path="/tariff-size" exact>
            <TariffSize />
          </Route>
          <Route path="/construction-type" exact>
            <ConstructionType />
          </Route>
          <Route path="/zone" exact>
            <Zone />
          </Route>
          <Route path="/tariff-rate" exact>
            <TariffRate />
          </Route>
          <Route path="/bill" exact>
            <Bit />
          </Route>
          <Route path="/receipt-deletion" exact>
            <ReceiptDeletion />
          </Route>
          

          {/* system dropdown ke pages */}
          <Route path="/system/policy-master" exact>
            <PolicyMaster />
          </Route>


          {/* Transaction me Receipts ke pages */}
          <Route path="/transaction/receipts/add-reciept-data-entry" exact>
            <RecieptDataEntry />
          </Route>
          <Route path="/transaction/receipts/view-receipt-data-entry" exact>
            <ViewRecieptDataEntry />
          </Route>

          {/* Add routes for all new pages here */}
<Route path="/commingsoon" exact>
            <CommingSoon />
          </Route>

          {/* Placeholder Routes for Remaining Pages */}
          <Route path="/user-level-setting" exact>
            <CommingSoon />
          </Route>
          <Route path="/connection-type" exact>
            <CommingSoon />
          </Route>
          <Route path="/collection-center" exact>
            <CommingSoon />
          </Route>
          <Route path="/arrear-entry" exact>
            <CommingSoon />
          </Route>
          <Route path="/bulk-meter-master" exact>
            <CommingSoon />
          </Route>
          <Route path="/employee-master" exact>
            <CommingSoon />
          </Route>
          <Route path="/transaction/billing/unknown" exact>
            <CommingSoon />
          </Route>
          <Route path="/transaction/credit-debit" exact>
            <CommingSoon />
          </Route>
          <Route path="/report/credit-debit" exact>
            <CommingSoon />
          </Route>
          <Route path="/report/billing/register" exact>
            <CommingSoon />
          </Route>
          <Route path="/report/billing/print" exact>
            <CommingSoon />
          </Route>
          <Route path="/report/receipt/deletion" exact>
            <CommingSoon />
          </Route>
          <Route path="/report/receipt/register" exact>
            <CommingSoon />
          </Route>
          <Route path="/report/arrear-discount" exact>
            <CommingSoon />
          </Route>
          <Route path="/mis-report/help-desk" exact>
            <CommingSoon />
          </Route>



          {/* <Route path="/login" exact>
  <Login onLogin={() => history.push("/")} />
</Route> */}

          {/* Fallback Redirect */}
          <Redirect to="/"></Redirect>
        </Switch>
      </MiniDrawer>
    </div>
  );

  return (
    <ThemeProvider theme={selectedTheme}>
      <ThemeContext.Provider
        value={{ themeState: darkState, toggleTheme: toggleTheme }}
      >
        <Helmet>
          <meta
            http-equiv="Content-Security-Policy"
            content="script-src 'self';"
          />
        </Helmet>
        <Router>
          {isLoggedIn ? authenticatedRoutes : <Login onLogin={handleLogin} />}
        </Router>
      </ThemeContext.Provider>
    </ThemeProvider>
  );
}
