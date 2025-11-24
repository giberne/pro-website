'use client'

import { useEffect } from 'react'

export default function V2RootWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    // Charger le CSS Calendly
    const link = document.createElement('link')
    link.href = 'https://assets.calendly.com/assets/external/widget.css'
    link.rel = 'stylesheet'
    document.head.appendChild(link)

    // Charger le script Calendly
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      // Cleanup
      document.head.removeChild(link)
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  return <>{children}</>
}
