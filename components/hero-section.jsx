"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Play } from "lucide-react"

export default function HeroSection() {
  const [typingComplete, setTypingComplete] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setTypingComplete(true)
    }, 3500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative bg-gradient-to-br from-[#7c3aed] via-[#6d28d9] to-[#5b21b6] text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium">
              Lộ trình
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">Mỗi khóa học - Một bước tiến xa hơn</h1>

            <div className="text-lg lg:text-xl text-purple-100">
              <span className="block mb-2">EduLearn</span>
              <p className="leading-relaxed">
                Khám phá hàng nghìn khóa học chất lượng cao từ các chuyên gia hàng đầu. Nâng cao kỹ năng và thay đổi sự
                nghiệp của bạn ngay hôm nay!
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="/courses"
                className="px-6 py-3 bg-[#fbbf24] text-white-900 rounded-lg font-semibold hover:bg-[#f59e0b] transition-all hover:scale-105 hover:shadow-lg"
              >
                Khám phá khóa học
              </Link>
              <button className="px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold hover:bg-white/20 transition-all flex items-center gap-2 ripple-effect">
                <Play className="w-5 h-5" />
                Xem Video
              </button>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="hinhnam.png"
                alt="Learning illustration"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
