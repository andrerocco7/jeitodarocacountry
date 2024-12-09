import Footer2 from "@/components/footers/Footer2";
import Header10 from "@/components/headers/Header10";
import Hero from "@/components/homes/home-8/Hero";
import Products from "@/components/homes/home-electronic/Products";
import Categories from "@/components/homes/home-giftcard/Categories";

export const metadata = {
  title: "VKL TECH",
};
export const revalidate = 0;

export default async function Page() {
  let products = [];

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/products`
  );
  products = await res.json();

  let categories = [];

  const res2 = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/categories`
  );
  categories = await res2.json();

  return (
    <>
      <Header10 />
      <Hero />
      <Categories categories={categories} />
      <Products products={products} />
      <Footer2 />
    </>
  );
}
