"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { STATUS_LABELS, STATUS_VALUES } from "@/lib/constants";
import {
  applicationSchema,
  type ApplicationInput,
} from "@/lib/validations/application";

const emptyToUndefined = (value: string) =>
  value === "" ? undefined : Number(value);

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <p role="alert" className="text-sm text-red-600">
      {message}
    </p>
  );
}

export function ApplicationForm() {
  "use no memo";

  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<ApplicationInput>({
    resolver: zodResolver(applicationSchema),
    defaultValues: {
      company: "",
      role: "",
      location: "",
      jobUrl: "",
      status: "WISHLIST",
      appliedAt: "",
      notes: "",
    },
  });
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  async function onSubmit(data: ApplicationInput) {
    // Saving to the database is added in the next step.
    console.log(data);
    setSubmitted(true);
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto w-full max-w-xl space-y-5"
      noValidate
    >
      <div className="space-y-2">
        <Label htmlFor="company">Company *</Label>
        <Input id="company" {...register("company")} />
        <FieldError message={errors.company?.message} />
      </div>

      <div className="space-y-2">
        <Label htmlFor="role">Role *</Label>
        <Input id="role" {...register("role")} />
        <FieldError message={errors.role?.message} />
      </div>

      <div className="space-y-2">
        <Label htmlFor="location">Location</Label>
        <Input id="location" {...register("location")} />
        <FieldError message={errors.location?.message} />
      </div>

      <div className="space-y-2">
        <Label htmlFor="jobUrl">Job posting URL</Label>
        <Input
          id="jobUrl"
          type="url"
          placeholder="https://"
          {...register("jobUrl")}
        />
        <FieldError message={errors.jobUrl?.message} />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="salaryMin">Salary min</Label>
          <Input
            id="salaryMin"
            type="number"
            min={0}
            {...register("salaryMin", { setValueAs: emptyToUndefined })}
          />
          <FieldError message={errors.salaryMin?.message} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="salaryMax">Salary max</Label>
          <Input
            id="salaryMax"
            type="number"
            min={0}
            {...register("salaryMax", { setValueAs: emptyToUndefined })}
          />
          <FieldError message={errors.salaryMax?.message} />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="status">Status</Label>
          <select
            id="status"
            className="border-input bg-background h-9 w-full rounded-md border px-3 text-sm"
            {...register("status")}
          >
            {STATUS_VALUES.map((value) => (
              <option key={value} value={value}>
                {STATUS_LABELS[value]}
              </option>
            ))}
          </select>
          <FieldError message={errors.status?.message} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="appliedAt">Date applied</Label>
          <Input id="appliedAt" type="date" {...register("appliedAt")} />
          <FieldError message={errors.appliedAt?.message} />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="notes">Notes</Label>
        <Textarea id="notes" rows={4} {...register("notes")} />
        <FieldError message={errors.notes?.message} />
      </div>

      <Button type="submit" disabled={isSubmitting}>
        Add application
      </Button>

      {submitted && (
        <p role="status" className="text-sm text-green-600">
          Valid. Saving is wired up in the next step.
        </p>
      )}
    </form>
  );
}
