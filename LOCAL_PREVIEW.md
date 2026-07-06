# Local preview / 本地预览

The site is based on [luost26/academic-homepage](https://github.com/luost26/academic-homepage).

## Start the Jekyll preview

```powershell
cd D:\Documents\汇总\academic-homepage-preview
$env:Path = 'C:\Ruby33-x64\bin;' + $env:Path
bundle install
bundle exec jekyll serve
```

Open <http://127.0.0.1:4000/>. Use the language button in the top navigation to switch between English and Chinese.

打开 <http://127.0.0.1:4000/>，通过顶部导航栏的语言按钮切换中英文。

## Main content locations / 主要内容位置

- `_data/profile.yml`: profile, education, research experience, and awards / 个人资料、教育与科研经历、奖项
- `_publications/`: publications / 论文
- `_news/`: news / 动态
- `assets/images/photos/portrait.png`: portrait / 头像
- `assets/Weichao_Pan_CV_CN.pdf`: Chinese CV / 中文简历

This preview is configured for the root GitHub Pages address `https://JEFfersusu.github.io`.
