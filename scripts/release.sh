set -e
echo "Current version:" $(grep version package.json | sed -E 's/^.*"(4[^"]+)".*$/\1/')
echo "Enter release version: "
read VERSION

read -p "Releasing v$VERSION - are you sure? (y/n)" -n 1 -r
echo    # (optional) move to a new line
if [[ $REPLY =~ ^[Yy]$ ]]
then
  echo "Releasing 4070-$VERSION ..."
  npm run lint

  npm run build
  # generate the version so that the changelog can be generated too
  npm version --no-git-tag-version --no-commit-hooks --new-version "4070-$VERSION"

  # changelog
  npm run changelog

  echo "Please check the git history and the changelog and press enter"
  read OKAY

  # commit and tag
  git add CHANGELOG.md package.json
  git commit -m "chore(release): 4070-$VERSION"
  git tag -a "4070-$VERSION" -m "4070-$VERSION"

  # publish
  git push origin refs/tags/4070-$VERSION
  git push
fi
