import { Bench } from "@/components/bench";
import { ContactBand } from "@/components/contact-band";
import { Hero } from "@/components/hero";
import { JsonLd } from "@/components/json-ld";
import { Practice } from "@/components/practice";
import { Record } from "@/components/record";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Work } from "@/components/work";

export default function Page() {
  return (
    <div id="top" className="relative z-10">
      <JsonLd />
      <SiteHeader />
      <main id="content">
        <Hero />
        <Work />
        <Bench />
        <Practice />
        <Record />
        <ContactBand />
      </main>
      <SiteFooter />
    </div>
  );
}
