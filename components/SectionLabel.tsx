export default function SectionLabel({ command, title }: { command: string, title: string }) {
  return (
    <div className="mb-8">
      <p className="text-sm text-gray-500 mb-2 font-mono">$&nbsp;{command}</p>
      <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
    </div>
  );
}