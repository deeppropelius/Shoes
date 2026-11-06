type NavlinksProps = {
  name: string;
  link: string;
};

function Navlinks({ name, link }: NavlinksProps) {
  return (
    <div className="font-medium text-xs tracking-wider uppercase transition-colors duration-200">
      <a
        href={link}
        className="text-foreground/75 hover:text-foreground hover:opacity-100 transition-all duration-200"
      >
        {name}
      </a>
    </div>
  );
}

export default Navlinks;
