import { Job } from "@/lib/@types/job-item-types";
import { Card, CardContent, CardHeader } from "../ui/card";
import Link from "next/link";
import { Briefcase, DollarSign, MapPin } from "lucide-react";
import { Badge } from "../ui/badge";
import { formatCurrency } from "@/lib/format-currency";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import Form from "next/form"
import { deleteJob } from "@/lib/actions/vagas";

export default function JobPostingCard({ job }: { job: Job }) {
  return (
    <Card className="space-y-4">
      <CardHeader className="flex items-start justify-between ">
        <div className="w-full justify-between flex items-start">
          <div>
            <div className="flex gap-2">
              <h1>{job.title}</h1>
              -
              <span className="text-sm text-muted-foreground flex items-center align-middle space-x-1"><p>Postagem: {new Date(job.created_at).toLocaleDateString()}</p></span>
            </div>
            <p className="text-2xl font-bold">
              Vaga disponenível para{" "}
              <Link
                href={job.company_website || '#'}
              >
                {job.company}
              </Link>
            </p>
          </div>
          <Form action={deleteJob}>
            <input type="hidden" name="id" value={job.id} />
            <Button variant="destructive">Apagar Vaga</Button>
          </Form>
        </div>
      </CardHeader>

      <CardContent className="space-y-8">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="flex items-center gap-2">
            <MapPin className="text-muted-foreground h-5 w-5" />
            <span>{job.city}, {job.state}</span>
          </div>
          <div className="flex items-center gap-2">
            <Briefcase className="text-muted-foreground h-5 w-5" />
            <div className="flex gap-2">
              <Badge variant={"secondary"}>
                {job.schedule === "full time" ? "Integral" : "Meio período"}
              </Badge>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <DollarSign className="text-muted-foreground h-5 w-5" />
            <span>{formatCurrency(job.salary)}</span>
          </div>
        </div>
        <Separator />
        <section>
          <h2 className="mb-4 text-xl font-semibold">Descrição da Vaga</h2>
          <p className="text-muted-foreground leading-relaxed">
            {job.description}
          </p>
        </section>
        <section>
          <h2 className="mb-4 text-xl font-semibold">Requisitos</h2>
          <p className="text-muted-foreground">{job.requirements}</p>
        </section>
      </CardContent>
    </Card>
  )
}