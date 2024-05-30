const SectionHeader = ({ label }: { label: string }) => {
  return (
    <h2 className="text-2xl md:text-5xl text-center font-semibold text-wrap sm:px-40 py-10">
      {label}
    </h2>
  );
};

export default SectionHeader;
