# upgrade-pip-tools-setuptools:
# 	pip install --upgrade pip-tools setuptools

compile-main-deps:
	pip-compile --upgrade --generate-hashes --quiet --output-file requirements/main.txt requirements/main.in

compile-dev-deps:
	pip-compile --upgrade --generate-hashes --quiet --output-file requirements/dev.txt requirements/dev.in

compile-prod-deps:
	pip-compile --upgrade --generate-hashes --quiet --output-file requirements/prod.txt requirements/prod.in

compile-all-deps: update-main-deps update-dev-deps update-prod-deps

sync-deps-dev:
	pip-sync requirements/dev.txt

sync-deps-prod:
	pip-sync requirements/prod.txt
