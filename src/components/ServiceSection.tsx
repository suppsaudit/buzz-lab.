"use client";

import { Button } from "@/components/ui/button";

const ServiceSection = () => {
  const services = [
    {
      id: "01",
      title: "潜在市場発掘",
      subtitle: "潜在市場発掘",
      description: "まだ狙えていない顧客層を発見し、新たな売上機会を創出します。",
      fullDescription: "競合が気づいていないニーズやセグメントを特定し、貴ブランドだけが届けられる価値を再定義。市場の隙間を戦略的に攻略するためのロードマップを設計します。",
    },
    {
      id: "02",
      title: "セグメント特化クリエイティブ",
      subtitle: "セグメント特化クリエイティブ",
      description: "発掘したセグメントにクリエイティブを最適化します。",
      fullDescription: "属性別のLP・パッケージデザイン・広告クリエイティブまで、ブランディングエージェンシー案件を手掛けてきたメンバーがオーダーメイドで担当します。",
    },
    {
      id: "03",
      title: "マーケティング伴走",
      subtitle: "マーケティング伴走",
      description: "継続的な改善で、ブランドを育てていきます。",
      fullDescription: "CRM・SNS運用・データに裏付けされた日々の小さな改善が貴ブランドの財産となります。単発の施策提案ではなく、チームの一員として長期的にブランドの成長を支えます。",
    },
  ];

  return (
    <section id="service" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Service Title Section */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
            SERVICE
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-3xl mx-auto">
            美容・健康領域に特化したマーケティングで<br />
            貴社プロダクトを本当に求めている人々へ届けます。
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div key={service.id} className="relative">
              <div className="flex items-start mb-6">
                <div className="bg-black text-white px-4 py-2 text-sm font-bold mr-4 flex-shrink-0 rounded">
                  {service.id}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                </div>
              </div>

              <p className="text-gray-900 font-medium mb-4 text-sm leading-relaxed">
                {service.description}
              </p>

              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {service.fullDescription}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
