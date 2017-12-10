# Instagram

Instagram clone

## Code Status

[![Build Status](https://travis-ci.org/kensupermen/instagram.svg?branch=master)](https://travis-ci.org/kensupermen/instagram)
[![Maintainability](https://api.codeclimate.com/v1/badges/c997c6ac01d5f223698c/maintainability)](https://codeclimate.com/github/kensupermen/instagram/maintainability)

Demo: [Instagram](https://instagramclone2908.herokuapp.com/)

## Teachnogogy

- Ruby On Rails (Backend)
- ReactJS (Frontend)
- Postgresql (Database)
- Redis to cache session and query
- Host image on AWS S3

## User stories

* [x] User can login, logout.
* [x] User can upload images.
* [x] User can post image with caption.
* [x] User can comment on image.
* [x] User can like images.
* [ ] User can add hastag.
* [x] User can see a profile.
* [ ] User can follow another people.
* [x] Host images on AWS S3.
* [ ] Cache query.


## Contributing

1. Fork it! (maybe start it ^^)
2. Create your feature branch: git checkout -b my-new-feature
3. Commit your changes: git commit -am 'Add some feature'
4. Push to the branch: git push origin my-new-feature
5. Submit a pull request to develop branch :D

## How to run on development

Make sure you install `yarn` and install all package dependent

Please install ImageMagick.
 - In MacOS: `brew install imagemagick`

```
yarn install
```

Setup environment variables
 - SECRET_KEY_DEVISE
 - S3_BUCKET_NAME
 - AWS_ACCESS_KEY_ID
 - AWS_SECRET_ACCESS_KEY
 - AWS_REGION
 - AWS_S3_HOST_NAME

Finally run 
```
bin/server
```

Open your browser: `localhost:3000`

## Deploy heroku
After push source code to Heroku, you should compile js and css, please run:
`heroku run rake webpacker:compile`
