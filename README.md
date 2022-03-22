
# PlantLovers Application by K&Ł Group

Link to the newest version: https://plant-lovers.herokuapp.com

## Team:

Mentors:

- Kamil Zasada
- Łukasz Żurawski

Members:

- Mateusz Wyborski
- Joanna Czyżewska
- Rafał Pryma
- Ewelina Mężyk
- Donata Bruderek
<br></br>
### Table of Contents

- [General Information](#generalinformation)
- [Technologies](#technologies)
- [Requirements](#requirements)
- [Setup](#setup)
<br></br>
### General Information
---
The team worked as part of the CodersCamp course. The application was made by the course participants.

The aim of the project was to create our own API, which we will use in the next modules of the course. Using the database, we can create a user, log in, edit password, create, edit and delete offers, as well as add a category and height of plants. 

Since our application is implemented by several developers, we decided to use the Prettier library to format the code.
<br></br>
### Technologies
---
This project was executed using the following technologies:

- Node.js
- Express.js
- MongoDB
- Mongoose
- Nodemailer
- Joi
- JWT
- GIT
  <br></br>

### Tools
---
- Visual Studio Code
- Npm
- Nodemon
- Trello
- Lucidchart


### Requirements
---
To be able to run our project locally, you need to have installed **node** and **npm**. If you do not know if you have it installed on your computer follow these steps:

- In terminal run command: `node -v` If you received a number like `v14.15.4` you already have installed **node** on your computer

- Same for npm: `npm -v` - should apper message with npm version, for example `6.14.10`, whitch menas that you have **node package manager** on your computer.

- Otherwise, you will have to install it from here [click](https://nodejs.org/en/download/) 
- _After that you can run again the command from the first line just to confirm that you have succesfully installed required_ **node** and **npm**

### Setup
---
1. To run this project locally clone repository:
```
git clone https://github.com/Coderscamp-2021-2022-Lukasz-Kamil/Project3.Node.PlantLovers.git
```
2. Go to the root folder of project: `cd server`.
3. Install dependencies: `npm install`.
4. To run project in developer mode you have to run `npm run dev`, but when you want to just run it, type: npm run start.

    Application will start on localhost:3000, which would be confirmed with message: 
    `Server started at http://localhost:3000`

<br>

## Method: POST
---

<br>

### **/users/register**
<br>

Create new user. Example body in that request:
```json
{
    "email": "testmail@mail.com",
    "password": "12345678",
    "confirmPassword": "12345678"

}
```
Response example:
```json
{
  "message": "User was added",
  "data": {
    "email": "testmail@mail.com",
    "isAdmin": false,
    "favourites": [],
    "_id": "623a1f00610c4f6cead01e60"
  }
}
```

[![Screenshot-3.png](https://i.postimg.cc/jSTJG85P/Screenshot-3.png)](https://postimg.cc/JGTnX5jz)

<br>

If the provided data fails validation, the following message will be displayed: `Invalid data`
<br>

## Method: POST
---

### **/users/login**
<br>
Login data for created user. Example body in that request:

<br>

```json
{
    "email": "testmail@mail.com",
    "password": "12345678"
}
```

If the provided data are invalid, the following message will be displayed: `Invalid email or password`. Otherwise: `You have to activate your account` and an email with an activation link is sent.

[![Screenshot-4.png](https://i.postimg.cc/6QbVJDyT/Screenshot-4.png)](https://postimg.cc/2qvLn9df)

## Method: POST
---

### **/categories**
<br>
Create category. Example body in that request:

<br>

```json
{
	"name": "shrubs"
}
```
[![Screenshot-5.png](https://i.postimg.cc/xd7QZ3VM/Screenshot-5.png)](https://postimg.cc/rdS70Wmw)

If the provided data are invalid, the following message will be displayed: `Invalid data`. If category was created successfully: `Category created` and `Category already exist` if category exist.

## Method: POST
---

### **/heights**
<br>
Create Height. Example body in that request:

<br>

```json
{
	"range": "108"
}
```

If the provided data are invalid, the following message will be displayed: `Invalid data`. If height was created successfully: `Height created` and `Height already exist` if height exist.

## Method: POST
---

### **/offers**
<br>
Create Offer. Example body in that request:

<br>

```json
{
	"title": "Rose",
    "description": "Lorem ipsum Lorem Ipsum is simply dummy text of the text.",
    "city": "Sanok",
    "phoneNumber": "983743783"
}
```

If the provided data are invalid, the following message will be displayed: `Invalid data`. If height was created successfully: `Height created` and `Height already exist` if height exist.

<br>

## Method: GET
---

### **/categories**
<br>
Fetching categories from our database. Params are optional. Without them, API return all records, example of response:

<br>

```json

[
  {
    "_id": "62264742fa5f52e14a5e4944",
    "name": "superCategory",
    "__v": 0
  },
  
  {
    "_id": "623a4712db6477afcad4d52a",
    "name": "shrubs",
    "__v": 0
  }
]
```
<br>

## Method: GET
---

### **/heights**
<br>
Fetching heights from our database. Example of response:

<br>

```json

[
  {
    "_id": "623a411ad32b3e7b591c0679",
    "range": "060",
    "__v": 0
  }
]
```
<br>

## Method: PUT
---

### **/users/:id**

<br>

Update user. Example body in that request:
```json
{
    "city": "Wrocław"

}
```
Before update:
```json
{
  "message": "User was updated",
  "data": {
    "email": "abcd@test.com",
    "isAdmin": false,
    "phoneNumber": "123456789",
    "city": "Kalisz",
    "favourites": [],
    "_id": "621f32d82312944d93f5ff81"
  }
}
```
Response after update:
```json
{
  "message": "User was updated",
  "data": {
    "email": "abcd@test.com",
    "isAdmin": false,
    "phoneNumber": "123456789",
    "city": "Wrocław",
    "favourites": [],
    "_id": "621f32d82312944d93f5ff81"
  }
}
```

<br>

<!-- If the provided data fails validation, the following message will be displayed: `Invalid data` -->
<br>

## Method: DELETE
---

### **/users/:id**
<br>

Delete user. Example body in that request: