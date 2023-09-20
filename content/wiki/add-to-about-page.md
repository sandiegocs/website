+++
title="Adding self to about page"
date= 2023-09-19
+++

The `/about` page contains a list of all the officers, alumni, advisors, and members the organisation has had. Individuals can add themselves to the list by appending themselves to the `/team.json` file in the site's source. A template is available below to guide adding oneself.
```js
"user": "your_username",
"name": "John Template", // optional
"bio": "Yes, I did invent templates", // optional
"portfolio": "https://abc.xyz", // optional
"linkedin": "https://linkedin.com/in/john-template" //optional
```

**For officers :** If you want to upload a photo, place a file called `your_username.jpg` in the `static/assets/team/` folder and it will automatically be loaded. Images should be no larger than 500 x 500 and should be less than 10 kilobytes in size (exceptions can be made if you have stubborn photos). 
