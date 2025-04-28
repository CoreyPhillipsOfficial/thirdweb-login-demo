# Health Wallet 🌿

A lightweight React + Vite demo that lets users sign in or create an embedded crypto wallet on the Celo blockchain with a single click.  
The UI is styled with **Tailwind CSS v3** + **DaisyUI**, while authentication and wallet handling come from **thirdweb/react**.

## ✨ Features

| Feature | Details |
|:--------|:--------|
| Connect / Create Wallet | Uses thirdweb’s Account-Abstraction flow to generate an embedded, gasless wallet for first-time users. |
| Celo Mainnet ready | Pre-configured chain object (`chainId 42220`) and public RPC (`https://forno.celo.org`). |
| DaisyUI components | Cards, buttons, and color palette handled by DaisyUI; swap themes with a single `data-theme` attribute. |
| Fully typed | Built with TypeScript and Vite for ultrafast DX. |
| Minimal footprint | No server code—pure client-side SPA you can drop on Netlify / Vercel / GitHub Pages. |

## 🏃‍♂️ Quick start

```bash
# 1 Clone & install
git clone https://github.com/<your-org>/health-wallet-demo.git
cd health-wallet-demo
npm install          # Node ≥ 18 recommended

# 2 Provide your thirdweb client ID
echo 'VITE_THIRDWEB_CLIENT_ID=<your-id>' >> .env.local

# 3 Run dev server
npm run dev          # http://localhost:5173
```

> Need a client ID? Create one free on the [thirdweb dashboard](https://thirdweb.com).

## 🛠 Scripts

| Command | Purpose |
|:--------|:--------|
| `npm run dev` | Start Vite in hot-reload mode |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Serve the build for a quick smoke test |
| `npm audit fix` | Auto-remediate low-risk npm vulnerabilities |

## 🔧 Tech stack

| Layer | Library / Tool |
|:------|:---------------|
| Front-end framework | React 19 + TypeScript |
| Bundler | Vite 6 |
| CSS utility | Tailwind CSS 3 |
| Component theme | DaisyUI |
| Wallet SDK | @thirdweb-dev/react 4 |
| Blockchain | Celo Mainnet (EVM chain 42220) |


# 🌈 Customizing Styles

## Change Global Theme

Edit `index.html` and set:

```html
<html lang="en" data-theme="emerald">
```

Or create your own palette in `tailwind.config.cjs` under `daisyui.themes`.

---

## Tweak the Connect Button Only

Override the internal button class in `src/index.css`:

```css
.tw-connect-wallet__button {
  @apply btn btn-primary bg-emerald-600 hover:bg-emerald-700 text-white;
}
```

# 🤝 Contributing

- Fork the repo and create a feature branch:

```bash
git checkout -b feat/amazing-thing
```

- Commit your changes with clear messages.
- Open a pull request; the CI will lint and build automatically.

---

# 📜 License

If you build something cool with it, drop a star or open an issue! 😊