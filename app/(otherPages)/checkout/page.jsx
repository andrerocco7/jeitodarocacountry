import Footer1 from "@/components/footers/Footer1";
import Header18 from "@/components/headers/Header18";
import Header2 from "@/components/headers/Header2";
import Checkout from "@/components/othersPages/Checkout";
import React from "react";

export const metadata = {
  title: "Checkout || Ecomus - Ultimate Nextjs Ecommerce Template",
  description: "Ecomus - Ultimate Nextjs Ecommerce Template",
};
export default function page() {
  return (
    <>
      <Header18 />
      <div className="tf-page-title">
        <div className="container-full">
          <div className="heading text-center">Check Out</div>
        </div>
      </div>

      <Checkout />
      <Footer1 />
    </>
  );
}