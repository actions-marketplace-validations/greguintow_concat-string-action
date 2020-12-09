# `concat-string` GitHub Action

Concat strings

## Inputs
### `string`

**Required** Input string.

## Outputs

### `replaced`

The replaced string.

## Example usage

```yaml
uses: greguintow/concat-string-action@v1
env:
  master: prod
with:
  string: 'Env-{master}!'
```
