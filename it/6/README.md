Для выполнения этих задач, предположим, что у вас уже есть таблица "product". Первым делом создадим таблицу "worker" и внесем в неё данные:

```sql
-- Создание таблицы "worker"
CREATE TABLE worker (
    worker_id INTEGER PRIMARY KEY,
    shop_id INTEGER REFERENCES product (id),
    name VARCHAR(255),
    salary INTEGER NOT NULL,
    position VARCHAR(255)
);

-- Внесение данных о сотрудниках
INSERT INTO worker (worker_id, shop_id, name, salary, position) VALUES
    (1, 101, 'Иван Иванов', 50000, 'Менеджер'),
    (2, 102, 'Мария Петрова', 60000, 'Продавец'),
    (3, 101, 'Александр Сидоров', 55000, 'Кассир'),
    (4, 103, 'Екатерина Иванова', 48000, 'Продавец');
```

Теперь рассмотрим примеры запросов с операциями группировки и сортировки для таблицы "worker":

1. Запрос на получение средней зарплаты по должностям:

```sql
SELECT position, AVG(salary) AS avg_salary
FROM worker
GROUP BY position;
```

2. Запрос на получение количества сотрудников в каждом магазине:

```sql
SELECT shop_id, COUNT(*) AS num_workers
FROM worker
GROUP BY shop_id;
```

3. Запрос на получение списка сотрудников, отсортированных по убыванию зарплаты:

```sql
SELECT * FROM worker
ORDER BY salary DESC;
```

Теперь рассмотрим примеры запросов с использованием агрегатных функций для таблицы "worker":

1. Запрос на вычисление общей суммы зарплаты всех сотрудников:

```sql
SELECT SUM(salary) AS total_salary
FROM worker;
```

2. Запрос на вычисление максимальной зарплаты среди сотрудников:

```sql
SELECT MAX(salary) AS max_salary
FROM worker;
```

Эти запросы могут служить основой для дальнейшего анализа и управления данными в таблице "worker".
