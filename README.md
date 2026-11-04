# Proc. Caren Torbey · Gestoría de trámites

Landing en español para particulares, empresas y profesionales, basada en la propuesta visual verde oliva, crema y dorado aprobada. Diseño responsive con navegación móvil, servicios desplegables y contacto por WhatsApp.

## Ejecutar

Requiere Node.js 20 o superior. No necesita instalar dependencias.

```sh
npm run dev
```

Abre `http://localhost:4173`. Para elegir puerto: `npm run dev -- --port 3000`.

```sh
npm run check
npm run build
npm run preview
```

`dist/` contiene la web estática lista para Netlify, Vercel, Cloudflare Pages o GitHub Pages. También se puede servir directamente `public/`.

## Contacto y funcionamiento

- WhatsApp: +598 91 682 154.
- Instagram: @torbeytramites.uy.
- El formulario prepara un mensaje con los datos ingresados y abre WhatsApp. El visitante lo revisa y lo envía. No simula un envío de correo ni guarda datos en un servidor.
- El enlace alternativo aparece después de preparar la consulta si el navegador bloquea una pestaña nueva.
- Los desplegables funcionan sin JavaScript. JavaScript añade navegación móvil y preparación de la consulta.
- No se usan analytics, cookies ni servicios externos de fuentes o iconos.

## Personalización

- `public/index.html`: textos, datos de contacto y estructura.
- `public/styles.css`: colores, tipografía, tamaños y adaptación móvil.
- `public/app.js`: menú, iconos, formulario y enlaces de WhatsApp.
- `public/assets/`: firma, imágenes, fuentes e iconos locales.

Los textos de presentación y detalle son borradores editoriales para revisar con Caren antes del lanzamiento comercial. No se incluyen testimonios, matrículas, credenciales ni garantías inventadas. Las imágenes de arquitectura y escritorio se generaron para esta propuesta; la firma se extrajo de la referencia suministrada.

## Accesibilidad y mobile

Breakpoints a 1000, 700 y 359 px; tipografía fluida; campos de 16 px en mobile; áreas táctiles amplias; etiquetas, estados de foco, enlace para saltar al contenido, soporte de movimiento reducido y botón fijo de WhatsApp que se oculta al usar el formulario.

## Créditos

- DM Sans y Libre Baskerville: SIL Open Font License, incluidas junto a los archivos.
- Iconos Phosphor Light: licencia MIT incluida en `public/assets/icons/LICENSE.txt`.
- Identidad y contenidos comerciales: Proc. Caren Torbey.

## Publicar en GitHub

Una vez autenticado con una cuenta que pueda crear repositorios en `jrcwebdesign`:

```sh
gh repo create jrcwebdesign/caren-torbey --private --source=. --remote=origin --push
```

El repositorio se propone privado por defecto. El workflow incluido compila y comprueba el proyecto en cada push y pull request. No publica automáticamente una web ni recopila datos de consultas.
