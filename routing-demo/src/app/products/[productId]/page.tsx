import { Metadata } from "next";

type Props = {
  params: { productId: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = params.productId;
  const title = await new Promise((resolve) => {
    setTimeout(() => {resolve(`iPhone ${id}`)}, 100);
  });
  return {
    title: `Product ${title}`,
  };
}

export default function ProductDetails({ params }: Props) {
  const productId = params.productId;
  return <h2>Details about product {productId}</h2>;
}
