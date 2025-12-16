const StaggeredText = ({ text }: { text: string }) => {
  return (
    <div className="flex items-center justify-center overflow-hidden">
      {text.split('').map((char, index) => (
        <div
          key={index}
          className="relative flex flex-col items-center justify-center h-5 overflow-hidden"
        >
          <span
            className="translate-y-0 transition-transform duration-300 ease-in-out group-hover:-translate-y-full"
            style={{ transitionDelay: `${index * 25}ms` }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>

          <span
            className="absolute top-full translate-y-0 transition-transform duration-300 ease-in-out group-hover:-translate-y-full"
            style={{ transitionDelay: `${index * 25}ms` }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        </div>
      ))}
    </div>
  );
};

export default StaggeredText;
