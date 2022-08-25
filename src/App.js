import "./App.css";
import RewardPage from "./pages/RewardPage/RewardPage";
import { TotalPriceContextProvider } from "./stores/total-context";

function App() {
  return (
    <div className="App">
      <TotalPriceContextProvider>
        <RewardPage />
      </TotalPriceContextProvider>
    </div>
  );
}

export default App;
