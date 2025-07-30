import { StarFill, StarHalf, Star,CheckCircleFill } from "react-bootstrap-icons";
import { ArrowLeftShort, ArrowRightShort } from "react-bootstrap-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "./Reviews.css";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const reviews = [
  {
    id: 1,
    name: "Sarah M.",
    rating: 5,
    text: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."
  },
  {
    id: 2,
    name: "Alex K.",
    rating: 4.5,
    text: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions."
  },
  {
    id: 3,
    name: "James L.",
    rating: 5,
    text: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends."
  },
  {
    id: 4,
    name: "Sarah Williams",
    rating: 5,
    text: "The perfect fit! I’ve never received so many compliments on an outfit. Shipping was lightning-fast too."
  },
  {
    id: 5,
    name: "Michael Chen",
    rating: 4.5,
    text: "Exceptional quality fabric. Only deducted half a star because the color was slightly different from the website photo."
  },
  {
    id: 6,
    name: "Emily Rodriguez",
    rating: 5,
    text: "Worth every penny! The attention to detail is incredible. My go-to store from now on."
  },
  {
    id: 7,
    name: "David Kim",
    rating: 4,
    text: "Very stylish designs. Took off one star because the sizing runs a bit small—order a size up!"
  },
  {
    id: 8,
    name: "Olivia Thompson",
    rating: 4.5,
    text: "Love the minimalist aesthetic. Packaging was eco-friendly, which I appreciate. Minor stitching issue on one seam."
  },
  {
    id: 9,
    name: "James Wilson",
    rating: 5,
    text: "10/10 would recommend! Customer service helped me exchange sizes seamlessly when I guessed wrong."
  }
];

const StarRating = ({ rating }) => {
  return (
    <div className="mb-2">
      {[...Array(5)].map((_, i) => {
        if (rating >= i + 1) {
          return <StarFill key={i} className="text-warning me-1" />;
        } else if (rating > i) {
          return <StarHalf key={i} className="text-warning me-1" />;
        } else {
          return <Star key={i} className="text-warning me-1" />;
        }
      })}
    </div>
  );
};

const Reviews = () => {
  return (
    <div className="container my-5 py-5" style={{ borderRadius: "15px", position: 'relative' }}>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="h2Style">OUR HAPPY CUSTOMERS</h2>
        <div className="d-flex">
          <button className="swiper-button-prev-custom me-3">
            <ArrowLeftShort size={30} />
          </button>
          <button className="swiper-button-next-custom">
            <ArrowRightShort size={30} />
          </button>
        </div>
      </div>
      
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        navigation={{
          prevEl: '.swiper-button-prev-custom',
          nextEl: '.swiper-button-next-custom'
        }}
        modules={[Navigation]}
        breakpoints={{
          768: { slidesPerView: 1 },
          900: { slidesPerView: 2, spaceBetween: 10 },
          1200: { slidesPerView: 3, spaceBetween: 30 }
        }}
        className="px-0 pb-4"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id}>
            <div className="cardStyle mx-auto mb-5">
              <StarRating rating={review.rating} />
              <h5 className="fw-bold mb-3 h5Style">{review.name} <CheckCircleFill style={{ color: "#01ab31" }}/></h5>
              <p className="mb-0 pStyle">{review.text}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Reviews;