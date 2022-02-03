import { Routes, Route } from "react-router-dom";
const Layout = ({ weather }) => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/daily" element={<Daily weather={weather} />} />
        <Route path="/today" element={<Today weather={weather} />} />
        <Route path="/hourly" element={<Hourly weather={weather} />} />
        <Route path="/" element={<Home weather={weather} />} />
        <Route path="/settings" element={<Settings weather={weather} />} />
      </Routes>
      <Footer />
    </>
  );
};

export default Layout;
