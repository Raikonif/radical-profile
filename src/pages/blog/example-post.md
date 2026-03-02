---
layout: ../../layouts/BaseLayout.astro
title: "My First Blog Post"
description: "This is an example blog post written in Markdown"
lang: "en"
footerText: "© 2026 Pandy Goma. All rights reserved."
---

# My First Blog Post

*Published: February 25, 2026*

This is an example of creating a **nested route** using Markdown in Astro.

## Nested Routes

By placing this file at `src/pages/blog/example-post.md`, it becomes accessible at the route `/blog/example-post`.

### Directory Structure = URL Structure

```
src/pages/
├── index.astro          → /
├── about.md             → /about
└── blog/
    └── example-post.md  → /blog/example-post
```

## Content Sections

You can organize your content with headers, paragraphs, and all Markdown features.

### Adding Images

You can reference images from your `public/` folder:

```markdown
![Alt text](/favicon.svg)
```

### Adding Links

Link to other pages in your site:
- [Home page](/)
- [About page](/about)

## Conclusion

Markdown pages are perfect for:
- Blog posts
- Documentation
- Static content pages
- Landing pages

Happy coding! 🚀
