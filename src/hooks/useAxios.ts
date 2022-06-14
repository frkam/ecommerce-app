import axios from 'axios'
import { useEffect, useState } from 'react'
import { IProduct } from 'types/products.types'

export const useAxios = (url: string) => {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState<IProduct>()
  const [error, setError] = useState(null)

  // eslint-disable-next-line @typescript-eslint/no-shadow
  const fetchData = (url: string) => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data)
      })
      .catch((error_) => {
        setError(error_)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  useEffect(() => {
    fetchData(url)
  }, [url])

  return { data, isLoading, error }
}
