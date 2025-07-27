import React from 'react'
import { products } from '@/data/products'
import { Building2, Globe, Handshake, Award, TrendingUp, Shield, Users, ChevronRight, Mail, Phone, MapPin, FileText, Calendar, Star, Euro, Package, Truck } from 'lucide-react'

export function BusinessDesign() {
  const [selectedLanguage, setSelectedLanguage] = React.useState('en')
  const [contactType, setContactType] = React.useState('partnership')
  
  const featuredProducts = products.filter(p => p.featured)
  
  // Partnership tiers for Hungarian businesses
  const partnershipTiers = [
    {
      id: 'retail',
      name: 'Retail Partner',
      nameHu: 'Kiskereskedelmi Partner',
      description: 'Perfect for aquarium shops and pet stores',
      descriptionHu: 'Ideális akvárium üzletek és állatkereskedések számára',
      features: [
        'Wholesale pricing',
        'Product training',
        'Marketing support',
        'Quarterly deliveries'
      ],
      featuresHu: [
        'Nagykereskedelmi árak',
        'Termékképzés',
        'Marketing támogatás',
        'Negyedéves szállítások'
      ],
      discount: '20-30%',
      minOrder: '€500',
      support: 'Email & Phone'
    },
    {
      id: 'professional',
      name: 'Professional Partner',
      nameHu: 'Professzionális Partner',
      description: 'For aquascaping professionals and consultants',
      descriptionHu: 'Aquascaping szakemberek és tanácsadók részére',
      features: [
        'Premium pricing',
        'Priority access to new products',
        'Technical consultation',
        'Flexible payment terms'
      ],
      featuresHu: [
        'Prémium árazás',
        'Elsőbbségi hozzáférés új termékekhez',
        'Műszaki konzultáció',
        'Rugalmas fizetési feltételek'
      ],
      discount: '35-45%',
      minOrder: '€1000',
      support: 'Dedicated Account Manager'
    },
    {
      id: 'enterprise',
      name: 'Enterprise Partner',
      nameHu: 'Vállalati Partner',
      description: 'Large-scale aquarium installations and chains',
      descriptionHu: 'Nagyméretű akvárium telepítések és láncok',
      features: [
        'Custom pricing',
        'White-label options',
        'Installation support',
        'Volume guarantees'
      ],
      featuresHu: [
        'Egyedi árazás',
        'Saját márka opciók',
        'Telepítési támogatás',
        'Mennyiségi garanciák'
      ],
      discount: '50%+',
      minOrder: '€5000',
      support: '24/7 Dedicated Support'
    }
  ]
  
  // Hungarian market statistics
  const marketStats = [
    { number: '150+', label: 'Hungarian Partners', labelHu: 'Magyar Partnerek' },
    { number: '€2.5M', label: 'Annual Volume', labelHu: 'Éves Forgalom' },
    { number: '95%', label: 'Partner Satisfaction', labelHu: 'Partner Elégedettség' },
    { number: '5 Years', label: 'Market Experience', labelHu: 'Piaci Tapasztalat' }
  ]
  
  const getText = (en: string, hu: string) => selectedLanguage === 'hu' ? hu : en
  
  return (
    <div className="pt-20 bg-gray-50 min-h-screen">
      {/* Language Selector */}
      <div className="fixed top-24 right-4 z-40 bg-white rounded-lg shadow-lg border border-gray-200">
        <div className="flex">
          <button
            onClick={() => setSelectedLanguage('en')}
            className={`px-4 py-2 text-sm font-medium rounded-l-lg transition-colors ${
              selectedLanguage === 'en'
                ? 'bg-red-600 text-white'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            EN
          </button>
          <button
            onClick={() => setSelectedLanguage('hu')}
            className={`px-4 py-2 text-sm font-medium rounded-r-lg transition-colors ${
              selectedLanguage === 'hu'
                ? 'bg-green-600 text-white'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            HU
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-red-50 via-white to-green-50">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-red-100 border border-red-200 rounded-full px-4 py-2 mb-6">
                <Handshake className="w-4 h-4 text-red-600 mr-2" />
                <span className="text-red-700 text-sm font-medium">
                  {getText('Trusted Business Partner', 'Megbízható Üzleti Partner')}
                </span>
              </div>
              <h1 className="font-display font-bold text-5xl lg:text-6xl text-gray-900 mb-6">
                {getText('Premium Aquascaping', 'Prémium Aquascaping')}
                <span className="text-transparent bg-gradient-to-r from-red-600 to-green-600 bg-clip-text block">
                  {getText('for Hungarian', 'Magyar')}
                </span>
                {getText('Businesses', 'Vállalkozásoknak')}
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {getText(
                  'Established partnerships with leading Hungarian aquarium retailers and professionals. Offering competitive wholesale pricing, comprehensive support, and premium aquascaping products.',
                  'Megállapított partnerségek vezető magyar akvárium kiskereskedőkkel és szakemberekkel. Versenyképes nagykereskedelmi árazást, átfogó támogatást és prémium aquascaping termékeket kínálunk.'
                )}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-700 hover:to-red-800 transition-all transform hover:scale-105 shadow-lg">
                  <Building2 className="w-5 h-5 mr-2 inline" />
                  {getText('Become a Partner', 'Legyen Partner')}
                </button>
                <button className="border-2 border-green-600 text-green-700 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors">
                  <FileText className="w-5 h-5 mr-2 inline" />
                  {getText('Download Catalog', 'Katalógus Letöltése')}
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-red-100 to-green-100 rounded-2xl overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-red-200/50 to-green-200/50 flex items-center justify-center">
                  <span className="text-gray-600 text-lg font-medium">
                    {getText('Hungarian Partnership Network', 'Magyar Partnerhálózat')}
                  </span>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-red-500 to-green-500 rounded-2xl p-4 shadow-xl">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-4 shadow-lg border border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-700">
                    {getText('Active in Budapest, Debrecen, Szeged', 'Aktív Budapesten, Debrecenben, Szegeden')}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Statistics */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {marketStats.map((stat, index) => (
              <div key={index} className="group">
                <div className="text-4xl font-bold text-red-600 mb-2 group-hover:text-green-600 transition-colors">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {getText(stat.label, stat.labelHu)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Tiers */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl text-gray-900 mb-4">
              {getText('Partnership Programs', 'Partneri Programok')}
            </h2>
            <p className="text-xl text-gray-600">
              {getText('Tailored solutions for every business size', 'Személyre szabott megoldások minden vállalkozás mérethez')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {partnershipTiers.map((tier, index) => (
              <div key={tier.id} className={`bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all ${
                index === 1 ? 'ring-2 ring-red-500 ring-opacity-50' : ''
              }`}>
                {index === 1 && (
                  <div className="bg-gradient-to-r from-red-500 to-green-500 text-white text-center py-2 font-semibold text-sm">
                    {getText('MOST POPULAR', 'LEGNÉPSZERŰBB')}
                  </div>
                )}
                <div className="p-8">
                  <div className="text-center mb-6">
                    <h3 className="font-display font-bold text-2xl text-gray-900 mb-2">
                      {getText(tier.name, tier.nameHu)}
                    </h3>
                    <p className="text-gray-600">
                      {getText(tier.description, tier.descriptionHu)}
                    </p>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">{getText('Discount', 'Kedvezmény')}</span>
                      <span className="font-semibold text-red-600">{tier.discount}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">{getText('Min. Order', 'Min. Rendelés')}</span>
                      <span className="font-semibold text-gray-900">{tier.minOrder}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">{getText('Support', 'Támogatás')}</span>
                      <span className="font-semibold text-gray-900 text-sm">{tier.support}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-8">
                    <h4 className="font-semibold text-gray-900">{getText('Features', 'Jellemzők')}</h4>
                    {(selectedLanguage === 'hu' ? tier.featuresHu : tier.features).map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                        <span className="text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button className={`w-full py-3 rounded-lg font-semibold transition-all ${
                    index === 1
                      ? 'bg-gradient-to-r from-red-500 to-green-500 text-white hover:from-red-600 hover:to-green-600'
                      : 'border-2 border-red-500 text-red-600 hover:bg-red-50'
                  }`}>
                    {getText('Get Started', 'Kezdő Lépések')}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl text-gray-900 mb-4">
              {getText('Professional Services', 'Szakmai Szolgáltatások')}
            </h2>
            <p className="text-xl text-gray-600">
              {getText('Comprehensive support for your aquascaping business', 'Átfogó támogatás az aquascaping vállalkozásához')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-red-200 transition-colors">
                <Award className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="font-semibold text-xl text-gray-900 mb-4">
                {getText('Training Programs', 'Képzési Programok')}
              </h3>
              <p className="text-gray-600">
                {getText('Professional aquascaping workshops and certification', 'Professzionális aquascaping workshopok és tanúsítványok')}
              </p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors">
                <TrendingUp className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-xl text-gray-900 mb-4">
                {getText('Business Consulting', 'Üzleti Tanácsadás')}
              </h3>
              <p className="text-gray-600">
                {getText('Market analysis and business strategy development', 'Piacelemzés és üzleti stratégia fejlesztés')}
              </p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-red-200 transition-colors">
                <Package className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="font-semibold text-xl text-gray-900 mb-4">
                {getText('Custom Solutions', 'Egyedi Megoldások')}
              </h3>
              <p className="text-gray-600">
                {getText('Tailored product packages and installation services', 'Személyre szabott termékcsomagok és telepítési szolgáltatások')}
              </p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-xl text-gray-900 mb-4">
                {getText('Quality Assurance', 'Minőségbiztosítás')}
              </h3>
              <p className="text-gray-600">
                {getText('Premium product guarantees and return policies', 'Prémium termékgaranciák és visszaküldési szabályzatok')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products for Business */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl text-gray-900 mb-4">
              {getText('Business-Grade Products', 'Üzleti Szintű Termékek')}
            </h2>
            <p className="text-xl text-gray-600">
              {getText('Professional-grade aquascaping supplies with wholesale pricing', 'Professzionális szintű aquascaping kellékek nagykereskedelmi árazással')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden border border-gray-200">
                <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative">
                  <span className="text-gray-500 font-medium">{product.category.toUpperCase()}</span>
                  <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    B2B
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg text-gray-900 mb-2 line-clamp-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{getText('Retail', 'Kisker.')}</span>
                      <span className="font-semibold text-gray-900">€{product.price}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{getText('Wholesale', 'Nagyker.')}</span>
                      <span className="font-bold text-red-600">€{(product.price * 0.7).toFixed(2)}</span>
                    </div>
                  </div>
                  <button className="w-full bg-gradient-to-r from-red-500 to-green-500 text-white py-3 rounded-lg font-semibold hover:from-red-600 hover:to-green-600 transition-all">
                    {getText('Request Quote', 'Ajánlatkérés')}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* B2B Contact Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display font-bold text-4xl text-gray-900 mb-4">
                {getText('Start Your Partnership', 'Indítsa el a Partnerséget')}
              </h2>
              <p className="text-xl text-gray-600">
                {getText('Get in touch with our Hungarian business development team', 'Vegye fel a kapcsolatot magyar üzletfejlesztési csapatunkkal')}
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="font-semibold text-xl text-gray-900 mb-6">
                  {getText('Contact Information', 'Elérhetőségi Adatok')}
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Mail className="w-6 h-6 text-red-500 mr-4 mt-1" />
                    <div>
                      <div className="font-semibold text-gray-900">
                        {getText('Business Inquiries', 'Üzleti Megkeresések')}
                      </div>
                      <div className="text-gray-600">business@aquascene.com</div>
                      <div className="text-gray-600">hungarian-partners@aquascene.com</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="w-6 h-6 text-red-500 mr-4 mt-1" />
                    <div>
                      <div className="font-semibold text-gray-900">
                        {getText('Direct Line', 'Közvetlen Vonal')}
                      </div>
                      <div className="text-gray-600">+36 XX XXX XXXX</div>
                      <div className="text-gray-600">+359 XX XXX XXXX</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 text-red-500 mr-4 mt-1" />
                    <div>
                      <div className="font-semibold text-gray-900">
                        {getText('Regional Office', 'Regionális Iroda')}
                      </div>
                      <div className="text-gray-600">Budapest, Hungary</div>
                      <div className="text-gray-600">Sofia, Bulgaria</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Calendar className="w-6 h-6 text-red-500 mr-4 mt-1" />
                    <div>
                      <div className="font-semibold text-gray-900">
                        {getText('Business Hours', 'Nyitvatartás')}
                      </div>
                      <div className="text-gray-600">
                        {getText('Monday - Friday: 8:00 - 18:00 CET', 'Hétfő - Péntek: 8:00 - 18:00 CET')}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder={getText('Company Name', 'Cégnév')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                    <input
                      type="text"
                      placeholder={getText('Contact Person', 'Kapcsolattartó')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <input
                      type="email"
                      placeholder={getText('Business Email', 'Üzleti Email')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                    <input
                      type="tel"
                      placeholder={getText('Phone Number', 'Telefonszám')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>
                  <select
                    value={contactType}
                    onChange={(e) => setContactType(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  >
                    <option value="partnership">
                      {getText('Partnership Inquiry', 'Partneri Megkeresés')}
                    </option>
                    <option value="wholesale">
                      {getText('Wholesale Pricing', 'Nagykereskedelmi Árazás')}
                    </option>
                    <option value="consulting">
                      {getText('Business Consulting', 'Üzleti Tanácsadás')}
                    </option>
                    <option value="training">
                      {getText('Training Programs', 'Képzési Programok')}
                    </option>
                  </select>
                  <textarea
                    placeholder={getText('Tell us about your business and requirements...', 'Meséljen a vállalkozásáról és igényeiről...')}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="newsletter"
                      className="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
                    />
                    <label htmlFor="newsletter" className="ml-2 text-sm text-gray-600">
                      {getText(
                        'Subscribe to our Hungarian business newsletter',
                        'Feliratkozás a magyar üzleti hírlevelünkre'
                      )}
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-red-600 to-green-600 text-white py-4 rounded-lg font-semibold hover:from-red-700 hover:to-green-700 transition-all transform hover:scale-105 shadow-lg"
                  >
                    {getText('Submit Partnership Request', 'Partneri Kérelem Küldése')}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-green-600">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl text-white mb-4">
              {getText('Success Stories', 'Sikertörténetek')}
            </h2>
            <p className="text-xl text-red-100">
              {getText('Testimonials from our Hungarian business partners', 'Visszajelzések magyar üzleti partnereinkről')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-white">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-semibold">AquaWorld Budapest</div>
                  <div className="text-sm text-red-100">{getText('Retail Partner', 'Kiskereskedelmi Partner')}</div>
                </div>
              </div>
              <p className="text-red-100 mb-4">
                "{getText(
                  'Outstanding product quality and excellent support. Our customers love the Green Aqua products.',
                  'Kiváló termékminőség és kitűnő támogatás. Ügyfeleink imádják a Green Aqua termékeket.'
                )}"
              </p>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-white">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-semibold">Aquascaping Pro Debrecen</div>
                  <div className="text-sm text-red-100">{getText('Professional Partner', 'Professzionális Partner')}</div>
                </div>
              </div>
              <p className="text-red-100 mb-4">
                "{getText(
                  'The training programs helped us become certified aquascaping professionals. Excellent business model.',
                  'A képzési programok segítettek minket tanúsított aquascaping szakemberekké válni. Kiváló üzleti modell.'
                )}"
              </p>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-white">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-semibold">Natura Aqua Szeged</div>
                  <div className="text-sm text-red-100">{getText('Enterprise Partner', 'Vállalati Partner')}</div>
                </div>
              </div>
              <p className="text-red-100 mb-4">
                "{getText(
                  'Custom solutions for our large installations. Professional support and competitive pricing.',
                  'Egyedi megoldások nagyméretű telepítéseinkhez. Professzionális támogatás és versenyképes árazás.'
                )}"
              </p>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}