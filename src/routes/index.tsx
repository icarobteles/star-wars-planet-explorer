import { HomePage, NotFoundPage, PlanetPage } from "@/pages";
import { Route, Routes } from "react-router-dom";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/planets/:id" element={<PlanetPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
