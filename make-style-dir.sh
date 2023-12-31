#!/bin/bash

# ディレクトリ名を引数から受け取る
dir_name="$1"

# ディレクトリが存在しない場合に作成
if [ ! -d "$dir_name" ]; then
  mkdir "$dir_name"
else
  echo "指定のディレクトリ名はすでに存在します．"
fi

# cssディレクトリを作成
css_dir="$dir_name/css"
mkdir -p "$css_dir"

# style.scssファイルを作成
touch "$css_dir/style.scss"

# jsディレクトリを作成
js_dir="$dir_name/js"
mkdir -p "$js_dir"

# main.jsファイルを作成
touch "$js_dir/main.js"

# カレントディレクトリのindex.htmlをコピー
cp "template.html" "$dir_name/index.html"

echo "ディレクトリ構造を作成しました: $dir_name"

# ディレクトリ構造を表示
tree "$dir_name"
