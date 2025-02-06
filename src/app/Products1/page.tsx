"use client";
import React, { useState, useEffect } from "react";
import sanityClient from "../sanityClient"; // Check this path

const ProductPage = ({ slug }: { slug: string }) => {
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) {
      setError("No product slug provided");
      setLoading(false);
      return;
    }

    const fetchProduct = async () => {
      try {
        setLoading(true);
        const query = `*[_type == "product" && slug.current == $slug][0] {
          _id,
          title,
          price,
          description,
          discountPercentage,
          "imageUrl": productImage.asset->url
        }`;

        const data = await sanityClient.fetch(query, { slug });
        if (!data) {
          setError("Product not found");
        } else {
          setProduct(data);
        }
      } catch (error) {
        console.error("Error Fetching Product:", error);
        setError("Failed to fetch product.");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [slug]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      {product ? (
        <div>
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          {product.discountPercentage && <p>Discount: {product.discountPercentage}% off</p>}
          <img src={product.imageUrl} alt={product.title} />
        </div>
      ) : (
        <p>Product not found.</p>
      )}
    </div>
  );
};

export default ProductPage;
