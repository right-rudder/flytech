import imgLogo from "../assets/flytech-logo-wg_1000px-980x262.webp";

export default function Logo({ className = "" }) {
  return (
    <img
      src={imgLogo.src} 
      alt="FlyTech Pilot Academy Logo"
      className={`object-contain drop-shadow-md ${className}`}
      loading="eager"
    />
  );
}
