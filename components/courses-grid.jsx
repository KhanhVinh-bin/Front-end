"use client"

import { useState } from "react"
import CourseCard from "./course-card"
import { Search, SlidersHorizontal } from "lucide-react"

export default function CoursesGrid() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedLevel, setSelectedLevel] = useState("all")
  const [priceRange, setPriceRange] = useState([0, 20000000])

  const courses = Array(9)
    .fill(null)
    .map((_, i) => ({
      id: i + 1,
      title: "Học C++",
      instructor: "Nguyễn Hải Trường",
      level: "Lập trình",
      rating: 0.1,
      students: "104k",
      duration: "1k",
      price: "900.000đ",
      oldPrice: "1.200.000đ",
      image: `/placeholder.svg?height=200&width=400&query=C++ course ${i + 1}`,
    }))

  const categories = [
    "Tất cả",
    "Lập trình web",
    "Lập trình Mobile",
    "AI & Data",
    "Cloud & DevOps",
    "Database",
    "Bảo mật an ninh",
    "Kiểm thử",
    "Backend",
    "UI/UX Design",
    "Lập trình game",
    "Blockchain & Web3",
  ]

  const levels = ["Tất cả", "Cơ bản", "Trung cấp", "Nâng cao"]

  return (
    <div className="grid lg:grid-cols-4 gap-8">
      {/* Sidebar Filters */}
      <div className="lg:col-span-1">
        <div className="bg-white rounded-xl p-6 border border-white-200 sticky top-24">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-white-900">Bộ lọc</h2>
            <SlidersHorizontal className="w-5 h-5 text-white-600" />
          </div>

          {/* Search */}
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white-400" />
              <input
                type="text"
                placeholder="Tìm kiếm khóa học giảng viên..."
                className="w-full pl-10 pr-4 py-2 border border-white-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#06b6d4] text-sm"
              />
            </div>
          </div>

          {/* Categories */}
          <div className="mb-6">
            <h3 className="font-bold text-white-900 mb-3">Danh mục</h3>
            <div className="space-y-2 max-h-64 overflow-y-auto">
              {categories.map((category, index) => (
                <label key={index} className="flex items-center gap-2 cursor-pointer hover:bg-white-50 p-2 rounded">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-[#06b6d4] border-white-300 rounded focus:ring-[#06b6d4]"
                    defaultChecked={index === 0}
                  />
                  <span className="text-sm text-white-700">{category}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Level */}
          <div className="mb-6">
            <h3 className="font-bold text-white-900 mb-3">Cấp độ</h3>
            <div className="space-y-2">
              {levels.map((level, index) => (
                <label key={index} className="flex items-center gap-2 cursor-pointer hover:bg-white-50 p-2 rounded">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-[#06b6d4] border-white-300 rounded focus:ring-[#06b6d4]"
                    defaultChecked={index === 0}
                  />
                  <span className="text-sm text-white-700">{level}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div>
            <h3 className="font-bold text-white-900 mb-3">Giá</h3>
            <input type="range" min="0" max="20000000" step="100000" className="w-full" />
            <div className="flex justify-between text-sm text-white-600 mt-2">
              <span>0đ</span>
              <span>20,000,000đ</span>
            </div>
          </div>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="lg:col-span-3">
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <div key={course.id} className="fade-in-up" style={{ animationDelay: `${index * 0.05}s` }}>
              <CourseCard course={course} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
