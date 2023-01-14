import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AdminScreen from "./screens/AdminScreen";
import DestScreen from "./screens/DestScreen";
import HomeScreen from "./screens/HomeScreen";
import MerchScreen from "./screens/MerchScreen";
import TravelScreen from "./screens/TravelScreen";
import VideoScreen from "./screens/VideoScreen";
import AuthScreen from "./screens/AuthScreen";

function App() {
  const admin = useSelector(state => state.admin)
  const userId = useSelector(state => state.userId)
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={!admin ? <HomeScreen /> : <Navigate to='/admin'/>}/>
        <Route path="/auth" element={!userId ? <AuthScreen/> : <Navigate to='/' />}/>
        <Route path="/admin" element={admin ? <AdminScreen /> : <Navigate to='/'/>} />
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
