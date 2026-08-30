---
# Plantilla per a entrades del blog — copia aquest fitxer a src/content/blog/nom-de-lentrada.md
# Les imatges van a public/images/blog/

categories:
  va: ["Notícies"]
  es: ["Noticias"]
  en: ["News"]

title:
  va: "Títol de l'entrada"
  es: "Título de la entrada"
  en: "Post title"

date: 2026-01-15

author: "Muixeranga d'Elx"

description:
  va: "Resum breu que es mostra a la targeta del blog."
  es: "Resumen breve que se muestra en la tarjeta del blog."
  en: "Short summary shown on the blog card."

coverImage: /images/blog/exemple-portada.jpg

content:
  va:
    - type: text
      text: |
        Primer paràgraf del cos de l'entrada. Pot ser tan llarg com calga,
        en una o diverses línies.

    - type: images
      images:
        - /images/blog/exemple-1.jpg
        - /images/blog/exemple-2.jpg

    - type: text
      text: |
        Segon paràgraf després de les imatges.

    - type: images
      images: []

  es:
    - type: text
      text: |
        Primer párrafo del cuerpo de la entrada.

    - type: images
      images:
        - /images/blog/exemple-1.jpg
        - /images/blog/exemple-2.jpg

    - type: text
      text: |
        Segundo párrafo después de las imágenes.

    - type: images
      images: []

  en:
    - type: text
      text: |
        First paragraph of the post body.

    - type: images
      images:
        - /images/blog/exemple-1.jpg
        - /images/blog/exemple-2.jpg

    - type: text
      text: |
        Second paragraph after the images.

    - type: images
      images: []
---
