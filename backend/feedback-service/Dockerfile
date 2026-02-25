FROM golang:1.22-alpine
WORKDIR /app
COPY . /app
RUN go build -o feedback-service ./cmd/server
CMD ["/app/feedback-service"]
