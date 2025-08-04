import React from "react";

interface CommonHeaderProps {
  title: string;
  imageUrl: string;
  overlayColor?: string; // optional, default to dark blue
}
const CommonHeader: React.FC<CommonHeaderProps> = ({ title, imageUrl }) => {
  return (
    <section
      className="relative py-16 bg-center bg-cover bg-no-repeat"
      style={{ backgroundImage: `url('${imageUrl}')` }}
    >
      {/* Light blue transparent overlay */}
      <div className="absolute inset-0  bg-red-800/50 " />

      {/* Content above the overlay */}
      <div className="relative z-10 py-10 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-[0.1em]">
            {title}
          </h1>
        </div>
      </div>
    </section>
  );
};

export default CommonHeader;
