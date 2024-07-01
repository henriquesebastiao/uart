if test -d "firmware_extract"; then
	rm -rf firmware_extract
fi

if test -f "firmware.bck"; then
	rm firmware.bck
fi

if test -f "firmware.bin"; then
	rm firmware.bin
fi

if test -d "squashfs-root"; then
	sudo rm -rf squashfs-root
fi
