
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t border-gray-200 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-brand-red">NutriTech Additives</h3>
            <p className="text-gray-600">
              Премиальные комплексные пищевые добавки для мясной и молочной промышленности, улучшающие вкус, текстуру и срок хранения.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-brand-red transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-brand-red transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-brand-red transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Быстрые ссылки</h3>
            <ul className="space-y-2">
              <li><a href="#Домой" className="text-gray-600 hover:text-brand-red transition-colors">Домой</a></li>
              <li><a href="#О нас" className="text-gray-600 hover:text-brand-red transition-colors">О нас</a></li>
              <li><a href="#Продукты" className="text-gray-600 hover:text-brand-red transition-colors">Продукты</a></li>
              <li><a href="#Преимущества" className="text-gray-600 hover:text-brand-red transition-colors">Преимущества</a></li>
              <li><a href="#Контакты" className="text-gray-600 hover:text-brand-red transition-colors">Контакты</a></li>
            </ul>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Наши продукты</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-brand-red transition-colors">Мясные добавки</a></li>
              <li><a href="#" className="text-gray-600 hover:text-brand-red transition-colors">Молочные решения</a></li>
              <li><a href="#" className="text-gray-600 hover:text-brand-red transition-colors">Вкусовые добавки</a></li>
              <li><a href="#" className="text-gray-600 hover:text-brand-red transition-colors">Консерванты</a></li>
              <li><a href="#" className="text-gray-600 hover:text-brand-red transition-colors">Усилители вкуса</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Свяжитесь с нами</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="text-brand-red mt-1" size={18} />
                <span className="text-gray-600">123 пр-т Независимости, Минск</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-brand-red" size={18} />
                <span className="text-gray-600">+375 (44) 11-2222</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-brand-red" size={18} />
                <span className="text-gray-600">info@nutritech-additives.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">
              © {new Date().getFullYear()} NutriTech Additives. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6">
                <li><a href="#" className="text-sm text-gray-600 hover:text-brand-red transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-brand-red transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-brand-red transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
