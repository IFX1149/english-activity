import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const slides = [
  {
    title: "A Letter to God",
    subtitle: "Role-play Activity",
    content: "Based on the story from NCERT English Class 10",
  },
  {
    title: "Scene 1: Lencho's Farm",
    content: "• Lencho and family discuss the need for rain\n• Lencho decides to write a letter to God",
    image: "/api/placeholder/800/600"
  },
  {
    title: "Scene 2: The Post Office",
    content: "• Postmaster reads Lencho's letter\n• Employees decide to help Lencho",
    image: "/api/placeholder/800/600"
  },
  {
    title: "Scene 3: Lencho's Return",
    content: "• Lencho receives the money\n• Writes another letter accusing post office of theft",
    image: "/api/placeholder/800/600"
  },
  {
    title: "Characters",
    content: "• Narrator\n• Lencho\n• Lencho's Wife\n• Lencho's Son\n• Postmaster\n• Post Office Employee",
  },
  {
    title: "Thank You!",
    subtitle: "Enjoy your role-play!",
    content: "Remember: Attendance is mandatory for this Multiple Assessment Activity",
  }
];

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const Slide = ({ slide }) => (
    <Card className="w-full h-full flex flex-col justify-between p-8 bg-gradient-to-br from-blue-100 to-green-100">
      <CardContent className="flex flex-col items-center justify-center h-full text-center">
        <h1 className="text-4xl font-bold mb-4">{slide.title}</h1>
        {slide.subtitle && <h2 className="text-2xl mb-6">{slide.subtitle}</h2>}
        {slide.image && <img src={slide.image} alt="Scene illustration" className="mb-6 rounded-lg shadow-md" />}
        <p className="text-xl whitespace-pre-line">{slide.content}</p>
      </CardContent>
    </Card>
  );

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="w-4/5 h-4/5 relative">
        <Slide slide={slides[currentSlide]} />
      </div>
      <div className="flex justify-between w-4/5 mt-4">
        <Button onClick={prevSlide} className="flex items-center">
          <ChevronLeft className="mr-2" /> Previous
        </Button>
        <Button onClick={nextSlide} className="flex items-center">
          Next <ChevronRight className="ml-2" />
        </Button>
      </div>
    </div>
  );
};

export default Presentation;
