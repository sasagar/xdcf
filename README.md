# X DESIGNERS　CAREER FES

XDCFの公式サイトリポジトリです。

Next.jsで記述されています。(v15.0.3)  
自動ビルドは `pnpm` で実行されます。

## Getting Started

[!warning]
ビルドの際には `.env` ファイルが必要です。  
必要なファイルは個別にご連絡ください。

パッケージのインストール:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

ローカルサーバーの起動:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

無事に起動できれば [http://localhost:3000](http://localhost:3000) で表示確認ができます。

フォントのローディングはAdobe Fontsを利用しています。  
このローディングに際してURLを指定するための `.env` ファイルか環境変数が必要になります。  
コントリビュートの際には事前にサイト制作者へご連絡ください。  
