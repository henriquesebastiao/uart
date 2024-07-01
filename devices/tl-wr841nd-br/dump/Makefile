clean:
	./clean.sh && clear
dump:
	flashrom --programmer ch341a_spi -r firmware.bin
extract:
	./extract.sh
rebuild:
	./rebuild.sh

.PHONY: clean dump extract rebuild