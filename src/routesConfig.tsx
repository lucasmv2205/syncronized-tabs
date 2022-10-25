import { ProductDetail } from "./components/ProductDetail";
import { Products } from "./components/Products";

export const routesConfig = [
  {
    path: 'products',
    title: 'Products',
    component: <Products />,
  },
  {
    path: "products/:id",
    title: "Product Detail",
    component: <ProductDetail />,
    hiddenOnTab: true,
  },
  {
    path: 'customers',
    title: 'Customers',
    component: <p>Customers page</p>,
  },
  {
    path: 'about',
    title: 'About',
    component: <p>About the company</p>,
  },
]