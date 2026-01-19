"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ConceptsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Extract concept slug from URL: /concepts/[slug]/...
  const parts = pathname.split("/");
  const conceptSlug = parts[2]; // greek | kitchen-bar | catering

  const basePath = conceptSlug
    ? `/concepts/${conceptSlug}`
    : "/concepts";

  return (
    <>
      {/* Concept Navigation */}
      <nav className="sticky top-0 z-40 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <p className="font-semibold text-gray-900">
            {conceptSlug
              ? conceptSlug.replace("-", " ").toUpperCase()
              : "NOTOS CONCEPTS"}
          </p>

          <div className="flex gap-6 text-sm font-medium">
            <Link href={basePath} className="hover:text-[#d3960c]">
              Home
            </Link>
            <Link href="/concepts" className="hover:text-[#d3960c]">
              Our Concepts
            </Link>

            {conceptSlug && (
              <>
                <Link
                  href={`${basePath}/menu`}
                  className="hover:text-[#d3960c]"
                >
                  Menu
                </Link>
                <Link
                  href={`${basePath}/gallery`}
                  className="hover:text-[#d3960c]"
                >
                  Gallery
                </Link>
                <Link
                  href={`${basePath}/contact`}
                  className="hover:text-[#d3960c]"
                >
                  Contact
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <main>{children}</main>
    </>
  );
}
