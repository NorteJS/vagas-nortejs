"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function deleteJob(formData: FormData) {
  const jobId = formData.get("id");

  const res = await fetch(
    `https://vagas-nortejs.vercel.app/api/job-board/jobs/${jobId}`,
    {
      method: "DELETE",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to delete job");
  }
   
  redirect("/vagas");
}

export async function createJob(formData: FormData) {
  const res = await fetch(
    "https://vagas-nortejs.vercel.app/api/job-board/jobs",
    {
      method: "POST",
      body: formData,
    }
  );

  if (!res.ok) {
    let details: unknown = null;
    try {
      details = await res.json();
    } catch {
      // ignore
    }

    console.error("createJob failed", {
      status: res.status,
      statusText: res.statusText,
      details,
    });

    if (res.status === 422 && details && typeof details === "object") {
      const maybeErrors = (details as any).errors;
      if (Array.isArray(maybeErrors) && maybeErrors[0]?.message) {
        throw new Error(String(maybeErrors[0].message));
      }
    }

    throw new Error("Failed to create job");
  }

  revalidatePath("/vagas");
  redirect("/vagas");
}