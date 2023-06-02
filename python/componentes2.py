import sys, serial, time

arduino = serial.Serial('/dev/ttyACM1', 9600, timeout = 1)
rasp = arduino.readline().decode("utf-8").rstrip()

comp = str(sys.argv[1])

time.sleep(1)

for a in range(1):
	try:
		comp;
		arduino.write(comp.encode("utf-8"))
		time.sleep(1)
	except KeyboardInterrupt:
		break

