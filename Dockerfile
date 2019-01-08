FROM ruby:2.4.2-alpine3.6
RUN apk add --update build-base libffi-dev libxml2-dev libxslt-dev postgresql-dev nodejs tzdata bash
ENV RAILS_ENV=production \ APP_HOME=/app
RUN mkdir -p "/app"
WORKDIR "/app"

COPY Gemfile* $APP_HOME/
RUN gem install bundler
RUN bundle install
COPY . $APP_HOME
EXPOSE 3000
CMD ["bundle", "exec", "rails", "server", "-b", "0.0.0.0"]
