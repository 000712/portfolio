'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Archive() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const features = [
    {
      image: '/archive/main.png',
      title: '메인 페이지',
      description:
        '방문자를 맞이하는 첫 화면으로, 간단한 자기소개와 함께 포트폴리오의 전체적인 구조를 보여줍니다.',
    },
    {
      image: '/archive/about.png',
      title: 'About 페이지',
      description:
        '간단한 자기소개와 영어 자기소개, 그리고 접촉할수 있는 이메일과 전화번호를 담고 있습니다.',
    },
    {
      image: '/archive/project1.png',
      title: 'Project 페이지',
      description:
        '지금까지 진행했던 프로젝트들을 깔끔하게 보여주며, 간단한 설명합니다.',
    },
    {
      image: '/archive/project2.png',
      title: 'Project 페이지',
      description:
        '지금까지 진행했던 프로젝트들을 깔끔하게 보여주며, 간단한 설명합니다.',
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50/50">
      {/* 이미지 모달 */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-8"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-full max-w-5xl aspect-video">
            <Image
              src={selectedImage}
              alt="확대된 이미지"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}

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
              Archive
            </span>
          </h1>
        </div>

        {/* 포트폴리오 소개 */}
        <div className="space-y-16">
          <div
            className="bg-white/80 backdrop-blur-sm rounded-[2rem] p-10 
            border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="space-y-6">
              <span
                className="text-sm font-medium text-sky-600 bg-sky-50 px-4 py-1.5 
                rounded-full border border-sky-100"
              >
                2024.09
              </span>
              <h2 className="text-2xl text-gray-600">
                중간고사 때 만든 첫 번째 포트폴리오 웹사이트입니다.
              </h2>
              <a
                href="https://my-portfolio-lqd4g9mti-000712s-projects.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 text-base rounded-2xl 
                  bg-gradient-to-r from-sky-500 to-indigo-500
                  hover:from-sky-600 hover:to-indigo-600 
                  text-white font-medium shadow-lg shadow-sky-500/20 
                  hover:shadow-sky-500/30 transition-all duration-300"
              >
                <span>웹사이트 방문하기</span>
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
              </a>
            </div>
          </div>

          {/* 기능 설명 */}
          <div className="space-y-8">
            <h3 className="text-2xl text-sky-600 font-medium tracking-tight">
              주요 기능
            </h3>
            <div className="grid grid-cols-1 gap-6">
              {features.map((feature, index) => (
                <div
                  key={`feature-${index}`}
                  className="bg-white/80 backdrop-blur-sm rounded-[2rem] overflow-hidden
                    border border-gray-100 shadow-lg hover:shadow-xl 
                    transition-all duration-300"
                >
                  <div
                    className="relative aspect-video cursor-pointer"
                    onClick={() => setSelectedImage(feature.image)}
                  >
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
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
