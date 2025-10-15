"use client"

import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Clock, CheckCircle } from "lucide-react"

const curriculum = [
  {
    title: "Giới thiệu React",
    meta: { lessons: "4 bài học", duration: "10 giờ" },
    items: [
      { title: "JSX cơ bản", time: "45 phút" },
      { title: "Cấu trúc ứng dụng", time: "2 giờ 15 phút" },
      { title: "JSX và Components", time: "2 giờ 15 phút" },
      { title: "Props và State", time: "5 giờ" },
    ],
  },
  {
    title: "React nâng cao",
    meta: { lessons: "8 bài học", duration: "35 giờ" },
    items: [
      { title: "Hiểu sâu về Hooks", time: "10 giờ" },
      { title: "useEffect nâng cao & tối ưu Performance", time: "15 giờ" },
      { title: "useMemo và useCallback", time: "10 giờ" },
    ],
  },
]

export default function CourseContentPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero */}
      <section className="bg-[#6A5BF6] py-12 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <span className="inline-block px-4 py-1 rounded-full bg-purple-600/20 text-sm mb-3">Lập trình</span>
              <h1 className="text-3xl md:text-4xl font-bold">Khóa học phát triển React</h1>
              <p className="text-white/80 mt-2">
                Khóa học từ cơ bản đến nâng cao, giúp bạn trở thành React Developer chuyên nghiệp.
              </p>
            </div>

            {/* Tabs */}
            <div className="bg-white/10 backdrop-blur rounded-full p-1 flex gap-1">
              <Link href="/courses" className="px-4 py-2 rounded-full text-white hover:bg-white/20">Tổng quan</Link>
              <Link href="/courses/noidung" className="px-4 py-2 rounded-full bg-white text-[#0b0f3b] font-medium">Nội dung</Link>
              <Link href="/courses/giangvien" className="px-4 py-2 rounded-full text-white hover:bg-white/20">Giảng viên</Link>
              <Link href="/courses/danhgia" className="px-4 py-2 rounded-full text-white hover:bg-white/20">Đánh giá</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {curriculum.map((section, idx) => (
              <div key={idx} className="rounded-xl border bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gray-100">
                      <CheckCircle className="w-4 h-4" /> {section.meta.lessons}
                    </span>
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gray-100">
                      <Clock className="w-4 h-4" /> {section.meta.duration}
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {section.items.map((item, i) => (
                    <div key={i} className="rounded-lg border bg-white p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-2">
                          <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gray-200">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                          </span>
                          <div>
                            <div className="font-medium text-gray-900">{item.title}</div>
                            <div className="text-sm text-gray-600">{item.time}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="rounded-xl border bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-bold mb-6">Thông tin khóa học</h2>
              <div className="space-y-4 text-gray-700">
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
