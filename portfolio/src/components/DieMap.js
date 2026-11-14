import sections from "../data/navigation";
import useMediaQuery from "../hooks/useMediaQuery";
import "./DieMap.css";

const COLS = [70, 235, 400];
const ROWS = [72, 212];
const BW = 150;
const BH = 118;

/**
 * Chip floorplan used as a section overview. Each block is a link; hovering or
 * focusing a block lights its copper traces. On small screens it collapses to
 * a plain list.
 */
export default function DieMap() {
  const compact = useMediaQuery("(max-width: 720px)");

  return (
    <section className="die-map section" aria-labelledby="die-title">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">floorplan</p>
          <h2 id="die-title">Find your way around the die.</h2>
          <p>Each block on the chip is a section of this site. Pick one to jump there.</p>
        </div>

        {compact ? (
          <ul className="die-list">
            {sections.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`}>
                  <span className="die-list__code">{s.block}</span>
                  <span className="die-list__name">{s.label}</span>
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <Floorplan />
        )}
      </div>
    </section>
  );
}

function Floorplan() {
  const pads = [];
  for (let x = 64; x <= 556; x += 24) {
    pads.push(<rect key={`t${x}`} x={x} y={28} width={10} height={12} rx={2} />);
    pads.push(<rect key={`b${x}`} x={x} y={380} width={10} height={12} rx={2} />);
  }
  for (let y = 64; y <= 356; y += 24) {
    pads.push(<rect key={`l${y}`} x={28} y={y} width={12} height={10} rx={2} />);
    pads.push(<rect key={`r${y}`} x={580} y={y} width={12} height={10} rx={2} />);
  }

  return (
    <svg className="die" viewBox="0 0 620 420" role="group" aria-label="Chip floorplan navigation">
      <g className="die__pads" aria-hidden="true">
        {pads}
      </g>
      <rect className="die__outline" x="40" y="40" width="540" height="340" rx="12" />

      {/* shared bus between the two rows */}
      <g className="die__bus" aria-hidden="true">
        <path d="M70 202h480" />
        {COLS.map((cx) => (
          <circle key={cx} cx={cx + BW / 2} cy={202} r={4} />
        ))}
      </g>

      {sections.map((s, i) => {
        const col = i % 3;
        const row = Math.floor(i / 3);
        const x = COLS[col];
        const y = ROWS[row];
        const mx = x + BW / 2;
        const tracePath =
          row === 0 ? `M${mx} ${y}V40` : `M${mx} ${y + BH}V380`;
        const viaY = row === 0 ? 56 : 364;
        const busPath = row === 0 ? `M${mx} ${y + BH}V202` : `M${mx} ${y}V202`;
        return (
          <a key={s.id} href={`#${s.id}`} className="die__block" aria-label={`${s.block}: ${s.label}. Jump to ${s.title}.`}>
            <path className="die__trace" d={tracePath} />
            <path className="die__trace die__trace--bus" d={busPath} />
            <circle className="die__via" cx={mx} cy={viaY} r="4.5" />
            <rect className="die__rect" x={x} y={y} width={BW} height={BH} rx="8" />
            <g className="die__lanes" aria-hidden="true">
              <path d={`M${x + 14} ${y + BH - 30}h${BW - 28}`} />
              <path d={`M${x + 14} ${y + BH - 22}h${BW - 56}`} />
              <path d={`M${x + 14} ${y + BH - 14}h${BW - 84}`} />
            </g>
            <text className="die__code" x={x + 14} y={y + 30}>
              {s.block}
            </text>
            <text className="die__name" x={x + 14} y={y + 62}>
              {s.label}
            </text>
          </a>
        );
      })}

      <text className="die__part" x="48" y="412" aria-hidden="true">
        NS-SITE-26 · floorplan rev B · 6 blocks
      </text>
      <text className="die__part die__part--right" x="572" y="412" textAnchor="end" aria-hidden="true">
        &amp;mut
      </text>
    </svg>
  );
}
