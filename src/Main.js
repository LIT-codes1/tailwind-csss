import { Routes, Route, Link } from 'react-router-dom';
import Appointment from './Appointment';
import App from './App';
import Services from './Services';
import Wispylashes from './Wispylashes';
import MatteMakeup from './MatteMakeup';
import MicroShading from './MicroShading';
import NudeMakeup from './NudeMakeup';
import Pricing from './Pricing';
import Aboutt from './Aboutt';
import Contact from './Contact';
import ScrollToTop from './srollToTop';

export default function Main() {
  return (
    <>
      
    <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/appoint" element={<Appointment />} />
        <Route path="/service" element={<Services />} />
        <Route path="/wispy" element={<Wispylashes />} />
        <Route path="/matte" element={<MatteMakeup />} />
        <Route path="/micro" element={<MicroShading />} />
        <Route path="/nude" element={<NudeMakeup />} />
        <Route path="/price" element={<Pricing />} />
        <Route path="/about" element={<Aboutt />} />
        <Route path="/contact" element={<Contact />} />









      </Routes>
    </>
  );
}
