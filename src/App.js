import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AdminScreen from "./screens/AdminScreen";
import DestScreen from "./screens/DestScreen";
import HomeScreen from "./screens/HomeScreen";
import MerchScreen from "./screens/MerchScreen";
import TravelScreen from "./screens/TravelScreen";
import VideoScreen from "./screens/VideoScreen";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/admin" element={<AdminScreen />} />
        <Route path="/travel-plans" element={<DestScreen />} />
        <Route path="/store" element={<MerchScreen />} />
        <Route path="/dee-lightful-destinations" element={<TravelScreen />} />
        <Route path="/adventures" element={<VideoScreen />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
