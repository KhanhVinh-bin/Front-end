"use client"
import Link from 'next/link'
import { useState } from "react"
import CourseCard from "./course-card"
import { Search, SlidersHorizontal } from "lucide-react"

export default function CoursesGrid() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedLevel, setSelectedLevel] = useState("all")
  const [priceRange, setPriceRange] = useState([0, 20000000])

  // HÀM ĐỔI TIỀN VIỆT
  const formatVND = (value) => value.toLocaleString("vi-VN") + "đ";

  // ✅ Dữ liệu khóa học cố định (giá không random)
  const courseData = [
    { title: "Học C++ Cơ Bản", slug: "hoc-c-co-ban", image: "/images/cpp_basic.jpg", price: 600000, oldPrice: 900000 },
    { title: "Học C++ Nâng Cao", slug: "hoc-c-nang-cao", image: "/images/cpp_advanced.jpg", price: 800000, oldPrice: 1200000 },
    { title: "Thuật Toán C++", slug: "thuat-toan-cpp", image: "/images/cpp_algorithm.jpg", price: 750000, oldPrice: 1000000 },
    { title: "C++ OOP Toàn Tập", slug: "c-oop-toan-tap", image: "/images/cpp_oop.jpg", price: 900000, oldPrice: 1500000 },
    { title: "Lập Trình Game Bằng C++", slug: "lap-trinh-game-bang-cpp", image: "/images/cpp_game.jpg", price: 700000, oldPrice: 1100000 },
    { title: "Cấu Trúc Dữ Liệu Với C++", slug: "cau-truc-du-lieu-voi-cpp", image: "/images/cpp_data_structure.jpg", price: 850000, oldPrice: 1300000 },
    { title: "C# API Swagger Cơ Bản", slug: "c-api-swagger-co-ban", image: "/images/cpp_beginner.jpg", price: 650000, oldPrice: 950000 },
    { title: "C++ Design Patterns", image: "/images/cpp_patterns.jpg", price: 950000, oldPrice: 1400000 },
    { title: "Dự Án Cuối Khóa C++", image: "/images/cpp_project.jpg", price: 1000000, oldPrice: 1600000 },
  ];

  // ✅ Không random nữa — chỉ map dữ liệu ra
  const courses = courseData.map((course, i) => ({
    id: i + 1,
    title: course.title,
    slug: course.slug,
    instructor: "Nguyễn Hải Trường",
    level: "Lập trình",
    rating: (Math.random() * 5).toFixed(1), // có thể để random rating cho sinh động
    students: `${Math.floor(Math.random() * 200) + 50}k`,
    duration: `${Math.floor(Math.random() * 40) + 10} giờ`,
    price: formatVND(course.price),
    oldPrice: formatVND(course.oldPrice),
    image: course.image,
  }));

  // Danh mục và cấp độ (cứng)
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
  ];

  const levels = ["Tất cả", "Cơ bản", "Trung cấp", "Nâng cao"];

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
  );
}
