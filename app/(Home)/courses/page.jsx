import Header from "@/components/header"
import Footer from "@/components/footer"
import CoursesGrid from "@/components/courses-grid"
import TabsSection from "@/components/TabsSection"

export default function CoursesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-12 bg-white-50">
        <div className="max-w-9xl mx-auto px-3 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white-900 mb-8">Tất cả khóa học</h1>
          <CoursesGrid />
          
        </div>
      </main>
      <Footer />
    </div>
  )
}
