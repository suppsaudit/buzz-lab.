"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const CaseSection = () => {
  const cases = [
    {
      title: "株式会社ビューティープラス",
      subtitle: "オーガニック化粧品ブランド立ち上げ支援",
      tags: ["ブランディング", "D2C"],
      image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      title: "株式会社ヘルスライフ",
      subtitle: "機能性健康領域商品の販路拡大プロジェクト",
      tags: ["販路拡大", "マーケティング"],
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    },
    {
      title: "株式会社ナチュラル",
      subtitle: "天然素材スキンケアの消費者分析・戦略策定",
      tags: ["消費者分析", "戦略策定"],
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    // 無限ループのために最初の2つを追加
    {
      title: "株式会社ビューティープラス",
      subtitle: "オーガニック化粧品ブランド立ち上げ支援",
      tags: ["ブランディング", "D2C"],
      image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      title: "株式会社ヘルスライフ",
      subtitle: "機能性健康領域商品の販路拡大プロジェクト",
      tags: ["販路拡大", "マーケティング"],
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // 自動スライド機能
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => {
          const nextIndex = prevIndex + 1;
          // 無限ループ：最後に到達したら最初に戻る
          if (nextIndex >= cases.length - 2) {
            return 0;
          }
          return nextIndex;
        });
      }, 3000); // 3秒間隔

      return () => clearInterval(interval);
    }
  }, [isHovered, cases.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === 0) {
        return cases.length - 3;
      }
      return prevIndex - 1;
    });
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      if (nextIndex >= cases.length - 2) {
        return 0;
      }
      return nextIndex;
    });
  };

  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Case Title Section */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            CASE
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-3xl mx-auto">
            美容・健康領域に特化したマーケティングプロジェクトを展開し、<br />
            ブランド価値向上から販路拡大まで実績をお見せいたします。<br />
            これまでに手がけた成功事例をご紹介
          </p>

          {/* Scroll indicator */}
          <div className="flex justify-center">
            <div className="w-12 h-12 border-2 border-gray-600 rounded-full flex items-center justify-center">
              <ArrowRight className="w-5 h-5 text-gray-300 transform rotate-90" />
            </div>
          </div>
        </div>

        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* カルーセルコンテナ */}
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / 3)}%)`,
              width: `${(cases.length * 100) / 3}%`
            }}
          >
            {cases.map((caseItem, index) => (
              <div key={index} className="w-1/3 px-4">
                <Card className="bg-gray-800 border-gray-700 overflow-hidden group hover:bg-gray-750 transition-colors duration-300 h-full">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={caseItem.image}
                      alt={caseItem.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {caseItem.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                      {caseItem.subtitle}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {caseItem.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center mt-8 space-x-4">
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-400 hover:text-white"
              onClick={goToPrevious}
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-400 hover:text-white"
              onClick={goToNext}
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* インジケーター */}
          <div className="flex justify-center mt-4 space-x-2">
            {Array.from({ length: 3 }).map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                  index === currentIndex % 3 ? 'bg-white' : 'bg-gray-600'
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Button variant="ghost" className="text-gray-300 hover:text-white">
            すべての実績を見る
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CaseSection;
