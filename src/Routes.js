import About from "./pages/About";
import Banking from "./pages/Banking";
import AjmanFZ from "./pages/companySetup/AjmanFZ";
import DubaiFZ from "./pages/companySetup/DubaiFZ";
import DubaiMainland from "./pages/companySetup/DubaiMainland";
import RAKFZ from "./pages/companySetup/RAKfz";
import SharjahFZ from "./pages/companySetup/SharjahFZ";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import VAT from "./pages/VAT";
import AllVisa from "./pages/visa/AllVisa";
import Ejari from "./pages/visa/Ejari";
import GoldenVisa from "./pages/visa/GoldenVisa";

const appRoute = [
  { path: "/", element: Home },
  { path: "/about", element: About },
  { path: "/dubaimainland", element: DubaiMainland },
  { path: "/sharjahfreezone", element: SharjahFZ },
  { path: "/dubaifreezone", element: DubaiFZ },
  { path: "/ajmanfreezone", element: AjmanFZ },
  { path: "/rakfreezone", element: RAKFZ },
  { path: "/allvisa", element: AllVisa },
  { path: "/goldenvisa", element: GoldenVisa },
  { path: "/ejari", element: Ejari },
  { path: "/vat", element: VAT },
  { path: "/banking", element: Banking },
  { path: "/contact", element: Contact },
];

export default appRoute;