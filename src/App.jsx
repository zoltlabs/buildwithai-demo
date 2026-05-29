import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import CourseLayout from "./layouts/CourseLayout.jsx";
import CourseOverview from "./pages/CourseOverview.jsx";
import WeekPage from "./pages/WeekPage.jsx";
import Throughlines from "./pages/Throughlines.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<CourseLayout />}>
          <Route index element={<CourseOverview />} />
          <Route path="week/:slug" element={<WeekPage />} />
          <Route path="throughlines" element={<Throughlines />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
