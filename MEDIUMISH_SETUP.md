# Mediumish Theme Setup for Latent Ledger

## Summary

Added the [Mediumish Jekyll Theme](https://github.com/codebygina/mediumish-theme-jekyll) to the Latent Ledger project. This theme provides a clean, readable design with warm colors, inspired by Medium's aesthetic.

**Note:** The mediumish-jekyll theme is NOT available as a Ruby gem, so it cannot be added to Gemfile. Instead, the theme files are copied directly into the project directories.

## Files Added to the Project

### 1. Layouts (`_layouts/`) - 6 files
- `mediumish-default.html` - Main layout with header, sidebar, and footer
- `mediumish-page.html` - Page layout  
- `mediumish-post.html` - Blog post layout
- `mediumish-archive.html` - Archive layout
- `mediumish-categories.html` - Categories page layout
- `mediumish-tags.html` - Tags page layout

### 2. Includes (`_includes/`) - 6 files
- `mediumish-pagination.html` - Pagination controls
- `mediumish-postbox.html` - Post box component
- `mediumish-share.html` - Social sharing buttons
- `mediumish-toc.html` - Table of contents
- `mediumish-disqus.html` - Disqus comments
- `mediumish-star-rating-postbox.html` - Star rating in post boxes

### 3. Stylesheets (`assets/css/`) - 2 files
- `mediumish-main.scss` - SCSS entry point (imports syntax, starsnonscss)
- `mediumish-screen.css` - Main compiled CSS file (15KB)

### 4. JavaScript (`assets/js/`) - 6 files
- `mediumish-ie10-viewport-bug-workaround.js` - IE10 compatibility
- `mediumish-jquery.min.js` - jQuery library
- `mediumish-lazyload.js` - Image lazy loading
- `mediumish-lunr.js` - Search indexing
- `mediumish-lunrsearchengine.js` - Search engine
- `mediumish-mediumish.js` - Theme-specific JS

### 5. Sass (`_sass/`) - 3 files
- `_stars.scss` - Star rating styles
- `_starsnonscss.scss` - Star rating (non-SCSS)
- `_syntax.scss` - Syntax highlighting

## Configuration Changes

### Updated `_config.yml`
Added theme comment (no gem dependency needed):

```yaml
# Theme settings
# Theme: mediumish-jekyll
# Note: mediumish-jekyll is not available as a gem, so we use the theme files
# directly copied into _layouts and _includes directories
```

### `Gemfile` (unchanged)
No changes needed - mediumish-jekyll is not a gem:
```ruby
# Theme: mediumish-jekyll
# gem "mediumish-jekyll", "~> 0.2.0"  # No gem available, files are in _layouts/_includes
# The theme files are copied directly into the project
```

## How to Use

### Build the Jekyll Site

1. Install dependencies (if not already installed):
   ```bash
   bundle install
   ```

2. Build and serve the site:
   ```bash
   bundle exec jekyll serve
   ```

3. Access the site at `http://localhost:4000`

### Using the Theme

To use the Mediumish theme, update your page front matter to use the theme layouts:

For pages:
```yaml
---
layout: mediumish-page
title: About
---
```

For posts:
```yaml
---
layout: mediumish-post
title: My Post
---
```

For archives/categories/tags:
```yaml
---
layout: mediumish-archive
title: Archive
---
```

### How It Works

Since mediumish-jekyll is not distributed as a gem, the theme files are copied directly into the project:
- Layout files go in `_layouts/` (prefixed with `mediumish-`)
- Include files go in `_includes/` (prefixed with `mediumish-`)
- Stylesheets go in `assets/css/`
- JavaScript goes in `assets/js/`
- Sass goes in `_sass/`

Jekyll will automatically:
1. Compile `_sass/*.scss` files
2. Generate `main.css` from `assets/css/main.scss`
3. Use the Mediumish layouts and includes

## Theme Features

### Visual Design
- **Colors**: Warm earthy tones with cream background
- **Typography**: Serif for headers, sans-serif for body
- **Contrast**: High contrast for readability

### Content Features
- Table of contents generation
- Star ratings
- Social sharing buttons
- Disqus comment support
- Pagination
- Search (Lunr.js)

### Technical Features
- Responsive design
- Image lazy loading
- Cross-browser compatibility

## Credits

- Theme: [codebygina/mediumish-theme-jekyll](https://github.com/codebygina/mediumish-theme-jekyll)
- Original author: [wowthemesnet](https://github.com/wowthemesnet)

## License

The Mediumish theme is licensed under the MIT License (see LICENSE.txt in the theme repository).