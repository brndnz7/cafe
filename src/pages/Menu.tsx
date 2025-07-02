import { motion } from 'framer-motion'
import { Coffee, IceCream } from 'lucide-react'

const Menu = () => {
  const menuCategories = [
    {
      icon: Coffee,
      title: 'Cafés Signature',
      description: 'Notre sélection de cafés d\'exception',
      items: [
        {
          name: 'Espresso Pur',
          description: 'Un café court et intense, extrait dans les règles de l\'art italien. Grains d\'Arabica torréfiés à la perfection.',
          price: '4.50€',
          image: 'https://images.pexels.com/photos/2299028/pexels-photo-2299028.jpeg?w=600&h=300&fit=crop&crop=center',
          premium: true
        },
        {
          name: 'Cappuccino Artisanal',
          description: 'Espresso onctueux sublimé par une mousse de lait soyeuse et crémeuse, art latte inclus.',
          price: '6.20€',
          image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=600&h=300&fit=crop&crop=center',
          premium: false
        },
        {
          name: 'Flat White Australien',
          description: 'Double espresso avec lait micromousse dans la pure tradition australienne. Équilibre parfait.',
          price: '6.80€',
          image: 'https://images.unsplash.com/photo-1561882468-9110e03e0f78?w=600&h=300&fit=crop&crop=center',
          premium: true
        },
        {
          name: 'Café de Spécialité',
          description: 'Rotation mensuelle de grains d\'origine unique. Torréfaction artisanale locale, traçabilité garantie.',
          price: '8.50€',
          image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=300&fit=crop&crop=center',
          premium: true
        }
      ]
    },
    {
      icon: IceCream,
      title: 'Cafés Glacés',
      description: 'Fraîcheur et intensité pour les journées ensoleillées',
      items: [
        {
          name: 'Cold Brew Premium',
          description: 'Café infusé à froid pendant 18h. Douceur naturelle, notes chocolatées, servi sur glace artisanale.',
          price: '7.20€',
          image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=600&h=300&fit=crop&crop=center',
          premium: true
        },
        {
          name: 'Iced Latte Signature',
          description: 'Espresso double et lait froid, sirop de vanille Madagascar, glace pilée à la minute.',
          price: '6.80€',
          image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&h=300&fit=crop&crop=center',
          premium: false
        },
        {
          name: 'Affogato Artisanal',
          description: 'Glace vanille artisanale "noyée" dans un espresso brûlant. Contraste de températures sublime.',
          price: '8.90€',
          image: 'https://images.unsplash.com/photo-1563227812-0ea4c22e6cc8?w=600&h=300&fit=crop&crop=center',
          premium: true
        }
      ]
    },
    {
      icon: Coffee,
      title: 'Cafés du Monde',
      description: 'Voyage gustatif à travers les terroirs d\'exception',
      items: [
        {
          name: 'Ethiopian Yirgacheffe',
          description: 'Notes florales et citronnées, acidité vive. Méthode V60, eau filtrée à 92°C. Terroir d\'altitude.',
          price: '9.20€',
          image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=600&h=300&fit=crop&crop=center',
          premium: true
        },
        {
          name: 'Colombian Supremo',
          description: 'Équilibre parfait, notes de caramel et noisette. Altitude 1800m, commerce équitable certifié.',
          price: '8.80€',
          image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&h=300&fit=crop&crop=center',
          premium: true
        },
        {
          name: 'Jamaica Blue Mountain',
          description: 'Le café le plus précieux au monde. Douceur exceptionnelle, complexité aromatique unique.',
          price: '15.90€',
          image: 'https://images.pexels.com/photos/685527/pexels-photo-685527.jpeg?w=600&h=300&fit=crop&crop=center',
          premium: true
        }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-cream-25">
      {/* Hero Header - Minimal & Elegant */}
      <section className="pt-24 pb-16 sm:pb-20 md:pb-32">
        <div className="container-responsive text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h1 className="hero-title text-coffee-800 mb-6 sm:mb-8">
              Notre Menu
            </h1>
            <div className="w-16 sm:w-20 md:w-24 h-px bg-coffee-400 mx-auto mb-6 sm:mb-8"></div>
            <p className="section-subtitle text-cream-700 max-w-2xl mx-auto">
              Une sélection raffinée de cafés d'exception, 
              préparés avec passion et des ingrédients de première qualité
            </p>
          </motion.div>
        </div>
      </section>

      {/* Menu Categories - Ultra Clean */}
      {menuCategories.map((category, categoryIndex) => {
        const Icon = category.icon
        return (
          <section key={category.title} className="section-padding">
            <div className="container-responsive">
              {/* Category Header - Minimal */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: categoryIndex * 0.05 }}
                viewport={{ once: true }}
                className="text-center mb-12 sm:mb-16 md:mb-20"
              >
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4 mb-4 sm:mb-6">
                  <Icon className="h-6 w-6 sm:h-8 sm:w-8 text-coffee-600" />
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-coffee-800 tracking-wide">
                    {category.title}
                  </h2>
                </div>
                <div className="w-12 sm:w-16 h-px bg-coffee-400 mx-auto mb-3 sm:mb-4"></div>
                <p className="text-cream-700 font-light text-sm sm:text-base">{category.description}</p>
              </motion.div>

              {/* Menu Items - Luxury Cards */}
              <div className="space-y-responsive">
                {category.items.map((item, itemIndex) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.3, 
                      delay: (categoryIndex * 0.05) + (itemIndex * 0.05) 
                    }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="glass border border-coffee-300/30 transition-transform duration-200 hover:-translate-y-1">
                      <div className="grid grid-cols-1 lg:grid-cols-5 overflow-hidden">
                        {/* Image */}
                        <div className="lg:col-span-2 relative h-48 sm:h-56 md:h-64 lg:h-80 overflow-hidden">
                          <img 
                            src={item.image} 
                            alt={item.name}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                          {item.premium && (
                            <div className="absolute top-3 sm:top-4 left-3 sm:left-4 glass border border-coffee-400/30 px-3 sm:px-4 py-1 sm:py-2">
                              <span className="text-xs font-light text-coffee-800 tracking-wide">PREMIUM</span>
                            </div>
                          )}
                        </div>

                        {/* Content */}
                        <div className="lg:col-span-3 card-padding flex flex-col justify-center">
                          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 sm:mb-6">
                            <h3 className="text-xl sm:text-2xl md:text-3xl font-light text-coffee-800 tracking-wide mb-2 sm:mb-0">
                              {item.name}
                            </h3>
                            <div className="text-left sm:text-right">
                              <span className="text-xl sm:text-2xl md:text-3xl font-light text-coffee-600">
                                {item.price}
                              </span>
                            </div>
                          </div>
                          
                          <p className="text-cream-700 font-light leading-relaxed mb-6 sm:mb-8 text-base sm:text-lg">
                            {item.description}
                          </p>
                          
                          <button className="self-start border border-coffee-400 text-coffee-700 px-6 sm:px-8 py-2 sm:py-3 font-light tracking-wide transition-colors duration-200 hover:bg-coffee-400 hover:text-cream-25 hover:border-coffee-300 text-sm sm:text-base">
                            Commander
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )
      })}

      {/* Special Offers - Minimal Luxury */}
      <section className="section-padding bg-cream-25">
        <div className="container-responsive text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title text-coffee-800 mb-6 sm:mb-8">
              Formules Premium
            </h2>
            <div className="w-16 sm:w-20 md:w-24 h-px bg-coffee-400 mx-auto mb-8 sm:mb-12"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 grid-responsive mt-8 sm:mt-12 md:mt-16">
              <div className="glass border border-coffee-300/30 card-padding transition-transform duration-200 hover:-translate-y-1">
                <div className="text-center">
                  <Coffee className="h-10 w-10 sm:h-12 sm:w-12 text-coffee-600 mx-auto mb-4 sm:mb-6" />
                  <h3 className="text-xl sm:text-2xl font-light text-coffee-800 mb-3 sm:mb-4 tracking-wide">
                    Dégustation Matinale
                  </h3>
                  <p className="text-cream-700 font-light mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
                    Café signature + viennoiserie artisanale
                  </p>
                  <div className="flex items-center justify-center space-x-3 sm:space-x-4 mb-6 sm:mb-8">
                    <span className="text-base sm:text-lg text-cream-600 line-through">12.50€</span>
                    <span className="text-2xl sm:text-3xl font-light text-coffee-700">9.90€</span>
                  </div>
                  <button className="border border-coffee-400 text-coffee-700 px-6 sm:px-8 py-2 sm:py-3 font-light tracking-wide transition-colors duration-200 hover:bg-coffee-400 hover:text-cream-25 text-sm sm:text-base">
                    Découvrir
                  </button>
                </div>
              </div>

              <div className="glass border border-coffee-300/30 card-padding transition-transform duration-200 hover:-translate-y-1">
                <div className="text-center">
                  <Coffee className="h-10 w-10 sm:h-12 sm:w-12 text-coffee-600 mx-auto mb-4 sm:mb-6" />
                  <h3 className="text-xl sm:text-2xl font-light text-coffee-800 mb-3 sm:mb-4 tracking-wide">
                    Expérience Premium
                  </h3>
                  <p className="text-cream-700 font-light mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
                    3 cafés du monde + dégustation guidée
                  </p>
                  <div className="flex items-center justify-center space-x-3 sm:space-x-4 mb-6 sm:mb-8">
                    <span className="text-base sm:text-lg text-cream-600 line-through">28.90€</span>
                    <span className="text-2xl sm:text-3xl font-light text-coffee-700">24.90€</span>
                  </div>
                  <button className="border border-coffee-400 text-coffee-700 px-6 sm:px-8 py-2 sm:py-3 font-light tracking-wide transition-colors duration-200 hover:bg-coffee-400 hover:text-cream-25 text-sm sm:text-base">
                    Réserver
                  </button>
                </div>
              </div>
            </div>

            <p className="text-cream-700 font-light mt-8 sm:mt-12 text-xs sm:text-sm tracking-wide">
              * Formules disponibles du mardi au samedi, sur réservation
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Menu 