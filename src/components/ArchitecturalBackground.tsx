export default function ArchitecturalBackground() {
  return (
    <div 
      className="absolute inset-0 opacity-5 pointer-events-none"
      aria-hidden="true"
    >
      <svg 
        viewBox="0 0 1200 800" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        style={{
          backgroundPosition: 'right bottom',
          backgroundSize: 'contain',
        }}
      >
        {/* Main building structure */}
        <g opacity="0.3">
          {/* Building outline */}
          <path 
            d="M800 200 L1000 150 L1000 700 L600 700 L600 250 Z" 
            stroke="#102028" 
            strokeWidth="2" 
            fill="none"
          />
          
          {/* Glass facade lines - horizontal */}
          <path d="M650 300 L950 300" stroke="#102028" strokeWidth="1" opacity="0.4"/>
          <path d="M650 350 L950 350" stroke="#102028" strokeWidth="1" opacity="0.4"/>
          <path d="M650 400 L950 400" stroke="#102028" strokeWidth="1" opacity="0.4"/>
          <path d="M650 450 L950 450" stroke="#102028" strokeWidth="1" opacity="0.4"/>
          <path d="M650 500 L950 500" stroke="#102028" strokeWidth="1" opacity="0.4"/>
          <path d="M650 550 L950 550" stroke="#102028" strokeWidth="1" opacity="0.4"/>
          <path d="M650 600 L950 600" stroke="#102028" strokeWidth="1" opacity="0.4"/>
          <path d="M650 650 L950 650" stroke="#102028" strokeWidth="1" opacity="0.4"/>
          
          {/* Glass facade lines - vertical */}
          <path d="M700 250 L700 700" stroke="#102028" strokeWidth="1" opacity="0.4"/>
          <path d="M750 250 L750 700" stroke="#102028" strokeWidth="1" opacity="0.4"/>
          <path d="M800 250 L800 700" stroke="#102028" strokeWidth="1" opacity="0.4"/>
          <path d="M850 250 L850 700" stroke="#102028" strokeWidth="1" opacity="0.4"/>
          <path d="M900 250 L900 700" stroke="#102028" strokeWidth="1" opacity="0.4"/>
          <path d="M950 250 L950 700" stroke="#102028" strokeWidth="1" opacity="0.4"/>
          
          {/* Reflective highlights */}
          <path d="M750 300 L780 300 L780 350 L750 350 Z" fill="#102028" opacity="0.1"/>
          <path d="M850 400 L880 400 L880 450 L850 450 Z" fill="#102028" opacity="0.1"/>
          <path d="M800 500 L830 500 L830 550 L800 550 Z" fill="#102028" opacity="0.1"/>
          
          {/* Additional architectural details */}
          <path d="M600 250 L650 250" stroke="#102028" strokeWidth="1" opacity="0.3"/>
          <path d="M600 300 L650 300" stroke="#102028" strokeWidth="1" opacity="0.3"/>
          <path d="M600 350 L650 350" stroke="#102028" strokeWidth="1" opacity="0.3"/>
        </g>
      </svg>
    </div>
  );
} 