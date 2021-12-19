import { BrowserRouter as Router } from "react-router-dom";
import AHeader from "./components/AHeader";
import AFooter from "./components/AFooter";
import AContent from "./components/AContent";

function App() {
  return (
    <Router>
      <AHeader />
      <AContent />
      <AFooter />
    </Router>
  );
}

export default App;
