import JobItem from "@/components/cards/job-item";

export default function Vagas() {
  return (
    <main className="py-10">
      <h2 className="font-display mb-12 text-2xl font-bold">Todas as Vagas</h2>
      <div className="space-y-8">
        <JobItem />
        <JobItem />
        <JobItem />
        <JobItem />
      </div>
    </main>
  );
}