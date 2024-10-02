import Card from "./components/Card";

export default function Home() {
  return (
    <div 
      className="relative min-h-screen bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('/images/background.jpg')" }} // Corrected background image path
    >
      <div className="flex flex-col items-center justify-center space-y-8 p-4">
        {/* Card with image */}
        <Card name="Asma" rollno="101" day="Monday" imageUrl="/images/asma.jpg" />
        <Card name="Hina" rollno="102" day="Monday" imageUrl="/images/hina.jpg" />
        <Card name="Huma" rollno="103" day="Monday" imageUrl="/images/huma.jpg" />
      </div>
    </div>
  );
}
