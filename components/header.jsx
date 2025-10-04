"use client"

import { useState } from "react"
import Link from "next/link"
import { Search, Menu, X } from "lucide-react"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white border-b border-white-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-[#7c3aed] to-[#06b6d4] rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
            <span className="text-xl font-bold text-white-900">EduLearn</span>
          </Link>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white-400" />
              <input
                type="text"
                placeholder="Tìm kiếm khóa học..."
                className="w-full pl-10 pr-4 py-2 border border-white-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#06b6d4] focus:border-transparent"
              />
            </div>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/courses" className="text-white-700 hover:text-[#06b6d4] transition-colors">
              Khóa học
            </Link>
            <Link href="/about" className="text-white-700 hover:text-[#06b6d4] transition-colors">
              Giới thiệu
            </Link>
            <Link href="/blog" className="text-white-700 hover:text-[#06b6d4] transition-colors">
              Blog
            </Link>
            <Link href="/contact" className="text-white-700 hover:text-[#06b6d4] transition-colors">
              Liên hệ
            </Link>
            <Link href="/dashboard" className="text-white-700 hover:text-[#06b6d4] transition-colors">
              Dashboard
            </Link>
            <Link href="/login" className="text-white-700 hover:text-[#06b6d4] transition-colors">
              Đăng nhập
            </Link>
            <Link
              href="/register"
              className="px-4 py-2 bg-black text-white rounded-lg hover:bg-white-800 transition-colors"
            >
              Đăng ký
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-white-200 slide-from-top">
            <div className="flex flex-col gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white-400" />
                <input
                  type="text"
                  placeholder="Tìm kiếm khóa học..."
                  className="w-full pl-10 pr-4 py-2 border border-white-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#06b6d4]"
                />
              </div>
              <Link href="/courses" className="text-white-700 hover:text-[#06b6d4] py-2">
                Khóa học
              </Link>
              <Link href="/about" className="text-white-700 hover:text-[#06b6d4] py-2">
                Giới thiệu
              </Link>
              <Link href="/blog" className="text-white-700 hover:text-[#06b6d4] py-2">
                Blog
              </Link>
              <Link href="/contact" className="text-white-700 hover:text-[#06b6d4] py-2">
                Liên hệ
              </Link>
              <Link href="/dashboard" className="text-white-700 hover:text-[#06b6d4] py-2">
                Dashboard
              </Link>
              <Link href="/login" className="text-white-700 hover:text-[#06b6d4] py-2">
                Đăng nhập
              </Link>
              <Link href="/register" className="px-4 py-2 bg-black text-white rounded-lg hover:bg-white-800 text-center">
                Đăng ký
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
