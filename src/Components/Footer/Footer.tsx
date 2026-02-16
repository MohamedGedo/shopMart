import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* ShopMart Information Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-black flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="text-xl font-bold text-black">ShopMart</span>
            </div>
            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
              Your one-stop destination for the latest technology, fashion, and
              lifestyle products. Quality guaranteed with fast shipping and
              excellent customer service.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-gray-600 text-sm">
                <MapPin className="w-4 h-4 mr-2" />
                <span>123 Shop Street, Octoper City, DC 12345</span>
              </div>
              <div className="flex items-center text-gray-600 text-sm">
                <Phone className="w-4 h-4 mr-2" />
                <span>(+20) 01093333333</span>
              </div>
              <div className="flex items-center text-gray-600 text-sm">
                <Mail className="w-4 h-4 mr-2" />
                <span>support@shopmart.com</span>
              </div>
            </div>
          </div>

          {/* Shop Column */}
          <div>
            <h3 className="text-black font-bold text-sm mb-4">SHOP</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/categories"
                  className="text-gray-600 text-sm hover:text-black transition-colors"
                >
                  Electronics
                </a>
              </li>
              <li>
                <a
                  href="/categories"
                  className="text-gray-600 text-sm hover:text-black transition-colors"
                >
                  Fashion
                </a>
              </li>
              <li>
                <a
                  href="/categories"
                  className="text-gray-600 text-sm hover:text-black transition-colors"
                >
                  Home & Garden
                </a>
              </li>
              <li>
                <a
                  href="/categories"
                  className="text-gray-600 text-sm hover:text-black transition-colors"
                >
                  Sports
                </a>
              </li>
              <li>
                <a
                  href="/categories"
                  className="text-gray-600 text-sm hover:text-black transition-colors"
                >
                  Deals
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Service Column */}
          <div>
            <h3 className="text-black font-bold text-sm mb-4">
              CUSTOMER SERVICE
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/contact"
                  className="text-gray-600 text-sm hover:text-black transition-colors"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="/help"
                  className="text-gray-600 text-sm hover:text-black transition-colors"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="/track-order"
                  className="text-gray-600 text-sm hover:text-black transition-colors"
                >
                  Track Your Order
                </a>
              </li>
              <li>
                <a
                  href="/returns"
                  className="text-gray-600 text-sm hover:text-black transition-colors"
                >
                  Returns & Exchanges
                </a>
              </li>
              <li>
                <a
                  href="/size-guide"
                  className="text-gray-600 text-sm hover:text-black transition-colors"
                >
                  Size Guide
                </a>
              </li>
            </ul>
          </div>

          {/* About Column */}
          <div>
            <h3 className="text-black font-bold text-sm mb-4">ABOUT</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/about"
                  className="text-gray-600 text-sm hover:text-black transition-colors"
                >
                  About shopmart
                </a>
              </li>
              <li>
                <a
                  href="/careers"
                  className="text-gray-600 text-sm hover:text-black transition-colors"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="/press"
                  className="text-gray-600 text-sm hover:text-black transition-colors"
                >
                  Press
                </a>
              </li>
              <li>
                <a
                  href="/investor-relations"
                  className="text-gray-600 text-sm hover:text-black transition-colors"
                >
                  Investor Relations
                </a>
              </li>
              <li>
                <a
                  href="/sustainability"
                  className="text-gray-600 text-sm hover:text-black transition-colors"
                >
                  Sustainability
                </a>
              </li>
            </ul>
          </div>
          {/* POLICES */}
          <div>
            <h3 className="text-black font-bold text-sm mb-4">POLICIES</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/privacy-policy"
                  className="text-gray-600 text-sm hover:text-black transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/teams-of-services"
                  className="text-gray-600 text-sm hover:text-black transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="/cookie-policy"
                  className="text-gray-600 text-sm hover:text-black transition-colors"
                >
                  Cookie Policy
                </a>
              </li>
              <li>
                <a
                  href="/shipping-policy"
                  className="text-gray-600 text-sm hover:text-black transition-colors"
                >
                  Shipping Policy
                </a>
              </li>
              <li>
                <a
                  href="/refund-policy"
                  className="text-gray-600 text-sm hover:text-black transition-colors"
                >
                  Refund Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
