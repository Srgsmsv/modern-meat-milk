
import { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

const benefitsData = [
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-brand-red">
        <path d="M15.5 6.5C15.5 8.98528 13.4853 11 11 11C8.51472 11 6.5 8.98528 6.5 6.5C6.5 4.01472 8.51472 2 11 2C13.4853 2 15.5 4.01472 15.5 6.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M11 11C5.47715 11 1 15.4772 1 21C1 21.5523 1.44772 22 2 22H20C20.5523 22 21 21.5523 21 21C21 15.4772 16.5228 11 11 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Consumer Appeal",
    description: "Enhance taste, texture, and appearance of your products to create superior consumer experiences and increase product appeal."
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-brand-gold">
        <path d="M12 8V12L15 15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Extended Shelf Life",
    description: "Our preservation systems significantly extend product shelf life while maintaining flavor integrity and quality throughout the distribution cycle."
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-brand-red">
        <path d="M3 21H21M4 18H20M6 18V11M10 18V11M14 18V11M18 18V11M6 7H18C19.1046 7 20 6.10457 20 5C20 3.89543 19.1046 3 18 3H6C4.89543 3 4 3.89543 4 5C4 6.10457 4.89543 7 6 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Improved Processing",
    description: "Optimize manufacturing efficiency, reduce production costs, and improve yield with our specialized processing additives."
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-brand-gold">
        <path d="M9 10H6C4.89543 10 4 10.8954 4 12V19C4 20.1046 4.89543 21 6 21H18C19.1046 21 20 20.1046 20 19V12C20 10.8954 19.1046 10 18 10H15M9 10V6C9 4.34315 10.3431 3 12 3C13.6569 3 15 4.34315 15 6V10M9 10H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Product Safety",
    description: "Ensure product safety and meet regulatory requirements with our scientifically validated preservation and stability systems."
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-brand-red">
        <path d="M19.5 12.5719L12 19.9999L4.5 12.5719C2.5 10.5999 2.5 7.39994 4.5 5.42792C6.5 3.45591 9.75 3.45591 11.75 5.42792L12 5.67192L12.25 5.42792C14.25 3.45591 17.5 3.45591 19.5 5.42792C21.5 7.39994 21.5 10.5999 19.5 12.5719Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Clean Label Options",
    description: "Meet consumer demands for cleaner labels with our range of natural and consumer-friendly ingredient solutions."
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-brand-gold">
        <path d="M19.5 22L19.5 18M19.5 18L19.5 11.5C19.5 8.46243 17.0376 6 14 6L5 6C3.34315 6 2 7.34315 2 9C2 10.6569 3.34315 12 5 12L14.5 12C17.5376 12 20 14.4624 20 17.5L20 18M19.5 18L15.5 18M22 18L16 18M19.5 2L19.5 4M4.5 18L4.5 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Functional Benefits",
    description: "Add nutritional value with our fortification systems or create products with specific health benefits to target health-conscious consumers."
  }
];

const Benefits = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const controls = useAnimation();
  
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);
  
  return (
    <section id="benefits" className="py-20 bg-white relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 right-0 w-full h-1/4 bg-gradient-to-b from-gray-50 to-white"></div>
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title mx-auto">Why Choose Our Additives</h2>
          <p className="section-subtitle">
            Our specialized formulations offer tangible benefits across your entire production chain
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefitsData.map((benefit, index) => (
            <motion.div 
              key={benefit.title}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              initial="hidden"
              animate={controls}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
            >
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 }
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-16 bg-gradient-to-r from-brand-red/5 to-brand-gold/5 p-8 md:p-12 rounded-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 opacity-10">
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M196 100C196 153.019 153.019 196 100 196C46.9807 196 4 153.019 4 100C4 46.9807 46.9807 4 100 4C153.019 4 196 46.9807 196 100Z" stroke="#C41E3A" strokeWidth="8"/>
              <path d="M156 100C156 130.928 130.928 156 100 156C69.0721 156 44 130.928 44 100C44 69.0721 69.0721 44 100 44C130.928 44 156 69.0721 156 100Z" stroke="#D4AF37" strokeWidth="8"/>
              <path d="M116 100C116 108.837 108.837 116 100 116C91.1634 116 84 108.837 84 100C84 91.1634 91.1634 84 100 84C108.837 84 116 91.1634 116 100Z" fill="#C41E3A"/>
            </svg>
          </div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="max-w-2xl">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to enhance your products?</h3>
              <p className="text-gray-600">
                Our expert team is ready to analyze your specific needs and recommend the perfect additive solutions for your products.
              </p>
            </div>
            <div className="flex-shrink-0">
              <a 
                href="#contact" 
                className="px-8 py-4 bg-brand-red text-white font-medium rounded-md shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-2px]"
              >
                Schedule a Consultation
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;
