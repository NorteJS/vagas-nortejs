import { formatCurrency } from "@/lib/format-currency";
import { Button } from "../ui/button";
import { JobItemResponse, Job } from "@/lib/@types/job-item-types";

type JobItemProps = {
  job?: Job;
};

export default function JobItem({ job }: JobItemProps) {

  return (
    <article className="cursor-pointer flex w-full items-center justify-between border border-t-4 border-black px-6 py-4 transition-colors hover:border-blue-400 rounded-t-md">
      <h3 className="font-display text-lg font-medium text-gray-700">
        {job?.title || "Sem título"}
      </h3>
      <h4 className="font-normal text-gray-500">{job?.company || "Sem empresa"}</h4>
      <h4 className="font-normal text-gray-500">{job?.city || "Sem cidade"}</h4>
      <h4 className="font-normal text-gray-500">{formatCurrency(job?.salary)}</h4>
      {/* <Form> */}
        <Button className="cursor-pointer" variant={"default"}>
          Ver vaga
        </Button>
      {/* </Form> */}
    </article>
  );
}