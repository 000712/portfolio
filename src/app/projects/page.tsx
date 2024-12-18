import Link from 'next/link'
import Image from 'next/image'

export default function Projects() {
  const features = [
    {
      image: '/projects/project1.png',
      title: '쇼핑몰',
      description: '쇼핑몰 예제 연습입니다.',
      github: 'https://github.com/000712/shoppingmall',
      demo: 'https://shoppingmall-delta.vercel.app/',
    },
    {
      image: '/projects/project2.png',
      title: '포트폴리오',
      description: '중간고사 때 만든 첫 번째 포트폴리오 웹사이트입니다.',
      github: 'https://github.com/000712/my-portfolio',
      demo: 'https://my-portfolio-lqd4g9mti-000712s-projects.vercel.app/',
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50/50">
      <div className="max-w-5xl mx-auto px-8 py-20 relative">
        {/* 홈 버튼 */}
        <div className="absolute top-8 right-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-2.5 text-sm rounded-2xl 
              bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300
              border border-gray-100 text-gray-700 hover:text-sky-600 font-medium"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Home
          </Link>
        </div>

        {/* 헤더 */}
        <div className="mb-16">
          <h1 className="text-7xl font-semibold tracking-tight mb-3">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-500">
              Projects
            </span>
          </h1>
        </div>

        {/* 프로젝트 그리드 */}
        <div className="space-y-16">
          <div className="grid grid-cols-1 gap-6">
            {features.map((feature, index) => (
              <div
                key={`feature-${index}`}
                className="bg-white/80 backdrop-blur-sm rounded-[2rem] overflow-hidden
                  border border-gray-100 shadow-lg hover:shadow-xl 
                  transition-all duration-300"
              >
                <div className="relative aspect-video">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8 space-y-2">
                  <h4 className="text-xl font-medium text-gray-900">
                    {feature.title}
                  </h4>
                  <p className="text-base text-gray-600">
                    {feature.description}
                  </p>
                  {feature.github && feature.demo && (
                    <div className="flex gap-4 pt-2">
                      <a
                        href={feature.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        GitHub
                      </a>
                      <a
                        href={feature.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                        Demo
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* GitHub 링크 섹션 */}
          <div className="text-center space-y-4 pt-8">
            <p className="text-gray-600">
              더 많은 프로젝트가 궁금하시다면 제 GitHub를 방문해주세요!
            </p>
            <a
              href="https://github.com/000712"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 text-base rounded-2xl 
                bg-gradient-to-r from-sky-500 to-indigo-500
                hover:from-sky-600 hover:to-indigo-600 
                text-white font-medium shadow-lg shadow-sky-500/20 
                hover:shadow-sky-500/30 transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub 방문하기
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
