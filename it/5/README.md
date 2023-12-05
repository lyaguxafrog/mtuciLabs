
```sql
-- Создание таблиц
CREATE TABLE students (
  id INTEGER PRIMARY KEY,
  name VARCHAR(255),
  group_id INTEGER NOT NULL
);

CREATE TABLE student_marks (
  student_id INTEGER PRIMARY KEY,
  math_mark_average FLOAT,
  physics_mark_average FLOAT,
  python_mark_average FLOAT
);

CREATE TABLE groups (
  id INTEGER PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description VARCHAR(255)
);

-- Вставка данных в таблицы
INSERT INTO groups (id, name, description) VALUES
(1, 'Группа А', 'Описание для Группы А'),
(2, 'Группа Б', 'Описание для Группы Б');

INSERT INTO students (id, name, group_id) VALUES
(1, 'Студент 1', 1),
(2, 'Студент 2', 1),
(3, 'Студент 3', 2);

INSERT INTO student_marks (student_id, math_mark_average, physics_mark_average, python_mark_average) VALUES
(1, 90.5, 85.0, 92.5),
(2, 88.0, 90.5, 87.0),
(3, 75.5, 82.0, 78.5);
```

Теперь напишем запросы с фильтрацией для каждой таблицы:

1. **Фильтрация таблицы Students:**
   ```sql
   -- Выбор студентов из Группы А
   SELECT * FROM students WHERE group_id = 1;
   ```

2. **Фильтрация таблицы Student Marks:**
   ```sql
   -- Выбор студентов с средней оценкой по математике больше 85
   SELECT * FROM student_marks WHERE math_mark_average > 85.0;
   ```

3. **Фильтрация таблицы Groups:**
   ```sql
   -- Выбор групп с определенным именем
   SELECT * FROM groups WHERE name = 'Группа А';
   ```

Пожалуйста, замените эти запросы реальными данными и фильтрами в соответствии с вашими требованиями. После выполнения этих запросов вы можете создать снимки экрана с результатами или экспортировать их в файл в зависимости от вашей системы управления базой данных. Если у вас есть какие-либо вопросы или нужна дополнительная помощь, не стесняйтесь спрашивать!
