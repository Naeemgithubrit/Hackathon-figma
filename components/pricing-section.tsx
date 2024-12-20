'use client'

import { useState } from "react"
import { Check } from 'lucide-react'
import { cn } from "@/lib/utils"

export default function PricingSection() {
  const [isYearly, setIsYearly] = useState(false)

  const plans = [
    {
      name: "FREE",
      price: 0,
      features: [
        "Organize across all apps by hand",
        "Unlimited product updates",
        "Unlimited product updates",
        "1GB Cloud storage",
      ],
    },
    {
      name: "STANDARD",
      price: 9.99,
      features: [
        "Organize across all apps by hand",
        "Unlimited product updates",
        "Unlimited product updates",
        "1GB Cloud storage",
      ],
    },
    {
      name: "PREMIUM",
      price: 19.99,
      features: [
        "Organize across all apps by hand",
        "Unlimited product updates",
        "Unlimited product updates",
        "1GB Cloud storage",
      ],
    },
  ]

  return (
    <div className="mt-10 w-full flex justify-center items-center flex-col">
      <h3 className="mb-4 font-montserrat text-base text-[#737373] font-bold">
        PRICING
      </h3>
      <h1 className="mb-3 font-montserrat text-4xl md:text-[58px] text-black font-bold">
        Simple Pricing
      </h1>
      <div className="gap-1 flex justify-center items-center">
        <p className="font-montserrat text-sm font-bold text-black">Home</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="15px"
          viewBox="0 -960 960 960"
          width="15px"
          fill="#737373"
        >
          <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
        </svg>
        <p className="font-montserrat text-sm font-bold text-[#737373]">
          Pricing
        </p>
      </div>
      <div className="bg-[#fafafa] mt-20 w-full flex flex-col justify-center items-center">
        <h1 className="text-[40px] font-montserrat font-bold text-black">
          Pricing
        </h1>
        <p className="font-montserrat text-sm md:w-[469px] text-center text-[#737373]">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics{" "}
        </p>
        <div className="mt-20 flex justify-center items-center gap-3">
          <h2 className="text-black text-sm font-montserrat font-bold">
            Monthly
          </h2>
          <button
            onClick={() => setIsYearly(!isYearly)}
            className="relative inline-flex h-6 w-11 items-center rounded-full bg-blue-500"
          >
            <span
              className={cn(
                "inline-block h-4 w-4 transform rounded-full bg-white transition",
                isYearly ? "translate-x-6" : "translate-x-1"
              )}
            />
          </button>
          <h2 className="text-black text-sm font-montserrat font-bold">
            Yearly
          </h2>
          <div className="font-montserrat font-sm font-bold text-[#23A6F0] w-[109px] h-[44px] flex justify-center items-center rounded-3xl bg-[#B2E3FF]">
            Save 25%
          </div>
        </div>
      </div>
      <div className="mt-14 bg-[#fafafa] w-full flex justify-center items-center">
        <div className="w-[90%] lg:h-[704px] grid gap-10 lg:gap-0 grid-cols-1 lg:grid-cols-3 grid-rows-5">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={cn(
                "lg:mt-10 h-[704px] col-span-1 row-span-5 lg:row-span-4 bg-white flex flex-col justify-center items-center rounded-md border-[1px] border-[#23A6F0]",
                index === 1 ? "bg-[#252B42] text-white shadow-lg transform scale-105" : "bg-white"
              )}
            >
              <h1 className="font-montserrat text-2xl font-bold text-black mb-6">
                {plan.name}
              </h1>
              <h3 className="w-[160px] font-montserrat text-base font-bold text-[#737373] mb-8">
                Organize across all apps by hand
              </h3>
              <div className="flex justify-center gap-3 mb-9 items-center">
                <p className="font-montserrat text-[40px] font-bold text-[#23A6F0]">
                  {plan.price}
                </p>
                <div className="flex flex-col justify-center items-start gap-2 font-montserrat text-[#23A6F0] text-2xl font-bold">
                  $<p className="text-sm">Per Month</p>
                </div>
              </div>
              <ul className="w-full gap-3 flex flex-col justify-center items-center">
                {plan.features.map((feature, i) => (
                  <li key={i} className="w-full flex justify-center items-center gap-2">
                   <Check size={50} className="w-4 h-4 bg-green-500 rounded-full p-1 text-black text-lg" />
                    <h3 className="font-bold font-montserrat text-xs w-[180px]">
                      {feature}
                    </h3>
                  </li>
                ))}
              </ul>
              <button
                className={cn(
                  "mt-5 font-montserrat text-sm font-bold text-white w-[246px] h-[52px] rounded-md",
                  index === 1
                    ? "bg-white text-gray-900 hover:bg-gray-100"
                    : "bg-[#252B42]"
                )}
              >
                Try for free
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}