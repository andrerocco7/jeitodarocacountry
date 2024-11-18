"use client";

import BlogGrid from "@/components/blogs/BlogGrid";
import Footer2 from "@/components/footers/Footer2";
import Header2 from "@/components/headers/Header2";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <Header2 />
      <div className="tf-page-title">
        <div className="container-full">
          <div className="row">
            <div className="col-12">
              <div className="heading text-center">Blog Grid</div>
              <ul className="breadcrumbs d-flex align-items-center justify-content-center">
                <li>
                  <Link href={`/`}>Home</Link>
                </li>
                <li>
                  <i className="icon-arrow-right" />
                </li>
                <li>Fashion</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <BlogGrid />
      <Footer2 />
    </>
  );
}
