---
title: "GePart"
description: "Parteiklassifikation mittels Machine Learning"
status: "done"
type: "Studienarbeit"
featured: true
year: 2023
pubDatetime: 2023-03-26
thumbnail: "@/assets/images/deutscher_bundestag.jpg"
githubUrl: "https://github.com/felixhoffmnn/gepart"
---

**GePart** ist ein deutsches Parteiklassifizierungsmodell, das in der Lage ist, die wahrscheinlichste Partei für einen gegebenen Text vorherzusagen. Dieses Repository ist Teil eines Studentenprojekts an der [Dualen Hochschule Baden-Württemberg](https://www.dhbw.de/startseite) während des 5. und 6. Semesters meines Bachelorstudiums in Informatik.

Für das Training des Klassifikationsmodells wurden verschiedene Quellen verwendet (z. B. Reden, Tweets und Parteiprogramme) mit Worteinbettungen wie [FastText](https://fasttext.cc/) und Transformer-Modellen wie [BERT](https://arxiv.org/abs/1810.04805).

## Gehostetes Modell

Das Modell basiert auf einer deutschen Version des DistilBERT-Modells. Das Modell kann auf [Hugging Face](https://huggingface.co/felixhoffmnn/GePart) gefunden und getestet werden.

**Wichtig:** Bei dem Modell handelt es sich um ein Proof-of-Concept. Es ist nicht für den produktiven Einsatz geeignet. Auf dem Testdatensatz erreicht das Modell eine Genauigkeit ($F_1$) von $0,58$.

## Lizenz

Dieses Projekt steht unter der [GNU GPL V3](https://github.com/felixhoffmnn/gepart/blob/main/LICENSE) Lizenz.
