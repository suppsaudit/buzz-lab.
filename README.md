# Buzz Lab. Website

美容・健康領域特化で想いを届けるマーケティング会社のウェブサイトです。

## Netlifyデプロイ手順

### 1. 環境変数の設定
Netlifyのダッシュボードで以下の環境変数を設定してください：

- `RESEND_API_KEY`: ResendのAPIキー
- `NEXT_PUBLIC_SITE_URL`: サイトのURL（例：https://your-site-name.netlify.app）

### 2. デプロイ設定
- ビルドコマンド: `npm run build`
- パブリッシュディレクトリ: `.next`
- Node.js バージョン: 18以上

### 3. プラグイン
`@netlify/plugin-nextjs` プラグインが自動的にインストールされます。

## 開発環境

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev

# ビルド
npm run build

# 本番サーバーの起動
npm start
```

## 機能

- レスポンシブデザイン
- お問い合わせフォーム（Resend連携）
- モダンなUI/UX
- SEO最適化
