
import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section
      id="Домой"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white pt-16"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-red/5 to-brand-gold/5"></div>
        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-white to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-1/2 space-y-6"
          >
            <div>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-block py-1 px-3 rounded-full bg-brand-red/10 text-brand-red text-sm font-medium mb-4"
              >
                Innovative Food Solutions
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              >
                Качественные добавки для  <span className="text-brand-red">Мясной</span> и <span className="gold-gradient">Молочной</span> Продукции
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-lg text-gray-600 max-w-lg"
            >
              Улучшение вкуса, текстуры и сохранности с нашими комплексными пищевыми добавками премиум-класса. Научно разработано для исключительных результатов.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#Продукты"
                className="px-6 py-3 bg-brand-red text-white font-medium rounded-md shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-2px]"
              >
                Изучить продукцию
              </a>
              <a
                href="#Контакты"
                className="px-6 py-3 border border-gray-300 text-gray-800 font-medium rounded-md hover:bg-gray-50 transition-all duration-300"
              >
                Свяжитесь с нами
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="w-full md:w-1/2 relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-brand-red/20 to-brand-gold/20 blur-3xl animate-pulse"></div>
              <div className="absolute inset-4 bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&q=80&w=2340"
                  alt="Premium food additives for meat and dairy industries"
                  className="w-4/5 h-4/5 object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-lg">
                  <div className="text-sm font-semibold text-brand-red">Quality Certified</div>
                  <div className="text-xs text-gray-500">ISO 9001</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 1,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 0.5
          }}
        >
          <a href="#about" className="flex flex-col items-center text-gray-400 hover:text-gray-600 transition-colors">
            <span className="text-sm mb-2">Scroll to discover</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
