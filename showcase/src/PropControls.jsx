const panelStyle = {
  background: 'rgba(255,255,255,0.03)',
  border: '1px solid rgba(255,255,255,0.08)',
  borderRadius: 12,
  padding: '1rem 1.25rem',
  margin: '1rem',
};

const rowStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '0.75rem',
  padding: '0.35rem 0',
};

const labelStyle = {
  minWidth: 100,
  fontSize: '0.8rem',
  color: '#aaa',
  flexShrink: 0,
};

const sliderStyle = {
  flex: 1,
  accentColor: '#a78bfa',
  height: 4,
  cursor: 'pointer',
};

const valueStyle = {
  minWidth: 32,
  textAlign: 'right',
  fontSize: '0.8rem',
  color: '#a78bfa',
  fontVariantNumeric: 'tabular-nums',
};

const checkboxStyle = {
  accentColor: '#a78bfa',
  width: 18,
  height: 18,
  cursor: 'pointer',
};

const selectStyle = {
  flex: 1,
  background: 'rgba(255,255,255,0.05)',
  border: '1px solid rgba(255,255,255,0.1)',
  borderRadius: 6,
  color: '#ddd',
  padding: '0.3rem 0.5rem',
  fontSize: '0.8rem',
  outline: 'none',
  cursor: 'pointer',
};

const headerStyle = {
  fontSize: '0.75rem',
  fontWeight: 600,
  color: '#666',
  textTransform: 'uppercase',
  letterSpacing: '0.08em',
  marginBottom: '0.5rem',
  paddingBottom: '0.5rem',
  borderBottom: '1px solid rgba(255,255,255,0.06)',
};

const PropControls = ({ config, values, onChange }) => {
  if (!config || config.length === 0) return null;

  return (
    <div style={panelStyle}>
      <div style={headerStyle}>Controls</div>
      {config.map(prop => (
        <div key={prop.name} style={rowStyle}>
          <span style={labelStyle}>{prop.label}</span>
          {prop.type === 'range' && (
            <input
              type="range"
              min={prop.min}
              max={prop.max}
              step={prop.step}
              value={values[prop.name] ?? prop.default}
              onChange={e => onChange(prop.name, parseFloat(e.target.value))}
              style={sliderStyle}
            />
          )}
          {prop.type === 'checkbox' && (
            <input
              type="checkbox"
              checked={values[prop.name] ?? prop.default}
              onChange={e => onChange(prop.name, e.target.checked)}
              style={checkboxStyle}
            />
          )}
          {prop.type === 'select' && (
            <select
              value={values[prop.name] ?? prop.default}
              onChange={e => onChange(prop.name, e.target.value)}
              style={selectStyle}
            >
              {prop.options.map(opt => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          )}
          <span style={valueStyle}>
            {prop.type === 'checkbox'
              ? (values[prop.name] ?? prop.default) ? 'true' : 'false'
              : values[prop.name] ?? prop.default}
          </span>
        </div>
      ))}
    </div>
  );
};

export default PropControls;
