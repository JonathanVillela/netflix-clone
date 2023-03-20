import useSWR from 'swr'
import fetcher from "@/lib/fetcher"


//options from SWR. Opting to keep the media more static.
const useBillboard = () => {
  const { data, error, isLoading } = useSWR('/api/random', fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  })

  return {
    data,
    error,
    isLoading,
  }
}

export default useBillboard;