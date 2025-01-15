import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  BarChart3, TrendingUp, Target, Users, ArrowRight, LineChart,
  Mail, Phone, MapPin, CheckCircle, Menu, X
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'success'>('idle');
  
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const [servicesRef, servicesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [aboutRef, aboutInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('success');
    setTimeout(() => setFormStatus('idle'), 3000);
  };

  return (
    <div className="min-h-screen bg-secondary-light">
      {/* Navigation */}
      <nav className="fixed w-full bg-secondary/95 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-2"
            >
              <LineChart size={32} className="text-primary" />
              <span className="text-white text-2xl font-bold">ROV Midia</span>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['Serviços', 'Sobre', 'Contato'].map((item, index) => (
                <motion.a
                  key={item}
                  href={`#\${item.toLowerCase()}`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-white hover:text-primary transition-colors"
                >
                  {item}
                </motion.a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-secondary"
            >
              <div className="container mx-auto px-4 py-4">
                {['Serviços', 'Sobre', 'Contato'].map((item) => (
                  <a
                    key={item}
                    href={`#\${item.toLowerCase()}`}
                    className="block py-2 text-white hover:text-primary transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Transforme seus dados em{' '}
              <span className="text-primary">resultados</span>
            </h1>
            <p className="text-gray-300 text-xl mb-8">
              Especialistas em assessoria de operações de vendas e análise de KPIs para impulsionar seu negócio.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg flex items-center space-x-2 transition"
            >
              <span>Fale Conosco</span>
              <ArrowRight size={20} />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary-light">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '100+', label: 'Clientes' },
              { number: '500K+', label: 'Dados Analisados' },
              { number: '95%', label: 'Satisfação' },
              { number: '10+', label: 'Anos de Experiência' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-primary text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="serviços" className="py-20" ref={servicesRef}>
        <div className="container mx-auto px-4">
          <motion.h2
            initial="hidden"
            animate={servicesInView ? "visible" : "hidden"}
            variants={fadeIn}
            className="text-3xl font-bold text-white text-center mb-12"
          >
            Nossos Serviços
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <BarChart3 size={40} className="text-primary" />,
                title: "Análise de KPIs",
                description: "Monitoramento e análise detalhada dos principais indicadores de desempenho."
              },
              {
                icon: <TrendingUp size={40} className="text-primary" />,
                title: "Otimização de Vendas",
                description: "Estratégias personalizadas para aumentar a eficiência da sua equipe de vendas."
              },
              {
                icon: <Target size={40} className="text-primary" />,
                title: "Consultoria Estratégica",
                description: "Orientação especializada para atingir suas metas comerciais."
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial="hidden"
                animate={servicesInView ? "visible" : "hidden"}
                variants={fadeIn}
                transition={{ delay: index * 0.2 }}
                className="bg-secondary p-8 rounded-lg hover:transform hover:-translate-y-2 transition duration-300"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-white text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="bg-secondary py-20" ref={aboutRef}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div
              initial="hidden"
              animate={aboutInView ? "visible" : "hidden"}
              variants={fadeIn}
              className="md:w-1/2"
            >
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
                alt="Team meeting"
                className="rounded-lg shadow-lg"
              />
            </motion.div>
            <motion.div
              initial="hidden"
              animate={aboutInView ? "visible" : "hidden"}
              variants={fadeIn}
              transition={{ delay: 0.2 }}
              className="md:w-1/2"
            >
              <h2 className="text-3xl font-bold text-white mb-6">Sobre a ROV Midia</h2>
              <p className="text-gray-300 mb-6">
                Somos especialistas em transformar dados em decisões estratégicas. Nossa equipe combina experiência em vendas
                com análise avançada de dados para entregar resultados excepcionais aos nossos clientes.
              </p>
              <div className="space-y-4">
                {[
                  { icon: <Users size={24} />, text: "+100 clientes satisfeitos" },
                  { icon: <CheckCircle size={24} />, text: "Metodologia comprovada" },
                  { icon: <Target size={24} />, text: "Resultados mensuráveis" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-center space-x-4 text-white"
                  >
                    <span className="text-primary">{item.icon}</span>
                    <span>{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-white text-center mb-12">Entre em Contato</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-secondary p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-6">Informações de Contato</h3>
                <div className="space-y-6">
                  {[
                    { icon: <Mail size={24} />, text: "contato@rovmidia.com" },
                    { icon: <Phone size={24} />, text: "+55 (11) 9999-9999" },
                    { icon: <MapPin size={24} />, text: "São Paulo, SP" }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center space-x-4 text-gray-300"
                    >
                      <span className="text-primary">{item.icon}</span>
                      <span>{item.text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="bg-secondary p-8 rounded-lg">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-white mb-2">Nome</label>
                    <input 
                      type="text" 
                      className="w-full p-3 rounded-lg bg-secondary-light text-white border border-gray-700 focus:border-primary focus:outline-none transition"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-white mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full p-3 rounded-lg bg-secondary-light text-white border border-gray-700 focus:border-primary focus:outline-none transition"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-white mb-2">Mensagem</label>
                    <textarea 
                      className="w-full p-3 rounded-lg bg-secondary-light text-white border border-gray-700 focus:border-primary focus:outline-none transition"
                      rows={4}
                      required
                    ></textarea>
                  </div>
                  <motion.button 
                    type="submit" 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-primary hover:bg-primary-dark text-white py-3 rounded-lg transition"
                  >
                    Enviar Mensagem
                  </motion.button>
                </form>

                <AnimatePresence>
                  {formStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="mt-4 p-4 bg-green-500/20 text-green-400 rounded-lg flex items-center space-x-2"
                    >
                      <CheckCircle size={20} />
                      <span>Mensagem enviada com sucesso!</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <LineChart size={24} className="text-primary" />
                <span className="text-white font-bold">ROV Midia</span>
              </div>
              <p className="text-gray-400">
                Transformando dados em resultados para impulsionar seu negócio.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Links Rápidos</h4>
              <div className="space-y-2">
                <a href="#services" className="block text-gray-400 hover:text-primary transition">Serviços</a>
                <a href="#about" className="block text-gray-400 hover:text-primary transition">Sobre</a>
                <a href="#contact" className="block text-gray-400 hover:text-primary transition">Contato</a>
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Newsletter</h4>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Seu email"
                  className="flex-1 p-2 rounded-l-lg bg-secondary-light text-white border border-gray-700 focus:border-primary focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-primary hover:bg-primary-dark text-white px-4 rounded-r-lg transition"
                >
                  Assinar
                </button>
              </form>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            © 2024 ROV Midia. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;