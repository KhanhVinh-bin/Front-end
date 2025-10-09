"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import Header from "@/components/header"
import Footer from "@/components/footer"
import AuthModal from "@/components/auth-modal"

export default function CourseDetailPage() {
  const params = useParams()
  const [showAuthModal, setShowAuthModal] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

  useEffect(() => {
    // Fade in animation on load
    const elements = document.querySelectorAll(".fade-in-element")
    elements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add("visible")
      }, index * 100)
    })
  }, [])

  const handleBuyNow = () => {
    setShowAuthModal(true)
  }

  return (
    <div className="min-h-screen bg-white-50">
      <Header />

      {/* Hero Section */}
      <section className="bg-navy text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Content */}
            <div className="lg:col-span-2 fade-in-element">
              <span className="inline-block bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
                Lập trình
              </span>

              <h1 className="text-4xl font-bold mb-4">Khóa học phát triển React</h1>

              <p className="text-white-300 text-lg mb-6">
                Khóa học React từ cơ bản đến nâng cao, bao gồm tất cả kiến thức cần thiết để trở thành một React
                Developer chuyên nghiệp.
              </p>

              {/* Stats */}
              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center gap-2">
                  <span className="text-yellow-400">⭐</span>
                  <span className="font-semibold">0.1</span>
                  <span className="text-white-400">(2,300 lượt đánh giá)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>👥</span>
                  <span className="font-semibold">104k</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>⏱️</span>
                  <span className="font-semibold">1k</span>
                </div>
              </div>

              {/* Instructor */}
              <div className="flex items-center gap-4 bg-navy-light p-4 rounded-lg">
                <div className="w-16 h-16 bg-white-600 rounded-full overflow-hidden">
                  <img src="/instructor-teaching.jpg" alt="Instructor" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-semibold text-lg">Giảng viên: Hoàng Phúc</p>
                  <p className="text-white-400 text-sm">
                    Senior Frontend Developer với 800+ năm kinh nghiệm. Đã đào tạo hơn 500,000 học viên.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Card - Price */}
            <div className="lg:col-span-1 fade-in-element">
              <div className="bg-white text-white-900 rounded-xl shadow-2xl p-6 sticky top-24">
                <div
                  className="relative mb-6 rounded-lg overflow-hidden course-preview-image"
                  onMouseEnter={(e) => {
                    e.currentTarget.querySelector("img").style.transform = "scale(1.1)"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.querySelector("img").style.transform = "scale(1)"
                  }}
                >
                  <img
                    src="/react-course-preview.jpg"
                    alt="Course preview"
                    className="w-full h-48 object-cover transition-transform duration-500"
                    onLoad={() => setImageLoaded(true)}
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                    <button className="w-16 h-16 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                      <span className="text-3xl text-purple-600">▶</span>
                    </button>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-4 text-center">Khóa học phát triển React</h3>

                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-green-600 mb-2">900.000đ</div>
                  <div className="text-white-400 line-through text-lg">4.000.000đ</div>
                  <div className="text-red-500 font-semibold mt-1">Giảm 78%</div>
                </div>

                <button
                  onClick={handleBuyNow}
                  className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white py-4 rounded-lg font-bold text-lg mb-4 hover:from-purple-700 hover:to-purple-800 transition-all hover:shadow-lg hover:scale-105 active:scale-95 buy-now-btn"
                >
                  Mua khóa học
                </button>

                <div className="flex gap-4">
                  <button className="flex-1 border-2 border-white-300 py-3 rounded-lg hover:bg-white-50 transition-colors flex items-center justify-center gap-2">
                    <span>❤️</span>
                    <span>Yêu thích</span>
                  </button>
                  <button className="flex-1 border-2 border-white-300 py-3 rounded-lg hover:bg-white-50 transition-colors flex items-center justify-center gap-2">
                    <span>🔗</span>
                    <span>Chia sẻ</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Tabs */}
            <div className="flex gap-4 border-b border-white-300 mb-8">
              <button className="px-6 py-3 font-semibold border-b-2 border-purple-600 text-purple-600">
                Tổng quan
              </button>
              <button className="px-6 py-3 font-semibold text-white-600 hover:text-purple-600 transition-colors">
                Nội dung
              </button>
              <button className="px-6 py-3 font-semibold text-white-600 hover:text-purple-600 transition-colors">
                Giảng viên
              </button>
              <button className="px-6 py-3 font-semibold text-white-600 hover:text-purple-600 transition-colors">
                Đánh giá
              </button>
            </div>

            {/* What you'll learn */}
            <div className="bg-white rounded-xl shadow-md p-8 mb-8 fade-in-element">
              <h2 className="text-2xl font-bold mb-6">Bạn sẽ học được gì?</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Nắm vững các khái niệm cơ bản về React",
                  "Xây dựng ứng dụng web hiện đại với React Hooks",
                  "Quản lý state với Context API và Redux",
                  "Tích hợp API và xử lý bất đồng bộ",
                  "Tối ưu hóa performance và best practices",
                  "Deploy ứng dụng lên production",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="text-green-500 text-xl flex-shrink-0">✓</span>
                    <span className="text-white-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Requirements */}
            <div className="bg-white rounded-xl shadow-md p-8 mb-8 fade-in-element">
              <h2 className="text-2xl font-bold mb-6">Yêu cầu</h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-white-400">•</span>
                  <span className="text-white-700">Kiến thức cơ bản về HTML, CSS, JavaScript</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white-400">•</span>
                  <span className="text-white-700">Máy tính có thể cài đặt Node.js</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white-400">•</span>
                  <span className="text-white-700">Hiểu biết về ES6+ features</span>
                </li>
              </ul>
            </div>

            {/* Course Info */}
            <div className="bg-white rounded-xl shadow-md p-8 fade-in-element">
              <h2 className="text-2xl font-bold mb-6">Thông tin khóa học</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex justify-between py-3 border-b border-white-200">
                  <span className="text-white-600">Cấp độ:</span>
                  <span className="font-semibold">Trung cấp</span>
                </div>
                <div className="flex justify-between py-3 border-b border-white-200">
                  <span className="text-white-600">Thời lượng:</span>
                  <span className="font-semibold">45h</span>
                </div>
                <div className="flex justify-between py-3 border-b border-white-200">
                  <span className="text-white-600">Ngôn ngữ:</span>
                  <span className="font-semibold">React</span>
                </div>
                <div className="flex justify-between py-3 border-b border-white-200">
                  <span className="text-white-600">Chứng chỉ:</span>
                  <span className="font-semibold">Có</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {showAuthModal && <AuthModal onClose={() => setShowAuthModal(false)} />}
    </div>
  )
}
