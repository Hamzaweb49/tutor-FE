import { FiChevronsLeft, FiChevronsRight } from "react-icons/fi";

export const Settings = {
  dots: true,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 2000,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

// SubscribeSettings slider end

export function SampleNextArrow(props) {
  const { className, onClick, size } = props;
  return (
    <div
      className={`${className}  cursor-pointer !h-14 !w-14  -translate-y-[100%] !bg-white rounded-full !flex !right-20 !items-center !justify-center before:!content-['']`}
      onClick={onClick}>
      <FiChevronsRight className="text-[#4f46e5]" size={22} />
    </div>
  );
}
export function SamplePrevArrow(props) {
  const { className, onClick, size } = props;
  return (
    <div
      className={`${className} z-10 cursor-pointer !h-14 !w-14  !bg-white rounded-full !flex !items-center !left-20 !justify-center before:!content-['']`}
      onClick={onClick}>
      <FiChevronsLeft className="text-[#4f46e5]" size={22} />
    </div>
  );
}
