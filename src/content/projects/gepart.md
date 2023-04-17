---
title: "GePart"
description: "Parteiklassifikation mittels Machine Learning"
featured: true
pubDatetime: 2023-03-26
thumbnail: "@assets/images/deutscher_bundestag.jpg"
githubUrl: "https://github.com/felixhoffmnn/gepart"
---

GePart ist ein Klassifikationsmodell, welches dazu genutzt werden kann, Texte anhand der sechs größten Parteien in Deutschland zu klassifizieren.

<br />

![Bundestag](../../assets/images/deutscher_bundestag.jpg)

<br />

```python
from gepart import GePart

model = GePart()
model.predict("Die SPD ist eine Partei, die sich für die sozialen Belange der Menschen einsetzt.")
#> 'SPD'
```

<br />

_Sobald diese Webseite fertig ist, findest du hier mehr Informationen._
