import Footer2 from "@/components/footers/Footer2";
import Header2 from "@/components/headers/Header2";
import OurStore from "@/components/othersPages/OurStore";
import React from "react";

export const metadata = {
  title: "Our Stores || VKLTech",
  description: "VKLTech",
};
export default function Page() {
  return (
    <>
      <Header2 />
      <div className="tf-page-title style-2">
        <div className="container-full">
          <div className="heading text-center">Our Store</div>
        </div>
      </div>

      <OurStore />
      <Footer2 />
    </>
  );
}
