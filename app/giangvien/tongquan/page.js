"use client"


import Footer from "@/components/footer"
import Link from "next/link"
import "./page.css"

export default function GiangVienTongQuanPage() {
  return (
    <div className="gv-dashboard-root">
      {/* Header/topbar của trang tổng quan */}
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
            <span className="gv-bc-label">Tổng quan</span>
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
        {/* Sidebar */}
        <aside className="gv-sidebar">
          
          <nav className="gv-nav">
            <ul>
              <li><Link href="/giangvien/tongquan" className="active">📊 Tổng quan</Link></li>
              <li><Link href="/giangvien/khoahoc">📚 Khóa học</Link></li>
              <li><Link href="#">👥 Học viên</Link></li>
              <li><Link href="#">💰 Doanh thu</Link></li>
              <li><Link href="#">✉️ Tin nhắn</Link></li>
              <li><Link href="#">🗂️ Hồ sơ</Link></li>
              <li><Link href="#">⚙️ Cài đặt</Link></li>
              <li><Link href="#">🆘 Hỗ trợ</Link></li>
            </ul>
          </nav>
        </aside>

        {/* Main content */}
        <main className="gv-main">
          {/* Top stats */}
          <section className="gv-top-grid">
            <div className="gv-card gv-revenue">
              <div className="gv-card-head">
                <div>
                  <div className="gv-card-title">Doanh thu tháng này</div>
                  <div className="gv-card-sub">VND</div>
                </div>
              </div>
              <div className="gv-card-value">$45M</div>
              <div className="gv-area-chart blue" aria-hidden="true" />
              <div className="gv-change up">
                <span className="gv-arrow">↑</span>
                <span>
                  8M <span className="gv-note">So với tháng trước</span>
                </span>
              </div>
            </div>

            <div className="gv-card gv-complete">
              <div className="gv-card-head">
                <div className="gv-card-title">Tỉ lệ hoàn thành khóa học</div>
              </div>
              <div className="gv-card-value">78%</div>
              <div className="gv-area-chart red" aria-hidden="true" />
              <div className="gv-change down">
                <span className="gv-arrow">↓</span>
                <span>
                  2% <span className="gv-note">Giảm so với kì trước</span>
                </span>
              </div>
            </div>
          </section>

          {/* Middle small stats */}
          <section className="gv-mid-grid">
            <div className="gv-card">
              <div className="gv-card-title">Tổng khóa học</div>
              <div className="gv-card-value">12</div>
              <div className="gv-sparkline" aria-hidden="true" />
              <div className="gv-card-desc up">↑ 6% So với tháng trước</div>
            </div>
            <div className="gv-card">
              <div className="gv-card-title">Tổng học viên</div>
              <div className="gv-card-value">1.256</div>
              <div className="gv-sparkline" aria-hidden="true" />
              <div className="gv-card-desc up">↑ 12% So với tháng trước</div>
            </div>
          </section>

          {/* Courses and recent activity */}
          <section className="gv-content-grid">
            <div className="gv-card">
              <div className="gv-card-head">
                <div className="gv-card-title">Khóa học gần</div>
              </div>

              <ul className="gv-course-list">
                {[
                  {
                    title: "Complete React Development Course",
                    students: "1200 học viên",
                    tag: { label: "Đã xuất bản", type: "published" },
                  },
                  {
                    title: "Complete React Development Course",
                    students: "896 học viên",
                    tag: { label: "Bản nháp", type: "draft" },
                  },
                  {
                    title: "Complete React Development Course",
                    students: "538 học viên",
                    tag: { label: "Cần duyệt", type: "review" },
                  },
                ].map((c, i) => (
                  <li key={i} className="gv-course-item">
                    <div className="gv-thumb-wrap">
                      <img src="/react-course.png" alt="React" className="gv-course-thumb" />
                      <span className="gv-js-badge">JS</span>
                    </div>
                    <div className="gv-course-info">
                      <div className="gv-course-title">{c.title}</div>
                      <div className="gv-course-meta">
                        <span className={`gv-course-tag ${c.tag.type}`}>{c.tag.label}</span>
                        <span className="gv-students">{c.students}</span>
                      </div>
                    </div>
                    <button className="gv-edit-btn" title="Chỉnh sửa">🖉</button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="gv-card">
              <div className="gv-card-head">
                <div className="gv-card-title">Hoạt động gần đây</div>
              </div>
              <ul className="gv-activity-list">
                <li className="gv-activity-item">
                  <span className="gv-dot green" />
                  <div className="gv-activity-text">
                    <div className="text-2xl gv-activity-title">5 học viên đã đăng ký khóa React</div>
                  </div>
                </li>
                <li className="gv-activity-item">
                  <span className="gv-dot purple" />
                  <div className="gv-activity-text">
                    <div className="gv-activity-title">Nhận được 4 đánh giá</div>
                  </div>
                </li>
                <li className="gv-activity-item">
                  <span className="gv-dot violet" />
                  <div className="gv-activity-text">
                    <div className="gv-activity-title">1 khóa node.js đang chờ duyệt</div>
                  </div>
                </li>
                <li className="gv-activity-item">
                  <span className="gv-dot lime" />
                  <div className="gv-activity-text">
                    <div className="gv-activity-title">Khóa javascript cần chỉnh sửa</div>
                  </div>
                </li>
              </ul>
            </div>
          </section>
        </main>
      </div>

      <Footer />
    </div>
  )
}