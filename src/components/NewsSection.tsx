"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const NewsSection = () => {
  const news = [
    {
      date: "2025/07/07",
      category: "新着情報",
      title: "ホームページをリニューアルしました。",
    },
    {
      date: "2023/10/01",
      category: "新着情報",
      title: "機能性表示食品マーケティングセミナー開催のお知らせ",
    },
    {
      date: "2023/10/01",
      category: "新着情報",
      title: "美容・健康領域特化サービスのリニューアルについて",
    },
  ];

  return (
    <section id="news" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              NEWS
            </h2>
            <p className="text-gray-600">
              バズラボの最新情報をお届けします
            </p>
          </div>

          <div className="space-y-6">
            {news.slice(0, 1).map((item, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row sm:items-center gap-4 p-6 bg-white rounded-lg hover:shadow-md transition-shadow duration-300 border border-gray-100"
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 flex-1">
                  <div className="text-sm text-gray-500 font-medium min-w-[100px]">
                    {item.date}
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="px-3 py-1 bg-gray-900 text-white text-xs rounded font-medium">
                      {item.category}
                    </span>
                    <h3 className="text-gray-900 font-medium text-sm">
                      {item.title}
                    </h3>
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="text-gray-700 hover:text-gray-900 self-end sm:self-center">
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            ))}
          </div>

          {/* ニュース一覧を見るボタンを削除 */}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
