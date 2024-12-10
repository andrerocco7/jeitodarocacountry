import Footer2 from "@/components/footers/Footer2";
import Header10 from "@/components/headers/Header10";
import Map from "@/components/othersPages/contact/Map";

export const metadata = {
  title: "Contact 1 || JeitodaRoça",
  description: "Seu passaporte para o estlo country",
};
export default function Page() {
  return (
    <>
      <Header10 />
      <div className="tf-page-title style-2">
        <div className="container-full">
          <div className="heading text-center">Contact Us</div>
        </div>
      </div>
      <Map />
      <Footer2 />
    </>
  );
}
