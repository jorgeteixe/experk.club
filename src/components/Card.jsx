export function Card({ imageSrc, title, description, onLike, onDislike }) {
  return (
    <div
      className={`absolute inset-0 h-[450px] w-[300px] rounded-lg shadow-xl overflow-hidden flex flex-col bg-black bg-opacity-30`}
    >
      <div className="relative grow">
        <img
          src={imageSrc}
          alt="Profile"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-3">
          <h2 className="text-white text-lg font-bold">{title}</h2>
          <p className="text-white text-sm">{description}</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 p-2 bg-black">
        <button
          type="button"
          onClick={onDislike}
          className="py-2 bg-red-100 text-red-600 font-medium rounded-md"
        >
          👎🏻 Dislike
        </button>
        <button
          type="button"
          onClick={onLike}
          className="py-2 bg-green-100 text-green-600 font-medium rounded-md"
        >
          👍🏻 Like
        </button>
      </div>
    </div>
  )
}
