import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Coffee, Award, Users, Clock } from 'lucide-react'

const Home = () => {
  const features = [
    {
      icon: Coffee,
      title: 'Café Artisanal',
      description: 'Grains sélectionnés et torréfiés avec passion pour une expérience gustative unique.',
      image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=400&fit=crop&crop=center'
    },
    {
      icon: Award,
      title: 'Qualité Premium',
      description: 'Récompensés pour notre excellence et notre engagement envers la qualité.',
      image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&h=400&fit=crop&crop=center'
    },
    {
      icon: Users,
      title: 'Équipe Experte',
      description: 'Baristas formés et passionnés pour vous servir le meilleur café de la ville.',
      image: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=600&h=400&fit=crop&crop=center'
    },
    {
      icon: Clock,
      title: 'Ouvert 7j/7',
      description: 'Disponible tous les jours pour satisfaire votre besoin de caféine.',
      image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&h=400&fit=crop&crop=center'
    }
  ]



  return (
    <div className="min-h-screen bg-cream-25">
      {/* Hero Section - Minimal & Elegant */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1920&h=1080&fit=crop&crop=center" 
            alt="Café moderne" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-overlay"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container-responsive text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="glass card-padding max-w-4xl mx-auto"
          >
            <h1 className="hero-title text-coffee-900 mb-6 sm:mb-8">
              Café
              <span className="block bg-gradient-to-r from-coffee-800 to-coffee-700 bg-clip-text text-transparent">
                Moderne
              </span>
            </h1>
            <div className="w-16 sm:w-20 md:w-24 h-px bg-coffee-600 mx-auto mb-6 sm:mb-8"></div>
            <p className="section-subtitle text-coffee-800 max-w-3xl mx-auto mb-8 sm:mb-12">
              L'art du café artisanal dans une ambiance moderne et raffinée. 
              Chaque tasse raconte une histoire de passion et d'excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <Link to="/menu" className="glass border border-coffee-400/50 text-coffee-800 hover:bg-coffee-400 hover:text-cream-25 px-8 sm:px-10 py-3 sm:py-4 font-light tracking-wide transition-colors duration-200 text-base sm:text-lg">
                Découvrir notre menu
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section - Ultra Clean */}
      <section className="section-padding bg-cream-50">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            className="text-center mb-16 sm:mb-20 md:mb-24"
          >
            <h2 className="section-title text-coffee-800 mb-6 sm:mb-8">
              Notre Savoir-Faire
            </h2>
            <div className="w-16 sm:w-20 md:w-24 h-px bg-coffee-400 mx-auto mb-6 sm:mb-8"></div>
            <p className="section-subtitle text-cream-700 max-w-3xl mx-auto">
              L'art et la passion qui donnent vie à chacune de nos créations café
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 grid-responsive">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="glass border border-coffee-300/30 transition-transform duration-200 hover:-translate-y-1">
                    {/* Image */}
                    <div className="relative h-64 overflow-hidden">
                      <img 
                        src={feature.image} 
                        alt={feature.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>

                    {/* Content */}
                    <div className="card-padding">
                      <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 mb-4 sm:mb-6">
                        <Icon className="h-6 w-6 sm:h-8 sm:w-8 text-coffee-600" />
                        <h3 className="text-xl sm:text-2xl font-light text-coffee-800 tracking-wide">
                          {feature.title}
                        </h3>
                      </div>
                      <p className="text-cream-700 font-light leading-relaxed text-base sm:text-lg">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding bg-cream-50">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            className="text-center mb-16 sm:mb-20 md:mb-24"
          >
            <h2 className="section-title text-coffee-800 mb-6 sm:mb-8">
              Notre Univers
            </h2>
            <div className="w-16 sm:w-20 md:w-24 h-px bg-coffee-400 mx-auto mb-6 sm:mb-8"></div>
            <p className="section-subtitle text-cream-700 max-w-3xl mx-auto">
              Plongez dans l'atmosphère unique de notre café
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-responsive">
            {[
              {
                src: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&h=500&fit=crop&crop=center',
                title: 'Notre espace'
              },
              {
                src: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=600&h=500&fit=crop&crop=center',
                title: 'Spécialités'
              },
              {
                src: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=600&h=500&fit=crop&crop=center',
                title: 'Atmosphère'
              }
            ].map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="glass border border-coffee-300/30 overflow-hidden transition-transform duration-200 hover:-translate-y-1"
              >
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={image.src} 
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-4 sm:p-6 md:p-8 text-center">
                  <h3 className="text-lg sm:text-xl font-light text-coffee-800 tracking-wide">{image.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="section-padding bg-cream-50">
        <div className="max-w-4xl mx-auto text-center container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            className="glass border border-coffee-300/30 card-padding"
          >
            <h2 className="section-title text-coffee-800 mb-6 sm:mb-8">
              Prêt pour votre prochaine pause café ?
            </h2>
            <div className="w-16 sm:w-20 md:w-24 h-px bg-coffee-400 mx-auto mb-6 sm:mb-8"></div>
            <p className="section-subtitle text-cream-700 mb-8 sm:mb-12">
              Venez découvrir notre sélection de cafés d'exception et laissez-vous 
              séduire par notre ambiance unique.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <Link to="/menu" className="border border-coffee-400 text-coffee-700 px-8 sm:px-10 py-3 sm:py-4 font-light tracking-wide transition-colors duration-200 hover:bg-coffee-400 hover:text-cream-25 hover:border-coffee-300 text-sm sm:text-base">
                Voir notre menu
              </Link>
              <Link to="/contact" className="border border-coffee-400 text-coffee-700 px-8 sm:px-10 py-3 sm:py-4 font-light tracking-wide transition-colors duration-200 hover:bg-coffee-400 hover:text-cream-25 hover:border-coffee-300 text-sm sm:text-base">
                Nous contacter
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home 