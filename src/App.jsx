import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './root/Layout';
import {
  Home,
  Main,
  Cart,
  Address,
  Checkout,
  Invoice,
  Account
} from "./pages";
import ProtectedRoute from "./guard/ProtectedRoute";
import useIsUserAuthorized from "./hooks/useIsUserAthorized";

function App() {
  const isUserAuthorized = useIsUserAuthorized();  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={ isUserAuthorized ? <Main /> : <Home />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/cart" element={<Cart />} />
              <Route path="/address" element={<Address />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/invoice/:order_id?" element={<Invoice />} />
              <Route path="/account" element={<Account />} />
            </Route>
            {/* <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
