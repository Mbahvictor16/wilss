import React, { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

function Reload() {
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        navigate(location.state)
    }, [navigate])
}

export default Reload