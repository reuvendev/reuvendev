export default function Section({ id, command, title, children }: any) {
  return (
    <section id={id} className="py-20">
      <p className="text-accent-teal font-mono text-sm mb-2">$ {command}</p>
      <h2 className="text-4xl font-bold mb-8">{title}</h2>
      {children}
    </section>
  );
}