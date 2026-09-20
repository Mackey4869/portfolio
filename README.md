# Portfolio

AI / Webプロダクトの実務開発経験と研究・プロジェクトを掲載する、Next.js製のポートフォリオです。

## ローカルで確認する

Node.js 20以上とpnpmを使用します。

```bash
pnpm install
pnpm dev
```

起動後、ブラウザで <http://localhost:3080> を開きます。終了するときは、ターミナルで `Ctrl + C` を押します。

スマートフォン表示は、Chrome DevToolsを開いてデバイスツールバーを有効にし、幅375px前後で確認できます。実機から確認する場合は、開発サーバーが表示するNetwork URLへ、同じWi-Fi内の端末からアクセスします。

## 検証

```bash
pnpm lint
pnpm build
```

## コンテンツと写真

- 日本語・英語の文章、リンク、更新日は `data/portfolio.ts` で管理しています。
- 掲載写真は `public/images` に置き、同ファイル内の画像パスを変更します。
- 公開前に画像をWeb向けサイズへ縮小し、GPSを含むEXIFメタデータを削除してください。
