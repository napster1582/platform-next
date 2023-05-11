#!/bin/bash

jinen_apps=(
    docs
    cms
    web
)

jinen_environments=(
    development
    staging
    production
)

app_names=("$@")

if [ ${#app_names[@]} -eq 0 ]; then
    echo "You must provide at least one valid app name: ${jinen_apps[*]}"
    exit 1
fi

invalid_apps=()

for app_name in "${app_names[@]}"; do
    if [[ ! "${jinen_apps[@]}" =~ "${app_name}" ]]; then
        invalid_apps+=("$app_name")
    fi
done

if [ ${#invalid_apps[@]} -ne 0 ]; then
    echo "The following apps are invalid: ${invalid_apps[*]}"
    exit 1
fi

read -p "Enter environment (${jinen_environments[*]}): [development] " env
env=${env:-development}
echo "$env"

if [[ ! "${jinen_environments[@]}" =~ "${env}" ]]; then
    echo "You must provide a valid environment"
    exit 1
fi

env_file=$(pwd)/envs/$env.env

read -p "Run Docker Compose (Y/n): [n]  " run_docker_compose
run_docker_compose=${run_docker_compose:-n}
echo "$run_docker_compose"

if [[ "$run_docker_compose" != "y" && "$run_docker_compose" != "yes" && "$run_docker_compose" != "n" && "$run_docker_compose" != "no" ]]; then
    echo "$run_docker_compose is not a valid input."
    exit 1
fi

source "$(pwd)/scripts/docker_cleanup.sh"

if [[ "$run_docker_compose" == "y" || "$run_docker_compose" == "yes" ]]; then
    docker-compose up -d
fi

for app_name in "${app_names[@]}"; do
    docker build -t jinen-$app_name -f Dockerfile.$app_name .

    declare -A docker_commands=(
        [docs]="docker run --name jinen-docs-container -p 3000:80 --env-file $env_file -d jinen-docs"
        [cms]="docker run --name jinen-cms-container -p 3001:3001 --env-file $env_file -d jinen-cms"
        [web]="docker run --name jinen-web-container -p 3002:3002 --env-file $env_file -d jinen-web"
    )

    if [ -n "${docker_commands[$app_name]}" ]; then
        ${docker_commands[$app_name]}
    fi
done

docker system prune -af
docker ps
