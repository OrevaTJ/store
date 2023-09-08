import { useState, useEffect } from 'react'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

// Give components access to currently logged in user
export const useUser = () => {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true) // Is Loading user info - true 

  useEffect(() => {
    // To know what current user is
    // User state either logged in or not logged in 
    const unsubscribe = onAuthStateChanged(getAuth(), user => {
      setUser(user)
      setIsLoading(false) // After loading user info - set to false
    })

    return unsubscribe 
  }, [])

  return {user, isLoading}
}
