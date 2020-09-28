# アプリケーション名
 
Life Record

# アプリケーション概要
 
日々の生活習慣を記録して、それらを分かりやすく比較できます。
 
# URL
 
https://liferecord-app.herokuapp.com/
 
# テスト用アカウント
 
ワンクリックでゲストログインできます。
 
# 利用方法
 
* 食事 運動 睡眠 水分 の4種類の記録画面があります。
* 食事 運動 睡眠 は開始時にアプリ上のストップウォッチで時間を測り、終了時に記録するボタンを押して時を記録します。
* 最後にメモを記入して終了ボタンを押すと記録完了です。
* 水分はフォームに飲んだ水をml単位で入力しボタンを押すと記録完了です。
* 画面右上のユーザー名を押すと一週間分の詳細画面が見れます
 
# 目指した課題解決
 
 生活習慣を可視化して、規則正しい生活を送られるようにする

# 要件
 
* 日々の生活習慣を分かりやすく可視化する
* 生活習慣を見直すために、生活を記録する
* 飲んだ量を可視化して、あとどれぐらい飲んだらいいかを簡単な図で表す
 
# 実装した機能についてのGIFと説明

* 食事( 運動 睡眠 )の記録機能
  [![Image from Gyazo](https://i.gyazo.com/51c05cd08fa7be254add66ae8319440e.gif)](https://gyazo.com/51c05cd08fa7be254add66ae8319440e)

* 水分の記録機能
  [![Image from Gyazo](https://i.gyazo.com/ef0434457300726e2215df1f49ccc430.gif)](https://gyazo.com/ef0434457300726e2215df1f49ccc430)
 
# 実装予定の機能

* 簡単なカロリー計算

# データベース設計

<img width="829" alt="life-record-er" src="https://user-images.githubusercontent.com/69132252/94428036-05aaca80-01cb-11eb-8bff-2feb24eb3b96.png">

# ローカルでの動作方法

* % git clone https://github.com/Yoppippi/liferecord_2.git
* % cd liferecord_2.git
* % bundle install
* % yarn install
* % rails db:create
* % rails db:migrate

* ruby '2.6.5'
* rails '6.0.0'
* gem 'bootstrap', '4.3.1'
* gem 'jquery-rails'
* gem 'devise'
