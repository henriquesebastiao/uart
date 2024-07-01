# UART

Comecei esse projeto com o intuito de testar a comunicação serial com alguns dispositivos embarcados, usando conversores seriais TTL-USB como o CP2102, CH340G e o FT232RL.Fazer dump da memoria flash usando o CH341A e o flashrom.

## 💾 Dispositivos e programas utilizados

**Dispositivos:**

- Multímetro (para testar continuidade)
- Clipe SOIC8
- Coversores seriais TTL-USB
  - CP2102
  - CH340G
  - FT232RL
- Programador de memória flash
  - CH341A

**Programas:**

- picocom
- flashrom

## Comandos

Monitorar porta serial:

```bash
picocom --logfile router-boot.txt -b 115200 /dev/ttyUSB0
```

### Observações

Em comunicação serial é importante destacar que, quando usamos um dispositivo conversor de TTL para USB, devemos ligar o pino TX do conversor ao RX do dispositivo, e o RX do conversor ao TX do dispositivo, como mostrado na imagem abaixo:

![serial-pins](https://github.com/henriquesebastiao/uart/assets/85202803/aa345604-63d3-4e29-b704-82923933d68f)

É como se fosse uma cabo crossover de redes, essa é uma boa analogia pra mim 😅.

## Projetos semelhantes

- [TL-WR841N](https://github.com/adamhlt/TL-WR841N)
