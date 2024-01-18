up:
	docker-compose build 
	docker-compose up

down:

	docker-compose down

clean:

	docker-compose down -v
	docker rmi -f portfolio-vz
	docker system prune -af

