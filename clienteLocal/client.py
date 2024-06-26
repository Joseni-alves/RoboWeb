#servidor local 192.168.10.2

# import RPi.GPIO as GPIO
import time
from pyModbusTCP.client import ModbusClient # pip install pyModbusTCP
import requests

# endereço do escravo para interfaceamento entre mestres (CLP)
clp2 = ModbusClient(host='192.168.10.41', port=502, unit_id=2, timeout=1000.0, auto_open=True, debug=True)

estado = 0

while True:
    res = requests.get('https://1b8e0123-aebc-4ffd-a4b8-60da6ff7366e-00-jpd4g0gjn79q.kirk.replit.dev/')
    response = res.json()
    print(response)
    requestReplit = [response['right'],response['left'],response['up'],response['down'],response['garra']]

    clp2.write_multiple_coils(0, requestReplit) #escreve no primeiro registro coil da rede modbus 0001
    time.sleep(0.01)
    
# para iniciar com o pm2 no ubuntu
# pm2 start server.py --name server --interpreter python3