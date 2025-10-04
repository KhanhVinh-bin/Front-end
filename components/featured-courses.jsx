"use client"

import { useEffect, useState, useRef } from "react"
import CourseCard from "./course-card"

export default function FeaturedCourses() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const courses = [
    {
      id: 1,
      title: "Học C++",
      instructor: "Nguyễn Hải Trường",
      level: "Lập trình",
      rating: 0.1,
      students: "104k",
      duration: "1k",
      price: "900.000đ",
      oldPrice: "1.200.000đ",
      image: "/c---programming-course.jpg",
    },
    {
      id: 2,
      title: "Học C++",
      instructor: "Nguyễn Hải Trường",
      level: "Lập trình",
      rating: 0.1,
      students: "104k",
      duration: "1k",
      price: "900.000đ",
      oldPrice: "1.200.000đ",
      image: "/advanced-c---development.jpg",
    },
    {
      id: 3,
      title: "Học C++",
      instructor: "Nguyễn Hải Trường",
      level: "Lập trình",
      rating: 0.1,
      students: "104k",
      duration: "1k",
      price: "900.000đ",
      oldPrice: "1.200.000đ",
      image: "/c---for-beginners.jpg",
    },
  ]

  return (
    <section ref={sectionRef} className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white-900 mb-4">Khóa học nổi bật</h2>
          <p className="text-white-600 text-lg">Các khóa học được yêu thích với giá ưu đãi</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={course.id}
              className={isVisible ? "fade-in-up" : "opacity-0"}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CourseCard course={course} />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-3 border-2 border-white-900 text-white-900 rounded-lg font-semibold hover:bg-white-900 hover:text-white transition-all">
            Xem tất cả khóa học
          </button>
        </div>
      </div>
    </section>
  )
}
