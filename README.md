# Nike Product Page- Reviews component

> This is the services for displaying the reviews component on the Nike product mock page.

## Related Projects

  - https://github.com/rpt19-gunakadeit/Rebekah-proxy
  - https://github.com/rpt19-gunakadeit/david-service
  - https://github.com/rpt19-gunakadeit/abraham-productDisplay
  - https://github.com/rpt19-gunakadeit/damien-styles-and-inventory

## Table of Contents

1. [Usage](#Usage)
1. [Development](#development)

## Usage

> The reviews render based on the product ID listed in the url. To display reviews, please query the product ID as follows: http://HOSTNAME:2000/reviews/?=PRODUCTIDHERE
>
> The product IDs are any number in the range of 1-100.
>
> The script bundles, CSS, and images are all store in AWS S3 & the links are in index.html.

## Development

### Installing Dependencies

From within the root directory:


- npm install
- npm run seed (to fill out the database with mock reviews)
- npm run start (to start the localhost server on port 2000)