import { CgSpinner } from 'react-icons/cg'

export const LoadingSpinner = () => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <CgSpinner className="animate-spin w-8 h-8" />
    </div>
  )
}
