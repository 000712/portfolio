import Link from 'next/link'

export default function Contact() {
  const contacts = [
    {
      title: 'Email',
      value: 'kevin0741@naver.com',
      href: 'mailto:kevin0741@naver.com',
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      title: 'GitHub',
      value: 'github.com/000712',
      href: 'https://github.com/000712',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
    },
    {
      title: 'vercel',
      value: 'https://vercel.com/000712s-projects',
      href: 'https://vercel.com/000712s-projects',
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
          />
        </svg>
      ),
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
              Contact
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            안녕하세요! 저의 포트폴리오에 관심을 가져주셔서 감사합니다. 프로젝트
            협업이나 궁금하신 점이 있다면 언제든 연락 주세요. 이메일로 연락해
            주시면 빠른 시일 내에 답변 드리도록 하겠습니다.
          </p>
        </div>

        {/* 연락처 그리드 */}
        <div className="grid grid-cols-1 gap-6">
          {contacts.map((contact, index) => (
            <a
              key={`contact-${index}`}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/80 backdrop-blur-sm rounded-[2rem] overflow-hidden
                border border-gray-100 shadow-lg hover:shadow-xl 
                transition-all duration-300 p-8 flex items-center gap-6"
            >
              <div className="text-gray-600">{contact.icon}</div>
              <div>
                <h4 className="text-xl font-medium text-gray-900 mb-1">
                  {contact.title}
                </h4>
                <p className="text-base text-gray-600">{contact.value}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
