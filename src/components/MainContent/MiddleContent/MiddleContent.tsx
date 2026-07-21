import React from "react";

type GalleryImage = {
  src: string;
  alt: string;
  span: string;
};

const MiddleContent: React.FC = () => {
  const images: GalleryImage[] = [
    {
      src: "/citizens.jpg",
      alt: "Happy residents together",
      span: "col-span-6",
    },
    {
      src: "/kitchen.jpg",
      alt: "Shared residential kitchen",
      span: "col-span-5",
    },
    {
      src: "/outdoors.jpg",
      alt: "Outdoor community seating area",
      span: "col-span-6",
    },
    {
      src: "/seniors.jpg",
      alt: "Seniors spending time together",
      span: "col-span-5",
    },
  ];

  return (
    <div className="flex w-full flex-col justify-center">
      <div className="grid grid-cols-12 gap-3">
        {images.map((image) => (
          <div
            key={image.src}
            className={`${image.span} h-[160px] overflow-hidden rounded-xl`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MiddleContent;