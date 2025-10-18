"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, CreditCard, Building2 } from "lucide-react"
import { useCart } from "@/lib/cart-context"
import { useRouter } from "next/navigation"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function CheckoutPage() {
  const { cart, getCartTotal, clearCart } = useCart()
  const router = useRouter()
  const [paymentMethod, setPaymentMethod] = useState("ewallet")
  const [formData, setFormData] = useState({
    email: "",
    fullName: "",
    phone: "",
  })
  const [errors, setErrors] = useState({})

  const formatPrice = (price) => {
    return new Intl.NumberFormat("vi-VN").format(price) + " đ"
  }

  const validateForm = () => {
    const newErrors = {}
    if (!formData.email) newErrors.email = "Vui lòng nhập email"
    if (!formData.fullName) newErrors.fullName = "Vui lòng nhập họ và tên"
    if (!formData.phone) newErrors.phone = "Vui lòng nhập số điện thoại"
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateForm()) {
      // Simulate payment processing
      alert("Đơn hàng của bạn đã được đặt thành công!")
      clearCart()
      router.push("/")
    }
  }

  if (cart.length === 0) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-gray-50 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-lg p-12 text-center">
              <p className="text-gray-600 mb-4">Giỏ hàng của bạn đang trống</p>
              <Link
                href="/courses"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#4f46e5] text-white rounded-lg hover:bg-[#4338ca] transition-colors"
              >
                Khám phá khóa học
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link
            href="/cart"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Quay lại giỏ hàng
          </Link>

          {/* Breadcrumb */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-1">Thanh toán</h1>
            <p className="text-gray-600">Hoàn tất đơn hàng của bạn</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Checkout Form */}
            <div className="lg:col-span-2 space-y-6">
              {/* Account Information */}
              <div className="bg-white rounded-lg p-6">
                <h2 className="text-lg font-bold text-gray-900 mb-6">Thông tin tài khoản</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-4 py-3 bg-gray-50 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4f46e5] ${
                        errors.email ? "ring-2 ring-red-500" : ""
                      }`}
                    />
                    {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
                    <p className="text-sm text-gray-500 mt-2">Khóa học sẽ được gửi đến email này</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        Họ và tên <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Nguyễn Văn A"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className={`w-full px-4 py-3 bg-gray-50 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4f46e5] ${
                          errors.fullName ? "ring-2 ring-red-500" : ""
                        }`}
                      />
                      {errors.fullName && <p className="text-sm text-red-500 mt-1">{errors.fullName}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        Số điện thoại <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        placeholder="0912345678"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={`w-full px-4 py-3 bg-gray-50 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4f46e5] ${
                          errors.phone ? "ring-2 ring-red-500" : ""
                        }`}
                      />
                      {errors.phone && <p className="text-sm text-red-500 mt-1">{errors.phone}</p>}
                    </div>
                  </div>
                </form>
              </div>

              {/* Payment Method */}
              <div className="bg-white rounded-lg p-6">
                <h2 className="text-lg font-bold text-gray-900 mb-6">Phương thức thanh toán</h2>
                <div className="space-y-3">
                  <label
                    className={`flex items-center justify-between p-4 border-2 rounded-lg cursor-pointer transition-all ${
                      paymentMethod === "ewallet"
                        ? "border-[#4f46e5] bg-blue-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="payment"
                        value="ewallet"
                        checked={paymentMethod === "ewallet"}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="w-4 h-4 text-[#4f46e5]"
                      />
                      <CreditCard className="w-5 h-5 text-gray-600" />
                      <span className="font-medium">Ví điện tử</span>
                    </div>
                    <span className="text-sm text-gray-500">MoMo, ZaloPay, VNPay</span>
                  </label>

                  <label
                    className={`flex items-center justify-between p-4 border-2 rounded-lg cursor-pointer transition-all ${
                      paymentMethod === "bank" ? "border-[#4f46e5] bg-blue-50" : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="payment"
                        value="bank"
                        checked={paymentMethod === "bank"}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="w-4 h-4 text-[#4f46e5]"
                      />
                      <Building2 className="w-5 h-5 text-gray-600" />
                      <span className="font-medium">Chuyển khoản ngân hàng</span>
                    </div>
                  </label>
                </div>

                <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-gray-700">
                    Bạn sẽ được chuyển hướng đến trang thanh toán của ví điện tử sau khi đặt hàng.
                  </p>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg p-6 sticky top-24">
                <h2 className="text-lg font-bold text-gray-900 mb-6">Tóm tắt đơn hàng</h2>

                <div className="space-y-4 mb-6">
                  {cart.map((item) => (
                    <div key={item.id} className="flex gap-3">
                      <Image
                        src={item.image || "/react-course.png"}
                        alt={item.title}
                        width={80}
                        height={60}
                        className="rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="text-sm font-medium text-gray-900 line-clamp-2 mb-1">{item.title}</h3>
                        <p className="text-sm text-gray-600">x{item.quantity}</p>
                        <p className="text-sm font-bold text-[#4f46e5]">{formatPrice(item.price)}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t pt-4 space-y-3 mb-6">
                  <div className="flex justify-between text-gray-600">
                    <span>Tạm tính:</span>
                    <span>{formatPrice(getCartTotal())}</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold">
                    <span>Tổng cộng:</span>
                    <span className="text-[#4f46e5]">{formatPrice(getCartTotal())}</span>
                  </div>
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full px-6 py-3 bg-[#4f46e5] text-white rounded-lg hover:bg-[#4338ca] transition-colors font-medium mb-6"
                >
                  Hoàn tất thanh toán
                </button>

                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-2 text-green-600">
                    <svg className="w-5 h-5 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Giao dịch bảo mật SSL</span>
                  </div>
                  <div className="flex items-start gap-2 text-green-600">
                    <svg className="w-5 h-5 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Bảo vệ thông tin cá nhân</span>
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
        </div>
      </main>
      <Footer />
    </>
  )
}
