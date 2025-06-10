import React from "react";

const CandleCallToAction = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "7896190684"; // Replace with your actual number
    const message =
      "Hi! I'm interested in your candles. Can you help me choose?"; // Custom pre-filled message
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <div className="my-20 w-[90%] mx-auto">
      <div className="flex flex-col items-center gap-8 bg-gray-50 py-26 px-4 w-full text-center shadow-lg rounded-2xl ">
        <h1 className="text-3xl lg:text-[56px] font-outfit font-medium text-center">
          Illuminate Your Space Today!
        </h1>
        <p className="max-w-5xl text-green-600 mt-4 text-[14px] md:text-[16px]">
          Don't miss out on our handcrafted, aromatic candles. Limited stock
          available! Shop now and transform your home with our premium scents
          before they're gone.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-8 max-sm:w-full">
          <button
            type="button"
            className="group flex items-center justify-center gap-2 px-8 py-3 bg-green-500 hover:bg-green-700 text-white font-medium rounded-full transition-all text-[14px]"
          >
            Shop Now
            <svg
              className="mt-0.5 group-hover:translate-x-1 transition-all"
              width="15"
              height="11"
              viewBox="0 0 15 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 5.5h13.092M8.949 1l5.143 4.5L8.949 10"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            type="button"
            onClick={handleWhatsAppClick}
            className="flex items-center justify-center gap-2 px-8 py-3 border border-green-500 text-green-600 hover:bg-green-50 rounded-full transition-all text-[14px]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-green-500"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-6.29-3.51c.545 1.422.811 2.656.765 2.86-.045.193-.344.248-.461.186-.116-.063-.854-.527-1.687-1.121-.771-.541-1.292-1.003-1.432-1.181-.14-.177-.015-.274.105-.386.109-.102.271-.255.362-.344.09-.089.181-.207.271-.104.09.103.361.446.554.683.193.236.387.271.439.271.052 0 .104-.014.155-.104.052-.089.193-.311.334-.535.14-.223.246-.335.362-.335.104 0 .209.052.314.156.193.193.723.738.94.992.217.254.43.362.43.543 0 .18-.136.193-.244.193-.104 0-.217-.038-.461-.133-.244-.095-1.033-.386-1.195-1.141-.163-.755.45-1.412.668-1.655.193-.217.425-.285.579-.285.155 0 .31.077.426.232.116.155.426.658.465.893.04.235.075.542-.041.83" />
            </svg>
            Chat on WhatsApp
          </button>
        </div>
        <p className="text-sm text-green-600 mt-6 text-[16px]">
          ⏳ Limited stock available - Don't miss your favorite scents!
        </p>
      </div>
    </div>
  );
};

export default CandleCallToAction;
