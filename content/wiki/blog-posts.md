+++
title= "Creating blog posts"
date= "2023-09-09"
+++

Writing blog posts for SDCS is relatively simple. Prior to working on the blog post within the site's source, draft your post and get it proofread. Reduce your errors and ensure you are putting quality work forward.

**Create a new Markdown file within `/content/news/` that has a unique, descriptive name.** Try to keep it short, memorable, but unique. An interview with a guest speaker could be as simple as their name (`/content/news/dr-irwin-jacobs.md`).

## Formatting the blog post
All Markdown files within the website require what is known as **frontmatter**, a type of metadata used to create variables that are used at compile time. An example of frontmatter for a blog post is as follows :
```toml
+++
title= "AI Workshop with Andrew Huang"
date= "2023-09-03"
authors= ["Jeremy Fortner"]
draft= true
+++
```

The date should always be formated in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601). Titles should always be clear and succinct. Although the `authors` variable is a slice / an array, there should only be one name. If multiple people have collaborated, there are two options :
  1. Manually add commas and ampersands to show several people in one string
  2. Finish the TODO in `/templates/page.html` for iterating through `page.authors` (in otherwords, do the first one unless you want to do the latter).

## Embeding third-party content
If you need to embed a YouTube video, Instagram post, or some other third-party content, you must use the `gdpr` shortcode — this helps reduce bandwidth and allow users to make informed privacy choices. This is done by using the following template, replacing `WEBSITE` for the URL of the site you're embeding and surrounding it with `{{ }}` : `gdpr(url="WEBSITE")`.

For YouTube links, you should be :
  - Using the `youtube-nocookie.com` domain, instead of `youtube.com`
  - Appending `?cc_load_policy=1&playsinline=1&rel=0` to allow closed captioning to load, the player to function, and to remove the related videos pop-up.

## Embedding first-party content
If you need to an image, upload the image to `/static/assets/thumbs/` or `/static/assets/flyers` (whichever is more relevant). If neither are relevant, [ask Matthew](/~doamatto) for help sorting your file — some files may belong best in the `/static/assets` folder.

## Final steps
After you write your post, push it to GitHub (`git push`) and ask for an officer to give it a look over. If they think it looks good, they'll stage the latest version of the website for final checks (`make stage`) and deploy the latest version of the website containing your blog post (`make deploy`).
