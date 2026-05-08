/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Bot, Code2, GraduationCap, LayoutDashboard, Workflow, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen flex flex-col font-body-md text-body-md overflow-x-hidden">
      <div className="aurora-bg"></div>

      {/* Navigation */}
      <header className="bg-surface/90 backdrop-blur-md text-primary font-body-md text-body-md md:font-mono-label md:text-mono-label fixed top-0 w-full z-50 border-b border-on-surface/10 shadow-sm transition-all duration-300">
        <div className="max-w-container_max mx-auto flex justify-between items-center px-gutter h-20">
          <div className="font-h3 text-h3 font-bold text-primary tracking-tight">Merqba Technologies</div>
          <nav className="hidden md:flex gap-md">
            <a className="text-on-surface-variant hover:text-primary transition-all duration-300" href="#servicios">Services</a>
            <a className="text-on-surface-variant hover:text-primary transition-all duration-300" href="#proceso">Process</a>
            <a className="text-on-surface-variant hover:text-primary transition-all duration-300" href="#casos">Cases</a>
            <a className="text-on-surface-variant hover:text-primary transition-all duration-300" href="#blog">Blog</a>
            <a className="text-on-surface-variant hover:text-primary transition-all duration-300" href="#contacto">Contact</a>
          </nav>
          <button className="hidden md:block btn-primary px-sm py-xs rounded font-mono-label text-mono-label active:scale-95 transition-transform">Consult Experts</button>
          
          {/* Mobile menu toggle */}
          <button 
            className="md:hidden text-on-surface-variant hover:text-primary transition-colors p-2 -mr-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Panel */}
        <div 
          className={`md:hidden absolute top-20 left-0 w-full bg-surface-container-high border-b border-on-surface/10 overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col px-gutter py-4 gap-4">
            <a className="text-on-surface hover:text-primary transition-colors font-medium" href="#servicios" onClick={() => setIsMenuOpen(false)}>Services</a>
            <a className="text-on-surface hover:text-primary transition-colors font-medium" href="#proceso" onClick={() => setIsMenuOpen(false)}>Process</a>
            <a className="text-on-surface hover:text-primary transition-colors font-medium" href="#casos" onClick={() => setIsMenuOpen(false)}>Cases</a>
            <a className="text-on-surface hover:text-primary transition-colors font-medium" href="#blog" onClick={() => setIsMenuOpen(false)}>Blog</a>
            <a className="text-on-surface hover:text-primary transition-colors font-medium" href="#contacto" onClick={() => setIsMenuOpen(false)}>Contact</a>
            <button className="btn-primary w-full py-sm mt-2 rounded font-mono-label text-mono-label active:scale-95 transition-transform">Consult Experts</button>
          </div>
        </div>
      </header>

      <main className="flex-grow pt-[80px]">
        {/* HERO SECTION */}
        <section className="relative min-h-[100svh] md:min-h-[819px] flex items-center justify-center py-xl px-gutter w-full">
          <div className="absolute inset-0 z-0 opacity-40">
            <img alt="Technical illustration" className="w-full h-full object-cover object-center" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzrhxqY7IcNjwqkUnOKxJUBvemGKlX9WX1hRriEBRRvPsKhu9qqaFgMJbFqu3seV2Mham2F4RqYN0UsP3TYpv3a0yUk9RolHBjm1NWi8Z19dVU31KnN0qpaCeKV6jzPGYbMloBb9Ncq2OB3nFBG5vZG8avf5TOyn-ZgOMWJL4hoV70bWHg7oDorAhvsRzX7yYrG-bW1jvoE38IOLKEL9MKyDdeFT_Bia5MQ6uNgJk8iYkhiqvPrdwYeIgfhk2YkgKcjQB-8no9yL7W" />
            <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
          </div>
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h1 className="font-h1 text-h1 text-on-surface mb-md">Transformamos tu empresa con IA, automatización y software a medida</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-lg">PYMES que adoptan nuestra tecnología reducen costos operativos un 40% en los primeros 90 días</p>
            <div className="flex flex-col sm:flex-row gap-sm justify-center mb-xl">
              <button className="btn-primary px-md py-sm rounded font-mono-label text-mono-label">Habla con un experto</button>
              <button className="btn-secondary px-md py-sm rounded font-mono-label text-mono-label">Agenda una demo gratuita</button>
            </div>
            <div className="flex flex-wrap justify-center gap-md items-center font-code-sm text-code-sm text-on-surface-variant opacity-90">
              <span className="flex items-center gap-xs"><span className="status-dot"></span> 50+ proyectos entregados</span>
              <span className="hidden sm:inline">|</span>
              <span className="flex items-center gap-xs"><span className="status-dot"></span> 4.9/5 satisfacción</span>
              <span className="hidden sm:inline">|</span>
              <span className="flex items-center gap-xs"><span className="status-dot"></span> 3 años de experiencia</span>
              <span className="hidden sm:inline">|</span>
              <span className="flex items-center gap-xs"><span className="status-dot"></span> 85% clientes recurrentes</span>
            </div>
          </div>
          {/* Decorative Visual Element - Simulated Particle Network */}
          <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(0, 180, 216, 0.3) 0%, transparent 60%)' }}></div>
        </section>

        {/* TRUST LOGOS */}
        <section className="py-lg px-gutter border-y border-outline-variant/30 bg-surface-container-lowest/80">
          <div className="max-w-container_max mx-auto flex flex-wrap justify-center items-center gap-md md:gap-xl opacity-70">
            <div className="font-h3 text-h3 text-on-surface-variant grayscale hover:grayscale-0 hover:text-on-surface transition-all duration-300">Fintech Regional</div>
            <div className="font-h3 text-h3 text-on-surface-variant grayscale hover:grayscale-0 hover:text-on-surface transition-all duration-300">LogiCorp</div>
            <div className="font-h3 text-h3 text-on-surface-variant grayscale hover:grayscale-0 hover:text-on-surface transition-all duration-300">RetailMax</div>
            <div className="font-h3 text-h3 text-on-surface-variant grayscale hover:grayscale-0 hover:text-on-surface transition-all duration-300">SaludPro</div>
            <div className="font-h3 text-h3 text-on-surface-variant grayscale hover:grayscale-0 hover:text-on-surface transition-all duration-300">TechStart</div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="relative py-xl px-gutter w-full overflow-hidden" id="servicios">
          <div className="absolute top-0 right-0 w-2/3 h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none"></div>
          <div className="relative z-10 max-w-container_max mx-auto">
            <div className="mb-lg text-center">
              <span className="tech-tag mb-sm inline-block">/// CAPABILITIES</span>
              <h2 className="font-h2 text-h2 text-on-surface">Soluciones de Alto Impacto</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md">
              {/* Service 1 */}
              <div className="glass-card rounded-lg p-md flex flex-col gap-sm transition-all duration-300 group">
                <div className="w-12 h-12 rounded bg-surface-container flex items-center justify-center border border-outline-variant group-hover:border-primary">
                  <Bot className="text-primary w-6 h-6" />
                </div>
                <h3 className="font-h3 text-h3 text-on-surface">IA Generativa</h3>
                <p className="font-body-md text-body-md text-on-surface-variant flex-grow">Chatbots entrenados en data privada para soporte o ventas 24/7.</p>
              </div>
              {/* Service 2 */}
              <div className="glass-card rounded-lg p-md flex flex-col gap-sm transition-all duration-300 group">
                <div className="w-12 h-12 rounded bg-surface-container flex items-center justify-center border border-outline-variant group-hover:border-primary">
                  <Workflow className="text-primary w-6 h-6" />
                </div>
                <h3 className="font-h3 text-h3 text-on-surface">Automatización n8n</h3>
                <p className="font-body-md text-body-md text-on-surface-variant flex-grow">Flujos de trabajo robustos y económicos. El reemplazo ideal para Zapier o Make.</p>
              </div>
              {/* Service 3 */}
              <div className="glass-card rounded-lg p-md flex flex-col gap-sm transition-all duration-300 group">
                <div className="w-12 h-12 rounded bg-surface-container flex items-center justify-center border border-outline-variant group-hover:border-primary">
                  <Code2 className="text-primary w-6 h-6" />
                </div>
                <h3 className="font-h3 text-h3 text-on-surface">Desarrollo Web</h3>
                <p className="font-body-md text-body-md text-on-surface-variant flex-grow">Plataformas de alto rendimiento construidas con Next.js y React.</p>
              </div>
              {/* Service 4 */}
              <div className="glass-card rounded-lg p-md flex flex-col gap-sm transition-all duration-300 group lg:col-span-2">
                <div className="w-12 h-12 rounded bg-surface-container flex items-center justify-center border border-outline-variant group-hover:border-primary">
                  <LayoutDashboard className="text-primary w-6 h-6" />
                </div>
                <h3 className="font-h3 text-h3 text-on-surface">Software a Medida</h3>
                <p className="font-body-md text-body-md text-on-surface-variant flex-grow">Sistemas internos (ERPs ligeros) diseñados exactamente para tus procesos operativos.</p>
              </div>
              {/* Service 5 */}
              <div className="glass-card rounded-lg p-md flex flex-col gap-sm transition-all duration-300 group">
                <div className="w-12 h-12 rounded bg-surface-container flex items-center justify-center border border-outline-variant group-hover:border-primary">
                  <GraduationCap className="text-primary w-6 h-6" />
                </div>
                <h3 className="font-h3 text-h3 text-on-surface">Capacitación</h3>
                <p className="font-body-md text-body-md text-on-surface-variant flex-grow">Transferencia de conocimiento para asegurar la autonomía de tu equipo.</p>
              </div>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="relative py-xl px-gutter bg-surface-container-low/80 border-y border-outline-variant/30 overflow-hidden" id="proceso">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none"></div>
          <div className="relative z-10 max-w-container_max mx-auto">
            <div className="mb-lg text-center">
              <span className="tech-tag mb-sm inline-block">/// METHODOLOGY</span>
              <h2 className="font-h2 text-h2 text-on-surface">Cómo Trabajamos</h2>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-xl md:gap-md relative mt-md">
              {/* Line connecting steps (visible on md+) */}
              <div className="hidden md:block absolute top-6 left-12 right-12 h-px bg-outline-variant z-0"></div>
              {/* Mobile connecting line */}
              <div className="md:hidden absolute top-0 bottom-0 left-1/2 w-px bg-outline-variant z-0 -translate-x-1/2"></div>
              
              {/* Step 1 */}
              <div className="relative z-10 flex flex-col items-center text-center w-full md:w-1/4">
                <div className="w-12 h-12 rounded-full bg-surface-container border border-primary flex items-center justify-center mb-sm shadow-[0_0_15px_rgba(0,180,216,0.3)] bg-surface text-primary">
                  <span className="font-mono-label text-mono-label">01</span>
                </div>
                <h4 className="font-h3 text-h3 text-on-surface mb-xs text-lg">Descubrimiento</h4>
                <p className="font-body-md text-body-md text-on-surface-variant text-sm">Análisis profundo de procesos y cuellos de botella.</p>
              </div>
              {/* Step 2 */}
              <div className="relative z-10 flex flex-col items-center text-center w-full md:w-1/4">
                <div className="w-12 h-12 rounded-full bg-surface-container border border-outline-variant flex items-center justify-center mb-sm bg-surface">
                  <span className="font-mono-label text-mono-label text-on-surface-variant">02</span>
                </div>
                <h4 className="font-h3 text-h3 text-on-surface mb-xs text-lg">Diseño</h4>
                <p className="font-body-md text-body-md text-on-surface-variant text-sm">Arquitectura técnica y diseño de interfaces.</p>
              </div>
              {/* Step 3 */}
              <div className="relative z-10 flex flex-col items-center text-center w-full md:w-1/4">
                <div className="w-12 h-12 rounded-full bg-surface-container border border-outline-variant flex items-center justify-center mb-sm bg-surface">
                  <span className="font-mono-label text-mono-label text-on-surface-variant">03</span>
                </div>
                <h4 className="font-h3 text-h3 text-on-surface mb-xs text-lg">Desarrollo</h4>
                <p className="font-body-md text-body-md text-on-surface-variant text-sm">Construcción iterativa con feedback constante.</p>
              </div>
              {/* Step 4 */}
              <div className="relative z-10 flex flex-col items-center text-center w-full md:w-1/4">
                <div className="w-12 h-12 rounded-full bg-surface-container border border-outline-variant flex items-center justify-center mb-sm bg-surface">
                  <span className="font-mono-label text-mono-label text-on-surface-variant">04</span>
                </div>
                <h4 className="font-h3 text-h3 text-on-surface mb-xs text-lg">Entrega</h4>
                <p className="font-body-md text-body-md text-on-surface-variant text-sm">Despliegue, capacitación y soporte continuo.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-surface-container-lowest text-primary font-body-md text-body-md w-full py-lg border-t border-outline-variant/30">
        <div className="max-w-container_max mx-auto px-gutter flex flex-col md:flex-row justify-between items-center gap-md text-center md:text-left">
          <div className="font-h3 text-h3 font-bold text-on-surface">Merqba Technologies</div>
          <div className="flex flex-wrap justify-center gap-md">
            <a className="text-on-surface-variant hover:text-primary transition-colors opacity-100 hover:opacity-100" href="#">Privacy Policy</a>
            <a className="text-on-surface-variant hover:text-primary transition-colors opacity-100 hover:opacity-100" href="#">Terms of Service</a>
            <a className="text-on-surface-variant hover:text-primary transition-colors opacity-100 hover:opacity-100" href="#">Security Architecture</a>
          </div>
          <div className="text-on-surface-variant text-sm text-center md:text-right">
            © 2024 Merqba Technologies. Engineered for Digital Transparency.
          </div>
        </div>
      </footer>
    </div>
  );
}
