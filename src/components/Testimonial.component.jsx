import React from "react";

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      quote:
        "The lavender vanilla candle has transformed my home into a peaceful sanctuary. The scent lasts for hours!",
      name: "Sarah Johnson",
      role: "Interior Designer",
      stars: 5,
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100",
    },
    {
      id: 2,
      quote:
        "I gift these candles to all my friends! The packaging is beautiful and everyone asks where they're from.",
      name: "Michael Chen",
      role: "Frequent Gifter",
      stars: 5,
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100",
    },
    {
      id: 3,
      quote:
        "As someone sensitive to strong scents, I love how these are fragrant but never overwhelming. The soy wax burns clean too.",
      name: "Emma Rodriguez",
      role: "Wellness Coach",
      stars: 4,
      image:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=100",
    },
  ];

  const renderStars = (count) => {
    return Array(count)
      .fill()
      .map((_, i) => (
        <svg
          key={i}
          width="16"
          height="15"
          viewBox="0 0 16 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.524.464a.5.5 0 0 1 .952 0l1.432 4.41a.5.5 0 0 0 .476.345h4.637a.5.5 0 0 1 .294.904L11.563 8.85a.5.5 0 0 0-.181.559l1.433 4.41a.5.5 0 0 1-.77.559L8.294 11.65a.5.5 0 0 0-.588 0l-3.751 2.726a.5.5 0 0 1-.77-.56l1.433-4.41a.5.5 0 0 0-.181-.558L.685 6.123A.5.5 0 0 1 .98 5.22h4.637a.5.5 0 0 0 .476-.346z"
            fill="#22c55e"
          />
        </svg>
      ));
  };

  return (
    <div className="my-40 w-[90%] mx-auto">
      <div className="text-center">
        <h1 className="text-3xl lg:text-[56px] font-outfit font-medium text-center">
          What Our Customers Say
        </h1>
        <p className="text-[14px] md:text-[24px] text-gray-500 mt-4">
          Join thousands of happy customers who love our handcrafted candles
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 justify-center gap-5 mt-16 text-left">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex flex-col items-start gap-6 border border-gray-500/30 p-10 rounded-lg bg-white hover:shadow-lg transition-shadow"
            >
              <svg
                width="44"
                height="40"
                viewBox="0 0 44 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M33.172 5.469q2.555 0 4.547 1.547a7.4 7.4 0 0 1 2.695 4.007q.47 1.711.469 3.61 0 2.883-1.125 5.86a22.8 22.8 0 0 1-3.094 5.577 33 33 0 0 1-4.57 4.922A35 35 0 0 1 26.539 35l-3.398-3.398q5.296-4.243 7.218-6.563 1.946-2.32 2.016-4.617-2.86-.329-4.781-2.461-1.923-2.133-1.922-4.992 0-3.117 2.18-5.297 2.202-2.203 5.32-2.203m-20.625 0q2.555 0 4.547 1.547a7.4 7.4 0 0 1 2.695 4.007q.47 1.711.469 3.61 0 2.883-1.125 5.86a22.8 22.8 0 0 1-3.094 5.577 33 33 0 0 1-4.57 4.922A35 35 0 0 1 5.914 35l-3.398-3.398q5.296-4.243 7.218-6.563 1.946-2.32 2.016-4.617-2.86-.329-4.781-2.461-1.922-2.133-1.922-4.992 0-3.117 2.18-5.297 2.202-2.203 5.32-2.203"
                  fill="#22c55e"
                />
              </svg>
              <div className="flex items-center justify-center mt-3 gap-1">
                {renderStars(testimonial.stars)}
              </div>
              <p className="text-[18px] font-outfit mt-3 text-gray-500">{testimonial.quote}</p>
              <div className="flex items-center gap-3 mt-4">
                <img
                  className="h-18 w-18 rounded-full object-cover"
                  src={testimonial.image}
                  alt={testimonial.name}
                />
                <div>
                  <h2 className="text-2xl text-gray-900 font-medium">
                    {testimonial.name}
                  </h2>
                  <p className="text-xl text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
