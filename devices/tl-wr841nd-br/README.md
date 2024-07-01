# TP-Link TL-WR841N

[![Platform](https://img.shields.io/badge/platform-linux-blue)]()
[![Arch](https://img.shields.io/badge/arch-mips-red)]()

<img src="https://github.com/henriquesebastiao/uart/assets/85202803/2dc0571e-a9dc-4a61-a2e5-9414fa115131" width="298" alt="Roteador TP-Link TL-WR841N" />

Boundrate: 115200

Testando o roteador TP-Link TL-WR841N, consegui visualizar o boot do dispositivo e fazer dump da memória flash.

Visualizar o boot de forma perfeitamente legível desde o início foi possivel usando o CP2101, uma vez que ao tentar com o CH340G, nas primeiras linhas do boot eu só recebia lixo, mas depois de um tempo o resto do boot era legível.

**Fotos do dispositivo internamente:**

<img src="https://github.com/henriquesebastiao/uart/assets/85202803/cdcbd583-31bf-43d4-926d-b0d734f92f02" width="298"/>
<img src="https://github.com/henriquesebastiao/uart/assets/85202803/68dac731-3370-4857-b397-23c96260833b" width="298"/>
<img src="https://github.com/henriquesebastiao/uart/assets/85202803/6be46120-0c76-48ce-9a01-ca33a53b8dd0" width="298"/>

## Monitorar porta serial

Para identicar quais eram os pinos da porta serial, consultei o projeto [TL-WR841N](https://github.com/adamhlt/TL-WR841N) que já havia feito o procedimento e o documentou.

<img src="https://github.com/henriquesebastiao/uart/assets/85202803/6103448e-e8ae-4fe1-8ee4-1139c2b733c4" width="298"/>

Obtivi todo o boot do dispositivo de forma legível, no entando não consegui acesso a um shell, pois é necessário um login e senha que são desconhecidos.

<video src="https://github.com/henriquesebastiao/uart/assets/85202803/e952699f-385c-4440-abf8-56c88a756240"></video>

Você pode ver o log do boot do dispositivo no arquivo [bootlog.txt](bootlog.txt).

## Dump da memória flash

Para fazer o dump da memória flash, usei um CH341A e programa `flashrom` com o seguinte comando:

```shell
flashrom --programmer ch341a_spi -r dump.bin
```

Para extrair o conteúdo do dump, usei uma versão modificada do script `extract.sh` presente no projeto [TL-WR841N](https://github.com/adamhlt/TL-WR841N).

```shell
./extract.sh
```

Este script extrai o squashfs do dump e tambem extrai o conteúdo das outras partições presentes no dump.

O script [extract_parts.sh](extract_parts.sh) extrai o conteúdo de cada uma partições do dump presente no diretório `dump_parts`.

### Dificuldades econtradas

O tempo todo eu estava tentando realizar o dump da memoria flash com o CH341A e usando um SOIC clip, na maioria das vezes era possivel obter o `.bin`, mas na hora de extraír o conteúdo do dump com `unsquashfs` eu recebia um erro ao tentar extrair o filesystem. Depois de muitas tentativas, imaginei que talvez eu estivesse fazendo algo errado, a única alimentação que a placa estava recebendo era a do CH341 (3.3v), então resolvi alimentar a placa com uma fonte de alimentação na mesma voltagem que o roteador trabalhava (9v), e para minha surpresa, o dump foi feito com sucesso e o conteúdo extraído sem problemas. Presumo que a alimentação do CH341A não era suficiente para fazer com que todas as partes da plaça funcionassem corretamente.
