import React, { useState } from "react";

const CandleMarquee = () => {
  const [stopScroll, setStopScroll] = useState(false);
  
  const marqueeItems = [
    "🕯️ We know what scents you'll love!",
    "✨ Custom candle designs just for you",
    "🔥 HOT DEAL: 25% OFF all fall scents!",
    "🌸 New lavender vanilla collection",
    "🎁 Perfect gifts - 15% OFF 3+ candles",
    "🛍️ LIMITED TIME: Buy 1, Get 1 50% OFF!",
    "🍂 Cozy autumn fragrances now in stock",
    "💖 Hand-poured with natural soy wax",
    "🌟 5-star rated by 10,000+ customers",
    "🚀 Free shipping on orders over $50",
    "🕯️ Long-lasting 60+ hour burn time",
    "🎄 Holiday collection coming soon!"
  ];

  return (
    <div className="py-8 bg-gradient-to-r from-green-100 to-green-500">
      <style>{`
        .marquee-inner {
          animation: marqueeScroll linear infinite;
        }
        @keyframes marqueeScroll {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      <div
        className="overflow-hidden w-full relative mx-auto"
        onMouseEnter={() => setStopScroll(true)}
        onMouseLeave={() => setStopScroll(false)}
      >
        <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent" />
        <div
          className="marquee-inner flex w-fit"
          style={{
            animationPlayState: stopScroll ? "paused" : "running",
            animationDuration: "70s",
          }}
        >
          <div className="flex items-center">
            {[...marqueeItems, ...marqueeItems].map((item, index) => (
              <div
                key={index}
                className="mx-8 py-4 px-6 rounded-full bg-white shadow-md flex items-center justify-center whitespace-nowrap text-xl font-medium text-gray-800 hover:text-green-600 transition-colors duration-300"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="absolute right-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent" />
      </div>
    </div>
  );
};

export default CandleMarquee;