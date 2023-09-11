+++
title= "User pages"
date= "2023-09-11"
+++

Each team member can create their own pages by creating a folder `/static/~username/`, where `username` is the username they specified in `/team.json`.

## Content policy
All user-generated content will not be endorsed or supported by SDCS nor will SDCS be responsible for content posted by SDCS members. Officers will remove or modify data hosted by members if legally compelled to do so.

## Third-party embedding
Just like blog posts, if you need to embed a YouTube video, Instagram post, or some other third-party content, you must use the `gdpr` shortcode. However, you do not have access to Markdown or the Tera templating system from the `/static` folder. You will have to copy the contents of `/templates/shortcodes/gdpr.html` into your website for embeds.

## Embedding first-party content
If you need to an image, upload the image to `/static/~username`. Images should be less than 5 megabytes in size (exceptions can be made if you have stubborn photos).
