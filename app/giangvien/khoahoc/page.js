"use client"

import Footer from "@/components/footer"
import Link from "next/link"
import "../tongquan/page.css"
import "./page.css"

export default function GiangVienKhoaHocPage() {
  const courses = [
    {
      title: "Complete React Development Course",
      price: "900.000đ",
      status: { label: "Đã xuất bản", type: "published" },
      thumb: "/react-course.png",
      students: "12.500",
      rating: "4.7",
      reviews: "2.548",
      revenue: "45.2M",
    },
    {
      title: "Complete React Development Course",
      price: "900.000đ",
      status: { label: "Đã xuất bản", type: "published" },
      thumb: "/react-course.png",
      students: "12.500",
      rating: "4.7",
      reviews: "2.548",
      revenue: "45.2M",
    },
    {
      title: "Complete React Development Course",
      price: "900.000đ",
      status: { label: "Chờ duyệt", type: "review" },
      thumb: "/react-course.png",
      students: "0",
      rating: "4.7",
      reviews: "0",
      revenue: "0",
    },
  ]

  return (
    <div className="gv-dashboard-root">
      {/* Header/topbar giống hình, đổi breadcrumb thành Khóa học */}
      <header className="gv-topbar" role="banner">
        <div className="gv-topbar-left">
          <div className="gv-brand-mini">
            <span className="gv-brand-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="#1e3a8a">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </span>
            <span className="gv-brand-text">EduLearn</span>
          </div>
          <span className="gv-divider" aria-hidden="true" />
          <div className="gv-breadcrumb" aria-label="Breadcrumb">
            <span className="gv-bc-icon">≡</span>
            <span className="gv-bc-label">Khóa học</span>
          </div>
        </div>
        <div className="gv-topbar-right">
          <div className="gv-notify" title="Thông báo">
            <span className="gv-bell-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="#fbbf24" stroke="#f59e0b">
                <path
                  d="M12 3c-2.761 0-5 2.239-5 5v3l-2 2v2h14v-2l-2-2V8c0-2.761-2.239-5-5-5Z"
                  strokeWidth="1.5"
                />
                <circle cx="12" cy="19" r="2" fill="#f59e0b" />
              </svg>
            </span>
            <span className="gv-badge">4</span>
          </div>
          <div className="gv-avatar" title="Tài khoản">
            <span className="gv-presence" />
          </div>
        </div>
      </header>

      <div className="gv-dashboard">
        {/* Sidebar với liên kết, đặt Khóa học là active */}
        <aside className="gv-sidebar">
          <nav className="gv-nav">
            <ul>
              <li><Link href="/giangvien/tongquan">📊 Tổng quan</Link></li>
              <li><Link href="/giangvien/khoahoc" className="active">📚 Khóa học</Link></li>
              <li><Link href="#">👥 Học viên</Link></li>
              <li><Link href="#">💰 Doanh thu</Link></li>
              <li><Link href="#">✉️ Tin nhắn</Link></li>
              <li><Link href="#">🗂️ Hồ sơ</Link></li>
              <li><Link href="#">⚙️ Cài đặt</Link></li>
              <li><Link href="#">🆘 Hỗ trợ</Link></li>
            </ul>
          </nav>
        </aside>

        {/* Nội dung danh sách khóa học */}
        <main className="gv-main">
          <section className="gvc-list">
            {courses.map((c, i) => (
              <div key={i} className="gvc-card">
                <img src={c.thumb} alt="thumb" className="gvc-thumb" />
                <div className="gvc-main">
                  <div className="gvc-top">
                    <div className="gvc-title">{c.title}</div>
                    <span className={`gvc-pill ${c.status.type}`}>{c.status.label}</span>
                  </div>
                  <div className="gvc-stats">
                    <div className="gvc-stat blue">
                      <div className="gvc-stat-icon" aria-hidden="true">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <circle cx="9" cy="8" r="3" />
                          <circle cx="16" cy="9" r="2.5" />
                          <path d="M4 19c0-3 3-5 6-5s6 2 6 5" />
                          <path d="M12 14c2.5 0 4.5 1.2 5.5 3" />
                        </svg>
                      </div>
                      <div className="value">{c.students}</div>
                      <div className="label">Học viên</div>
                    </div>
                    <div className="gvc-stat yellow">
                      <div className="gvc-stat-icon" aria-hidden="true">
                        <svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor">
                          <polygon points="12,2 15.2,8.3 22,9.7 17,14.1 18.2,21 12,17.8 5.8,21 7,14.1 2,9.7 8.8,8.3" />
                        </svg>
                      </div>
                      <div className="value">{c.rating}</div>
                      <div className="label">Đánh giá TB</div>
                    </div>
                    <div className="gvc-stat purple">
                      <div className="gvc-stat-icon" aria-hidden="true">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path d="M4 5h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H9l-4 3v-3H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z" />
                        </svg>
                      </div>
                      <div className="value">{c.reviews}</div>
                      <div className="label">Đánh giá</div>
                    </div>
                    <div className="gvc-stat green">
                      <div className="gvc-stat-icon" aria-hidden="true">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <circle cx="12" cy="12" r="9" />
                          <path d="M12 7v10" />
                          <path d="M9 10.5c0-1 1.5-1.5 3-1.5s3 .5 3 1.5-1.5 1.5-3 1.5-3 .5-3 1.5 1.5 1.5 3 1.5 3-.5 3-1.5" />
                        </svg>
                      </div>
                      <div className="value">{c.revenue}</div>
                      <div className="label">Doanh thu</div>
                    </div>
                  </div>
                  <div className="gvc-actions">
                    <button className="gvc-action view">
                      <span className="gvc-action-icon" aria-hidden="true">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7Z" />
                          <circle cx="12" cy="12" r="3" />
                        </svg>
                      </span>
                      Xem
                    </button>
                    <button className="gvc-action edit">
                      <span className="gvc-action-icon" aria-hidden="true">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path d="M4 17v3h3l10-10-3-3L4 17Z" />
                          <path d="M14 7l3 3" />
                        </svg>
                      </span>
                      Chỉnh sửa
                    </button>
                    <button className="gvc-action stats">
                      <span className="gvc-action-icon" aria-hidden="true">
                        <svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor">
                          <rect x="4" y="12" width="3" height="8" rx="1" />
                          <rect x="10" y="6" width="3" height="14" rx="1" />
                          <rect x="16" y="10" width="3" height="10" rx="1" />
                        </svg>
                      </span>
                      Thống kê
                    </button>
                    <button className="gvc-action delete">
                      <span className="gvc-action-icon" aria-hidden="true">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path d="M4 7h16" />
                          <path d="M9 7l1-2h4l1 2" />
                          <path d="M6 7l1 12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2l1-12" />
                          <path d="M10 11v6" />
                          <path d="M14 11v6" />
                        </svg>
                      </span>
                      Xóa
                    </button>
                  </div>
                </div>
                <div className="gvc-price">{c.price}</div>
              </div>
            ))}
          </section>

          {/* Footer bar: create button + pagination */}
          <div className="gvc-footerbar">
            <Link href="/giangvien/khoahoc/tao" className="gvc-create-btn">➕ Tạo khóa học</Link>
            <div className="gvc-pagination">
              <span className="gvc-page arrow">«</span>
              <span className="gvc-page arrow">‹</span>
              <span className="gvc-page active">1</span>
              <span className="gvc-page">2</span>
              <span className="gvc-page">3</span>
              <span className="gvc-page">4</span>
              <span className="gvc-page">5</span>
              <span className="gvc-page arrow">…</span>
              <span className="gvc-page arrow">›</span>
              <span className="gvc-page arrow">»</span>
            </div>
          </div>
        </main>
      </div>

      {/* Footer tái sử dụng từ phần tổng quan */}
      <Footer />
    </div>
  )
}