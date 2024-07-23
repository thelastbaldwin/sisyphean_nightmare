# Client

## instructions

build the image

`docker build --build-arg SOCKET_HOST=<socket_server_host> -t alexander-client .`

run a container with the image

`docker run -p 80:8080 -i alexander-client`
