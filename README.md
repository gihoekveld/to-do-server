# To do API

This is a simple API to manage a to do list developed with NodeJS and Express. This API will be used by the React Project [To do List](https://github.com/gihoekveld/to-do-list).

## Installation

Clone the repository and install the dependencies.

```bash
git clone
cd to-do-server
npm install
```

## Usage

To run the API, use the following command:

```bash
npm run dev
```

## Entities

Task

```json
{
  "id": 1,
  "title": "Task 1",
  "status": "to-do",
  "created_at": "2020-05-01T00:00:00.000Z"
}
```

## Endpoints

### Tasks

| Method    | Route                                    | Description                     |
| :-------- | :--------------------------------------  | :------------------------------ |
| `GET`     | [/tasks](#list-tasks)                    | List all tasks |
| `POST`    | [/tasks](#create-task)                   | Creation of the new task   |
| `PATCH`   | [/tasks/:id/status](#change-task-status) | Change task status by id        |
| `PUT`     | [/tasks/:id](#update-task-content)       | Update task content by id   |
| `DELETE`  | [/tasks/:id](#delete-task)               | Delete task by id   |

#### List tasks

`GET` _/tasks_

##### Response

```json
[
  {
    "id": "99e0e540-d3f4-4d89-acf4-2c0730c747b9",
    "title": "Task 1",
    "status": "to-do",
    "created_at": "2020-05-01T00:00:00.000Z"
  },
  {
    "id": "d7bbb5ec-1b52-4f26-b2a4-688c3ce3c7cd",
    "title": "Task 2",
    "status": "done",
    "created_at": "2020-05-01T00:00:00.000Z"
  }
]
```

#### Create task

`POST` _/tasks_

##### Request

```json
{
  "title": "Task 1"
}
```

##### Response

```json
{
  "id": "99e0e540-d3f4-4d89-acf4-2c0730c747b9",
  "title": "Task 1",
  "status": "to-do",
  "created_at": "2020-05-01T00:00:00.000Z"
}
```

#### Change task status

`PATCH` _/tasks/:id/status_

##### Request 

```json
{
  "status": "done"
}
```

##### Response

```json
{
  "status": "done"
}
```

#### Update task content

`PUT` _/tasks/:id_

##### Request 

```json
{
  "title": "Task 1 updated"
}
```

##### Response

```json
{
  "id": "99e0e540-d3f4-4d89-acf4-2c0730c747b9",
  "title": "Task 1 updated",
  "status": "to-do",
  "created_at": "2020-05-01T00:00:00.000Z"
}
```

#### Delete task

`DELETE` _/tasks/:id_

##### Request 

```json
{
  "id": "99e0e540-d3f4-4d89-acf4-2c0730c747b9"
}
```

##### Response

```json
{ 
  "message": "Task deleted" 
}
```
