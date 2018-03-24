# <%= projectName %>

## How to start

| config set  | command                            | description                  |
|-------------|------------------------------------|------------------------------|
| development | `yarn dev`                         | use `development` config set |
| staging     | `CONFIG_ENV=staging yarn start`    | with `staging` config set    |
| production  | `CONFIG_ENV=production yarn start` | with `production` config set |

### With production build

To use production build, need to follow:
1) run `yarn build`
2) run `NODE_ENV=production CONFIG_SET=[production|staging|development] yarn start`

### run in docker

```bash
docker build -t <%= projectName %> .
docker run --rm -p 3000:3000 --name=<%= projectName %> <%= projectName %>
```

or use docker-compose

```bash
docker-compose build
docker-compose up -d
```

## Testing

run `yarn test`

## Storybook

run `yarn storybook`

## Commit conventions

[commitlint](http://marionebl.github.io/commitlint/#/) is added into git commit hook.

With commitlint, commit message must be in the form of 

```
type(scope?): subject
body?
footer?
```

1) type must be one of [build, chore, ci, docs, feat, fix, perf, refactor, revert, style, test] [type-enum]

for example: 

```
echo "what the hack???" > commitlint  // this will fail
echo "fix: fix my leg" > commitlint   // pass
```
