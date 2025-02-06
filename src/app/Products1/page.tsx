import React, { useState, useEffect } from 'react';
import sanity from './sanityClient'; // Make sure you have a sanity client setup for fetching

const ProductPage = ({ slug }) => {
  const [product, setProduct] = useState(null); // State to store the fetched product
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    if (!slug) return; // Return if no slug is provided

    const fetchProduct = async () => {
      try {
        setLoading(true); // Set loading state to true before starting the fetch
        const query = `*[_type == "product" && slug.current == $slug][0] {
          _id,
          title,
          price,
          description,
          discountPercentage,
          "imageUrl": productImage.asset->url
        }`;

        const data = await sanity.fetch(query, { slug });
        console.log("Fetched Product:", data);
        setProduct(data); // Update state with fetched product
        setLoading(false); // Set loading to false once data is fetched
      } catch (error) {
        console.error("Error Fetching Product:", error);
        setError(error); // Handle error and update state
        setLoading(false); // Set loading to false even if there's an error
      }
    };

    fetchProduct();
  }, [slug]); // Only re-fetch when slug changes

  // Handle loading and error states
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error fetching product.</div>;

  return (
    <div>
      {/* Render product details */}
      {product && (
        <div>
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          {product.discountPercentage && (
            <p>Discount: {product.discountPercentage}% off</p>
          )}
          <img src={product.imageUrl} alt={product.title} />
        </div>
      )}
    </div>
  );
};

export default ProductPage;
