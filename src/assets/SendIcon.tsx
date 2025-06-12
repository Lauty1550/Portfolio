import "../css/Mail.css";

function SendIcon({ color }: { color: string }) {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M510.54 36.2559C517.707 14.7503 497.25 -5.71016 475.744 1.45739L18.8116 153.77C-6.84822 162.322 -6.05279 198.889 19.9525 206.318L242.185 269.816L305.679 492.048C313.111 518.056 349.675 518.851 358.227 493.188L510.54 36.2559ZM474.716 56.7367L332.132 484.491L268.759 262.692L474.716 56.7367ZM455.263 37.2836L249.309 243.238L27.5119 179.868L455.263 37.2836Z"
        fill={color}
      />
    </svg>
  );
}

export default function SendButton({ color }: { color: string }) {
  return (
    <main className="mail-button tooltip-wrapper">
      <SendIcon color={color} />
      <span className="tooltip-text">Enviar correo</span>
    </main>
  );
}
