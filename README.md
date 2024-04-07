# PaletteaUI

## 概要

PaletteaWeb用のUIライブラリ

## 設計思想

Container/Presentationalパターンを採用してUIコンポーネントを構築しており、このリポジトリでは表示に特化したPresentational Componentsを責務としている。  
また、UIの設計にはAtomic Designの原則を取り入れ、小さな再利用可能な部品から大きなUI構造へとシステマティックに組み上げている。  
さらに、このようなコンポーネントの開発と管理にはStorybookを活用し、各コンポーネントが独立した環境で効率的に開発・テストされる体制を整えている。  

## 補足情報

Storybookは以下のURLからアクセス可。  
https://kyohei-norita.github.io/palettea-ui/?path=/docs/configure-your-project--docs
