# NoSQL-Social-Network-API
![image](https://github.com/AegeanGrey/NoSQL-Social-Network-API/assets/125229624/d9b53e97-a2ef-427a-b872-34e413aa632e)

## Description
This Social Network is a backend infastructure designed to interact with 3rd Party Applications (such as MongoDB) to store JSON data without the need of MySQL! It also has built in logic to manage HTTP Requests to retrieve, update, create and delete Users and Thought data.

## Requirements
- Git/Gitbash
- Code Editor (Ex: VS Code)
- Node.js
- MongoDB Compass
- Insomnia

## Installation
To pull the environment onto your side you can do the following:

1.) Copy the SSH or HTTPS Key for the Repository by selecting the green "Code" button

2.) Go to Git or GitBash to clone the repo by entering the following into the command terminal:

git clone git@github.com:profile-name/repo-name.git

or in this case for this particular repo:

git@github.com:AegeanGrey/NoSQL-Social-Network-API.git

3.) navigate to the file path and type the following to open the code:

`code .`

We will then need to install the required packages/modules for the Employee-Tracker to work:

4.) In the Code Editor, right click on the 'index.js' file and select 'Open in Integrated Terminal'

5.) In the Terminal, type in the following to install the required packages:

`npm i`

## Usage
1.) Type the following into the Terminal to run the application:

- `node server.js` to start the application

2.) You should then see the following message in your terminal:

`API server running on port 3000!`

Note: If the port is already being utilized and you need to change it then you can adjust the port number on line 6 within the `server.js` file, be sure to restart the server as well

3.) Within MongoDB Compass you should see a new database created called `socialNetworkDB`, this will store all of our data that we will add, update and delete.

4.) We will then open up Insomnia and create the following HTTP Requests for GET:

- Get All Users - localhost:3000/api/users
- Get One User - localhost:3000/api/users/:userId
- Get All Thoughts - localhost:3000/api/thoughts
- Get One Thought - localhost:3000/api/thoughts/:thoughtId

Note: To create a new HTTP Request you want to navigate in the top-left hand side of Insomnia application and click on the white circle with a plus in the center and click `HTTP Request` in the dropdown menu:

![image](https://github.com/AegeanGrey/NoSQL-Social-Network-API/assets/125229624/a20eada6-9db7-4e48-97f7-3903bc9e8007)

And you are inserting the URL's in the following location for each and all HTTP Requests:

![image](https://github.com/AegeanGrey/NoSQL-Social-Network-API/assets/125229624/72be85c9-00f5-452d-9369-21e74a3e0641)

5.) As well as the following HTTP Requests for PUT to update our User or Thought data:

- Update User - localhost:3000/api/users/:userId
- Update Thought - localhost:3000/api/thoughts/:thoughtId

6.) The same process for the HTTP Requests for POST to create new Users and/or Thoughts:

- Create User - localhost:3000/api/users
- Create Thought - localhost:3000/api/thoughts

7.) And finally we create the DELETE HTTP Requests so we can delete Users and their Thoughts or individual Users and Thoughts:

- Delete User - localhost:3000/api/users/:userId
- Delete Thought - localhost:3000/api/thoughts/:thoughtId

Once all these HTTP Requests are added in Insomnia then it should look similar to this structure:

<img width="191" alt="image" src="https://github.com/AegeanGrey/NoSQL-Social-Network-API/assets/125229624/c6767768-c087-40e0-841f-6830c61e2c7e">

You may need to rename some of the HTTP Requests that says `New Request` by clicking on the dropdown arrow to the right of the request card and selecting `Rename`:

![image](https://github.com/AegeanGrey/NoSQL-Social-Network-API/assets/125229624/3d42efed-6344-4a66-b3f1-9ba58104f7ee)

8.) Once all the HTTP Requests are setup we can create our users and thoughts! Go to the `POST` Request for `Create New User` and click on the tab that says `Body` underneath the URL to select `JSON`:

![image](https://github.com/AegeanGrey/NoSQL-Social-Network-API/assets/125229624/9134e60f-90ee-4f90-bba1-1f8532e46c95)

We need this body selected for all `POST` requests in order to send data we need to MongoDB through the live server connection, you should then have `"username"` and `"email"` within a JSON body:

![image](https://github.com/AegeanGrey/NoSQL-Social-Network-API/assets/125229624/b3ccb1e4-b404-4dec-b60f-7425702c1be0)

Once you've populated that with data then you can click the purple `Send` icon to the right of the URL to add a new users data to the database!

9.) If you go to the `Get All Users` section and also click the purple `Send` button then you should see the results of your newly created User!

10.) To delete a user, take the `_id` of the user from the desired user in `Get All Users` section and put their userId at the end of the URL like so:

![image](https://github.com/AegeanGrey/NoSQL-Social-Network-API/assets/125229624/72122565-2cad-4e0e-a24f-1cd5c8d75e53)

Once you click send then it will delete the user that's associated with the userId from the database!

11.) If you're attempting to locate a specific users data then take the users `_id` from the `Get All Users` section and insert it into the URL of the `Get One User` section:

![image](https://github.com/AegeanGrey/NoSQL-Social-Network-API/assets/125229624/707834c0-e720-4825-b2bc-d158b7e46f30)

12.) If you need to update a users username or email, the take the users `_id` and put it at the end of the URL in the `Update User` section and in the JSON Body:

![image](https://github.com/AegeanGrey/NoSQL-Social-Network-API/assets/125229624/90dae8cc-9244-44ee-906e-f1e39001bc34)

You can then change the username or email values and click the purple `Send` icon to save!

13.) The same idea translates with the Thoughts section, to create a new thought you need to go to `Create New Thought` section but you need a userId and username to associate the thoughtText with:

![image](https://github.com/AegeanGrey/NoSQL-Social-Network-API/assets/125229624/999444e9-e5eb-4046-9207-2cd096f9f6ce)

14.) You can then retrieve the thought from `Get All Thoughts` or a specific thought with the thoughtId by tagging it at the end of the URL in the `Get One Thought` section:

![image](https://github.com/AegeanGrey/NoSQL-Social-Network-API/assets/125229624/91c804a5-e9f6-43b9-8626-174203579d98)

15.) If you need to update a thought within `Update Thought` section then you will need the thoughtId populated in the URL and the thoughtId key value:

![image](https://github.com/AegeanGrey/NoSQL-Social-Network-API/assets/125229624/be9bd820-ab82-47b1-846d-bcce0c51ad73)

You can then input what you need inside the thoughtText field and the username the thought is associated with.

16.) To delete a thought you will need to place the thoughtId at the end of the URL in the `Delete Thought` section and click the purple `Send` icon:

![image](https://github.com/AegeanGrey/NoSQL-Social-Network-API/assets/125229624/da0d6994-ed42-42a0-894f-ab1355d64937)

And that's all there is to it!

## Credits
This application was built from scratch by AegeanGrey/Todd D.

## License
MIT License

Copyright (c) 2023 Todd D.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERW
