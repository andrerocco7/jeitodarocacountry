import Footer2 from "@/components/footers/Footer2";
import Header6 from "@/components/headers/Header6";
import Hero from "@/components/homes/home-8/Hero";
import Products from "@/components/homes/home-electronic/Products";
import Categories from "@/components/homes/home-giftcard/Categories";

export const metadata = {
  title: "Jeito da Roça",
};
export const revalidate = 0;

export default async function Page() {
  let products = [];

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/products`
  );
  products = await res.json();

  let categories = [];

  return (
    <>
      <Header6 />
      <Hero />
      <Products products={products} />
      <Categories />
      <Footer2 />
    </>
  );
}
