import { BrowserRouter, Route, Routes, Navigate} from "react-router-dom";

import { Layout } from "./../layouts/Layout";
import { Home } from "./../pages/home/Home";
import { User } from "../pages/users/User";
import { Share } from "../pages/share/Share";


export const AppRouter = () => (
  <BrowserRouter>

    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="home" />} />
        <Route path="home" element={<Home />} />

        <Route path="user" element={<User />} />
        <Route path="share" element={<Share />} />

      </Route>
    </Routes>

  </BrowserRouter>
);
