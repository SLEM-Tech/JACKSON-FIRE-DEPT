import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface CategoryCard {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  href: string;
  bgColor?: string;
}

interface ProtectionCard {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  href: string;
}

const ShopByCategory: React.FC = () => {
  const categoryCards: CategoryCard[] = [
    {
      id: 'fire-extinguishers',
      title: 'Fire Extinguishers',
      subtitle: 'View products',
      image: '/images/fire-extinguisher.jpg',
      href: '/category/fire-extinguishers',
      bgColor: 'from-red-900/80 to-black/60'
    },
    {
      id: 'fire-safety-accessories',
      title: 'Fire Safety Accessories',
      subtitle: 'View products',
      image: '/images/fire-accessories.jpg',
      href: '/category/fire-safety-accessories',
      bgColor: 'from-amber-900/80 to-black/60'
    },
    {
      id: 'fire-safety-signs',
      title: 'Fire Safety Signs',
      subtitle: 'View products',
      image: '/images/fire-signs.jpg',
      href: '/category/fire-safety-signs',
      bgColor: 'from-green-900/80 to-black/60'
    },
    {
      id: 'workplace-safety',
      title: 'Workplace Safety',
      subtitle: 'View products',
      image: '/images/workplace-safety.jpg',
      href: '/category/workplace-safety',
      bgColor: 'from-yellow-900/80 to-black/60'
    },
    {
      id: 'security',
      title: 'Security',
      subtitle: 'View products',
      image: '/images/security.jpg',
      href: '/category/security',
      bgColor: 'from-blue-900/80 to-black/60'
    }
  ];


  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      {/* Shop by Category Section */}
      <div className="mb-16">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Shop by category
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {categoryCards.map((category) => (
            <Link
              key={category.id}
              href={category.href}
              className="group relative h-80 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              {/* Background Image Placeholder */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.bgColor || 'from-gray-800/80 to-black/60'}`}>
                {/* You can replace this with actual images */}
                <div className="absolute inset-0 bg-gray-800 opacity-20"></div>
                
                {/* Category-specific background patterns */}
                {category.id === 'fire-extinguishers' && (
                  <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-4 left-4 w-8 h-12 bg-red-500 rounded-sm"></div>
                    <div className="absolute top-8 right-6 w-6 h-10 bg-red-600 rounded-sm"></div>
                    <div className="absolute bottom-8 left-8 w-4 h-8 bg-red-400 rounded-sm"></div>
                  </div>
                )}
                
                {category.id === 'fire-safety-accessories' && (
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-6 right-4 w-12 h-2 bg-yellow-400 rounded-full"></div>
                    <div className="absolute top-12 right-8 w-8 h-2 bg-orange-400 rounded-full"></div>
                    <div className="absolute bottom-12 left-6 w-10 h-2 bg-red-400 rounded-full"></div>
                  </div>
                )}
                
                {category.id === 'fire-safety-signs' && (
                  <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-8 left-6 w-12 h-8 bg-green-500 rounded border-2 border-white"></div>
                    <div className="absolute bottom-12 right-6 w-8 h-6 bg-blue-500 rounded border border-white"></div>
                  </div>
                )}
                
                {category.id === 'workplace-safety' && (
                  <div className="absolute inset-0 opacity-25">
                    <div className="absolute top-6 left-8 w-6 h-6 bg-yellow-400 rounded-full"></div>
                    <div className="absolute top-16 right-8 w-4 h-4 bg-orange-400 rounded-full"></div>
                    <div className="absolute bottom-16 left-12 w-8 h-8 bg-yellow-500 rounded-full"></div>
                  </div>
                )}
                
                {category.id === 'security' && (
                  <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-8 right-8 w-8 h-8 bg-blue-400 rounded-full border-2 border-white"></div>
                    <div className="absolute bottom-12 left-8 w-6 h-6 bg-indigo-400 rounded-full border border-white"></div>
                  </div>
                )}
              </div>
              
              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                <h3 className="text-xl font-bold mb-2 group-hover:text-gray-200 transition-colors">
                  {category.title}
                </h3>
                <p className="text-sm text-gray-300 group-hover:text-gray-100 transition-colors">
                  {category.subtitle}
                </p>
              </div>
              
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          ))}
        </div>
      </div>

      

      {/* Best Sellers Section */}
      <div className="relative rounded-lg overflow-hidden shadow-2xl">
        {/* Background with fire extinguisher image effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-red-900">
          {/* Fire extinguisher silhouette */}
          <div className="absolute left-8 top-1/2 transform -translate-y-1/2 w-32 h-48 opacity-30">
            <div className="w-full h-full bg-red-500 rounded-t-3xl relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-12 bg-red-600 rounded-t-lg"></div>
              <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-4 h-8 bg-red-400 rounded"></div>
              <div className="absolute bottom-8 left-2 right-2 h-16 bg-red-700 rounded"></div>
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-6 bg-red-800 rounded-full"></div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default ShopByCategory;
