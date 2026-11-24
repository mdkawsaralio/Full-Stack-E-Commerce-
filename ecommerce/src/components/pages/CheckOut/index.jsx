import React from "react";

function Checkout() {
  return (
    <div className="w-[95%] mx-auto py-8">
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_0.95fr] gap-8">
        {/* LEFT SIDE - BILLING DETAILS */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            BILLING DETAILS
          </h2>

          <form className="space-y-6">
            {/* Full Name and Country */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Full Name *"
                required
                className="w-full bg-gray-100 border border-gray-300 rounded-md px-4 py-3 outline-none focus:border-pink-500"
              />

              <input
                type="text"
                placeholder="Country *"
                required
                className="w-full bg-gray-100 border border-gray-300 rounded-md px-4 py-3 outline-none focus:border-pink-500"
              />
            </div>

            {/* Street Address */}
            <div>
              <label className="block text-gray-700 mb-2">
                Street address *
              </label>

              <input
                type="text"
                placeholder="House number and street name"
                required
                className="w-full bg-gray-100 border border-gray-300 rounded-md px-4 py-3 outline-none focus:border-pink-500 mb-4"
              />

              <input
                type="text"
                placeholder="Apartment, suite, unit, etc. (optional)"
                className="w-full bg-gray-100 border border-gray-300 rounded-md px-4 py-3 outline-none focus:border-pink-500"
              />
            </div>

            {/* Town / City */}
            <div>
              <label className="block text-gray-700 mb-2">Town / City *</label>

              <input
                type="text"
                placeholder="City"
                required
                className="w-full bg-gray-100 border border-gray-300 rounded-md px-4 py-3 outline-none focus:border-pink-500"
              />
            </div>

            {/* State / County */}
            <div>
              <label className="block text-gray-700 mb-2">
                State / County *
              </label>

              <input
                type="text"
                placeholder="State"
                required
                className="w-full bg-gray-100 border border-gray-300 rounded-md px-4 py-3 outline-none focus:border-pink-500"
              />
            </div>

            {/* Postcode */}
            <div>
              <label className="block text-gray-700 mb-2">
                Postcode / ZIP *
              </label>

              <input
                type="text"
                placeholder="ZIP Code"
                required
                className="w-full bg-gray-100 border border-gray-300 rounded-md px-4 py-3 outline-none focus:border-pink-500"
              />
            </div>

            {/* Phone and Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full bg-gray-100 border border-gray-300 rounded-md px-4 py-3 outline-none focus:border-pink-500"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-gray-100 border border-gray-300 rounded-md px-4 py-3 outline-none focus:border-pink-500"
              />
            </div>
          </form>
        </div>

        {/* RIGHT SIDE - YOUR ORDER */}
        <div>
          <div className="border border-gray-200 rounded-md bg-gray-50/50 p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-7">
              YOUR ORDER
            </h2>

            {/* Table Heading */}
            <div className="flex justify-between items-center border-y border-gray-300 py-4 px-2 font-semibold text-gray-800">
              <span>Product</span>

              <span>Subtotal</span>
            </div>

            {/* Product 1 */}
            <div className="flex justify-between items-center gap-3 px-2 py-5 text-gray-700">
              <p className="truncate">
                A-Line Kurti With Sh...
                <span className="font-semibold"> × 1</span>
              </p>

              <span className="whitespace-nowrap">1,300.00</span>
            </div>

            {/* Product 2 */}
            <div className="flex justify-between items-center gap-3 px-2 py-5 text-gray-700">
              <p className="truncate">
                Modern Smart Watch f...
                <span className="font-semibold"> × 1</span>
              </p>

              <span className="whitespace-nowrap">2,500.00</span>
            </div>

            {/* Subtotal */}
            <div className="flex justify-between items-center px-2 py-4 text-gray-700">
              <span>Subtotal</span>

              <span className="whitespace-nowrap">3,800.00</span>
            </div>

            {/* Checkout Button */}
            <button
              type="button"
              className="w-full mt-5 bg-[#f52b4b] hover:bg-[#dc1839] text-white font-semibold text-lg py-4 rounded-md transition duration-300 flex justify-center items-center gap-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="23"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="5" width="18" height="16" rx="2" />
                <path d="M8 5V3a4 4 0 0 1 8 0v2" />
                <path d="m9 14 2 2 4-4" />
              </svg>
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
