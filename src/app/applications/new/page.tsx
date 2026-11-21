import { ApplicationForm } from "@/components/application-form";

export default function NewApplicationPage() {
  return (
    <main className="px-4 py-10">
      <h1 className="mb-8 text-center text-2xl font-semibold">
        Add application
      </h1>
      <ApplicationForm />
    </main>
  );
}
