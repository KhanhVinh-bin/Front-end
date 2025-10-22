"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Star, Users, Clock, Play, ShoppingCart } from "lucide-react"
import { useAuth } from "@/lib/auth-context"

export default function CourseCard({ course }) {
  const [isHovered, setIsHovered] = useState(false)
  const { isAuthenticated } = useAuth()
  const router = useRouter()

  const handleBuyNow = (e) => {
    e.preventDefault() // Ngăn chặn navigation của Link
    e.stopPropagation()
    
    if (!isAuthenticated()) {
    const redirectUrl = `/thanhtoan?courseId=${course.id}`
    router.push(`/login?redirect=${encodeURIComponent(redirectUrl)}`)
    } else {
      router.push(`/thanhtoan?courseId=${course.id}`)
    }
    localStorage.setItem('token', data.token)
  }

  return (
    <Link href={`/courses/${course.slug}`}>
      <div
        className="bg-white rounded-xl overflow-hidden border border-white-200 card-hover cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >

        {/* Course Image */}
        <div className="relative h-48 bg-white-900 overflow-hidden">
          <img
            src={course.image || "/placeholder.svg"}
            alt={course.title}
            className="w-full h-full object-cover image-zoom transition-transform duration-300"
          />
          {isHovered && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center zoom-in transition-opacity duration-300">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                <Play className="w-8 h-8 text-black ml-1" />
              </div>
            </div>
          )}
          <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium">
            {course.level}
          </div>
        </div>

        {/* Course Info */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-white-900 mb-2">{course.title}</h3>
          <p className="text-white-600 mb-4">{course.instructor}</p>

          <div className="flex items-center gap-4 mb-4 text-sm text-white-600">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-[#fbbf24] fill-[#fbbf24]" />
              <span>{course.rating}</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              <span>{course.students}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{course.duration}</span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <span className="text-2xl font-bold text-[#10b981]">{course.price}</span>
              <span className="text-white-400 line-through ml-2">{course.oldPrice}</span>
            </div>
            <button className="px-4 py-2 bg-black text-white rounded-lg text-sm font-semibold hover:bg-white-800 transition-colors">
              Xem chi tiết
            </button>
          </div>
        </div>
      </div>
    </Link>
  )
}


 
