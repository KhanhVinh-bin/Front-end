"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Trash2, Plus, Minus } from "lucide-react"
import { useCart } from "@/lib/cart-context"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, clearCart, getCartTotal } = useCart()
  const [isClearing, setIsClearing] = useState(false)

  const handleClearCart = () => {
    if (window.confirm("Bạn có chắc muốn xóa tất cả khóa học trong giỏ hàng?")) {
      setIsClearing(true)
      setTimeout(() => {
        clearCart()
        setIsClearing(false)
      }, 300)
    }
  }

  const formatPrice = (price) => {
    return new Intl.NumberFormat("vi-VN").format(price) + " đ"
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Giỏ hàng của bạn</h1>
            <p className="text-gray-600">{cart.length} khóa học trong giỏ hàng</p>
          </div>

          {cart.length === 0 ? (
            <div className="bg-white rounded-lg p-12 text-center">
              <p className="text-gray-600 mb-4">Giỏ hàng của bạn đang trống</p>
              <Link
                href="/courses"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#4f46e5] text-white rounded-lg hover:bg-[#4338ca] transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Tiếp tục mua sắm
              </Link>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-lg p-6 flex gap-4 fade-in hover:shadow-md transition-shadow"
                  >
                    <Image
                      src={item.image || "/react-course.png"}
                      alt={item.title}
                      width={160}
                      height={90}
                      className="rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-sm text-gray-600 mb-4">Giảng viên: {item.instructor}</p>
                      <div className="flex items-center justify-between">
                        <p className="text-lg font-bold text-[#4f46e5]">{formatPrice(item.price)}</p>
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-8 h-8 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="w-8 text-center font-medium">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                ))}

                {/* Action Buttons */}
                <div className="flex gap-4 pt-4">
                  <Link
                    href="/courses"
                    className="flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Tiếp tục mua sắm
                  </Link>
                  <button
                    onClick={handleClearCart}
                    className="flex items-center gap-2 px-6 py-3 border border-red-300 text-red-600 rounded-lg hover:bg-red-50 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                    Xóa tất cả
                  </button>
                </div>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg p-6 sticky top-24">
                  <h2 className="text-xl font-bold text-gray-900 mb-6">Tổng đơn hàng</h2>

                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between text-gray-600">
                      <span>Tạm tính:</span>
                     <span>{formatPrice(typeof singleCourse !== "undefined" ? singleCourse.price : getCartTotal())}</span>
                    </div>
                    <div className="border-t pt-4 flex justify-between text-lg font-bold">
                      <span>Tổng cộng:</span>
                      <span className="text-[#4f46e5]">{formatPrice(getCartTotal())}</span>
                    </div>
                  </div>

                  <Link
                    href="/thanhtoan"
                    className="w-full block text-center px-6 py-3 bg-[#4f46e5] text-white rounded-lg hover:bg-[#4338ca] transition-colors font-medium mb-6"
                  >
                    Thanh toán ngay
                  </Link>

                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-2 text-green-600">
                      <svg className="w-5 h-5 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Học trọn đời</span>
                    </div>
                    <div className="flex items-start gap-2 text-green-600">
                      <svg className="w-5 h-5 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Chứng chỉ hoàn thành</span>
                    </div>
                    <div className="flex items-start gap-2 text-green-600">
                      <svg className="w-5 h-5 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Hoàn tiền trong 30 ngày</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
