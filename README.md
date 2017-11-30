# Instagram

Instagram clone

## Code Status

[![Build Status](https://api.travis-ci.org/kensupermen/instagram.svg?branch=develop)](http://travis-ci.org/kensupermen/instagram)

Demo: [Instagram](https://instagramclone2908.herokuapp.com/)

## Teachnogogy

- Ruby On Rails (Backend)
- ReactJS (Frontend)
- Postgresql (Database)
- Redis to cache session and query
- AWS S3 to save photos

## User stories

* [x] User can login, logout.
* [x] User can upload images.
* [x] User can post image with caption.
* [x] User can comment on image.
* [ ] User can like images.
* [ ] User can add hastag.
* [ ] User can see a profile.
* [ ] User can follow another people.
* [ ] Host images to AWS S3.
* [ ] Cache query.


## Contributing

1. Fork it! (maybe start it ^^)
2. Create your feature branch: git checkout -b my-new-feature
3. Commit your changes: git commit -am 'Add some feature'
4. Push to the branch: git push origin my-new-feature
5. Submit a pull request to develop branch :D

## How to run

Make sure you install `yarn` and install all package dependent

Please install ImageMagick
In MacOS: `brew install imagemagick`

```
yarn install
```

Run 
```
bin/server
```

Open your browser: `localhost:3000`

## Deploy heroku

