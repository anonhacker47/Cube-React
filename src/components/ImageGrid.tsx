import React, { useEffect, useState } from "react";
import { Customer } from "../types/Customer";

export interface ImageGridProps {
    selectedCustomer: Customer;
}

export default function ImageGrid({ selectedCustomer }: ImageGridProps) {
  const [imageList, setImageList] = useState<string[]>([]);

  const fetchPhotos = async () => {

    const imageURL = `https://picsum.photos/v2/list?page=${Math.floor(
      Math.random() * 100
    )}&limit=9`;

    const response = await fetch(imageURL);
    const data = await response.json();
    const image_urls = data.map((image: any) => image.download_url);
    setImageList(image_urls);
  };

  useEffect(() => {
    fetchPhotos();
    const interval = setInterval(fetchPhotos, 10000);
    return () => clearInterval(interval);
  }, [selectedCustomer]);

  return (
    <div className="image-grid">
      {imageList.map((image_url, index) => (
        <img
          key={index}
          src={image_url}
          alt="random_image"
          className="image"
        />
      ))}
    </div>
  );
}
