### Быстрый старт

Установка зависимостей
```bash
npm i
npm i --save-dev ajv
```

запуск в режиме development-mode: webpack.config.js
```bash
npm run start-dev
```

запуск в режиме production-mode: webpack.prod.js
```bash
npm run start-prod
```  

запуск JSON-сервера
```bash
json-server --watch db.json
```

запуск линтера при комите
```bash
git commit -a -m "commit_message"
```

После запуска одного из режимов страница откроется автоматически, если ето не произошло, то необходимо перейти по ссылке http://localhost:8080/
