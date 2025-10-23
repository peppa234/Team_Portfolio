import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Desktop } from "./screens/Desktop";
import { PortfolioList } from "./screens/PortfolioList";
import { Portfolio } from "./screens/Portfolio";

/**
 * Main App component with React Router v6 setup
 * 
 * Routes:
 * - / : Landing page (Desktop component)
 * - /portfolios : List of all team members with "View portfolio" buttons
 * - /portfolio/:slug : Individual portfolio detail page for each team member
 */
function App() {
  return (
    <BrowserRouter basename="/Team_Portfolio">
      <Routes>
        <Route path="/" element={<Desktop />} />
        <Route path="/portfolios" element={<PortfolioList />} />
        <Route path="/portfolio/:slug" element={<Portfolio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

