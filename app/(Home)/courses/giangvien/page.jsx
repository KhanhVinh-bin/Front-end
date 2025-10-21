"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Star, Users, BookOpen, Award } from "lucide-react"

const instructor = {
  name: "Nguyễn Hải Trường",
  role: "Senior Frontend Developer",
  image: "/haitruong.jpg",
  bio: "Developer với nhiều năm kinh nghiệm. Đã đào tạo hơn 500,000 học viên.",
  stats: {
    rating: "0.1",
    students: "500.000+",
    courses: "12",
    years: "800+",
  },
}

export default function CourseInstructorPage() {
  const [activeTab, setActiveTab] = useState("instructor")
  const router = useRouter()

  const handleReviewsClick = () => {
    router.push("/courses/1")
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero */}
      <section className="bg-[#6A5BF6] py-12 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <span className="inline-block px-4 py-1 rounded-full bg-[#7c3aed]/20 text-white text-sm mb-3">Lập trình</span>
              <h1 className="text-3xl md:text-4xl font-bold text-white">Khóa học phát triển React</h1>
              <p className="text-white/80 mt-2">
                Tìm hiểu về giảng viên của khóa học và kinh nghiệm giảng dạy.
              </p>
            </div>
            {/* Tabs */}
            <div className="bg-white/10 backdrop-blur rounded-full p-1 flex gap-1">
              <Link href="/courses" className="px-4 py-2 rounded-full text-white hover:bg-white/20">Tổng quan</Link>
              <Link href="/courses/noidung" className="px-4 py-2 rounded-full text-white hover:bg-white/20">Nội dung</Link>
              <Link href="/courses/giangvien" className="px-4 py-2 rounded-full bg-white text-[#0b0f3b]">Giảng viên</Link>
              <button 
  onClick={handleReviewsClick}
  className="px-4 py-2 rounded-full text-white hover:bg-white/20"
>
  Đánh giá
</button>
            </div>
          </div>
        </div>
      </section>

      {/* Instructor + Info */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Instructor card */}
          <div className="lg:col-span-2 space-y-6">
            <div className="rounded-xl border bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full overflow-hidden bg-white-200">
                  <img
                    src={instructor.image}
                    alt={instructor.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = "/professional-portrait.png"
                    }}
                  />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white-900">{instructor.name}</h2>
                  <p className="text-white-600">{instructor.role}</p>
                </div>
              </div>

              <p className="mt-4 text-white-700">
                {instructor.bio}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                <div className="rounded-lg border bg-white p-4 text-center">
                  <div className="flex items-center justify-center gap-2 text-xl font-bold">
                    <Star className="w-5 h-5" /> {instructor.stats.rating}
                  </div>
                  <div className="text-sm text-white-600 mt-1">Đánh giá</div>
                </div>
                <div className="rounded-lg border bg-white p-4 text-center">
                  <div className="flex items-center justify-center gap-2 text-xl font-bold">
                    <Users className="w-5 h-5" /> {instructor.stats.students}
                  </div>
                  <div className="text-sm text-white-600 mt-1">Học viên</div>
                </div>
                <div className="rounded-lg border bg-white p-4 text-center">
                  <div className="flex items-center justify-center gap-2 text-xl font-bold">
                    <BookOpen className="w-5 h-5" /> {instructor.stats.courses}
                  </div>
                  <div className="text-sm text-white-600 mt-1">Khóa học</div>
                </div>
                <div className="rounded-lg border bg-white p-4 text-center">
                  <div className="flex items-center justify-center gap-2 text-xl font-bold">
                    <Award className="w-5 h-5" /> {instructor.stats.years}
                  </div>
                  <div className="text-sm text-white-600 mt-1">Năm kinh nghiệm</div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar info */}
          <aside className="lg:col-span-1">
            <div className="rounded-xl border bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-bold mb-6">Thông tin khóa học</h2>
              <div className="space-y-4 text-white-700">
                <div className="flex justify-between"><span>Cấp độ:</span><span className="font-semibold">Trung cấp</span></div>
                <div className="flex justify-between"><span>Thời lượng:</span><span className="font-semibold">45h</span></div>
                <div className="flex justify-between"><span>Ngôn ngữ:</span><span className="font-semibold">React</span></div>
                <div className="flex justify-between"><span>Chứng chỉ:</span><span className="font-semibold">Có</span></div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <Footer />
    </div>
  )
}