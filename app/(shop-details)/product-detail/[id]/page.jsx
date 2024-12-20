import Footer2 from "@/components/footers/Footer2";
import Header2 from "@/components/headers/Header2";
import DetailsOuterZoom from "@/components/shopDetails/DetailsOuterZoom";
import RecentProducts from "@/components/shopDetails/RecentProducts";
import axios from "axios";
import Link from "next/link";

export const metadata = {
  title: " VKLTech",
  description: "VKLTech",
};

export default async function Page({ params }) {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/products/${params.id}`
  );
  const product = res.data;

  return (
    <>
      <Header2 />
      <div className="tf-breadcrumb">
        <div className="container">
          <div className="tf-breadcrumb-wrap d-flex justify-content-between flex-wrap align-items-center">
            <div className="tf-breadcrumb-list">
              <Link href={`/`} className="text">
                Home
              </Link>
              <i className="icon icon-arrow-right" />
              <span className="text">
                {product.title || "Cotton jersey top"}
              </span>
            </div>
            <div className="tf-breadcrumb-prev-next">
              <a href="#" className="tf-breadcrumb-prev hover-tooltip center">
                <i className="icon icon-arrow-left" />
              </a>
              <a href="#" className="tf-breadcrumb-back hover-tooltip center">
                <i className="icon icon-shop" />
              </a>
              <a href="#" className="tf-breadcrumb-next hover-tooltip center">
                <i className="icon icon-arrow-right" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <DetailsOuterZoom product={product} />

      <Footer2 />
    </>
  );
}
