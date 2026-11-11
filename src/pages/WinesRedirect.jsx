import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAgeGate } from '../context/AgeGate'

// /vins used to be the wines page; the wines now live on the online shop.
// Send visitors home and open the age check, which leads to the shop.
const WinesRedirect = () => {
  const navigate = useNavigate()
  const openAgeGate = useAgeGate()

  useEffect(() => {
    navigate('/', { replace: true })
    openAgeGate()
  }, [navigate, openAgeGate])

  return null
}

export default WinesRedirect
