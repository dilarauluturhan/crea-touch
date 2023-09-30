const Loading = () => {
  return (
    <div className="flex items-center justify-center space-x-2">
      <div className="w-5 h-5 rounded-full animate-pulse bg-secondColor"></div>
      <div className="w-5 h-5 rounded-full animate-pulse bg-secondColor"></div>
      <div className="w-5 h-5 rounded-full animate-pulse bg-secondColor"></div>
    </div>
  )
}

export default Loading;