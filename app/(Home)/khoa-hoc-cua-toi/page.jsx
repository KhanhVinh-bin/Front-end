"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronLeft, BookOpen, TrendingUp, Award, LogOut } from "lucide-react"

export default function MyCoursesPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [activeMenu, setActiveMenu] = useState("courses")

  // Sample data
  const courses = [
    {
      id: 1,
      title: "Complete React Development Course",
      instructor: "Nguyễn Văn A",
      progress: 65,
      image: "/react-course.jpg",
      status: "Tiếp tục",
      daysLeft: "2 ngày trước",
    },
    {
      id: 2,
      title: "Complete React Development Course",
      instructor: "Nguyễn Văn A",
      progress: 100,
      image: "/react-course.jpg",
      status: "Học tất",
      daysLeft: "1 tuần trước",
    },
    {
      id: 3,
      title: "Complete React Development Course",
      instructor: "Nguyễn Văn A",
      progress: 25,
      image: "/react-course.jpg",
      status: "Tiếp tục",
      daysLeft: "5 ngày trước",
    },
  ]

  const stats = [
    { icon: BookOpen, label: "Khóa học đã đăng ký", value: "3" },
    { icon: TrendingUp, label: "Tiến độ trung bình", value: "36%" },
    { icon: TrendingUp, label: "Giờ đã học", value: "63.3" },
    { icon: Award, label: "Chứng chỉ đạt được", value: "1" },
  ]

  const menuItems = [
    { id: "courses", label: "Khóa học của tôi", icon: BookOpen },
    { id: "progress", label: "Tiến độ", icon: TrendingUp },
    { id: "certificates", label: "Chứng chỉ", icon: Award },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <span className="text-xl font-bold text-gray-900">EduLearn</span>
            </Link>

            <nav className="hidden md:flex items-center gap-6">
              <Link href="/courses" className="text-gray-700 hover:text-indigo-600 transition-colors">
                Khóa học
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-indigo-600 transition-colors">
                Giới thiệu
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-indigo-600 transition-colors">
                Blog
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-indigo-600 transition-colors">
                Liên hệ
              </Link>
            </nav>

            <div className="flex items-center gap-4">
              <div className="relative group">
                <button className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white font-semibold hover:bg-indigo-700 transition-colors">
                  A
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="p-4 border-b border-gray-200">
                    <p className="font-semibold text-gray-900">Nguyễn Văn A</p>
                    <p className="text-sm text-gray-600">email@example.com</p>
                  </div>
                  <Link
                    href="/khoa-hoc-cua-toi"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                  >
                    Khóa học của tôi
                  </Link>
                  <button className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors flex items-center gap-2">
                    <LogOut className="w-4 h-4" />
                    Đăng xuất
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside
          className={`${
            sidebarOpen ? "w-64" : "w-20"
          } bg-white border-r border-gray-200 transition-all duration-300 sticky top-16 h-[calc(100vh-64px)]`}
        >
          <div className="p-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors mb-4"
            >
              <ChevronLeft className={`w-5 h-5 transition-transform ${!sidebarOpen ? "rotate-180" : ""}`} />
            </button>

            <nav className="space-y-2">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveMenu(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    activeMenu === item.id
                      ? "bg-indigo-50 text-indigo-600 font-semibold"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  <item.icon className="w-5 h-5 flex-shrink-0" />
                  {sidebarOpen && <span>{item.label}</span>}
                </button>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          <div className="max-w-6xl">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Khóa học của tôi</h1>
              <p className="text-gray-600">Theo dõi tiến độ học tập và quản lý các khóa học của bạn</p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-indigo-50 rounded-lg">
                      <stat.icon className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">{stat.label}</p>
                      <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Courses Grid */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-6">Các khóa học của bạn</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {courses.map((course, index) => (
                  <div
                    key={course.id}
                    className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow fade-in-element"
                    style={{
                      opacity: 0,
                      transform: "translateY(20px)",
                      animation: `fadeInUp 0.6s ease-out ${index * 0.1}s forwards`,
                    }}
                  >
                    {/* Course Image */}
                    <div className="relative h-40 bg-gray-200 overflow-hidden">
                      <img
                        src={course.image || "/placeholder.svg"}
                        alt={course.title}
                        className="w-full h-full object-cover image-zoom"
                      />
                    </div>

                    {/* Course Info */}
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-900 mb-1 line-clamp-2">{course.title}</h3>
                      <p className="text-sm text-gray-600 mb-4">{course.instructor}</p>

                      {/* Progress Bar */}
                      <div className="mb-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-gray-700">Tiến độ</span>
                          <span className="text-sm font-semibold text-gray-900">{course.progress}%</span>
                        </div>
                        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full bg-indigo-600 progress-bar" style={{ width: `${course.progress}%` }} />
                        </div>
                      </div>

                      {/* Footer */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                        <span className="text-xs text-gray-500">{course.daysLeft}</span>
                        <button className="px-4 py-2 bg-black text-white text-sm font-semibold rounded-lg hover:bg-gray-800 transition-colors">
                          {course.status}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
