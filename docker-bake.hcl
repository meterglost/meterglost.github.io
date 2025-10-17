PROJECT_NAME = "meterglost.github.io"

target "base" {
    dockerfile = "./.docker/Dockerfile.base"
    output = [{ type="cacheonly" }]
}

target "dev" {
    dockerfile = "./.docker/Dockerfile.dev"
    contexts = {
        base = "target:base"
    }
    tags = [ "${PROJECT_NAME}-dev" ]
}

target "prod" {
    dockerfile = "./.docker/Dockerfile.prod"
    contexts = {
        base = "target:base"
    }
    tags = [ "${PROJECT_NAME}-prod" ]
}
