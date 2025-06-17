// components/Footer.tsx
import Link from "next/link";
import {
  FaFacebook,
  FaTiktok,
  FaInstagram,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Kabtex Auto LLC</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-blue-500" />
                <p>5150 Boyd Blvd, Rowlett, TX 75088</p>
              </div>
              <div className="flex items-center gap-3">
                <FaPhone className="text-blue-500" />
                <p>
                  <a
                    href="tel:+19453442567"
                    className="hover:text-white transition-colors"
                  >
                    (945) 344-2567
                  </a>
                </p>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-blue-500" />
                <p>
                  <a
                    href="mailto:kabtexauto@gmail.com"
                    className="hover:text-white transition-colors"
                  >
                    kabtexauto@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/inventory"
                  className="hover:text-white transition-colors"
                >
                  Browse Inventory
                </Link>
              </li>
              <li>
                <Link
                  href="/financing"
                  className="hover:text-white transition-colors"
                >
                  Financing
                </Link>
              </li>
              <li>
                <Link
                  href="/service"
                  className="hover:text-white transition-colors"
                >
                  Service Center
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">
              Business Hours
            </h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span>Monday - Saturday:</span>
                <span>10:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday:</span>
                <span>Closed</span>
              </li>
            </ul>
          </div>

          {/* Social Media & Newsletter */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">
              Connect With Us
            </h3>
            {/* Social Media Links */}
            <div className="flex gap-4 mb-6">
              <a
                href="https://facebook.com/kabtex.autoo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-blue-500 transition-colors"
              >
                <FaFacebook />
              </a>
              <a
                href="https://tiktok.com/@kabtex.auto.sales"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-pink-500 transition-colors"
              >
                <FaTiktok />
              </a>
              <a
                href="https://instagram.com/yourdealership"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-purple-500 transition-colors"
              >
                <FaInstagram />
              </a>
            </div>

            {/* Newsletter Signup */}
            <div>
              <h4 className="text-white font-medium mb-2">
                Subscribe to Our Newsletter
              </h4>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-3 py-2 rounded-md flex-1 bg-gray-800 border border-gray-700 
                           focus:outline-none focus:border-blue-500"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md 
                           hover:bg-blue-700 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-950 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p>
              © {new Date().getFullYear()} Kabtex Auto LLC. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link
                href="/privacy-policy"
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
