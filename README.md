# Nanobox News Site
This repo is is the Ghost app that powers [news.nanobox.io](https://news.nanobox.io).

## Clone the Repo

```bash
# clone the code
git clone https://github.com/nanobox-io/nanobox-news.git

# cd into the ghost app
cd nanobox-news
```

## Run the App

```bash
# Add a convenient way to access your app from the browser
nanobox dns add local news.nanobox.dev

# Run Ghost with Nanobox
nanobox run yarn start
```

Visit your app at <a href="http://news.nanobox.dev:2368" target="\_blank">content.nanobox.dev:2368</a>

## Adding Category & Subcategory Pages
As we start to categorize and subcategorize posts, we'll need to add category and subcategory pages.

### Create a New Page Template
Duplicate `page.hbs` to create a new page template. On the duplicate file name, add a unique identifier. Ghost will load this page using the unique identifier as the path.

For example, if the new page were named `page-elixir.hbs`, it will be available at `content.nanobox.dev/elixir`.

### List Posts with Partials
Ghost uses post tags to categorize posts. We'll use those same tags to build the article lists on the category pages. Use the following handle bar snippets to pull in articles with a specific tags:

**Category:**  
`{{> category-list list-title='List Title' tag='tag' }}`  

**Subcatetory:**  
`{{> subcategory-list list-title='List Title' tag='parent-tag' subtag='sub-tag' }}`

### Create a New Post & Set It as a Static Page
***This will need be done both locally and in production for the category page to be available.*** Create a new post in the Ghost admin panel. At the very bottom of the configuration options, select "Turn this post into a static page". Don't add any tags to the post.

The slug of the post must match the location of the page from [above](#create-a-new-page-template).

## Sending Email
If you want Ghost to be able to send mail locally, you'll need to add the `MANDRILL_API_USER` and `MANDRILL_API_KEY` environment variables.

## Editing Theme CSS
I've include a small yarn script to watch for scss changes as you're working on the theme. The nanobox them is located at `content/themes/nanobox`

```bash
yarn watch-css
```
