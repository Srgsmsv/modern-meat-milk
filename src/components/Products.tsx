import { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
  category: string;
  delay: number;
}

const ProductCard = ({ title, description, image, category, delay }: ProductCardProps) => {
  return (
      <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.6, delay }}
          className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
      >
        <div className="aspect-video overflow-hidden">
          <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="absolute top-4 left-4">
        <span className="inline-block py-1 px-3 bg-white/80 backdrop-blur-sm text-sm font-medium rounded-full text-brand-red">
          {category}
        </span>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2 group-hover:text-brand-red transition-colors duration-300">{title}</h3>
          <p className="text-gray-600 text-sm">{description}</p>
          <div className="mt-4 flex justify-between items-center">
            <a
                href="#contact"
                className="text-brand-red font-medium text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all duration-300"
            >
              Запросить детали
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </motion.div>
  );
};

const Products = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const productCategories = [
    {
      name: "Добавки для мяса",
      description: "Улучшение текстуры, вкуса и срока хранения для всех мясных продуктов",
      products: [
        {
          title: "FlavorGuard Pro",
          description: "Современная система сохранения для увеличения срока хранения мясных продуктов при сохранении вкусовых качеств.",
          image: "https://images.unsplash.com/photo-1615937657715-bc7b4b7962c1?auto=format&fit=crop&q=80&w=2340",
          category: "Сохранение"
        },
        {
          title: "TexturePlus Complex",
          description: "Комплексная система связывания для улучшения текстуры и удержания влаги в переработанных мясных продуктах.",
          image: "https://images.unsplash.com/photo-1551446591-142875a901a1?auto=format&fit=crop&q=80&w=2340",
          category: "Текстура"
        },
        {
          title: "NaturalRed Enhancer",
          description: "Натуральная система стабилизации цвета для сохранения привлекательного красного цвета в свежем и переработанном мясе.",
          image: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&q=80&w=2340",
          category: "Окрашивание"
        }
      ]
    },
    {
      name: "Добавки для молочных продуктов",
      description: "Решения для улучшения стабильности, текстуры и срока хранения молочных продуктов",
      products: [
        {
          title: "CreamTexture System",
          description: "Премиальная стабилизирующая смесь для оптимальной текстуры и ощущения во рту в йогуртах, кремах и десертах.",
          image: "https://images.unsplash.com/photo-1628201081326-08afb393ee07?auto=format&fit=crop&q=80&w=2340",
          category: "Стабилизатор"
        },
        {
          title: "LactoPreserve Ultra",
          description: "Комплексная система сохранения, специально разработанная для продления срока хранения молочных продуктов.",
          image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&q=80&w=2340",
          category: "Сохранение"
        },
        {
          title: "DairyBlend Fortifier",
          description: "Система для укрепления молочных продуктов с необходимыми витаминами и минералами.",
          image: "https://images.unsplash.com/photo-1563735784991-4df5581ee0a6?auto=format&fit=crop&q=80&w=2340",
          category: "Укрепление"
        }
      ]
    }
  ];

  return (
      <section id="Продукты" className="py-20 bg-gray-50" ref={ref}>
        <div className="container mx-auto px-6">
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
            <h2 className="section-title mx-auto">Наши категории продуктов</h2>
            <p className="section-subtitle">
              Специализированные добавки, разработанные для оптимальной работы в мясной и молочной промышленности
            </p>
          </motion.div>

          <div className="space-y-20">
            {productCategories.map((category, index) => (
                <div key={category.name} className="space-y-8">
                  <motion.div
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 }
                      }}
                      initial="hidden"
                      animate={controls}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                      className="flex flex-col md:flex-row justify-between items-center mb-8"
                  >
                    <div>
                      <h3 className="text-2xl font-bold">{category.name}</h3>
                      <p className="text-gray-600 max-w-xl">{category.description}</p>
                    </div>
                    <a
                        href="#contact"
                        className="mt-4 md:mt-0 px-6 py-2 border border-brand-red text-brand-red rounded-md hover:bg-brand-red hover:text-white transition-colors duration-300"
                    >
                      Посмотреть полный каталог
                    </a>
                  </motion.div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {category.products.map((product, idx) => (
                        <ProductCard
                            key={product.title}
                            title={product.title}
                            description={product.description}
                            image={product.image}
                            category={product.category}
                            delay={(index * 0.2) + (idx * 0.1)}
                        />
                    ))}
                  </div>
                </div>
            ))}
          </div>

          <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              initial="hidden"
              animate={controls}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-20 text-center"
          >
            <a
                href="#contact"
                className="inline-block px-8 py-4 bg-brand-red text-white font-medium rounded-md shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-2px]"
            >
              Запросить индивидуальные решения
            </a>
            <p className="mt-4 text-gray-500 text-sm">
              Мы также разрабатываем индивидуальные добавки, соответствующие вашим специфическим требованиям
            </p>
          </motion.div>
        </div>
      </section>
  );
};

export default Products;
