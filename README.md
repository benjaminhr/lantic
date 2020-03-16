# Lantic

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

- #### To get frontend up and running:

    - install yarn on your pc/mac ([yarn](https://classic.yarnpkg.com/en/docs/install#windows-stable))
        - choose version 1.22.4 (cos yarn 2 may have issues with the code)
    - change into the frontend directory: `cd frontend`
    - run `yarn` in command line, this will take a while as it downloads and installs all dependencies
    - then run `yarn start` to get going...
        - Runs the app in the development mode.
        - Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
        - The page will reload if you make edits.
        - You will also see any lint errors in the console.

- #### To get backend up and running:
  - change into the backend directory: `cd backend`
  - install virtual environment manager:
    - MacOs/Linux: `python3 -m pip install --user virtualenv`
    - Windows: `py -m pip install --user virtualenv`
  - create virtual environment:
    - MacOs/Linux: `python3 -m venv env`
    - Windows: `py -m venv env`
  - activate the virtual python3 environment:
    - MacOS/Linux: `source env/bin/activate`
    - Windows: `.\env\Scripts\activate`
  - install dependencies: `pip3 install -r requirements.txt`
  - in order to close the (activated) python3 environment: `deactivate`
  - if nothing works: ![visit](https://packaging.python.org/guides/installing-using-pip-and-virtual-environments/)
