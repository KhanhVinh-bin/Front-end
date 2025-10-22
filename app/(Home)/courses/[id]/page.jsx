"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import Header from "@/components/header"
import Footer from "@/components/footer"
import AuthModal from "@/components/auth-modal"
import { getCourseById } from "@/app/(Home)/Data/mockCourses"
import { useCart } from "@/lib/cart-context"
import { useAuth } from "@/lib/auth-context"



export default function CourseDetailPage() {
  const params = useParams()
  const router = useRouter()
  const { addToCart, isInCart } = useCart()
  const { isAuthenticated } = useAuth()
  const [showAuthModal, setShowAuthModal] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)
  const [activeTab, setActiveTab] = useState("overview")
  const [course, setCourse] = useState(null)
  const [loading, setLoading] = useState(true)
  const [rating, setRating] = useState(0)
  const [reviewContent, setReviewContent] = useState("")
  const [hoveredStar, setHoveredStar] = useState(0)
  const [reviews] = useState([
    {
      id: 1,
      user: {
        name: "Nguyễn Văn A",
        avatar: "/placeholder-user.jpg"
      },
      rating: 5,
      content: "Giảng viên dạy rất chi tiết, bài học dễ hiểu, cảm ơn thầy đã tạo ra khóa học bổ ích này.",
      date: "2 ngày trước"
    },
    {
      id: 2,
      user: {
        name: "Nguyễn Văn B",
        avatar: "/placeholder-user.jpg"
      },
      rating: 4,
      content: "Giảng viên dạy rất tốt.",
      date: "1 tuần trước"
    }
  ])

  const handleSubmitReview = (e) => {
    e.preventDefault()
    // TODO: Gửi đánh giá lên server
    console.log("Submitted review:", { rating, reviewContent })
    // Reset form
    setRating(0)
    setReviewContent("")
  }

  useEffect(() => {
    // Lấy thông tin khóa học từ ID
    const courseId = params.id
    const courseData = getCourseById(courseId)
    
    if (courseData) {
      setCourse(courseData)
    } else {
      // Nếu không tìm thấy khóa học, chuyển hướng về trang 404 hoặc danh sách khóa học
      router.push('/courses')
      return
    }
    
    setLoading(false)
    
    // Fade in animation on load
    setTimeout(() => {
      const elements = document.querySelectorAll(".fade-in-element")
      elements.forEach((el, index) => {
        setTimeout(() => {
          el.classList.add("visible")
        }, index * 100)
      })
    }, 100)
  }, [params.id, router])

 const handleBuyNow = () => {
  if (!isAuthenticated()) {
  const redirectUrl = `/thanhtoan?courseId=${course.id}`
  router.push(`/login?redirect=${encodeURIComponent(redirectUrl)}`)
  } else {
    router.push(`/thanhtoan?courseId=${course.id}`)
  }
}


  const handleAddToCart = () => {
    if (course) {
      const cartItem = {
        id: course.id,
        title: course.title,
        instructor: course.instructor.name,
        price: parseFloat(course.price.replace(/[^\d]/g, '')), // Convert price string to number
        image: course.image
      }
      addToCart(cartItem)
      
      // Show success message or redirect to cart
      alert("Đã thêm khóa học vào giỏ hàng!")
    }
  }

  // Hiển thị loading khi đang tải dữ liệu
  if (loading || !course) {
    return (
      <div className="min-h-screen bg-white-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Đang tải thông tin khóa học...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white-50">
      <Header />

      {/* Hero Section */}
      <section className="bg-[#6A5BF6] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Content */}
            <div className="lg:col-span-2 fade-in-element">
              <span className="inline-block bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
                {course.category}
              </span>

              <h1 className="text-4xl font-bold mb-4">{course.title}</h1>

              <p className="text-white-300 text-lg mb-6">
                {course.description}
              </p>

              {/* Stats */}
              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center gap-2">
                  <span className="text-yellow-400">⭐</span>
                  <span className="font-semibold">{course.rating}</span>
                  <span className="text-white-400">({course.reviews} lượt đánh giá)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>👥</span>
                  <span className="font-semibold">{course.students}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>⏱️</span>
                  <span className="font-semibold">{course.duration}</span>
                </div>
              </div>

              {/* Instructor */}
              <div className="flex items-center gap-4 bg-navy-light p-4 rounded-lg">
                <div className="w-16 h-16 bg-white-600 rounded-full overflow-hidden">
                  <img src={course.instructor.avatar} alt="Instructor" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-semibold text-lg">Giảng viên: {course.instructor.name}</p>
                  <p className="text-white-400 text-sm">
                    {course.instructor.bio}
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
                    src={course.image}
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

                <h3 className="text-xl font-bold mb-4 text-center">{course.title}</h3>

                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-green-600 mb-2">{course.price}</div>
                  <div className="text-white-400 line-through text-lg">{course.oldPrice}</div>
                  <div className="text-red-500 font-semibold mt-1">Giảm {course.discount}%</div>
                </div>

                <button
                  onClick={handleBuyNow}
                  className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white py-4 rounded-lg font-bold text-lg mb-4 hover:from-purple-700 hover:to-purple-800 transition-all hover:shadow-lg hover:scale-105 active:scale-95 buy-now-btn"
                >
                  Mua khóa học
                </button>

                <button
                  onClick={handleAddToCart}
                  disabled={isInCart(course?.id)}
                  className={`w-full py-4 rounded-lg font-bold text-lg mb-4 transition-all hover:shadow-lg hover:scale-105 active:scale-95 ${
                    isInCart(course?.id)
                      ? "bg-gray-400 text-gray-600 cursor-not-allowed"
                      : "bg-gradient-to-r from-green-600 to-green-700 text-white hover:from-green-700 hover:to-green-800"
                  }`}
                >
                  {isInCart(course?.id) ? "Đã có trong giỏ hàng" : "Thêm vào giỏ hàng"}
                </button>

                
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
              <button
                onClick={() => setActiveTab("overview")}
                className={`px-6 py-3 font-semibold ${
                  activeTab === "overview"
                    ? "border-b-2 border-purple-600 text-purple-600"
                    : "text-white-600 hover:text-purple-600 transition-colors"
                }`}
              >
                Tổng quan
              </button>
              <button
                onClick={() => setActiveTab("content")}
                className={`px-6 py-3 font-semibold ${
                  activeTab === "content"
                    ? "border-b-2 border-purple-600 text-purple-600"
                    : "text-white-600 hover:text-purple-600 transition-colors"
                }`}
              >
                Nội dung
              </button>
              <button
                onClick={() => setActiveTab("instructor")}
                className={`px-6 py-3 font-semibold ${
                  activeTab === "instructor"
                    ? "border-b-2 border-purple-600 text-purple-600"
                    : "text-white-600 hover:text-purple-600 transition-colors"
                }`}
              >
                Giảng viên
              </button>
              <button
                onClick={() => setActiveTab("reviews")}
                className={`px-6 py-3 font-semibold ${
                  activeTab === "reviews"
                    ? "border-b-2 border-purple-600 text-purple-600"
                    : "text-white-600 hover:text-purple-600 transition-colors"
                }`}
              >
                Đánh giá
              </button>
            </div>

            {/* Reviews Tab */}
            {activeTab === "reviews" && (
              <div className="bg-white rounded-xl shadow-md p-8 mb-8 fade-in-element ">
                {isAuthenticated ? (
                  <div>
                    <h2 className="text-2xl font-bold mb-6">Đánh giá của bạn</h2>
                    <form onSubmit={handleSubmitReview} className="space-y-6">
                      {/* Rating Stars */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Đánh giá của bạn
                        </label>
                        <div className="flex gap-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <button
                              key={star}
                              type="button"
                              onClick={() => setRating(star)}
                              onMouseEnter={() => setHoveredStar(star)}
                              onMouseLeave={() => setHoveredStar(0)}
                              className="text-2xl focus:outline-none"
                            >
                              {star <= (hoveredStar || rating) ? "★" : "☆"}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Review Content */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Nội dung đánh giá
                        </label>
                        <textarea
                          value={reviewContent}
                          onChange={(e) => setReviewContent(e.target.value)}
                          rows={4}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                          placeholder="Chia sẻ trải nghiệm học tập của bạn..."
                        />
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                      >
                        Gửi đánh giá
                      </button>
                    </form>
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <h2 className="text-xl font-semibold mb-4">Đăng nhập để đánh giá khóa học</h2>
                    <p className="text-gray-600 mb-6">Bạn cần đăng nhập để có thể đánh giá khóa học này</p>
                    <button
                      onClick={() => router.push('/login?redirect=' + encodeURIComponent(window.location.pathname))}
                      className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                    >
                      Đăng nhập ngay
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Overview Tab */}
           <div className={`${activeTab === "overview" ? "block" : "hidden"}`}>
  {/* What you'll learn */}
  <div className="bg-white rounded-xl shadow-md p-8 mb-8 fade-in-element">
    <h2 className="text-2xl font-bold mb-6">Bạn sẽ học được gì?</h2>
    <div className="grid md:grid-cols-2 gap-4">
      {course?.learningOutcomes?.map((item, index) => (
        <div key={index} className="flex items-start gap-3">
          <span className="text-green-500 text-xl flex-shrink-0">✓</span>
          <span className="text-gray-700">{item}</span>
        </div>
      ))}
    </div>
  </div>

  {/* Requirements */}
  <div className="bg-white rounded-xl shadow-md p-8 mb-8 fade-in-element">
    <h2 className="text-2xl font-bold mb-6">Yêu cầu</h2>
    <ul className="space-y-3">
      {course?.requirements?.map((requirement, index) => (
        <li key={index} className="flex items-start gap-3">
          <span className="text-gray-400">•</span>
          <span className="text-gray-700">{requirement}</span>
        </li>
      ))}
    </ul>
  </div>
</div>


            {/* Instructor Tab */}
            {activeTab === "instructor" && (
              <div className="bg-white rounded-xl shadow-md p-8 mb-8 fade-in-element">
                <h2 className="text-2xl font-bold mb-6">Thông tin giảng viên</h2>
                <div className="flex items-start gap-6">
                  <div className="w-32 h-32 rounded-full overflow-hidden flex-shrink-0">
                    <img src={course.instructor.avatar} alt={course.instructor.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{course.instructor.name}</h3>
                    <p className="text-gray-600 mb-4">{course.instructor.title}</p>
                    <p className="text-gray-700 leading-relaxed">{course.instructor.fullBio}</p>
                    <div className="mt-4 flex gap-4 text-sm text-gray-600">
                      <span>👥 {course.instructor.totalStudents} học viên</span>
                      <span>⭐ {course.instructor.rating} đánh giá</span>
                      <span>📚 {course.instructor.totalCourses} khóa học</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            
          </div>
        </div>
      </section>

      <Footer />

      {showAuthModal && <AuthModal onClose={() => setShowAuthModal(false)} />}
    </div>
  )
}
