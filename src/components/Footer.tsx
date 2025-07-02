import { motion } from 'framer-motion'
import { Coffee, MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-coffee-200 text-cream-900">
      <div className="container-responsive section-padding">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 grid-responsive">
          {/* Logo et description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            className="space-y-3 sm:space-y-4"
          >
            <div className="flex items-center space-x-2">
              <Coffee className="h-6 w-6 sm:h-8 sm:w-8 text-coffee-600" />
              <span className="text-lg sm:text-xl font-light">Café Moderne</span>
            </div>
            <p className="text-coffee-700 text-sm sm:text-base leading-relaxed">
              Votre café artisanal du cœur de la ville. Nous servons les meilleurs grains 
              torréfiés avec passion depuis 2020.
            </p>
          </motion.div>

          {/* Informations de contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.05 }}
            viewport={{ once: true }}
            className="space-y-3 sm:space-y-4"
          >
            <h3 className="text-base sm:text-lg font-light mb-3 sm:mb-4 text-coffee-800">Contact</h3>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-start space-x-2 sm:space-x-3">
                <MapPin className="h-4 w-4 text-coffee-600 mt-0.5" />
                <span className="text-sm sm:text-base text-coffee-700">123 Rue du Café, Paris 75001</span>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Phone className="h-4 w-4 text-coffee-600" />
                <span className="text-sm sm:text-base text-coffee-700">01 23 45 67 89</span>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Mail className="h-4 w-4 text-coffee-600" />
                <span className="text-sm sm:text-base text-coffee-700">contact@cafemoderne.fr</span>
              </div>
            </div>
          </motion.div>

          {/* Horaires */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-3 sm:space-y-4"
          >
            <h3 className="text-base sm:text-lg font-light mb-3 sm:mb-4 text-coffee-800">Horaires</h3>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-start space-x-2 sm:space-x-3">
                <Clock className="h-4 w-4 text-coffee-600 mt-0.5" />
                <div className="text-sm sm:text-base text-coffee-700">
                  <div>Lun - Ven: 7h00 - 19h00</div>
                  <div>Sam - Dim: 8h00 - 20h00</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Réseaux sociaux */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.15 }}
            viewport={{ once: true }}
            className="space-y-3 sm:space-y-4"
          >
            <h3 className="text-base sm:text-lg font-light mb-3 sm:mb-4 text-coffee-800">Suivez-nous</h3>
            <div className="flex space-x-3 sm:space-x-4">
              <a 
                href="#" 
                className="p-2 bg-coffee-400 rounded-full hover:bg-coffee-500 transition-colors duration-200"
              >
                <Facebook className="h-4 w-4 sm:h-5 sm:w-5 text-cream-25" />
              </a>
              <a 
                href="#" 
                className="p-2 bg-coffee-400 rounded-full hover:bg-coffee-500 transition-colors duration-200"
              >
                <Instagram className="h-4 w-4 sm:h-5 sm:w-5 text-cream-25" />
              </a>
              <a 
                href="#" 
                className="p-2 bg-coffee-400 rounded-full hover:bg-coffee-500 transition-colors duration-200"
              >
                <Twitter className="h-4 w-4 sm:h-5 sm:w-5 text-cream-25" />
              </a>
            </div>
            <p className="text-sm sm:text-base text-coffee-700">
              Restez connecté pour nos dernières actualités et promotions !
            </p>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-coffee-400 text-center"
        >
          <p className="text-xs sm:text-sm text-coffee-600">
            © 2024 Café Moderne. Tous droits réservés. Conçu avec ❤️ pour votre plaisir gustatif.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer 