# PlantLovers Application by K&Ł Group

Link to the frontend version: https://celadon-empanada-d254d2.netlify.app/ 
Link to the backend version: https://plant-lovers.herokuapp.com

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
  <br>

### General Information

---

The team worked as part of the CodersCamp course. The application was made by the course participants.

The aim of the project was to create our own API, which we will use in the next modules of the course. Using the database, we can create, log in, and edit a user, create, edit and delete offers, as well as add a category and height of plants.

Since our application is implemented by several developers, we decided to use the Prettier library to format the code.
<br>

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

<br>

### **When you run the project locally, the base path is:**

`http://localhost:3000/`

## Method: POST

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

If the provided data fails validation, the following messages will be displayed: 
`"email" is required`
`"email" must be a valid email`
`"password" is required`
`"password" length must be at least 6 characters long`

<br>

## Method: POST

### **/users/login**

<br>

Login data for created user. Example body in that request:

```json
{
  "email": "testmail@mail.com",
  "password": "12345678"
}
```

If the provided data are invalid, the following message will be displayed: `Invalid email or password`. Otherwise: `You have to activate your account` and an email with an activation link is sent.

[![Screenshot-4.png](https://i.postimg.cc/6QbVJDyT/Screenshot-4.png)](https://postimg.cc/2qvLn9df)

<br>

## Method: POST

### **/categories**

<br>

Create category. Only an user with admin permissions can add an category. Example body in that request:

```json
{
  "name": "shrubs"
}
```

[![Screenshot-5.png](https://i.postimg.cc/xd7QZ3VM/Screenshot-5.png)](https://postimg.cc/rdS70Wmw)

If the provided data are invalid, the following message will be displayed: `"name" is required`
`"name" length must be at least 3 characters long` 
`"name" length must be less than or equal to 30 characters long` 
If category was created successfully: `Category created` and `Category already exist` if category exist.

<br>

## Method: POST

### **/heights**

<br>

Create Height. Only an user with admin permissions can add an height range. Example body in that request:

```json
{
  "range": "108"
}
```

If the provided data are invalid, the following message will be displayed: `"range" is required` 
`"range" length must be at least 3 characters long` 
`"range" length must be less than or equal to 7 characters long` 
If height was created successfully: `Height added!` and `Height already exist` if height exist.

<br>

## Method: POST

### **/offers**

<br>
Create Offer. Example body in that request:

<br>

```json
{
  "userId": "62208ded0807a0241696b30c",
  "title": "Roses",
  "description": "Lorem ipsum Lorem Ipsum.",
  "city": "Brześć",
  "phoneNumber": "123234345",
  "category": "623a4712db6477afcad4d52a",
  "height": "623a411ad32b3e7b591c0679",
  "price": 330,
  "forExchange": false,
  "photos": []
}
```
All of the above data are required. 
Errors examples:
If we don't add a title the an `"title" is required` error will be occured.
If we provide an incorrect phone number, an error will appear `"phoneNumber" length must be at least 9 characters long`.

If offer was created successfully: `Offer added!`.

<br>

## Method: GET

### **/users**

<br>

Fetching users from our database. API return all records, example of response:

```json
[
	{
		"_id": "623c270a90cc7892fef00065",
		"email": "ewelinatest@gmail.com",
		"password": "$2b$10$N4bpfPaPPtYXpDSodKcCQ.JLcg/f4sceDaNOGTPgF9BhYmSTrYkX.",
		"isAdmin": true,
		"isActive": true,
		"favourites": []
	},
	{
		"_id": "623cce216a1da7f950c8847b",
		"email": "mareksrarek@mail.com",
		"password": "$2b$10$0y50PTZ7EiL56ioUzSwM/O5xWeL1QFLF4El8cKz6RykmdVgd//iYW",
		"isAdmin": true,
		"isActive": true,
		"favourites": [],
		"city": "Kraków"
	}
]
```
When there is no result for request, API will response with: `[]`

<br>

## Method: GET

### **/categories**

<br>

Fetching categories from our database. API return all records, example of response:

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
When there is no result for request, API will response with: `[]`

<br>

## Method: GET

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
  },
  {
    "_id": "623a601b4ef4e68a37f2fcbe",
    "range": "908",
    "__v": 0
  }
]
```
When there is no result for request, API will response with: `[]`

<br>

## Method: GET

### **/offers**

<br>
Fetching offers from our database. Example of response:

<br>

```json
[
  {
    "_id": "623b30807bc7fe5d5bb21df8",
    "title": "Buraki",
    "description": "Młode ziemniaki, bardzo dobre",
    "city": "Wrocław",
    "phoneNumber": "999666948",
    "photos": [
      {
        "url": "https://swiezenatalerze.pl/pol_pm_ZIEMNIAKI-MLODE-SWIEZE-BIO-23689_1.jpg",
        "isMainPhoto": true,
        "_id": "623b30807bc7fe5d5bb21df9"
      }
    ],
    "category": "562b2649b2e70464f113c04d",
    "height": "562b2649b2e70464f113c04d",
    "views": 0,
    "price": 30,
    "forExchange": true,
    "isActive": false,
    "isArchived": false,
    "dateCreated": "2022-03-23T14:36:48.472Z",
    "dateUpdated": "2022-03-23T14:36:48.472Z",
    "__v": 0
  }
]
```

When there is no result for request, API will response with: `[]`

<br>

## Method: PUT

### **/activate/:id**

<br>

Activate user. 
To activate the user, you will need the token generated during registration and the user ID.
If the activation was successful, a message will be displayed:
`Your account has been activated`

<br>

## Method: PUT

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
  "message": "User was added",
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
To update the user, you will need a token generated during logging in and a user ID.

<br>

## Method: PUT

### **/users/admin/:id**

<br>

Add user permissions. 
Only the user with administrator permissions grants administrator permissions to another user. You must specify the user ID.
`User has been changed to Admin`

<br>

## Method: PUT

### **/offers/activate/:id**

<br>

Offer activation.
The offer can only be activated by a user with administrator permissions. You must specify the offer ID.
`User has been changed to Admin`

<br>

## Method: PUT

### **/offers/:id**

<br>

Update an offer. Example body in that request:

```json
{
  "city": "Wrocław"
}
```

Before update:

```json
{
  "message": "User was added",
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

## Method: PUT

### **/offers/archive/:id**

<br>

Archiving the offer.
The offer can be archived by a user with administrator permissions or by a user if it is activated. You must provide an Offer ID.
`Offer was archived!`

<br>

## Method: PUT

### **/offers/view/:id**

<br>

Views counting.
To add a view you must specify the offer ID.
`View was added`

<br>

## Method: DELETE

### **/users/:id**

<br>

Delete user. 
The user can be deleted by the user with administrator permissions or by the user himself.
`User with 623ccd9320dc69894616a74f was deleted`

<br>

## Method: DELETE

### **/offers/:id**

<br>

Delete offer. 
The offer can be deleted by the user with administrator permissions or by the user himself.
`Offer with 623ccf6f7ff9b58347959a8b was deleted`
