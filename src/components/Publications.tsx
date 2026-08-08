import Timeline from "./Timeline";
import ScrollAnimation from "./ScrollAnimation";
import publicationsTimelineElements from "../assets/publicationsTimelineElements";
import { textAccentColor } from "../assets/accentColor";

function Publications() {
  return (
    <div className="flex w-screen flex-col items-center bg-zinc-100 px-4 py-24 dark:bg-zinc-900 xl:flex-row xl:justify-center xl:gap-20 xl:px-32">
      {/* Timeline */}
      <ScrollAnimation
        className="order-2 w-full max-w-2xl xl:order-1"
        delay={200}
        translateBefore="-translate-x-1/2"
      >
        <Timeline items={publicationsTimelineElements} side="left" />
      </ScrollAnimation>

      {/* Text */}
      <ScrollAnimation
        className="order-1 mb-10 mt-12 flex h-auto max-w-2xl flex-col items-center text-center xl:order-2 xl:mb-0 xl:mt-0 xl:ml-10 xl:items-start xl:justify-center xl:text-start"
        delay={200}
        translateBefore="translate-x-1/2"
      >
        <h2
          className={`mb-4 text-center text-3xl font-bold ${textAccentColor} md:text-5xl md:text-start`}
        >
          Publications &amp; Presentations
        </h2>

        <p className="max-w-xl text-lg leading-relaxed">
          My research work has led to conference presentations, research
          posters, and manuscript projects across applied AI, smart
          manufacturing, GIS, and remote sensing.
        </p>

        <div className="mt-6 grid w-full max-w-xl grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="rounded-2xl border border-blue-300/20 bg-white/5 p-4">
            <p className={`text-sm font-semibold ${textAccentColor}`}>Themes</p>
            <p className="mt-1 text-sm">Applied AI, GIS, and remote sensing</p>
          </div>

          <div className="rounded-2xl border border-blue-300/20 bg-white/5 p-4">
            <p className={`text-sm font-semibold ${textAccentColor}`}>
              Presentations
            </p>
            <p className="mt-1 text-sm">CSUNposium, USC LA Geospatial Summit</p>
          </div>

          <div className="rounded-2xl border border-blue-300/20 bg-white/5 p-4">
            <p className={`text-sm font-semibold ${textAccentColor}`}>
              Manuscripts
            </p>
            <p className="mt-1 text-sm">
              Smart manufacturing and remote sensing
            </p>
          </div>

          <div className="rounded-2xl border border-blue-300/20 bg-white/5 p-4">
            <p className={`text-sm font-semibold ${textAccentColor}`}>Focus</p>
            <p className="mt-1 text-sm">Research with real-world impact</p>
          </div>
        </div>
      </ScrollAnimation>
    </div>
  );
}

export default Publications;
