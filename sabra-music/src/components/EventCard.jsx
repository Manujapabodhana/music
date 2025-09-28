function EventCard({ image, title, faculty }) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden w-72">
      <img src={image} alt={title} className="h-40 w-full object-cover" />
      <div className="p-4 text-black">
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="text-sm text-gray-600">{faculty}</p>
      </div>
    </div>
  );
}

export default EventCard;