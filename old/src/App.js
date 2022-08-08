// import React, { useState } from "react";
// import { IntlProvider } from "react-intl";
// import Layout from "./Layout";
// import messages from "./messages";
// import {
//   ProSidebar,
//   SidebarHeader,
//   SidebarFooter,
//   SidebarContent,
//   Menu,
//   MenuItem,
//   SubMenu
// } from "react-pro-sidebar";

// export default function App() {
//   const [locale, setLocale] = useState("en");

//   return (
//     <IntlProvider locale={locale} messages={messages[locale]}>
//       <Layout setLocale={setLocale} />
//     </IntlProvider>
//   );
// }
import React from "react";
import styled from "styled-components";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header";

import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import MyList from "./pages/MyList";
import LikedList from "./pages/LikedList";
import Setting from "./pages/Setting";

const Center = styled.div`
  height: 92vh;
  display: flex;
  flex-direction: row;
`;

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Center>
          <Sidebar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/mylist" component={MyList} />
            <Route path="/likedlist" component={LikedList} />
            <Route path="/setting" component={Setting} />
          </Switch>
        </Center>
      </BrowserRouter>
    );
  }
}

export default App;
