#!/usr/bin/env bash

set -euo pipefail

_term() {
  echo "got TERM"
  exit 0
}

trap _term TERM

case "${MODE:-}" in
  debug)
    echo "HANG"
    tail -f /dev/null &
    wait $!
  ;;
  dev)
    echo "starting dev mode:"
    while true; do
      if find . | nightwatch --exit-on-change=255 --dir python app.py; then
        break
      fi

      echo "
      -- restart (entrypoint.sh)"
      sleep 0.1
    done
  ;;
  *)
    echo "starting production mode:"
    exec python app.py
  ;;
esac

echo "exit"