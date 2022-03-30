import {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  useEffect
} from 'react'
import { Product } from '../components/Catalog'

export const Context = createContext<Value | null>(null)

interface Props {
  children: JSX.Element
}

interface User {
  points: number
  products: Product[]
}

interface Value {
  user: User
  setUser: Dispatch<SetStateAction<User>>
}

const UserProvider = ({ children }: Props) => {
  const [user, setUser] = useState<User>({
    points: 0,
    products: []
  })

  useEffect(() => {
    const pointsInStorage = localStorage.getItem('points')
    if (pointsInStorage) {
      setUser({
        ...user,
        points: parseInt(pointsInStorage)
      })
    }
  }, []) // eslint-disable-line

  return (
    <Context.Provider value={{ user, setUser }}>{children}</Context.Provider>
  )
}

export default UserProvider
