import { site } from "@/content/profile";

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {site.legalName}
        </p>
        <p>DeFi AI Technologies · KTE · EcoSip</p>
      </div>
    </footer>
  );
}
