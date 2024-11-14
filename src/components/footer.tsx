import Link from 'next/link'
import { Twitter, Instagram, Linkedin, Github } from 'lucide-react'

const Footer = () => {
  return (
    <footer>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 font-[customFont]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
            <ul className="space-y-5">
              {['Home', 'About', 'Services', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase()}`} className="hover:text-gray-900 transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
            <address className="not-italic text-sm space-y-5">
              <p>123 Web Dev Lane,Internet City, Digital State 12345</p>
              
              <p className="mt-2">Email: info@example.com</p>
              <p>Phone: (123) 456-7890</p>
            </address>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-4">Legal</h2>
            <ul className="space-y-5">
                <li>
                    <Link href="/privacy" className="hover:text-gray-900 transition-colors text-sm">
                        Privacy Policy
                    </Link>
                </li>
                <li>
                    <Link href="/terms" className="hover:text-gray-900 transition-colors text-sm">
                        Terms of Use
                    </Link>
                </li>
                <li>
                    <Link href="/cookies" className="hover:text-gray-900 transition-colors text-sm">
                        Brand Guidlines
                    </Link>
                </li>
            </ul>
          </div>

        </div>
        <div className="mt-8 border-t pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm">
            © {new Date().getFullYear()} ChatPdf. All rights reserved.
          </p>
          <nav className="mt-4 sm:mt-0">
          <div className="flex space-x-4">
              {[
                
                { icon: Twitter, label: 'Twitter' },
                { icon: Instagram, label: 'Instagram' },
                { icon: Linkedin, label: 'LinkedIn' },
                { icon: Github, label: 'GitHub' },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  className="hover:text-gray-500"
                  aria-label={label}
                >
                  <Icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default Footer