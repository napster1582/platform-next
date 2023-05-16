#!/bin/bash

domains=(
    # DOCS
    "docs.dev.jinen.com"
    "docs.stage.jinen.com"
    "docs.jinen.com"

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
