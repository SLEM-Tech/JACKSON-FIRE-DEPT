// components/FeatureBar.tsx
import React from "react";
import { Truck, Shield, Star, Settings } from "lucide-react";

const FeatureBar: React.FC = () => {
  const features = [
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Fast, free delivery",
      subtitle: "on all orders in the Mainland UK",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "5-year guarantee",
      subtitle: "on essential fire safety products",
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: "Rated 4.6 out of 5",
      subtitle: "based on 346 reviews",
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Quality equipment",
      subtitle: "for your peace of mind",
    },
  ];

  return (
    <div className="bg-gray-200 w-full py-3 max-md:hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-4">
              <div className="text-gray-600">{feature.icon}</div>
              <div>
                <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureBar;
