import React from 'react'
import { products } from '@/data/products'
import { AquariumAssetImage, ProductAssetImage } from '@/components/AssetImage'
import { TimelapseAssetVideo } from '@/components/AssetVideo'
import { Camera, Instagram, Play, Calendar, MapPin, Eye, Heart, Share2, ChevronLeft, ChevronRight, Award, Users, Clock, ArrowRight } from 'lucide-react'

export function PortfolioDesign() {
  const [selectedGalleryImage, setSelectedGalleryImage] = React.useState(0)
  const [selectedProject, setSelectedProject] = React.useState(0)
  
  const featuredProducts = products.filter(p => p.featured)
  
  // Portfolio projects with before/after showcases
  const portfolioProjects = [
    {
      id: 'nature-paradise',
      title: 'Nature Paradise Aquascape',
      description: 'A stunning 120cm nature aquarium featuring dramatic stone formations and lush plant carpets.',
      category: 'Nature Style',
      size: '120cm × 45cm × 45cm',
      completion: '3 weeks',
      difficulty: 'Advanced',
      beforeImage: '/images/projects/nature-before.jpg',
      afterImage: '/images/projects/nature-after.jpg',
      galleryImages: [
        '/images/projects/nature-1.jpg',
        '/images/projects/nature-2.jpg',
        '/images/projects/nature-3.jpg',
        '/images/projects/nature-4.jpg'
      ],
      materials: featuredProducts.slice(0, 4),
      likes: 342,
      views: 2156
    },
    {
      id: 'dutch-masterpiece',
      title: 'Dutch Style Masterpiece',
      description: 'Classic Dutch aquarium with terraced plant arrangements and vibrant color contrasts.',
      category: 'Dutch Style',
      size: '90cm × 45cm × 45cm',
      completion: '4 weeks',
      difficulty: 'Expert',
      beforeImage: '/images/projects/dutch-before.jpg',
      afterImage: '/images/projects/dutch-after.jpg',
      galleryImages: [
        '/images/projects/dutch-1.jpg',
        '/images/projects/dutch-2.jpg',
        '/images/projects/dutch-3.jpg'
      ],
      materials: featuredProducts.slice(1, 5),
      likes: 298,
      views: 1834
    },
    {
      id: 'iwagumi-zen',
      title: 'Iwagumi Zen Garden',
      description: 'Minimalist Iwagumi layout emphasizing stone placement and open swimming space.',
      category: 'Iwagumi Style',
      size: '60cm × 30cm × 36cm',
      completion: '2 weeks',
      difficulty: 'Intermediate',
      beforeImage: '/images/projects/iwagumi-before.jpg',
      afterImage: '/images/projects/iwagumi-after.jpg',
      galleryImages: [
        '/images/projects/iwagumi-1.jpg',
        '/images/projects/iwagumi-2.jpg'
      ],
      materials: featuredProducts.slice(2, 4),
      likes: 445,
      views: 3021
    }
  ]
  
  // Blog posts for aquascaping tips
  const blogPosts = [
    {
      id: 'lighting-guide',
      title: 'Complete Guide to Aquarium Lighting',
      excerpt: 'Understanding PAR values, spectrum, and photoperiods for optimal plant growth.',
      readTime: '8 min read',
      publishDate: 'March 15, 2024',
      category: 'Technical',
      image: '/images/blog/lighting.jpg'
    },
    {
      id: 'plant-trimming',
      title: 'Advanced Plant Trimming Techniques',
      excerpt: 'Professional methods for maintaining healthy plant growth and stunning layouts.',
      readTime: '6 min read',
      publishDate: 'March 10, 2024',
      category: 'Maintenance',
      image: '/images/blog/trimming.jpg'
    },
    {
      id: 'hardscape-composition',
      title: 'Mastering Hardscape Composition',
      excerpt: 'Creating natural-looking stone and wood arrangements using the golden ratio.',
      readTime: '10 min read',
      publishDate: 'March 5, 2024',
      category: 'Design',
      image: '/images/blog/hardscape.jpg'
    }
  ]
  
  const currentProject = portfolioProjects[selectedProject]
  
  return (
    <div className="pt-20 bg-white min-h-screen">
      {/* Hero Section - Photography Focus */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-cyan-50">
        <div className="container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center bg-purple-100 border border-purple-200 rounded-full px-4 py-2 mb-6">
                <Camera className="w-4 h-4 text-purple-600 mr-2" />
                <span className="text-purple-700 text-sm font-medium">Award-Winning Portfolio</span>
              </div>
              <h1 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-gray-900 mb-4 sm:mb-6 leading-tight">
                Aquascaping
                <span className="text-transparent bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text block">
                  Artistry
                </span>
                Captured
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                Every aquascape tells a story. Through meticulous documentation and artistic photography, 
                I showcase the journey from concept to completion, sharing techniques and inspiration 
                with the global aquascaping community.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-purple-800 transition-all transform hover:scale-105 shadow-lg text-sm sm:text-base">
                  <Camera className="w-4 h-4 sm:w-5 sm:h-5 mr-2 inline" />
                  View Portfolio
                </button>
                <button className="border-2 border-purple-200 text-purple-700 px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold hover:bg-purple-50 transition-colors text-sm sm:text-base">
                  <Instagram className="w-4 h-4 sm:w-5 sm:h-5 mr-2 inline" />
                  Follow Journey
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden">
                <TimelapseAssetVideo 
                  themeId="portfolio"
                  className="w-full h-full"
                />
                <div className="absolute inset-6 bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl flex items-center justify-center">
                  <Play className="w-16 h-16 text-white drop-shadow-lg" />
                </div>
                <span className="absolute bottom-4 left-6 text-white font-medium drop-shadow-lg">Featured Time-lapse</span>
              </div>
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-4 shadow-xl">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-4 shadow-lg border border-gray-100">
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 bg-purple-500 rounded-full border-2 border-white"></div>
                    <div className="w-8 h-8 bg-cyan-500 rounded-full border-2 border-white"></div>
                    <div className="w-8 h-8 bg-pink-500 rounded-full border-2 border-white"></div>
                  </div>
                  <span className="text-sm font-medium text-gray-700">2.3k followers</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl text-gray-900 mb-4">
              Portfolio Showcase
            </h2>
            <p className="text-xl text-gray-600">
              Discover the artistry behind each aquascape project
            </p>
          </div>
          
          {/* Project Navigation */}
          <div className="flex justify-center mb-12">
            <div className="flex items-center space-x-2 bg-white rounded-full p-2 shadow-sm">
              {portfolioProjects.map((project, index) => (
                <button
                  key={project.id}
                  onClick={() => setSelectedProject(index)}
                  className={`px-6 py-3 rounded-full font-medium transition-all ${
                    selectedProject === index
                      ? 'bg-purple-600 text-white shadow-md'
                      : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50'
                  }`}
                >
                  {project.category}
                </button>
              ))}
            </div>
          </div>
          
          {/* Featured Project */}
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Project Images */}
                <div className="relative">
                  <div className="aspect-video relative overflow-hidden">
                    <AquariumAssetImage 
                      themeId="portfolio"
                      className="w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-cyan-900/30 flex items-center justify-center">
                      <span className="text-white font-medium drop-shadow-lg">Before/After Showcase</span>
                    </div>
                  </div>
                  <div className="absolute inset-4 flex justify-between items-end">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
                      <span className="text-sm font-medium text-gray-700">{currentProject.category}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1 flex items-center">
                        <Eye className="w-4 h-4 text-gray-600 mr-1" />
                        <span className="text-sm font-medium text-gray-700">{currentProject.views}</span>
                      </div>
                      <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1 flex items-center">
                        <Heart className="w-4 h-4 text-red-500 mr-1" />
                        <span className="text-sm font-medium text-gray-700">{currentProject.likes}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Project Details */}
                <div className="p-8">
                  <h3 className="font-display font-bold text-2xl text-gray-900 mb-4">
                    {currentProject.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {currentProject.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center">
                      <MapPin className="w-5 h-5 text-purple-500 mr-2" />
                      <div>
                        <div className="text-sm text-gray-500">Tank Size</div>
                        <div className="font-semibold text-gray-900">{currentProject.size}</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 text-purple-500 mr-2" />
                      <div>
                        <div className="text-sm text-gray-500">Completion Time</div>
                        <div className="font-semibold text-gray-900">{currentProject.completion}</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Materials Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {currentProject.materials.map((material) => (
                        <span
                          key={material.id}
                          className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {material.category}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <button className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                      View Process
                    </button>
                    <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                      <Share2 className="w-4 h-4 mr-2 inline" />
                      Share
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Documentation */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl text-gray-900 mb-4">
              Behind the Scenes
            </h2>
            <p className="text-xl text-gray-600">
              Step-by-step documentation of the aquascaping process
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-2xl">1</span>
                </div>
                <h3 className="font-semibold text-xl text-gray-900 mb-4">Planning & Design</h3>
                <p className="text-gray-600">
                  Conceptual sketches, material selection, and layout planning with golden ratio principles.
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-2xl">2</span>
                </div>
                <h3 className="font-semibold text-xl text-gray-900 mb-4">Hardscape Creation</h3>
                <p className="text-gray-600">
                  Stone and wood placement, substrate layering, and technical equipment installation.
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-2xl">3</span>
                </div>
                <h3 className="font-semibold text-xl text-gray-900 mb-4">Planting & Maturation</h3>
                <p className="text-gray-600">
                  Careful plant placement, cycling process, and growth monitoring over several weeks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Integration */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl text-gray-900 mb-4">
              Aquascaping Insights
            </h2>
            <p className="text-xl text-gray-600">
              Tips, techniques, and inspiration from the aquascaping journey
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                <div className="aspect-video relative overflow-hidden">
                  <AquariumAssetImage 
                    themeId="portfolio"
                    className="w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 to-cyan-900/40 flex items-center justify-center">
                    <span className="text-white font-medium drop-shadow-lg">{post.category}</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-purple-600">{post.category}</span>
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                  </div>
                  <h3 className="font-semibold text-xl text-gray-900 mb-3 hover:text-purple-600 transition-colors cursor-pointer">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{post.publishDate}</span>
                    <button className="text-purple-600 font-medium hover:text-purple-700 transition-colors flex items-center">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl text-gray-900 mb-4">
              Recommended Products
            </h2>
            <p className="text-xl text-gray-600">
              Hand-picked materials for exceptional aquascapes
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {featuredProducts.map((product) => (
              <div key={product.id} className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg hover:border-purple-200 transition-all">
                <div className="aspect-square relative overflow-hidden">
                  <ProductAssetImage 
                    themeId="portfolio"
                    className="w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-cyan-900/30 flex items-center justify-center">
                    <span className="text-white font-medium drop-shadow-lg">{product.category.toUpperCase()}</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg text-gray-900 mb-2 line-clamp-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-xl text-purple-600">
                      €{product.price}
                    </span>
                    <button className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Branding & Contact */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-cyan-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                <Camera className="w-12 h-12 text-purple-600" />
              </div>
              <h2 className="font-display font-bold text-4xl text-white mb-6">
                Let's Create Something Beautiful Together
              </h2>
              <p className="text-xl text-purple-100 mb-8">
                Whether you're looking for a custom aquascape, photography services, 
                or consultation, I'm here to bring your vision to life.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-xl text-white mb-2">Custom Aquascapes</h3>
                <p className="text-purple-100">Personalized designs for your space</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Camera className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-xl text-white mb-2">Photography Services</h3>
                <p className="text-purple-100">Professional aquarium photography</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-xl text-white mb-2">Consultation</h3>
                <p className="text-purple-100">Expert guidance and training</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Start Your Project
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors">
                View Instagram
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}