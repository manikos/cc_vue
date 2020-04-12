# GENERAL

This project structure is in active development and continuously evolves.
For dependency resolve it uses [`pip-tools`](https://github.com/jazzband/pip-tools). I find it faster than Pipenv.
For automation tasks it uses the command-like tool [invoke](http://www.pyinvoke.org/)
and the IT automation tool [Ansible](http://docs.ansible.com/ansible/latest/index.html) that together
work like a charm.
It's also updates to use [VueJS](https://vuejs.org/) (latest version 2.x) and it's companion CLI
[@vue/cli](https://cli.vuejs.org/guide/) (version 4.3.1).


# INSTALLATION

## First part (per-user installations - not globally)

1. Install `@vue/cli` using the [official instructions](https://cli.vuejs.org/guide/installation.html). Usually this
would be `npm install -g @vue/cli`. It is highly recommended to use a NodeJS manager to install npm packages
using each time your preferred NodeJS version, like [`nvm`](https://github.com/nvm-sh/nvm).
2. Install [ansible](http://docs.ansible.com/ansible/latest/intro_installation.html) on your machine.
`pip install --user ansible` (will install it under `~/.local/bin`).

## Second part (django)

1. Navigate to the directory where your project will live. Next, create a virtual environment.
Name it whatever you like. Once activated, install Django and `pip-tools` in it (`pip install Django pip-tools`).
2. Run: `django-admin startproject --template https://github.com/manikos/cc_vue/archive/master.zip --extension py,json,js --name constants.yml your_project_name`
3. Install dev requirements (inside the virtualenv, of course):
`make compile-main-deps && make compile-dev-deps && make sync-deps-dev`.
The first command will create the `requirements/main.txt` file, the second will create the `requirements/dev.txt`
and the last one will install (sync) the dev requirements listed in `requirements/dev.txt` under your virtualenv.
This step (#3) might take a while since it's the first time.

## Final part (vue)

1. Navigate inside the `front_end` directory and do `npm install`.


# Usage

1. `cd path/to/the/project`
2. `python manage.py runserver`
3. Open another terminal
4. `cd path/to/project/front_end`
5. `npm run serve`
6. Visit `127.0.0.1:8000` and you should see an `h1` heading.

Since this worked, you should delete the `local.db` database and use a more
robust one for your project. In the `settings/local.py` there is already a
PostgreSQL database setting. You should delete the `DATABASES` referring to
`local.db` and uncomment the one above. This implies that you must create the
database in order to work.

Next, develop your VueJS app inside the `front_end/src/ directory`.