1. Области хранения данных: - БД на базе JSON-Server; - BFF; - redux store;

2. Сущности приложения:

    - Пользователь: БД (список пользователей), BFF(сессия текущего пользователя), store( отображение в браузере );
    - Роль пользователя : БД (список ролей), BFF(роль текущего пользователя), store( отображение роли в браузере );
    - Комментарий : БД (список комментариев), store( отображение в браузере );
    - Статья : БД (список статей), store( отображение в браузере );

3. Таблица БД:

    - Пользователь: id / login / password / roles_id / registred_at;
    - Роль пользователя: id / name
    - Комментарий: id / content / autor_id / post_id
    - Статья: id / title / content / publised_at / image_url

4. Схема состояния на BFF :

    - Сессия текущего пользователя: login / passowrd / role;

5. Схема для redux store(на кленте) :
    - user: id / login / roleId;
    - posts: массив post: id / title / publisedAt / imgURL / commentsCount
    - post: id / title / imgURl / content / publisedId / comments: массив comment: id / autor / content / publisedId
    - users: массив user: id / login /registredAt / role
