import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="h-[calc(100vh-73px)] flex items-center">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex items-center gap-32">
          {/* 왼쪽: 이미지 */}
          <div className="flex-1">
            <div className="relative group">
              <div
                className="absolute -inset-4 bg-gradient-to-r from-sky-400 to-indigo-400 opacity-15 blur-3xl 
                group-hover:opacity-25 transition-opacity duration-500 rounded-[2rem]"
              ></div>

              <div
                className="relative w-full max-w-2xl rounded-[2rem] overflow-hidden shadow-2xl
                flex items-center justify-center bg-white/50 backdrop-blur-sm"
              >
                <Image
                  src="/bear.png"
                  alt="Cute bear"
                  width={450}
                  height={589}
                  className="object-contain p-8 hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* 오른쪽: 텍스트 */}
          <div className="flex-1">
            <div className="flex flex-col space-y-16">
              {/* 이름 */}
              <div className="space-y-3">
                <h1 className="text-7xl font-semibold tracking-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-500">
                    김건희
                  </span>
                </h1>
                <p className="text-2xl text-gray-500 tracking-wide pl-1">
                  GeonHee Kim
                </p>
              </div>

              {/* 소개글 */}
              <div className="space-y-4">
                <p className="text-3xl text-sky-600 whitespace-nowrap font-medium tracking-tight">
                  사용자 중심의 웹 경험을 디자인합니다
                </p>
                <p className="text-2xl text-gray-500 font-normal tracking-wide">
                  Crafting user-centered web experiences
                </p>
              </div>

              {/* 버튼들 */}
              <div className="flex gap-6">
                <Link
                  href="/projects"
                  className="group relative px-10 py-4 text-lg rounded-2xl 
                    bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300
                    border border-gray-100 text-gray-700 hover:text-sky-600 font-medium"
                >
                  <span className="relative">Projects</span>
                </Link>
                <Link
                  href="/contact"
                  className="group px-10 py-4 text-lg rounded-2xl text-white font-medium
                    bg-gradient-to-r from-sky-500 to-indigo-500
                    hover:from-sky-600 hover:to-indigo-600 
                    shadow-lg shadow-sky-500/20 hover:shadow-sky-500/30
                    transition-all duration-300"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
