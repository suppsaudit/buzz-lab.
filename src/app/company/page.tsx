"use client";

export default function CompanyPage() {
  return (
    <div className="max-w-2xl mx-auto p-8 bg-white shadow-md mt-12 mb-12 rounded-lg">
      <div className="text-center mb-8 border-b-2 border-gray-100 pb-6">
        <div className="text-3xl font-bold text-gray-800 mb-2">Buzz Lab.</div>
        <p className="text-gray-600">価値あるものを、求める人へ</p>
      </div>
      <h1 className="text-2xl font-bold text-gray-800 mb-8">会社概要</h1>
      <div className="mb-8">
        <table className="w-full border-collapse mb-8">
          <tbody>
            <tr>
              <th className="bg-gray-50 font-semibold text-gray-700 w-32 p-3 text-left border-b">事業者名</th>
              <td className="p-3 border-b text-gray-600">Buzz Lab.</td>
            </tr>
            <tr>
              <th className="bg-gray-50 font-semibold text-gray-700 p-3 text-left border-b">代表</th>
              <td className="p-3 border-b text-gray-600">横田 愛実</td>
            </tr>
            <tr>
              <th className="bg-gray-50 font-semibold text-gray-700 p-3 text-left border-b">設立</th>
              <td className="p-3 border-b text-gray-600">2025年7月</td>
            </tr>
            <tr>
              <th className="bg-gray-50 font-semibold text-gray-700 p-3 text-left border-b">事業内容</th>
              <td className="p-3 border-b text-gray-600">美容・健康領域特化マーケティング支援</td>
            </tr>
            <tr>
              <th className="bg-gray-50 font-semibold text-gray-700 p-3 text-left border-b">所在地</th>
              <td className="p-3 border-b text-gray-600">東京都</td>
            </tr>
            <tr>
              <th className="bg-gray-50 font-semibold text-gray-700 p-3 text-left border-b">連絡先</th>
              <td className="p-3 border-b text-gray-600">080-5939-9959<br />info@buzz-force.com</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="bg-gray-50 rounded-lg p-6 mb-8">
        <h2 className="text-lg font-bold text-gray-800 mb-3">事業理念</h2>
        <p className="text-gray-600 mb-2">美容・サプリメント業界での豊富な実務経験を活かし、本当にいいものを作る人たちとそれを求める人たちを繋ぐマーケティング支援を提供いたします。</p>
        <p className="text-gray-600">想いが、ちゃんと届く世界を目指して、企業の成長と消費者の満足度向上に貢献してまいります。</p>
      </div>
      <div className="mb-8">
        <h2 className="text-lg font-bold text-gray-800 mb-3">主な事業内容</h2>
        <ul className="list-disc pl-6 text-gray-600">
          <li>潜在市場発掘・マーケティング戦略設計</li>
          <li>Webサイト・LP制作</li>
          <li>パッケージデザイン・クリエイティブ制作</li>
          <li>SNS運用・Web広告運用</li>
          <li>ブランディング支援</li>
          <li>薬機法対応コンテンツ制作</li>
        </ul>
      </div>
      <div className="bg-gray-50 rounded-lg p-6 mb-8">
        <h2 className="text-lg font-bold text-gray-800 mb-3">代表プロフィール</h2>
        <p className="text-gray-800 font-semibold mb-1">横田 愛実</p>
        <p className="text-gray-600 mb-2">大学卒業、WEB制作会社、広告代理店、ECプラットフォームでのデジタルマーケティング領域で活躍。美容・サプリ業界での豊富な実務経験が強みです。</p>
        <p className="text-gray-600 mb-1">【主な経歴】</p>
        <p className="text-gray-600 mb-1">・ECプラットフォーム マーケティングマネージャー<br />・ブランディングエージェンシー Webディレクター<br />・楽天グループ ヘルスケア事業部 業務支援</p>
      </div>
      <div className="text-center mt-8">
      </div>
    </div>
  );
} 