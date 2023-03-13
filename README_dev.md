# TODO

## Folder Structure

<details markdown="1">
<summary >Folder Structure (fold/expand)</summary>

- `cse`
  - ~~`env`~~
  - ~~`venv`~~
  - ~~`node_modules`~~
  - ~~`yarn.lock`~~
  - **`todo`**
    - ~~`node_modules`~~
    - `public`
      - `favicon.ico`
      - `index.html`
      - `manifest.json`
      - `robots.txt`
    - `src`
      - `assets`
      - `components`
      - `constants`
      - `styles`
      - `App.js`
      - `index.js`
    - `.gitignore`
    - `.prettierrc`
    - `package.json`
    - `README.md`
    - `README_dev.md`
    - `yarn.lock`

</details>

## Rules

### Github

- always use branch when configuring important things
- do not delete other's branches
- do not include api keys or token

### Code Convention

`.prettirrec`
```json
{
    "arrowParens": "avoid",
    "bracketSpacing": true,
    "endOfLine": "auto",
    "htmlWhitespaceSensitivity": "css",
    "jsxBracketSameLine": false, 
    "jsxSingleQuote": true,
    "printWidth": 140,
    "proseWrap": "preserve",
    "quoteProps": "as-needed",
    "semi": true,
    "singleQuote": true,
    "tabWidth": 2,
    "trailingComma": "es5",
    "useTabs": false,
    "vueIndentScriptAndStyle": true,
    "overrides": [ 
      {
        "files": "*.json",
        "options": {
          "printWidth": 200
        }
      }
    ]
  }
```

- eslint and prettier used first
- use strict mode
- use relative paths
- cases
  - use `lowerCamelCase` for js files
  - use `PascalCase` for components or classes
  - use `kebab-case` for assets or token
  - use `UPPER_CASE` for constants
- never use abbreviations
- flag variables should be named as `[(modal/auxility) vervs][type of flag]`
- maximum length of variable names should be less than 20
- maximum tab depth is 10
- always write comments
  - explanation about usage
  - explanation about parameters as `type:[type], [usage]`
- always use curly brackets through several lines
- do not use magic numbers
- everything must be independent
- never use id on sass
- reduce inline-style styling
- use sass, not css
- write discription when you commit files

## git/github

### commands

- `git init`
  - create git repository
- `git config --global (user.name/user.email) "[name/email"`
- `git branch [branch]`
  - create branch
- `git branch -a`
  - show every branch
- `git checkout [branch]`
  - seek branch
- `git branch -d [branch]`
  - delete branch
- `git status`
  - show file status
- `git log`
  - show commit or push log
- `git push [remote] [branch]`
  - push branch to remote repository. `origin` is suggested for `remote` argument
- `git commit -m [message]`
  - commit changes to local
