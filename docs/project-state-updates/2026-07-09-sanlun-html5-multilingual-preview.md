# 2026-07-09 Sanlun HTML5 Multilingual Preview Addendum

## Purpose

This addendum records a multilingual upgrade to the Sanlun HTML5 visualization preview.

The update adds multilingual presentation support for:

- Chinese Simplified (`zh`)
- Japanese (`ja`)
- Korean (`ko`)
- English (`en`)

---

## Issue

- #31 Add multilingual HTML5 visualization shell

---

## Files changed

- `docs/visualizations/sanlun-relation-preview.html`
- `docs/project-state-updates/2026-07-09-sanlun-html5-multilingual-preview.md`

---

## Work completed

The HTML5 preview now includes:

1. Project introduction section
2. Feature preview section
3. Manual language switcher
4. Automatic language selection logic
5. URL language override through `?lang=zh`, `?lang=ja`, `?lang=ko`, or `?lang=en`
6. Deployment-layer IP locale hook through `window.__NLA_IP_LOCALE__`
7. Browser-language fallback through `navigator.language`
8. Local storage for manual language preference

---

## IP locale boundary

A purely static HTML file cannot directly access a visitor IP address without a hosting layer or third-party service.

To avoid adding external dependencies or a third-party IP geolocation call, this batch implements a safe deployment hook:

```js
window.__NLA_IP_LOCALE__ = "ja";
```

A later hosting layer can inject this value based on request country or IP region, for example through:

- Cloudflare Worker
- Nginx template injection
- Vercel / Netlify Edge middleware
- a project-owned backend

Current priority order:

1. URL `?lang=` override
2. Saved manual language preference
3. Deployment-layer IP locale hook
4. Browser language
5. English fallback

---

## Safety summary

This maintenance round:

- operated only on `jiazhouxv/nagarjuna-lineage-archive`
- did not operate on `jiazhouxv/ai-paper-diagnosis`
- did not enter Engineering OS v0.5
- did not add autonomous evolution logic
- did not redistribute restricted full text
- did not change canonical relation records
- did not treat visualization sample edges as reviewed scholarly claims
- did not add external JavaScript or CDN dependencies
- did not call a third-party IP geolocation API from the static page

---

## Recommended next step

After this PR is merged and Actions are green, the next safe step should be:

`Add reviewed relation JSON schema for Sanlun visualization`

That next batch should add a schema file only and still avoid creating new canonical relation records.
