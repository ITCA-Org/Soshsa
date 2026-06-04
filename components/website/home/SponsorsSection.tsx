"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const SponsorsSection = () => (
  <section className="relative bg-white py-16 lg:py-20 border-b border-gray-300">
    <div className="w-full px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center text-center"
      >
        <p className="text-primary text-sm uppercase tracking-widest mb-3">
          Proudly Supported By
        </p>
        <h2 className="text-fluid-3xl font-bold text-gray-900 leading-tight mb-10">
          Our Sponsors
        </h2>

        <div className="flex items-center justify-center">
          <div className="relative w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56">
            <Image
              fill
              alt="SoSHSA Sponsor"
              className="object-contain"
              src="/images/home/sponsors/sponsor-1.jpeg"
              sizes="(max-width: 640px) 160px, (max-width: 1024px) 192px, 224px"
            />
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default SponsorsSection;
