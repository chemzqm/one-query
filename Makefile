
build: components index.js
	@component build --dev
	@touch build

start:
	@component serve &

components: component.json
	@component install --dev

clean:
	rm -fr build components

.PHONY: clean start
