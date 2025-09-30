# Products API Demo

Demo project showing a typical REST API setup with automated testing through Postman CLI and GitHub Actions.

## What's in here

- OpenAPI 3.0 spec for a basic products and orders API
- Postman collections for testing
- GitHub Actions workflow that runs tests on every push
- Currency formatting utility

The API spec covers standard CRUD operations for products and orders. Nothing fancy, just a working example.

## Running tests

Tests run automatically via GitHub Actions when you push. If you want to run them locally:

```bash
# Install Postman CLI
curl -o- "https://dl-cli.pstmn.io/install/linux64.sh" | sh

# Login with your API key
postman login --with-api-key YOUR_KEY

# Run the collection
postman collection run "16725446-e3d2d753-7364-423b-9750-925bef24d764" \
  -e "16725446-3b6e3068-dd55-4189-8e64-71ed0ec89ba2"

# Lint the spec
postman spec lint fcb5cb75-0011-4be4-bd63-c487a6e2f065
```

## Setup

You'll need a `POSTMAN_API_KEY` secret configured in your GitHub repository for the automated tests to work.

## API Details

The spec defines two main resources:

- **Products** - manage catalog items
- **Orders** - handle customer orders

Authentication uses an `X-Api-Key` header. Error responses follow a consistent format.

Check `specs/index.yml` for the full OpenAPI definition.

## Servers

- Local: `http://localhost:3000`
- Staging: `https://staging.amazonaws.com/latest`

Add production endpoints as needed.
