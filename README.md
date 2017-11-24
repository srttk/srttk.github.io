# saratonite.github.io

> Sarathoite Github Page

# Build Setup :smile:


```bash
  git commit -am "Save local changes"
  git checkout master
  git add -f out
  git commit -am "Rebuild website"
  git filter-branch -f --prune-empty --subdirectory-filter out
  git push -f origin master
  git checkout -
```