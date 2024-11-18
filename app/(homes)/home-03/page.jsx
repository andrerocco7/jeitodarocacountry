import Features from "@/components/common/Features";
import ShopGram from "@/components/common/ShopGram";
import Footer2 from "@/components/footers/Footer2";
import Header2 from "@/components/headers/Header2";
import Categories from "@/components/homes/home-3/Categories";
import Countdown from "@/components/homes/home-3/Countdown";
import Hero from "@/components/homes/home-3/Hero";
import Products from "@/components/homes/home-3/Products";
import Products2 from "@/components/homes/home-3/Products2";
import Testimonials from "@/components/homes/home-3/Testimonials";
import VideoBanner from "@/components/homes/home-3/VideoBanner";
import React from "react";

export const metadata = {
  title: "Home 3 || ImunoPump",
  description: "ImunoPump",
};
export default function Page() {
  return (
    <>
      <Header2 />
      <Hero />
      <Countdown />
      <Products />
      <Categories />
      <Products2 />
      <VideoBanner />
      <Testimonials />
      <div className="mt-5"></div>
      <ShopGram />
      <Features />
      <Footer2 />
    </>
  );
}
