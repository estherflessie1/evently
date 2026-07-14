import Navbar from "../components/Navbar";
import CreateEventForm from "../components/CreateEventForm";

function CreateEvent() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-6">

          <div className="mb-12 text-center">

            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
              Host an Event
            </span>

            <h1 className="mt-6 text-5xl font-extrabold text-slate-900">
              Create a New Event
            </h1>

            <p className="mt-4 text-slate-500">
              Fill in the information below to publish your event.
            </p>

          </div>

          <CreateEventForm />

        </div>
      </main>
    </>
  );
}

export default CreateEvent;