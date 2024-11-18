import Footer2 from "@/components/footers/Footer2";
import Header2 from "@/components/headers/Header2";
import Timelines from "@/components/othersPages/Timelines";
import React from "react";

export const metadata = {
  title: "Timeline || ImunoPump",
  description: "ImunoPump",
};
export default function Page() {
  return (
    <>
      <Header2 />
      <div className="tf-page-title style-2">
        <div className="container-full">
          <div className="heading text-center">Timeline</div>
        </div>
      </div>

      <Timelines />
      <Footer2 />
    </>
  );
}
