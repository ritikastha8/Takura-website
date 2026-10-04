import { Reveal } from "./reveal";

type Tone = "primary" | "ink";

type Box = {
  id: string;
  label: string;
  cx: number;
  cy: number;
  w: number;
  h: number;
  tone: Tone;
};

type Line = { x1: number; y1: number; x2: number; y2: number };

const BOXES: Box[] = [
  { id: "chairman", label: "Chairman", cx: 500, cy: 30, w: 160, h: 44, tone: "primary" },
  { id: "secretary", label: "Office Secretary", cx: 500, cy: 100, w: 200, h: 44, tone: "ink" },

  { id: "bdm", label: "Business Development Manager", cx: 150, cy: 187, w: 236, h: 52, tone: "ink" },
  { id: "hr", label: "HR Manager", cx: 500, cy: 187, w: 176, h: 52, tone: "primary" },
  { id: "mkt", label: "Marketing Manager", cx: 850, cy: 187, w: 236, h: 52, tone: "ink" },

  // Eight direct reports to HR Manager, all in a single row
  { id: "finance", label: "Finance & Accounts", cx: 65, cy: 280, w: 112, h: 62, tone: "ink" },
  { id: "security", label: "Security", cx: 190, cy: 280, w: 112, h: 62, tone: "ink" },
  { id: "legal", label: "Legal Department", cx: 315, cy: 280, w: 112, h: 62, tone: "ink" },
  { id: "frontdesk", label: "Front Desk", cx: 440, cy: 280, w: 112, h: 62, tone: "ink" },
  { id: "processing", label: "Processing Dept.", cx: 565, cy: 280, w: 112, h: 62, tone: "ink" },
  { id: "pr", label: "Public Relation Officers", cx: 690, cy: 280, w: 112, h: 62, tone: "ink" },
  { id: "travel", label: "Travel Desk", cx: 815, cy: 280, w: 112, h: 62, tone: "ink" },
  { id: "it", label: "IT Maintenance", cx: 940, cy: 280, w: 112, h: 62, tone: "ink" },

  // Security -> Transportation -> House Keeping (vertical chain)
  { id: "transport", label: "Transportation", cx: 190, cy: 366, w: 172, h: 40, tone: "primary" },
  { id: "housekeeping", label: "House Keeping", cx: 190, cy: 422, w: 172, h: 40, tone: "primary" },
];

const LINES: Line[] = [
  // Chairman -> Office Secretary
  { x1: 500, y1: 52, x2: 500, y2: 78 },
  // Office Secretary -> branch bar -> three managers
  { x1: 500, y1: 122, x2: 500, y2: 150 },
  { x1: 150, y1: 150, x2: 850, y2: 150 },
  { x1: 150, y1: 150, x2: 150, y2: 161 },
  { x1: 500, y1: 150, x2: 500, y2: 161 },
  { x1: 850, y1: 150, x2: 850, y2: 161 },
  // HR Manager -> branch bar -> eight direct reports
  { x1: 500, y1: 213, x2: 500, y2: 244 },
  { x1: 65, y1: 244, x2: 940, y2: 244 },
  { x1: 65, y1: 244, x2: 65, y2: 249 },
  { x1: 190, y1: 244, x2: 190, y2: 249 },
  { x1: 315, y1: 244, x2: 315, y2: 249 },
  { x1: 440, y1: 244, x2: 440, y2: 249 },
  { x1: 565, y1: 244, x2: 565, y2: 249 },
  { x1: 690, y1: 244, x2: 690, y2: 249 },
  { x1: 815, y1: 244, x2: 815, y2: 249 },
  { x1: 940, y1: 244, x2: 940, y2: 249 },
  // Security -> Transportation -> House Keeping
  { x1: 190, y1: 311, x2: 190, y2: 346 },
  { x1: 190, y1: 386, x2: 190, y2: 402 },
];

const TONE_CLASS: Record<Tone, string> = {
  primary: "bg-primary text-primary-foreground",
  ink: "bg-ink text-ink-foreground",
};

export function OrganizationChart() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <Reveal delay={100} className="mt-2">
          <svg
            viewBox="0 0 1000 460"
            className="h-auto w-full"
            role="img"
            aria-label="Takura Overseas organization chart: Chairman, Office Secretary, Business Development Manager, HR Manager and Marketing Manager. Finance & Accounts, Security, Legal Department, Front Desk, Processing Dept., Public Relation Officers, Travel Desk and IT Maintenance all report directly to HR Manager. Transportation and House Keeping report through Security."
          >
            <g stroke="currentColor" className="text-border" strokeWidth={2}>
              {LINES.map((l, i) => (
                <line key={i} x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2} />
              ))}
            </g>

            {BOXES.map((box) => (
              <foreignObject
                key={box.id}
                x={box.cx - box.w / 2}
                y={box.cy - box.h / 2}
                width={box.w}
                height={box.h}
              >
                <div
                  className={`flex h-full w-full items-center justify-center rounded-full px-2.5 text-center shadow-card ${TONE_CLASS[box.tone]}`}
                  style={{ fontSize: 11, fontWeight: 800, letterSpacing: "0.01em", lineHeight: 1.15 }}
                >
                  <span className="uppercase">{box.label}</span>
                </div>
              </foreignObject>
            ))}
          </svg>
        </Reveal>
      </div>
    </section>
  );
}
