import { FC } from "react";

interface IProps {
  params: { id: string };
}

const ProductPage: FC<IProps> = ({params}) => {
  return <div>ProductPage:{params.id}</div>;
};

export default ProductPage;
