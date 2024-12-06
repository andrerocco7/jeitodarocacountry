"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Header2 from "@/components/headers/Header2";
import Footer2 from "@/components/footers/Footer2";
import ShopDefault from "@/components/shop/ShopDefault";

export default function Page() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);

        // Busca os produtos com base na categoria
        const res = await fetch(
          category ? `/api/categories/${category}/products` : `/api/products` // Caso nenhuma categoria seja selecionada
        );

        if (res.ok) {
          const data = await res.json();
          setFilteredProducts(data);
        } else {
          console.error("Erro ao buscar produtos:", await res.text());
        }
      } catch (error) {
        console.error("Erro de rede ao buscar produtos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category]);

  return (
    <>
      <Header2 />

      {loading ? (
        <div className="preload preload-container" id="preloader">
          <div className="preload-logo">
            <div className="spinner"></div>
          </div>
        </div>
      ) : (
        <ShopDefault filteredProducts={filteredProducts} />
      )}

      <Footer2 />
    </>
  );
}
