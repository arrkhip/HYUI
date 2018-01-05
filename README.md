УСТАНОВКА GULP 
=====================
$ npm i  Установить зависимости

$ gulp  Запустить сборку, сервер и слежение за файлами




ОСНОВНЫЕ ПРАВИЛА ПРОЕКТА 
=====================
* Используется именование классов, файлов и переменных по методлогии БЭМ.
https://ru.bem.info/methodology/quick-start/

* Каждый БЭМ-блок в своей папке внутри ./src/blocks/ (стили, js, картинки, разметка; обязателен только стилевой файл).

* Есть глобальные файлы: стилевые, js, шрифты, картинки.

* Диспетчер подключения стилей ./src/less/style.less генерируется автоматически при старте любой gulp-задачи.


ОСНОВНЫЕ КРИТЕРИИ ВЁРСТКИ
=====================



БЛОКИ
=====================
src/blocks
 - project
 - lib

 В сборке находятся 2 типа блоков:  
  - Блоки библиотеки.
    Используются из проекта в проект являсь заготовкой.
  - Проектные блоки.
    Используются только в данном проекте.

  Способ применения
   - подключить нужный блок библиотеки в src/less/style.less, src/pug/connect/_ blocks.pug. ОБЯЗАТЕЛЬНО ПЕРЕД БЛОКАМИ ПРОЕКТА.
   - Переопределить на уровне проекта (если требуется).
     Пример:
      blocks/lib/btn/btn.less
      .btn {
        border: 1px solid grey;
      }
      
      blocks/project/btn/btn.less
      .btn {
        font-size: 14px;
      }

      В сss
      .btn {
        border: 1px solid grey;
        font-size: 14px;
      }

  Создание блоков проекта
    - Находясь в корне проекта $ node newBlock.js blockName 
    - после чего в src/blocks/project будет создана дириктория с именем блока, в которой будут созданы 2 файла (blockName.pug, blockName.less) и автоматически подключены в src/less/style.less, src/pug/connect/_ blocks.pug.
 
Каждый блок лежит в ./src/blocks/ в своей папке. Каждый блок — как минимум, папка и одноимённый less-файл.

Возможное содержимое блока:

demo-block/               # Папка блока
  img/                    # Изображения, используемые блоком и обрабатываемые автоматикой сборки
  demo-block.less         # Стилевой файл блока
  demo-block.js           # js-файл блока
  demo-block.pug          # Разметка блока 
  readme.md               # Какое-то пояснение
