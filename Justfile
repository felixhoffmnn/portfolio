export DOCKER_HOST := "unix://" + env_var("XDG_RUNTIME_DIR") + "/podman/podman.sock"

# List all available commands
@help:
    just --list

# Generate mermaid diagrams
@diagrams:
    podman run --userns keep-id --user ${UID} --rm -v {{ justfile_directory() }}/src:/app:z -w /app --entrypoint sh minlag/mermaid-cli:11.2.1 -c 'find ./data/mermaid -name "*.mmd" -exec sh -c '"'"'/home/mermaidcli/node_modules/.bin/mmdc -p /puppeteer-config.json -b transparent -i "$1" -o ./assets/mermaid/"$(basename "$1" .mmd).svg"'"'"' _ {} \;'
