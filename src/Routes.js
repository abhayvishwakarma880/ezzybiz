import About from "./pages/About";
import DubaiFZ from "./pages/companySetup/DubaiFZ";
import DubaiMainland from "./pages/companySetup/DubaiMainland";
import SharjahFZ from "./pages/companySetup/SharjahFZ";
import Home from "./pages/Home";

const appRoute = [
  { path: "/", element: Home },
  { path: "/about", element: About },
  { path: "/dubaimainland", element: DubaiMainland },
  { path: "/sharjahfreezone", element: SharjahFZ },
  { path: "/dubaifreezone", element: DubaiFZ },
];

export default appRoute;