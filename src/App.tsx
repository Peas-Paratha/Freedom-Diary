import React from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import MainSharedLayout from "./components/Shared-Layouts/MainSharedLayout";
import TimelinePage from "./components/TimelinePage/TimelinePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainSharedLayout />}>
          <Route index element={<TimelinePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
