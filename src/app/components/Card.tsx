interface CardProps {
  name: string;
  rollno: string;
  day: string;
  imageUrl: string; // URL for the student's picture
}

export default function Card({ name, rollno, day, imageUrl }: CardProps) {
  return (
    <div className="w-80 p-6 bg-white rounded-lg shadow-lg transform hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out">
      <img src={imageUrl} alt={`${name}'s picture`} className="w-24 h-24 rounded-full mx-auto hover:animate-pulse" />
      <h2 className="text-2xl font-bold text-center mt-4">{name}</h2>
      <p className="text-center text-gray-600">Roll No: {rollno}</p>
      <p className="text-center text-gray-600">Day: {day}</p>
    </div>
  );
}


  



