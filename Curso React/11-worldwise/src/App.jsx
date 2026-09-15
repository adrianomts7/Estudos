import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./Pages/Product";
import HomePage from "./Pages/HomePage";
import Pricing from "./Pages/Pricing";
import Login from './Pages/Login';
import PageNotFound from "./Pages/PageNotFound";
import AppLayout from "./Pages/AppLayout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/product" element={<Product />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/login" element={<Login />} />
        <Route path="app" element={<AppLayout />}>
          <Route index path="cities" element={<p>List of Cities</p>} />
          <Route path="countries" element={<p>Countries</p>} />
          <Route path="form" element={<p>Form</p>} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  )
}