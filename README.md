# Future Tech

## Description

landing

1. Design: [link](https://www.figma.com/design/YzTDRV7OaSoeCUBNYaoCZV/FutureTech?node-id=18-214&p=f)

2. Deploy: [link](https://ivan1986mrpl.github.io/MK-ai-landing/dist/)

3. Technologies: HTML, SCSS, Javascript, Vite, Eslint, Stylelint, Prettier

4. Screenshot:
   <img alt="image" src="https://github.com/user-attachments/assets/386daf45-1eee-4acd-ae90-8b83a92b17e3" />

5. Google Page Speed:
   <img  alt="image" src="https://github.com/user-attachments/assets/4b4432ec-d4c1-4b3f-96e6-f29a1bf6428f" />

- init: - используется для начала проекта/таска.
- feat: - это реализованная новая функциональность из технического задания (добавил поддержку зумирования, добавил footer, добавил карточку продукта).
- fix: - исправил ошибку в ранее реализованной функциональности.
- refactor: - новой функциональности не добавлял/поведения не менял. Файлы в другие места положил, удалил, добавил. Улучшил алгоритм, без изменения функциональности.
- docs: - используется при работе с документацией/readme проекта.
- style: - используется при изменениях стиля и оформления кода.
- chore: - используется, когда не меняются исходные файлы и файлы тестов.

- npm i
- npm run dev
- npm run build
- npm run preview

- npm run lint:js
- npm run lint:js:fix

- npm run lint:css
- npm run lint:css:fix

- npm run format
- npm run format:fix

- npm run lint
- npm run lint:fix

for branch in $(git for-each-ref --format='%(refname:short)' refs/heads/); do
  echo "🔄 Обновление ветки: $branch"
  git checkout "$branch" || continue
if git show-ref --verify --quiet "refs/remotes/origin/$branch"; then
    git branch --set-upstream-to=origin/$branch "$branch"      
    git pull
  else
    echo "⚠️  У ветки '$branch' нет соответствующей ветки на origin."
fi
done
