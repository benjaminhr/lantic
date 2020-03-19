FROM python:3.7.7-alpine3.11

RUN apk add --no-cache \
  bash

WORKDIR /app
COPY . .

RUN pip install -r requirements.txt

COPY --from=jakolehm/nightwatch-amd64:0.4.1 /nightwatch /usr/bin
ENTRYPOINT [ "/app/entrypoint.sh" ]