import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react'

interface ContactForm {
  name: string
  email: string
  subject: string
  message: string
}

const Contact = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactForm>()

  const onSubmit = (data: ContactForm) => {
    console.log('Contact form submitted:', data)
    alert('Merci pour votre message ! Nous vous répondrons dans les plus brefs délais.')
    reset()
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Adresse',
      info: '123 Rue du Café, 75001 Paris',
      details: 'Métro Châtelet - Les Halles'
    },
    {
      icon: Phone,
      title: 'Téléphone',
      info: '01 23 45 67 89',
      details: 'Du lundi au dimanche'
    },
    {
      icon: Mail,
      title: 'Email',
      info: 'contact@cafemoderne.fr',
      details: 'Réponse sous 24h'
    },
    {
      icon: Clock,
      title: 'Horaires',
      info: 'Lun-Ven: 7h-19h',
      details: 'Sam-Dim: 8h-20h'
    }
  ]

  const faq = [
    {
      question: 'Proposez-vous des options végétaliennes ?',
      answer: 'Oui ! Nous avons une sélection de laits végétaux (amande, avoine, soja) et plusieurs pâtisseries végétaliennes.'
    },
    {
      question: 'Puis-je réserver une table ?',
      answer: 'Nous fonctionnons principalement sans réservation, mais vous pouvez nous appeler pour les groupes de plus de 6 personnes.'
    },
    {
      question: 'Vendez-vous vos grains de café ?',
      answer: 'Absolument ! Nous vendons nos mélanges signature en grains ou moulus, disponibles en magasin et en ligne.'
    },
    {
      question: 'Avez-vous le WiFi gratuit ?',
      answer: 'Oui, nous offrons une connexion WiFi gratuite et rapide, parfait pour travailler ou étudier.'
    }
  ]

  return (
    <div className="min-h-screen bg-cream-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-coffee-800 via-coffee-700 to-coffee-600 text-white section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Contactez-nous
            </h1>
            <p className="text-xl text-cream-200 leading-relaxed">
              Nous serions ravis de vous entendre ! Que ce soit pour une question, 
              une suggestion ou simplement pour dire bonjour.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-coffee-800 mb-6">
              Venez nous voir !
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Notre équipe vous accueille dans un cadre chaleureux au cœur de Paris.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="card p-8 text-center group hover:bg-coffee-50"
                >
                  <div className="w-16 h-16 bg-coffee-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-coffee-200 transition-colors duration-300">
                    <Icon className="h-8 w-8 text-coffee-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-coffee-800 mb-3">
                    {info.title}
                  </h3>
                  <p className="text-lg text-gray-800 font-medium mb-2">
                    {info.info}
                  </p>
                  <p className="text-sm text-gray-600">
                    {info.details}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & FAQ */}
      <section className="section-padding bg-cream-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="card p-8">
                <div className="flex items-center mb-6">
                  <MessageCircle className="h-8 w-8 text-coffee-600 mr-3" />
                  <h3 className="text-3xl font-bold text-coffee-800">
                    Envoyez-nous un message
                  </h3>
                </div>
                
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nom complet *
                      </label>
                      <input
                        {...register('name', { required: 'Le nom est requis' })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coffee-500 focus:border-transparent transition-all duration-300"
                        placeholder="Votre nom"
                      />
                      {errors.name && (
                        <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>
                      )}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        {...register('email', { 
                          required: 'L\'email est requis',
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Email invalide'
                          }
                        })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coffee-500 focus:border-transparent transition-all duration-300"
                        placeholder="votre@email.com"
                      />
                      {errors.email && (
                        <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Sujet *
                    </label>
                    <input
                      {...register('subject', { required: 'Le sujet est requis' })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coffee-500 focus:border-transparent transition-all duration-300"
                      placeholder="Sujet de votre message"
                    />
                    {errors.subject && (
                      <p className="text-red-600 text-sm mt-1">{errors.subject.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      {...register('message', { required: 'Le message est requis' })}
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coffee-500 focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Votre message..."
                    />
                    {errors.message && (
                      <p className="text-red-600 text-sm mt-1">{errors.message.message}</p>
                    )}
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full btn-primary flex items-center justify-center"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Envoyer le message
                  </button>
                </form>
              </div>
            </motion.div>

            {/* FAQ */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-3xl font-bold text-coffee-800 mb-8">
                Questions Fréquentes
              </h3>
              <div className="space-y-6">
                {faq.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="card p-6"
                  >
                    <h4 className="text-lg font-semibold text-coffee-800 mb-3">
                      {item.question}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {item.answer}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-coffee-800 mb-6">
              Nous trouver
            </h2>
            <p className="text-xl text-gray-600">
              Situé au cœur de Paris, facilement accessible en métro
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-200 rounded-xl h-96 flex items-center justify-center"
          >
            <div className="text-center">
              <MapPin className="h-16 w-16 text-coffee-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-coffee-800 mb-2">
                Café Moderne
              </h3>
              <p className="text-gray-600 mb-4">
                123 Rue du Café, 75001 Paris
              </p>
              <p className="text-sm text-gray-500">
                (Emplacement de la carte interactive)
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Contact 