import { useEffect, useState } from "react";

const sections = [
  { id: "aboutus", label: "About Us", number: "01" },
  { id: "ourmission", label: "Our Mission", number: "02" },
  { id: "character", label: "Character", number: "03" },
  { id: "creation-process", label: "Creation Process", number: "04" },
  { id: "gallery", label: "Gallery", number: "05" },
  { id: "special-elements", label: "Special Elements", number: "06" },
  { id: "creative-team", label: "Creative Team", number: "07" },
  { id: "mint", label: "Mint", number: "08" },
  { id: "contact", label: "Contact", number: "09" },
];

function Sidebar() {
  const [activeSection, setActiveSection] = useState("");
  const [animationClass, setAnimationClass] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      let currentSection = "";

      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element && element.offsetTop <= scrollPosition) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    // Trigger the animation after the component is mounted
    setAnimationClass("animate-slide-in-from-right");

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <aside
        className={`fixed top-20 right-9 pt-20 lg:block z-10 ${animationClass} hidden lg:flex`}
        id="lists"
      >
        <ul className="space-y-4 relative h-[200px]">
          {sections.map((section) => {
            const isActive = section.id === activeSection;

            return (
              <div key={section.id} className="flex justify-end gap-10">
                <button
                  onClick={() => handleClick(section.id)}
                  className={`text-right ${isActive ? 'font-bold' : ''}`}
                >
                  {section.label}
                </button>
                <div>
                  <span className="text-right">{section.number}</span>
                  {isActive && (
                    <div className="transition-transform ease bg-black my-4 h-[100px] w-0.5 ml-2" />
                  )}
                </div>
              </div>
            );
          })}
        </ul>
      </aside>
    </>
  );
}

export default Sidebar;
