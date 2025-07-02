import { motion } from 'framer-motion'
import { Heart, Award, Users, Leaf, Coffee, Star } from 'lucide-react'

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Passion',
      description: 'Nous mettons tout notre cœur dans chaque tasse que nous servons.'
    },
    {
      icon: Award,
      title: 'Qualité',
      description: 'Sélection rigoureuse des meilleurs grains et préparation expertisée.'
    },
    {
      icon: Users,
      title: 'Communauté',
      description: 'Un lieu de rencontre chaleureux au cœur de votre quartier.'
    },
    {
      icon: Leaf,
      title: 'Durabilité',
      description: 'Engagement pour un commerce équitable et des pratiques écologiques.'
    }
  ]

  const team = [
    {
      name: 'Sophie Martin',
      role: 'Fondatrice & Torréfactrice',
      description: 'Passionnée de café depuis 15 ans, Sophie a créé Café Moderne pour partager son amour de l\'art du café.',
      image: '👩‍🍳'
    },
    {
      name: 'Jean Dubois',
      role: 'Chef Barista',
      description: 'Expert en préparation de café, Jean forme notre équipe aux techniques les plus avancées.',
      image: '👨‍🍳'
    },
    {
      name: 'Marie Leroy',
      role: 'Chef Pâtissière',
      description: 'Créatrice de nos délicieuses pâtisseries artisanales qui accompagnent parfaitement nos cafés.',
      image: '👩‍🍳'
    },
    {
      name: 'Lucas Bernard',
      role: 'Responsable Qualité',
      description: 'Garant de l\'excellence de nos produits, de la sélection des grains au service en tasse.',
      image: '👨‍💼'
    }
  ]

  const milestones = [
    {
      year: '2020',
      title: 'Ouverture',
      description: 'Ouverture de notre premier café dans le quartier historique de Paris.'
    },
    {
      year: '2021',
      title: 'Certification Bio',
      description: 'Obtention de la certification bio pour tous nos cafés et pâtisseries.'
    },
    {
      year: '2022',
      title: 'Prix d\'Excellence',
      description: 'Élu "Meilleur Café Artisanal de Paris" par le guide gastronomique local.'
    },
    {
      year: '2023',
      title: 'Commerce Équitable',
      description: 'Partenariat direct avec des producteurs de café équitable en Amérique du Sud.'
    },
    {
      year: '2024',
      title: 'Expansion',
      description: 'Lancement de notre service de torréfaction personnalisée et vente en ligne.'
    }
  ]

  return (
    <div className="min-h-screen bg-cream-25">
      {/* Header */}
      <section className="bg-gradient-to-br from-coffee-200 via-coffee-300 to-coffee-400 text-cream-900 section-padding">
        <div className="container-responsive text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h1 className="hero-title mb-6 sm:mb-8">
              Notre Histoire
            </h1>
            <p className="section-subtitle text-coffee-800 leading-relaxed">
              Découvrez l'histoire passionnante de Café Moderne, né de l'amour du café 
              artisanal et de la volonté de créer un lieu d'exception.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-cream-50">
        <div className="container-responsive">
          <div className="grid grid-cols-1 lg:grid-cols-2 grid-responsive items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title text-coffee-800 mb-6 sm:mb-8">
                Une Passion Devenue Réalité
              </h2>
              <div className="space-y-4 text-coffee-700 leading-relaxed text-sm sm:text-base">
                <p>
                  Tout a commencé en 2020 lorsque Sophie Martin, passionnée de café depuis son plus jeune âge, 
                  a décidé de réaliser son rêve : créer un espace où l'art du café artisanal rencontre 
                  la convivialité parisienne.
                </p>
                <p>
                  Après des années d'apprentissage auprès des meilleurs torréfacteurs européens, 
                  Sophie a ouvert les portes de Café Moderne avec une vision claire : offrir à Paris 
                  un café d'exception dans un cadre moderne et chaleureux.
                </p>
                <p>
                  Aujourd'hui, notre équipe de passionnés continue de porter cette vision avec 
                  l'engagement constant de vous offrir la meilleure expérience café possible.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="glass border border-coffee-300/30 card-padding text-center">
                <Coffee className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 text-coffee-600 mx-auto mb-4 sm:mb-6" />
                <h3 className="text-xl sm:text-2xl font-light text-coffee-800 mb-3 sm:mb-4">
                  Notre Mission
                </h3>
                <p className="text-coffee-700 leading-relaxed text-sm sm:text-base">
                  Servir le meilleur café artisanal de Paris dans un environnement 
                  moderne et accueillant, tout en soutenant des pratiques durables 
                  et équitables.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-white">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="section-title text-coffee-800 mb-6 sm:mb-8">
              Nos Valeurs
            </h2>
            <p className="section-subtitle text-coffee-700 max-w-3xl mx-auto">
              Les principes qui guident chacune de nos actions et qui font 
              de Café Moderne un lieu unique.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 grid-responsive">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="glass border border-coffee-300/30 card-padding text-center group transition-transform duration-200 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-coffee-400 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:bg-coffee-500 transition-colors duration-200">
                    <Icon className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-cream-25" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-light text-coffee-800 mb-3 sm:mb-4">
                    {value.title}
                  </h3>
                  <p className="text-coffee-700 leading-relaxed text-sm sm:text-base">
                    {value.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-white">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="section-title text-coffee-800 mb-6 sm:mb-8">
              Notre Parcours
            </h2>
            <p className="section-subtitle text-coffee-700">
              Les moments clés qui ont façonné l'histoire de Café Moderne
            </p>
          </motion.div>

          {/* Mobile Timeline - Vertical */}
          <div className="block lg:hidden space-y-6">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="flex items-start gap-4">
                  {/* Timeline dot */}
                  <div className="flex flex-col items-center">
                    <div className="w-4 h-4 bg-coffee-600 rounded-full mt-2"></div>
                    {index < milestones.length - 1 && (
                      <div className="w-0.5 h-20 bg-coffee-300 mt-2"></div>
                    )}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 pb-8">
                    <div className="glass border border-coffee-300/30 card-padding">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-3">
                        <span className="text-2xl sm:text-3xl font-light text-coffee-600">
                          {milestone.year}
                        </span>
                        <Star className="h-5 w-5 sm:h-6 sm:w-6 text-coffee-500" />
                      </div>
                      <h3 className="text-lg sm:text-xl font-light text-coffee-800 mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-coffee-700 leading-relaxed text-sm sm:text-base">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Desktop Timeline - Zigzag */}
          <div className="hidden lg:block space-y-8 max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className={`flex items-center gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <div className="flex-1">
                  <div className={`glass border border-coffee-300/30 card-padding ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                    <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                      <span className="text-3xl font-light text-coffee-600">
                        {milestone.year}
                      </span>
                      <Star className="h-6 w-6 text-coffee-500" />
                    </div>
                    <h3 className="text-xl font-light text-coffee-800 mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-coffee-700 leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>
                <div className="w-4 h-4 bg-coffee-600 rounded-full"></div>
                <div className="flex-1"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-cream-50">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="section-title text-coffee-800 mb-6 sm:mb-8">
              Notre Équipe
            </h2>
            <p className="section-subtitle text-coffee-700 max-w-3xl mx-auto">
              Rencontrez les passionnés qui donnent vie à l'expérience Café Moderne 
              chaque jour avec dévouement et expertise.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 grid-responsive">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="glass border border-coffee-300/30 card-padding text-center group transition-transform duration-200 hover:-translate-y-1"
              >
                <div className="text-4xl sm:text-5xl md:text-6xl mb-4 sm:mb-6">{member.image}</div>
                <h3 className="text-lg sm:text-xl font-light text-coffee-800 mb-2">
                  {member.name}
                </h3>
                <p className="text-coffee-600 font-light mb-3 sm:mb-4 text-sm sm:text-base">
                  {member.role}
                </p>
                <p className="text-coffee-700 text-sm sm:text-base leading-relaxed">
                  {member.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About 