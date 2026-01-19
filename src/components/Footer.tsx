import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-black text-white mb-4">
              Notos<span className="text-[#d3960c]">Life</span>
            </h3>
            <p className="text-sm leading-relaxed text-gray-400">
              Notos Life is a hospitality group offering distinct dining,
              social, and catering experiences — united by a commitment
              to quality, atmosphere, and refined living.
            </p>
          </div>

          {/* Concepts */}
          <div>
            <h4 className="text-white font-semibold mb-4">Our Concepts</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/concepts/greek"
                  className="hover:text-[#d3960c] transition"
                >
                  Notos Greek
                </Link>
              </li>
              <li>
                <Link
                  href="/concepts/kitchen-bar"
                  className="hover:text-[#d3960c] transition"
                >
                  Notos Kitchen Bar
                </Link>
              </li>
              <li>
                <Link
                  href="/concepts/catering"
                  className="hover:text-[#d3960c] transition"
                >
                  Notos Catering
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="hover:text-[#d3960c] transition"
                >
                  About Notos Life
                </Link>
              </li>
              <li>
                <Link
                  href="/concepts"
                  className="hover:text-[#d3960c] transition"
                >
                  Our Concepts
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-[#d3960c] transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Get in Touch</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>UAP Old Mutual Tower, Nairobi</li>
              <li>+254 700 123 456</li>
              <li>reservations@notoslife.com</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Notos Life. All rights reserved.</p>
          <p className="mt-4 md:mt-0">Crafted with care in Nairobi.</p>
        </div>
      </div>
    </footer>
  );
}
