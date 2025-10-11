'use client';

import './dashboard.css';

export default function AdminDashboard() {
  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-header">
          <div className="search-box">
            <input type="text" placeholder="Search" />
          </div>
        </div>
        
        <nav className="sidebar-nav">
          <ul>
            <li className="nav-item active">
              <span className="nav-icon">📊</span>
              Tổng Quan
            </li>
            <li className="nav-item">
              <span className="nav-icon">👥</span>
              Quản lý sinh viên
            </li>
            <li className="nav-item">
              <span className="nav-icon">🎓</span>
              Quản lý giảng viên
            </li>
            <li className="nav-item">
              <span className="nav-icon">📚</span>
              Quản lý khóa học
            </li>
            <li className="nav-item">
              <span className="nav-icon">💰</span>
              Quản lý doanh thu & báo cáo
            </li>
            <li className="nav-item">
              <span className="nav-icon">⭐</span>
              Quản lý bình luận & đánh giá
            </li>
            <li className="nav-item">
              <span className="nav-icon">🎯</span>
              Quản lý nội dung & banner
            </li>
            <li className="nav-item">
              <span className="nav-icon">📝</span>
              Quản lý đơn hàng / thanh toán
            </li>
            <li className="nav-item">
              <span className="nav-icon">🎨</span>
              Quản lý thị nhập giảng viên
            </li>
            <li className="nav-item">
              <span className="nav-icon">👨‍💼</span>
              Doanh thu Admin
            </li>
          </ul>
        </nav>

        <div className="sidebar-footer">
          <div className="user-profile">
            <img src="/placeholder-user.jpg" alt="User" className="user-avatar" />
            <div className="user-info">
              <span className="user-name">người dùng 1</span>
              <span className="user-role">Admin</span>
            </div>
          </div>
          <div className="sidebar-actions">
            <button className="settings-btn">⚙️ Cài đặt</button>
            <button className="logout-btn">🚪 Đăng xuất</button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        {/* Stats Cards */}
        <div className="stats-grid">
          <div className="stat-card revenue">
            <div className="stat-header">
              <h3>Doanh thu</h3>
              <span className="stat-trend up">📈</span>
            </div>
            <div className="stat-value">15%</div>
            <div className="stat-description">Tăng so với tuần trước</div>
            <a href="#" className="stat-link">Báo cáo doanh thu →</a>
          </div>

          <div className="stat-card discount">
            <div className="stat-header">
              <h3>Giảm</h3>
            </div>
            <div className="stat-value">4%</div>
            <div className="stat-description">Bạn đã chốt 94 trong số 100 giao dịch</div>
            <a href="#" className="stat-link">Tất cả ưu đãi →</a>
          </div>

          <div className="stat-card target">
            <div className="stat-header">
              <h3>Mục tiêu</h3>
            </div>
            <div className="stat-value">
              <div className="progress-circle">
                <span>84%</span>
              </div>
            </div>
            <a href="#" className="stat-link">Tất cả các mục tiêu →</a>
          </div>
        </div>

        {/* Content Grid */}
        <div className="content-grid">
          {/* Customers Section */}
          <div className="content-card customers">
            <div className="card-header">
              <h3>Khách hàng</h3>
              <select className="sort-dropdown">
                <option>Sắp xếp theo mới nhất</option>
              </select>
            </div>
            <div className="customer-list">
              <div className="customer-item">
                <img src="/placeholder-user.jpg" alt="Customer" className="customer-avatar" />
                <span className="customer-name">Nguyễn Hữu Tài</span>
                <div className="customer-actions">
                  <button>💬</button>
                  <button>⭐</button>
                  <button>✏️</button>
                  <button>⋯</button>
                </div>
              </div>
              <div className="customer-item">
                <img src="/placeholder-user.jpg" alt="Customer" className="customer-avatar" />
                <span className="customer-name">Đặng Quang Thành</span>
                <div className="customer-actions">
                  <button>💬</button>
                  <button>⭐</button>
                  <button>✏️</button>
                  <button>⋯</button>
                </div>
              </div>
              <div className="customer-item">
                <img src="/placeholder-user.jpg" alt="Customer" className="customer-avatar" />
                <span className="customer-name">Phan Ngọc Bích Như</span>
                <div className="customer-actions">
                  <button>💬</button>
                  <button>⭐</button>
                  <button>✏️</button>
                  <button>⋯</button>
                </div>
              </div>
              <div className="customer-item">
                <img src="/placeholder-user.jpg" alt="Customer" className="customer-avatar" />
                <span className="customer-name">Trần Văn Hoàng</span>
                <div className="customer-actions">
                  <button>💬</button>
                  <button>⭐</button>
                  <button>✏️</button>
                  <button>⋯</button>
                </div>
              </div>
            </div>
            <a href="#" className="card-link">Tất cả khách hàng →</a>
          </div>

          {/* Growth Chart */}
          <div className="content-card chart">
            <div className="card-header">
              <h3>Tốc độ tăng trưởng</h3>
              <select className="period-dropdown">
                <option>Hàng năm</option>
              </select>
            </div>
            <div className="chart-container">
              <svg className="growth-chart" viewBox="0 0 400 200">
                <defs>
                  <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#4ade80" stopOpacity="0.3"/>
                    <stop offset="100%" stopColor="#4ade80" stopOpacity="0.1"/>
                  </linearGradient>
                </defs>
                <path 
                  d="M 20 150 Q 80 120 120 100 T 200 80 T 280 60 T 360 40" 
                  stroke="#4ade80" 
                  strokeWidth="3" 
                  fill="none"
                />
                <path 
                  d="M 20 150 Q 80 120 120 100 T 200 80 T 280 60 T 360 40 L 360 180 L 20 180 Z" 
                  fill="url(#chartGradient)"
                />
              </svg>
              <div className="chart-labels">
                <span>2016</span>
                <span>2017</span>
                <span>2018</span>
                <span>2019</span>
                <span>2020</span>
                <span>2021</span>
                <span>2022</span>
                <span>2023</span>
              </div>
            </div>
            <div className="chart-stats">
              <div className="chart-stat">
                <span className="stat-label">Tháng tốt nhất</span>
                <div className="stat-info">
                  <strong>Tháng 11</strong>
                  <span className="stat-year">2019</span>
                </div>
              </div>
              <div className="chart-stat">
                <span className="stat-label">Năm tốt nhất</span>
                <div className="stat-info">
                  <strong>2023</strong>
                  <span className="stat-desc">Đã bán được 20k</span>
                </div>
              </div>
              <div className="chart-stat">
                <span className="stat-label">Khách hàng đầu</span>
                <div className="stat-info">
                  <img src="/placeholder-user.jpg" alt="Top Customer" className="top-customer-avatar" />
                  <span>Nguyễn Hữu Tài</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="bottom-grid">
          {/* Chat Section */}
          <div className="content-card chat">
            <div className="card-header">
              <h3>Trò chuyện</h3>
              <span className="chat-count">2 tin nhắn chưa đọc</span>
            </div>
            <div className="chat-avatars">
              <img src="/placeholder-user.jpg" alt="Chat User" className="chat-avatar" />
              <img src="/placeholder-user.jpg" alt="Chat User" className="chat-avatar" />
              <img src="/placeholder-user.jpg" alt="Chat User" className="chat-avatar" />
              <img src="/placeholder-user.jpg" alt="Chat User" className="chat-avatar" />
            </div>
          </div>

          {/* Best Selling Products */}
          <div className="content-card products">
            <h3>Sản phẩm bán chạy</h3>
            <div className="product-list">
              <div className="product-item">
                <span className="product-name">C++</span>
                <span className="product-sales">120K</span>
              </div>
              <div className="product-item">
                <span className="product-name">TOÁN CAO CẤP</span>
                <span className="product-sales">80K</span>
              </div>
              <div className="product-item">
                <span className="product-name">HTML/CSS</span>
                <span className="product-sales">70K</span>
              </div>
              <div className="product-item">
                <span className="product-name">UX/UI</span>
                <span className="product-sales">50K</span>
              </div>
            </div>
          </div>

          {/* Promotions */}
          <div className="content-card promotions">
            <h3>Ưu đãi mới</h3>
            <div className="promotion-tags">
              <span className="promo-tag">C++</span>
              <span className="promo-tag">HTML/CSS</span>
              <span className="promo-tag">JAVASCRIPT</span>
              <span className="promo-tag">UX/UI</span>
              <span className="promo-tag">TOÁN CAO CẤP</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}