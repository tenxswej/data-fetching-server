<h1 align="center"> API Documentation </h1>

Installing dependencies

> npm install

Starting the sever

> npm start

# Users

## Schema

| Schema         |                |          |              |     |
| -------------- | -------------- | -------- | ------------ | --- |
| **\_id**       | **username**   | **name** | **password** |     |
| auto-generated | auto-generated | string   | string       |     |

## Get users

| Request    |                              |     |
| ---------- | ---------------------------- | --- |
| **Method** | **URL**                      |     |
| GET        | http://localhost:3000/users/ |     |

| Response - Success |                 |          |     |
| ------------------ | --------------- | -------- | --- |
| **Name**           | **Status Code** | **Data** |     |
| User list          | 200             | JSON     |     |

## Get user detail

| Request    |                                                      |     |
| ---------- | ---------------------------------------------------- | --- |
| **Method** | **URL**                                              |
| GET        | http://localhost:3000/users/detail?username=username |     |

| Response - Success |                 |          |     |
| ------------------ | --------------- | -------- | --- |
| **Name**           | **Status Code** | **Data** |     |
| User               | 200             | JSON     |     |

| Response - Failed |                 |          |     |
| ----------------- | --------------- | -------- | --- |
| **Name**          | **Status Code** | **Data** |     |
| Invalid data      | 400             | text     |     |
| User not found    | 404             | text     |     |

## Register

| Request    |          |                |                                       |     |
| ---------- | -------- | -------------- | ------------------------------------- | --- |
| **Method** | **Body** | **Properties** | **URL**                               |     |
| POST       | JSON     | name, password | http://localhost:3000/users/register/ |     |

| Response - Success |                 |          |     |
| ------------------ | --------------- | -------- | --- |
| **Name**           | **Status Code** | **Data** |     |
| user created       | 201             | JSON     |     |

| Response - Failed |                 |          |     |
| ----------------- | --------------- | -------- | --- |
| **Name**          | **Status Code** | **Data** |     |
| User name taken   | 200             | text     |     |
| Invalid data      | 400             | text     |     |

## Login

| Request    |          |                |                                    |     |
| ---------- | -------- | -------------- | ---------------------------------- | --- |
| **Method** | **Body** | **Properties** | **URL**                            |     |
| POST       | JSON     | name, password | http://localhost:3000/users/login/ |     |

| Response - Success |                 |          |     |
| ------------------ | --------------- | -------- | --- |
| **Name**           | **Status Code** | **Data** |     |
| Logged in          | 200             | JSON     |     |

| Response - Failed   |                 |          |     |
| ------------------- | --------------- | -------- | --- |
| **Name**            | **Status Code** | **Data** |     |
| Invalid data        | 400             | text     |     |
| Invalid credentials | 403             | text     |     |

## Logout

| Request    |          |             |                |                                     |     |
| ---------- | -------- | ----------- | -------------- | ----------------------------------- | --- |
| **Method** | **Body** | **headers** | **Properties** | **URL**                             |     |
| POST       | JSON     | token       | name, password | http://localhost:3000/users/logout/ |     |

| Response - Success |                 |          |     |
| ------------------ | --------------- | -------- | --- |
| **Name**           | **Status Code** | **Data** |     |
| Logged out         | 200             | JSON     |     |

| Response - Failed   |                 |          |     |
| ------------------- | --------------- | -------- | --- |
| **Name**            | **Status Code** | **Data** |     |
| Invalid data        | 400             | text     |     |
| Invalid credentials | 403             | text     |     |

## Edit user

| Request    |          |             |                |                                        |     |
| ---------- | -------- | ----------- | -------------- | -------------------------------------- | --- |
| **Method** | **Body** | **headers** | **Properties** | **URL**                                |     |
| POST       | JSON     | token       | name           | http://localhost:3000/users/edit-user/ |     |

| Response - Success |                 |          |     |
| ------------------ | --------------- | -------- | --- |
| **Name**           | **Status Code** | **Data** |     |
| User name changed  | 200             | JSON     |     |

| Response - Failed   |                 |          |     |
| ------------------- | --------------- | -------- | --- |
| **Name**            | **Status Code** | **Data** |     |
| Invalid data        | 400             | text     |     |
| Invalid credentials | 403             | text     |     |

# Posts

## Schema

| Schema         |           |          |         |     |
| -------------- | --------- | -------- | ------- | --- |
| **\_id**       | **title** | **body** | **tag** |     |
| auto-generated | string    | string   | array   |     |

## Post list

| Request    |                              |     |
| ---------- | ---------------------------- | --- |
| **Method** | **URL**                      |     |
| GET        | http://localhost:3000/posts/ |     |

| Response - Success |                 |          |     |
| ------------------ | --------------- | -------- | --- |
| **Name**           | **Status Code** | **Data** |     |
| Posts              | 200             | JSON     |     |

## Post detail

| Request    |                                             |     |
| ---------- | ------------------------------------------- | --- |
| **Method** | **URL**                                     |     |
| GET        | http://localhost:3000/posts/post-detail/:id |     |

| Response - Success |                 |          |     |
| ------------------ | --------------- | -------- | --- |
| **Name**           | **Status Code** | **Data** |     |
| Post detail        | 200             | JSON     |     |

| Response - Failed |                 |          |     |
| ----------------- | --------------- | -------- | --- |
| **Name**          | **Status Code** | **Data** |     |
| Invalid data      | 400             | text     |     |
| Post not found    | 404             | text     |     |

## Post Filter

| Request    |                                                                          |     |
| ---------- | ------------------------------------------------------------------------ | --- |
| **Method** | **URL**                                                                  |     |
| GET        | http://localhost:3000/posts/posts-filter?title=title&&body=body&&tag=tag |     |

| Response - Success |                 |          |     |
| ------------------ | --------------- | -------- | --- |
| **Name**           | **Status Code** | **Data** |     |
| Post filter        | 200             | JSON     |     |

| Response - Failed |                 |          |     |
| ----------------- | --------------- | -------- | --- |
| **Name**          | **Status Code** | **Data** |     |
| Posts not found   | 404             | text     |     |
| Invalid data      | 400             | text     |     |

## New Post

| Request    |          |             |                  |                                       |     |
| ---------- | -------- | ----------- | ---------------- | ------------------------------------- | --- |
| **Method** | **Body** | **headers** | **Properties**   | **URL**                               |     |
| POST       | JSON     | token       | title, body, tag | http://localhost:3000/posts/new-post/ |     |

| Response - Success |                 |          |     |
| ------------------ | --------------- | -------- | --- |
| **Name**           | **Status Code** | **Data** |     |
| Post created       | 200             | JSON     |     |

| Response - Failed   |                 |          |     |
| ------------------- | --------------- | -------- | --- |
| **Name**            | **Status Code** | **Data** |     |
| Invalid data        | 400             | text     |     |
| Invalid credentials | 403             | text     |     |

## Edit Post

| Request    |          |             |                |                                        |     |
| ---------- | -------- | ----------- | -------------- | -------------------------------------- | --- |
| **Method** | **Body** | **headers** | **Properties** | **URL**                                |     |
| PUT        | JSON     | token       | body, tag      | http://localhost:3000/posts/edit-post/ |     |

| Response - Success |                 |          |     |
| ------------------ | --------------- | -------- | --- |
| **Name**           | **Status Code** | **Data** |     |
| Post edited        | 200             | JSON     |     |

| Response - Failed   |                 |          |     |
| ------------------- | --------------- | -------- | --- |
| **Name**            | **Status Code** | **Data** |     |
| Invalid data        | 400             | text     |     |
| Invalid credentials | 403             | text     |     |
| Post not found      | 404             | text     |     |

## Delete Post

| Request    |             |                                             |     |
| ---------- | ----------- | ------------------------------------------- | --- |
| **Method** | **headers** | **URL**                                     |     |
| DELETE     | token       | http://localhost:3000/posts/delete-post/:id |     |

| Response - Success |                 |          |     |
| ------------------ | --------------- | -------- | --- |
| **Name**           | **Status Code** | **Data** |     |
| Post deleted       | 200             | JSON     |     |

| Response - Failed   |                 |          |     |
| ------------------- | --------------- | -------- | --- |
| **Name**            | **Status Code** | **Data** |     |
| Invalid data        | 400             | text     |     |
| Invalid credentials | 403             | text     |     |
| Post not found      | 404             | text     |     |
