import { BrowserRouter, Route, Routes, Navigate} from "react-router-dom";

import { Layout } from "./../layouts/Layout";
import { Home } from "./../pages/home/Home";



export const AppRouter = () => (
  <BrowserRouter>

    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="home" />} />
        <Route path="home" element={<Home />} />

        <Route path="user" element="" />
        <Route path="share" element="" />

      </Route>
    </Routes>

  </BrowserRouter>
);
