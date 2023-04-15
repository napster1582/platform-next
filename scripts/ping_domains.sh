#!/bin/bash

domains=(
    # API
    "api.dev.jinen.com"
    "api.stage.jinen.com"
    "api.jinen.com"

    # CMS
    "cms.dev.jinen.com"
    "cms.stage.jinen.com"
    "cms.jinen.com"

    # DOCS
    "docs.dev.jinen.com"
    "docs.stage.jinen.com"
    "docs.jinen.com"

    # ADMIN
    "admin.dev.jinen.com"
    "admin.stage.jinen.com"
    "admin.jinen.com"

    # WEB
    "dev.jinen.com"
    "stage.jinen.com"
    "jinen.com"
)

for domain in "${domains[@]}"; do
    # Ping the domain and store the output in a variable
    output=$(ping -c 1 $domain)

    # Check if the ping was successful
    if [ $? -eq 0 ]; then
        echo "$domain is up"
    else
        echo "$domain is down"
    fi

    # Output the ping results
    echo "$output"
done
