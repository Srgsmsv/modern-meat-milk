
import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

const AboutUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-brand-gold/5 rounded-bl-full"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-brand-red/5 rounded-tr-full"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="section-title mx-auto">О нашей компании</h2>
          <p className="section-subtitle">
            Setting new standards in food additive technology for over 15 years
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -30 },
              visible: { opacity: 1, x: 0 }
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold">A Tradition of Excellence & Innovation</h3>
            <p className="text-gray-600">
              Since our founding, we've been passionate about developing cutting-edge solutions for the meat and dairy industries. Our team of expert food scientists and engineers work tirelessly to create additives that enhance quality, extend shelf life, and improve nutritional profiles.
            </p>
            <p className="text-gray-600">
              We pride ourselves on our commitment to sustainability, quality, and customer satisfaction. Every product we develop undergoes rigorous testing to ensure it meets the highest standards of safety and effectiveness.
            </p>

            <div className="pt-4 grid grid-cols-2 gap-6">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-brand-red">15+</span>
                <span className="text-gray-500">Years of Experience</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-brand-red">200+</span>
                <span className="text-gray-500">Products Developed</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-brand-red">50+</span>
                <span className="text-gray-500">Countries Served</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-brand-red">98%</span>
                <span className="text-gray-500">Customer Satisfaction</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, x: 30 },
              visible: { opacity: 1, x: 0 }
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-brand-gold/20 rounded-tl-3xl"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-brand-red/20 rounded-br-3xl"></div>

              <div className="relative bg-white shadow-xl rounded-2xl overflow-hidden">
                <img
                  src="https://i.pinimg.com/736x/b1/ad/dd/b1addde8a887dca929d4b6178d8c427b.jpg"
                  alt="Наша лаборатория"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h4 className="text-xl font-bold mb-2">State-of-the-Art Research Facility</h4>
                    <p className="text-sm">Our team works with cutting-edge technology to develop the next generation of food additives.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-20 glass-card p-8 rounded-2xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-4">
              <div className="w-16 h-16 bg-brand-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15M9 5C9 6.10457 9.89543 7 11 7H13C14.1046 7 15 6.10457 15 5M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5" stroke="#C41E3A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 14L11 16L15 12" stroke="#C41E3A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-2">Quality Guarantee</h4>
              <p className="text-gray-600 text-sm">All our products undergo strict quality testing to ensure consistency and performance.</p>
            </div>

            <div className="text-center p-4">
              <div className="w-16 h-16 bg-brand-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.66347 17H14.3364M11.9999 3V4M18.3639 5.63604L17.6568 6.34315M21 11.9999H20M4 11.9999H3M6.34309 6.34315L5.63599 5.63604M8.46441 15.5356C6.51179 13.5829 6.51179 10.4171 8.46441 8.46448C10.417 6.51187 13.5829 6.51187 15.5355 8.46448C17.4881 10.4171 17.4881 13.5829 15.5355 15.5356L14.9884 16.0827C14.3555 16.7155 13.9999 17.5739 13.9999 18.469V19C13.9999 20.1046 13.1045 21 11.9999 21C10.8954 21 9.99995 20.1046 9.99995 19V18.469C9.99995 17.5739 9.6444 16.7155 9.01151 16.0827L8.46441 15.5356Z" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-2">Innovation Focus</h4>
              <p className="text-gray-600 text-sm">We continuously research and develop new solutions to meet evolving industry needs.</p>
            </div>

            <div className="text-center p-4">
              <div className="w-16 h-16 bg-brand-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="#C41E3A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-2">Customer Support</h4>
              <p className="text-gray-600 text-sm">Our expert team provides personalized assistance and technical support at every stage.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
