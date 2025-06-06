import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./pages/Routes";
import Navbar from "./components/Navbar";



function App() {
  return (
    <>
      <div>
        <Router>
          <Navbar/>
            <AppRoutes />
        </Router>
      </div>
    </>
  );
}

export default App;

