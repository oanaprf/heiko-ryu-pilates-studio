export default function SectionDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <div className="h-px flex-1 bg-border" />
      <div className="h-1.5 w-1.5 rounded-full bg-ocean" />
      <div className="h-px flex-1 bg-border" />
    </div>
  );
}
