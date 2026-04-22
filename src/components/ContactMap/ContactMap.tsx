import './ContactMap.css'

export default function ContactMap() {
  return (
    <div className="contact-map" aria-label="Locația noastră pe hartă">
      <iframe
        className="contact-map__iframe"
        src="https://maps.google.com/maps?q=Str.+Recoltei+5,+Dumbrava,+Romania&output=embed&z=16"
        title="Locația noastră - Str. Recoltei 5, Dumbrava"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  )
}
