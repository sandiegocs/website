+++
title= "Domain and web hosting"
date= "2023-09-09"
+++

The `sandiegocs.org` domain is the official domain of SDCS. Sometimes, an officer may need to set DNS records to verify SDCS as the owner of the domain.

## DNS and domain management
DNS is handled via Cloudflare with the primary custodial account [managed by Matthew RONCHETTO.](/~doamatto) Access to Cloudflare is granted upon request to any officer. For non-officers who need access to request a record change, contact an officer who has DNS access to make the record change on your behalf.

## Adding self to `/about`
The `/about` page contains a list of all the officers, alumni, advisors, and members the organisation has had. Individuals can add themselves to the list by appending themselves to the `/team.json` file in the site's source. A template is available below to guide adding oneself.
```js
"user": "your_username",
"name": "John Template", // optional
"bio": "Yes, I did invent templates", // optional
"portfolio": "https://abc.xyz", // optional
"linkedin": "https://linkedin.com/in/john-template" //optional
```

**For officers :** If you want to upload a photo, place a file called `your_username.jpg` in the `static/assets/team/` folder and it will automatically be loaded. Images should be no larger than 500 x 500 and should be less than 10 kilobytes in size (exceptions can be made if you have stubborn photos). 

## User pages
Each team member can create their own pages by creating a folder `/static/~username/`, where `username` is the username they specified in `/team.json`. All user-generated content will not be endorsed or supported by SDCS nor will SDCS be responsible for content posted by SDCS members. Officers will remove or modify data hosted by members if legally compelled to do so.