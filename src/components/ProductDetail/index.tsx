import { useParams } from "react-router-dom";

export const ProductDetail = () => {
  const params = useParams<{ id: string }>();

  return (
    <div>
      <h1>Product Detail #{params.id}</h1>
    </div>
  );
};