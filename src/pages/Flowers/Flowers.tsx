import Navbar from '@/components/Navbar/Navbar'

import './Flowers.css'

export default function Flowers() {
  return (
    <>
      <Navbar />
      <main className="flowers" aria-label="Florile noastre">
        <h1 className="flowers__heading">Florile Noastre</h1>
      </main>
    </>
  )
}
