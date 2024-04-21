## share-money-front

ShareMoneyのフロントエンドのリポジトリです。

## 環境

- Next.js 14.4.2
- TypeScript 5.4.5

## 環境構築

下記の流れに従って、環境構築を行なってください。

#### clone

```
git clone git@github.com:yusuke-takatsu/share-money-front.git
```

#### install

```
make init
```

#### コンテナ作成
```
make up
```

#### コンテナへの接続
```
make app
```


#### push 前にやること

下記コマンド実行し、コードがフォーマットされていることを確認

```
make format
```


※準備中