# Seguridad del sitio

## Alcance
Este repositorio contiene un catálogo web estático. No debe almacenar contraseñas, tokens, claves privadas, datos de tarjetas ni información personal de clientes. El catálogo no debe recibir ni procesar pagos directamente.

## Reportar una vulnerabilidad
No publiques detalles explotables en un issue público. Contactá al titular del sitio por un canal privado y compartí pasos mínimos para reproducir el problema. Evitá acceder, modificar o descargar datos ajenos.

## Controles para mantener
- Mantener activada la autenticación de dos factores (2FA) en GitHub, correo y proveedor DNS.
- Limitar colaboradores y permisos al mínimo necesario; revisar accesos periódicamente.
- Proteger `main`: exigir Pull Request y revisión antes de integrar cambios. No publicar cambios directamente sin probarlos.
- Mantener HTTPS y redirección HTTP→HTTPS en GitHub Pages/Cloudflare; revisar el dominio personalizado y DNSSEC con el proveedor DNS.
- Configurar encabezados de seguridad en el proveedor que sirve el dominio: Content-Security-Policy, X-Content-Type-Options: nosniff, Referrer-Policy y Permissions-Policy. HSTS solo cuando HTTPS esté confirmado para todo el dominio y subdominios pertinentes.
- No cargar scripts de terceros innecesarios. Si se agregan acciones de GitHub, fijarlas a SHA completo y revisar actualizaciones.
- Validar y escapar datos del catálogo antes de insertarlos en el DOM. No usar `innerHTML` con contenido sin validar.
- Mantener copias de seguridad y probar cambios en una rama antes de publicarlos.

## Límite importante
Los archivos del repositorio no pueden activar por sí solos 2FA, protección de ramas, DNSSEC ni encabezados HTTP en GitHub Pages. Estos controles requieren configuración y verificación en GitHub y en el proveedor DNS/hosting. Esta guía no certifica que esos controles estén activos.
