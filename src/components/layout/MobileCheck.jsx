import React, { useEffect, useState } from 'react'

export const MobileCheck = () => {
    const [isMoblile, setIsMobile] = useState(false)
    const checkViewPort = () => {
      const width = window.innerWidth
      setIsMobile(width <= 768)
    }
    useEffect(() => {
      checkViewPort();
      window.addEventListener('resize', checkViewPort)
      return () => {
        window.removeEventListener('resize', checkViewPort);
      }
    }, [])
    return isMoblile
}
